import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import ReactTimeAgo from "react-time-ago";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Modal from "@mui/material/Modal";
import { Post } from "../../../lib/models/post/Post";
import AddCommentForm from "../AddCommentForm/AddCommentForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  backgroundColor: "#1E1F23",
  overflow: "scroll",
  overflowX: "hidden",
};

type Props = {
  post: Post;
};

export default function CommentsModal({ post }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography variant="h6" onClick={handleOpen}>
        {post.comment_count || 0} Comment(s)
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box sx={style}>
          <Card
            key={post.post_id}
            sx={{
              margin: "30px 10px",
              backgroundColor: "#1E1F23",
              color: "white",
              border: "2px solid #56575A",
              textAlign: "left",
            }}
          >
            <CardContent>
              <Typography sx={{ color: "#787C7E" }}>
                Posted by {post.username}{" "}
                <ReactTimeAgo date={new Date(post.created_on)} locale="en-US" />
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h4">{post.title}</Typography>
              <Typography variant="h6">{post.description}</Typography>
            </CardContent>
            <CardContent>
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href={post.post_link}
              >
                {post.post_link}
              </a>
            </CardContent>
          </Card>
          <AddCommentForm post={post} />
        </Box>
      </Modal>
    </div>
  );
}
