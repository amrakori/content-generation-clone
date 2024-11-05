"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chrome } from "lucide-react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl font-bold">Welcome to Social Media Hub</h1>
          <p className="text-muted-foreground text-center">
            Sign in to manage your social media content
          </p>
          <Button
            size="lg"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Chrome className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}