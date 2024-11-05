"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { type SocialPost } from "@/types";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const platformIcons = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

interface PostPreviewProps {
  post: SocialPost;
}

export function PostPreview({ post }: PostPreviewProps) {
  const PlatformIcon = platformIcons[post.platform];

  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <Avatar>
          <PlatformIcon className="h-5 w-5" />
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Your Name</span>
            <span className="text-muted-foreground">• Just now</span>
          </div>
          <p className="text-sm whitespace-pre-wrap">{post.content}</p>
          {post.mediaUrls?.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="Post media"
              className="rounded-lg mt-2 max-h-[300px] object-cover"
            />
          ))}
        </div>
      </div>
    </Card>
  );
}