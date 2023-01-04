export interface Post {
  post_id?: number;
  title: string;
  description: string;
  post_link?: string;
  community_id: number;
  user_id: number;
  created_on: string;
  username?: string;
  comment_count?: string;
}
