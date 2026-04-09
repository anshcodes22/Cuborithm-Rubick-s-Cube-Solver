/**
 * KociembaSolver — 3x3 Rubik's Cube solver using the cubejs (two-phase) algorithm.
 *
 * Responsibilities:
 *  - Convert our engine's RubiksCube state string → cubejs format string
 *  - Run the solver
 *  - Parse the returned move notation → FaceRotation[]
 *  - Validate the cube state before solving
 */

import Cube from 'cubejs';
import { Sides } from '@/constants/sides';
import type { FaceRotation } from '@/engine/face-rotation';

/** Singleton init flag — initSolver() is slow; run once at app startup */
let solverInitialized = false;

/**
 * Call this once at app startup (e.g., in main.ts or App.vue created hook).
 * It pre-computes the Kociemba pruning tables.
 */
export function initKociembaSolver(): void {
    if (!solverInitialized) {
        Cube.initSolver();
        solverInitialized = true;
    }
}

/**
 * Validation errors returned before solving.
 */
export type ValidationResult =
    | { valid: true }
    | { valid: false; reason: string };

/**
 * Validate that the 54-char config string is solvable.
 *
 * Rules:
 *  - All 54 stickers must be set (no null/empty placeholders)
 *  - Each of the 6 colors must appear exactly 9 times
 *  - Each center must be a different color
 */
export function validateCubeConfig(config: string): ValidationResult {
    if (config.length !== 54) {
        return { valid: false, reason: `Expected 54 stickers, got ${config.length}` };
    }

    const EMPTY_CHAR = '-';
    if (config.includes(EMPTY_CHAR)) {
        const unset = config.split('').filter(c => c === EMPTY_CHAR).length;
        return { valid: false, reason: `${unset} sticker(s) are not colored yet` };
    }

    // Count each color
    const counts: Record<string, number> = {};
    for (const ch of config) {
        counts[ch] = (counts[ch] ?? 0) + 1;
    }
    const valid_chars = ['y', 'o', 'b', 'r', 'g', 'w'];
    for (const ch of valid_chars) {
        if ((counts[ch] ?? 0) !== 9) {
            return {
                valid: false,
                reason: `Color '${ch}' appears ${counts[ch] ?? 0} times; expected 9`
            };
        }
    }

    // Centers: indices 4, 13, 22, 31, 40, 49  (sideIndex * 9 + 4)
    const centerChars = [4, 13, 22, 31, 40, 49].map(i => config[i]);
    const uniqueCenters = new Set(centerChars);
    if (uniqueCenters.size !== 6) {
        return { valid: false, reason: 'Two or more face centers share the same color' };
    }

    return { valid: true };
}

/**
 * Convert our engine's config string to the cubejs 54-char string.
 *
 * Engine order  : UP(9) LEFT(9) FRONT(9) RIGHT(9) BACK(9) DOWN(9)
 * cubejs order  : U(9)  R(9)    F(9)     D(9)     L(9)   B(9)
 *
 * Character mapping: engine uses lowercase initials (y,o,b,r,g,w)
 *                    cubejs uses face letters     (U,R,F,D,L,B)
 *                    based on which color sits at each face's center.
 */
function engineConfigToCubejsString(config: string): string {
    // Center sticker indices for each side in engine order
    // [UP_center, LEFT_center, FRONT_center, RIGHT_center, BACK_center, DOWN_center]
    const CENTER_INDICES = [4, 13, 22, 31, 40, 49];
    const FACE_LETTERS = ['U', 'L', 'F', 'R', 'B', 'D'];

    // Build color-initial → face-letter lookup
    const colorToFace = new Map<string, string>();
    CENTER_INDICES.forEach((idx, i) => {
        colorToFace.set(config[idx], FACE_LETTERS[i]);
    });

    // Rearrange engine slices to cubejs order
    // cubejs: U  R    F     D     L     B
    // engine: [0..8] [27..35] [18..26] [45..53] [9..17] [36..44]
    const rearranged =
        config.slice(0, 9) +       // UP   → U
        config.slice(27, 36) +     // RIGHT → R
        config.slice(18, 27) +     // FRONT → F
        config.slice(45, 54) +     // DOWN  → D
        config.slice(9, 18) +      // LEFT  → L
        config.slice(36, 45);      // BACK  → B

    return rearranged.split('').map(ch => colorToFace.get(ch) ?? '?').join('');
}

/**
 * Parse a cubejs solution string (e.g. "R U R' U'") into FaceRotation[].
 *
 * Handles: R, R', R2  (single, prime, double)
 */
export function parseSolutionString(solution: string): FaceRotation[] {
    const moves: FaceRotation[] = [];
    const tokens = solution.trim().split(/\s+/).filter(Boolean);

    const charToSide: Record<string, Sides> = {
        U: Sides.UP,
        D: Sides.DOWN,
        L: Sides.LEFT,
        R: Sides.RIGHT,
        F: Sides.FRONT,
        B: Sides.BACK,
    };

    for (const token of tokens) {
        const faceChar = token[0];
        const modifier = token.slice(1);

        const side = charToSide[faceChar];
        if (side === undefined) continue;

        const counterClockwise = modifier.includes("'");
        const is180 = modifier.includes('2');

        const rotation: FaceRotation = {
            side,
            counterClockwiseDirection: counterClockwise,
            layer: 0
        };

        moves.push(rotation);
        if (is180) {
            // Push same rotation again for 180°
            moves.push({ ...rotation });
        }
    }

    return moves;
}

/**
 * Solve a 3x3 Rubik's Cube.
 *
 * @param config - 54-char engine configuration string
 * @returns Array of FaceRotation moves to solve the cube, or throws on invalid state
 */
export function solveCube(config: string): FaceRotation[] {
    if (!solverInitialized) {
        throw new Error('Kociemba solver not initialized. Call initKociembaSolver() first.');
    }

    const cubejsStr = engineConfigToCubejsString(config);

    if (cubejsStr.includes('?')) {
        throw new Error('Failed to convert cube state: unknown color encountered');
    }

    let cube: any;
    try {
        cube = Cube.fromString(cubejsStr);
    } catch (e: any) {
        throw new Error(`Invalid cube state: ${e?.message ?? e}`);
    }

    const solutionStr: string = cube.solve();

    if (!solutionStr || solutionStr.trim() === '') {
        // Cube is already solved
        return [];
    }

    return parseSolutionString(solutionStr);
}

/**
 * Returns a human-readable string for the solution moves.
 * e.g. ["R", "U'", "F2"] → "R U' F2"
 */
export function formatMoves(rotations: FaceRotation[]): string[] {
    const sideToChar: Record<number, string> = {
        [Sides.UP]: 'U',
        [Sides.DOWN]: 'D',
        [Sides.LEFT]: 'L',
        [Sides.RIGHT]: 'R',
        [Sides.FRONT]: 'F',
        [Sides.BACK]: 'B',
    };

    const result: string[] = [];
    let i = 0;
    while (i < rotations.length) {
        const r = rotations[i];
        const char = sideToChar[r.side];

        // Check for double move
        if (
            i + 1 < rotations.length &&
            rotations[i + 1].side === r.side &&
            rotations[i + 1].counterClockwiseDirection === r.counterClockwiseDirection &&
            rotations[i + 1].layer === r.layer
        ) {
            result.push(`${char}2`);
            i += 2;
        } else {
            result.push(r.counterClockwiseDirection ? `${char}'` : char);
            i++;
        }
    }
    return result;
}
