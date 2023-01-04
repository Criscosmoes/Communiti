import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReactTimeAgo from "react-time-ago";
import { useState } from "react";

import { Post } from "../../../lib/models/post/Post";
import AddPostForm from "../AddPostForm/AddPostForm";
import { Box } from "@mui/material";
import { User } from "next-auth";
import { Community } from "../../../lib/models/community/Community";

type Props = {
  posts: Post[];
  user: User;
  community: Community;
};

export default function PostList({ posts, user, community }: Props) {
  const [currentPosts, setCurrentPosts] = useState<Post[]>(posts);

  const renderedPosts = currentPosts.map((post) => {
    const now = new Date(post.created_on);

    return (
      <Card
        key={post.post_id}
        sx={{
          minWidth: 275,
          margin: "30px 0px",
          backgroundColor: "#1E1F23",
          color: "white",
          border: "2px solid #56575A",
          textAlign: "left",
        }}
      >
        <CardContent>
          <Typography sx={{ color: "#787C7E" }}>
            Posted by {post.username} <ReactTimeAgo date={now} locale="en-US" />
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

  return (
    <Box>
      <AddPostForm
        user={user}
        community={community}
        setCurrentPosts={setCurrentPosts}
      />
      {renderedPosts}
    </Box>
  );
}
