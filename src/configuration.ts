/**
 * Central configuration for the 3x3 Rubik's Cube Solver.
 * All solver-algorithm parameters were removed in the refactor.
 * Only rendering / world constants remain here.
 */

export const Configuration = {
    world: {
        /** How many moves the scrambler uses */
        scrambleMoves: () => Math.floor(Math.random() * 10 + 28),
        scrambleRotationDuration: 70, // ms per scramble move
    },
    renderers: {
        /** Duration for a single face-rotation animation (ms) */
        rotationDuration: 280,
    },
} as const;
