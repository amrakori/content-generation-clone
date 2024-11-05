"use client";

import { useSession } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { EngagementChart } from "@/components/analytics/engagement-chart";
import { Button } from "@/components/ui/button";
import { Plus, BarChart2 } from "lucide-react";
import Link from "next/link";

const mockData = [
  { date: "2024-01-01", value: 100 },
  { date: "2024-01-02", value: 150 },
  { date: "2024-01-03", value: 200 },
  { date: "2024-01-04", value: 180 },
  { date: "2024-01-05", value: 250 },
];

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/analytics">
              <BarChart2 className="mr-2 h-4 w-4" />
              Analytics
            </Link>
          </Button>
          <Button asChild>
            <Link href="/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Post
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <EngagementChart 
          data={mockData} 
          title="Engagement Overview" 
        />
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Posts</h3>
          {/* Recent posts will be implemented here */}
        </Card>
      </div>
    </div>
  );
}