import { Problem } from './problems';

export interface TestCase {
  input: any[];
  expectedOutput: any;
}

export const testCases: Record<number, TestCase[]> = {
  1: [
    {
      input: [[2, 7, 11, 15], 9],
      expectedOutput: [0, 1],
    },
    {
      input: [[3, 2, 4], 6],
      expectedOutput: [1, 2],
    },
    {
      input: [[3, 3], 6],
      expectedOutput: [0, 1],
    },
  ],
};