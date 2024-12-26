"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  className?: string;
}

export default function CodeEditor({
  value,
  onChange,
  language = "javascript",
  className = "",
}: CodeEditorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full font-mono p-4 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      spellCheck={false}
    />
  );
}