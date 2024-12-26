"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Master Your Coding Skills
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Practice coding problems, prepare for interviews, and join a community of developers.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link href="/problems">
                <Button size="lg">
                  Start Practicing
                </Button>
              </Link>
              <Link href="/learn">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to excel
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              <Card className="p-6">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7">
                  <Code className="h-5 w-5 text-primary" />
                  Coding Problems
                </dt>
                <dd className="mt-4 text-base leading-7 text-muted-foreground">
                  Access hundreds of coding problems across different difficulty levels and topics.
                </dd>
              </Card>
              <Card className="p-6">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7">
                  <Brain className="h-5 w-5 text-primary" />
                  Learning Paths
                </dt>
                <dd className="mt-4 text-base leading-7 text-muted-foreground">
                  Follow structured learning paths to master algorithms and data structures.
                </dd>
              </Card>
              <Card className="p-6">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7">
                  <Trophy className="h-5 w-5 text-primary" />
                  Competitions
                </dt>
                <dd className="mt-4 text-base leading-7 text-muted-foreground">
                  Participate in coding contests and compete with developers worldwide.
                </dd>
              </Card>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}