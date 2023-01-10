export interface Community {
  community_id?: number;
  community_name: string;
  description: string;
  caption: string;
  image: string;
  followers?: number;
  created_on?: string;
  following: boolean;
}
