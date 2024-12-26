import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

interface TestResult {
  passed: boolean;
  input: any[];
  expectedOutput: any;
  actualOutput: any;
}

interface TestResultsProps {
  results: TestResult[];
}

export default function TestResults({ results }: TestResultsProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Test Results:</h3>
      {results.map((result, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start gap-4">
            {result.passed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 mt-1" />
            )}
            <div className="flex-1 space-y-2">
              <p className="font-medium">Test Case {index + 1}</p>
              <div className="text-sm space-y-1">
                <p>
                  <span className="text-muted-foreground">Input:</span>{" "}
                  {JSON.stringify(result.input)}
                </p>
                <p>
                  <span className="text-muted-foreground">Expected:</span>{" "}
                  {JSON.stringify(result.expectedOutput)}
                </p>
                {!result.passed && (
                  <p>
                    <span className="text-muted-foreground">Got:</span>{" "}
                    {JSON.stringify(result.actualOutput)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}