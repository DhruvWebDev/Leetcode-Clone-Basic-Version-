import { problems } from "@/lib/problems";
import ProblemClient from "./problem-client";

export function generateStaticParams() {
  return problems.map((problem) => ({
    id: problem.id.toString(),
  }));
}

export default function ProblemPage({ params }: { params: { id: string } }) {
  const problem = problems.find(p => p.id === parseInt(params.id));
  
  if (!problem) {
    return <div>Problem not found</div>;
  }

  return <ProblemClient problem={problem} />;
}