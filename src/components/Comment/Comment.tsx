import { Comment } from "../../../lib/models/comment/Comment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReactTimeAgo from "react-time-ago";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import CommentsModal from "../CommentsModal/CommentsModal";

type Props = {
  comment: Comment;
};

const Comment = ({ comment }: Props) => {
  return (
    <Card
      key={comment.comment_id}
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
          Posted by Cristian {/* {comment.username || user.name}{" "} */}
          <ReactTimeAgo date={new Date(comment.created_on)} locale="en-US" />
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6">{comment.comment}</Typography>
      </CardContent>
      <CardContent>
        <a className="link" target="_blank" href={comment.comment_link}>
          {comment.comment_link}
        </a>
      </CardContent>
      <CardActions>
        {/* {user?.user_id === post.user_id ? (
          <DeleteModal
            openButton={
              <IconButton sx={{ color: "white" }}>
                <DeleteOutlineIcon />
                <Typography sx={{ marginLeft: 1 }} variant="h5">
                  Delete Post
                </Typography>
              </IconButton>
            }
            onSubmit={() => onSubmit(post)}
            item={post}
          />
        ) : (
          ""
        )} */}
      </CardActions>
    </Card>
  );
};

export default Comment;
