"use client";

import { Problem } from "@/lib/problems";

interface ProblemDescriptionProps {
  problem: Problem;
}

export default function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="prose dark:prose-invert">
      <p>{problem.description}</p>
      
      <h3>Examples:</h3>
      {problem.examples.map((example, index) => (
        <div key={index} className="space-y-2">
          <p>
            <strong>Input:</strong> {example.input}
          </p>
          <p>
            <strong>Output:</strong> {example.output}
          </p>
          {example.explanation && (
            <p>
              <strong>Explanation:</strong> {example.explanation}
            </p>
          )}
        </div>
      ))}

      <h3>Constraints:</h3>
      <ul>
        {problem.constraints.map((constraint, index) => (
          <li key={index}>{constraint}</li>
        ))}
      </ul>
    </div>
  );
}