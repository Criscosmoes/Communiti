import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { Post } from "../../../lib/models/post/Post";

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  const renderedPosts = posts.map((post) => {
    return (
      <Card
        key={post.post_id}
        sx={{
          minWidth: 275,
          margin: 2,
          backgroundColor: "#1E1F23",
          color: "white",
          border: "2px solid #56575A",
          textAlign: "left",
        }}
      >
        <CardContent>
          <Typography sx={{ color: "#787C7E" }}>
            Posted by {post.username} 10/10/23
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="h6">{post.description}</Typography>
        </CardContent>
        <CardContent>
          <a className="link" target="_blank" href={post.post_link}>
            {post.post_link}
          </a>
        </CardContent>
        <CardActions>
          <IconButton sx={{ color: "white" }}>
            <ChatBubbleOutlineIcon />
            <Typography sx={{ marginLeft: 1 }} variant="h5">
              {post.comment_count} comments
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    );
  });

  return <>{renderedPosts}</>;
}
