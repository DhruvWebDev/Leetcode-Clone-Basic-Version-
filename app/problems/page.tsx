"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import Link from "next/link";
import { problems } from "@/lib/problems";

export default function ProblemsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProblems = problems.filter((problem) =>
    problem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Problems</h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search problems..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Acceptance</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProblems.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell>⭕</TableCell>
                <TableCell>
                  <Link 
                    href={`/problems/${problem.id}`}
                    className="text-primary hover:underline"
                  >
                    {problem.title}
                  </Link>
                </TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>{problem.acceptance}</TableCell>
                <TableCell>{problem.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}