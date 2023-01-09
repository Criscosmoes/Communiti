export interface IComment {
  comment_id?: number;
  comment: string;
  comment_link: string;
  user_id?: number;
  community_id?: number;
  post_id?: number;
  created_on: string;
}
