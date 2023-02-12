import { IComment } from "../../../lib/models/comment/Comment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReactTimeAgo from "react-time-ago";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useSession } from "next-auth/react";
import { deleteComment } from "../../../lib/models/comment/queries";
import { Dispatch, SetStateAction } from "react";

type Props = {
  comment: IComment;
  setComments: Dispatch<SetStateAction<IComment[]>>;
  setCommentCount: React.Dispatch<React.SetStateAction<number>>;
};

const Comment = ({ comment, setComments, setCommentCount }: Props) => {
  const { data: session } = useSession();

  const now = new Date(comment.created_on);

  now.setHours(now.getHours() + 8);

  console.log(now);

  const onDelete = async (comment: IComment) => {
    await deleteComment(comment.comment_id);

    setComments((prevState) => {
      const newComments = prevState.filter(
        (oldComment) => oldComment.comment_id !== comment.comment_id
      );

      return newComments;
    });

    setCommentCount((prevState) => {
      return prevState - 1;
    });
  };

  // @ts-ignore
  const userId = session?.user?.user_id;

  return (
    <Card
      key={comment.comment_id}
      sx={{
        minWidth: 275,
        margin: "30px 10px",
        backgroundColor: "#1E1F23",
        color: "white",
        border: "2px solid #56575A",
        textAlign: "left",
      }}
    >
      <CardContent>
        <Typography sx={{ color: "#787C7E" }}>
          Posted by {comment.username}{" "}
          <ReactTimeAgo date={new Date(now)} locale="en-US" />
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6">{comment.comment}</Typography>
      </CardContent>
      <CardContent>
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href={comment.comment_link}
        >
          {comment.comment_link}
        </a>
      </CardContent>
      <CardActions>
        {userId === comment.user_id ? (
          <DeleteModal
            openButton={
              <IconButton sx={{ color: "white" }}>
                <DeleteOutlineIcon />
                <Typography sx={{ marginLeft: 1 }} variant="h5">
                  Delete Comment
                </Typography>
              </IconButton>
            }
            onSubmit={() => onDelete(comment)}
            item={comment}
          />
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

export default Comment;
