"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImagePlus, Send, Clock } from "lucide-react";
import { PostPreview } from "@/components/post-preview";
import type { SocialPost } from "@/types";

export default function CreatePage() {
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState<SocialPost["platform"]>("twitter");
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Create Post</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Post Now
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Platform</Label>
                <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Content</Label>
                <Textarea
                  placeholder="What's on your mind?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>

              <Button variant="outline" className="w-full">
                <ImagePlus className="mr-2 h-4 w-4" />
                Add Media
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <Label>Schedule</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="mt-2"
            />
          </Card>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="preview">
            <TabsList className="w-full">
              <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4">
              <PostPreview
                post={{
                  id: "preview",
                  content,
                  platform,
                  status: "draft",
                }}
              />
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <div className="space-y-4">
                {/* Add platform-specific settings here */}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}