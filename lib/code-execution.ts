import { TestCase } from './test-cases';

interface ExecutionResult {
  success: boolean;
  output: any;
  error?: string;
  testResults?: {
    passed: boolean;
    input: any[];
    expectedOutput: any;
    actualOutput: any;
  }[];
}

export function executeCode(code: string, testCases: TestCase[]): ExecutionResult {
  try {
    // Create a function from the code string
    const fn = new Function('return ' + code)();
    
    const testResults = testCases.map(testCase => {
      const actualOutput = fn(...testCase.input);
      const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);
      
      return {
        passed,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput,
      };
    });

    const success = testResults.every(result => result.passed);

    return {
      success,
      output: success ? 'All test cases passed!' : 'Some test cases failed.',
      testResults,
    };
  } catch (error) {
    return {
      success: false,
      output: 'Error executing code',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}