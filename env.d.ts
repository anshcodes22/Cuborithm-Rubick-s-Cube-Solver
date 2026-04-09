/// <reference types="vite/client" />

/**
 * Type declarations for cubejs — a pure-JS Kociemba two-phase 3x3 solver.
 * @see https://www.npmjs.com/package/cubejs
 */
declare module 'cubejs' {
    interface CubeClass {
        /** Initialise solver lookup tables. Must be called once before solve(). */
        initSolver(): void;
        /** Parse a 54-char URFDLB-notation string into a Cube instance. */
        fromString(str: string): CubeInstance;
        new (): CubeInstance;
    }

    interface CubeInstance {
        /** Find a solution. Returns a space-separated move string e.g. "R U R' U'". */
        solve(maxDepth?: number): string;
        /** Returns the 54-char URFDLB string for this cube state. */
        asString(): string;
    }

    const Cube: CubeClass;
    export default Cube;
}
