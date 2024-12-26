"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import CodeEditor from "@/components/code-editor";
import { Play } from "lucide-react";
import { Problem } from "@/lib/problems";
import { testCases } from "@/lib/test-cases";
import { executeCode } from "@/lib/code-execution";
import ProblemDescription from "@/components/problem-description";
import TestResults from "@/components/test-results";

interface ProblemClientProps {
  problem: Problem;
}

export default function ProblemClient({ problem }: ProblemClientProps) {
  const [code, setCode] = useState(problem.starterCode.javascript);
  const [output, setOutput] = useState("");
  const [testResults, setTestResults] = useState<any[]>([]);

  const handleRunCode = () => {
    const problemTests = testCases[problem.id];
    if (!problemTests) {
      setOutput("No test cases available for this problem.");
      return;
    }

    const result = executeCode(code, problemTests);
    setOutput(result.output);
    if (result.testResults) {
      setTestResults(result.testResults);
    }
  };

  return (
    <div className="container py-10">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">{problem.title}</h1>
        <Badge
          variant={
            problem.difficulty === "Easy"
              ? "success"
              : problem.difficulty === "Medium"
              ? "warning"
              : "destructive"
          }
        >
          {problem.difficulty}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <ProblemDescription problem={problem} />
            </TabsContent>
            <TabsContent value="solution">Solution content...</TabsContent>
            <TabsContent value="submissions">Submissions content...</TabsContent>
          </Tabs>
        </Card>

        <div className="space-y-4">
          <Card>
            <CodeEditor
              value={code}
              onChange={setCode}
              language="javascript"
              className="min-h-[400px]"
            />
          </Card>

          <div className="flex justify-between items-center">
            <Button onClick={handleRunCode}>
              <Play className="mr-2 h-4 w-4" />
              Run Code
            </Button>
          </div>

          {output && (
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Output:</h3>
              <pre className="bg-muted p-2 rounded">{output}</pre>
            </Card>
          )}

          {testResults.length > 0 && (
            <TestResults results={testResults} />
          )}
        </div>
      </div>
    </div>
  );
}