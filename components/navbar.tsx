"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <span className="font-bold">CodeMaster</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/problems">Problems</Link>
          <Link href="/contests">Contests</Link>
          <Link href="/discuss">Discuss</Link>
          <ModeToggle />
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
}