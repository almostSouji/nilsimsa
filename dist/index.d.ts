/// <reference types="node" />
/**
 * Compute a nilsimsa digest for the provided buffer
 * @param input - The buffer or string to compute a digest for
 * @param raw - If the raw byte array should be returned
 * @returns Computed Digest
 */
export declare function digest(input: Buffer | string, raw: true): number[];
export declare function digest(input: Buffer | string, raw?: false): string;
/**
 * Compare two nilsimsa digests (byte array or hex string). Values range from -128 (max difference) to 128 (max similarity)
 * @param a - The first digest to compare
 * @param b - The second digest to compare
 * @returns Distance value
 */
export declare function compare(a: string | number[], b: string | number[]): number;
