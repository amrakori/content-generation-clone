"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl font-bold text-destructive">
            Authentication Error
          </h1>
          <p className="text-muted-foreground text-center">
            {error === "Configuration"
              ? "There is a problem with the server configuration."
              : "An error occurred during authentication. Please try again."}
          </p>
          <Button asChild>
            <Link href="/auth/signin">Return to Sign In</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}