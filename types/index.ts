export interface SocialPost {
  id: string;
  content: string;
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
  status: "draft" | "scheduled" | "published";
  mediaUrls?: string[];
  scheduledFor?: Date;
  analytics?: PostAnalytics;
}

export interface PostAnalytics {
  likes: number;
  shares: number;
  comments: number;
  reach: number;
  engagement: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image?: string;
  connectedAccounts: {
    platform: SocialPost["platform"];
    connected: boolean;
    username?: string;
  }[];
}