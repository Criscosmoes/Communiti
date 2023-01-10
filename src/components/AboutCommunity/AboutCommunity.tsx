import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Community } from "../../../lib/models/community/Community";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import ReactTimeAgo from "react-time-ago";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import {
  followCommunity,
  unfollowCommunity,
} from "../../../lib/models/following/queries";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

type Props = {
  community: Community;
};

export default function AboutCommunity({ community }: Props) {
  const { data: session } = useSession();

  console.log(community, "community");

  const [follow, setFollow] = useState(community.following);
  const [loading, setLoading] = useState(false);

  const onFollowClick = async () => {
    setLoading(true);

    try {
      await followCommunity({
        // @ts-ignore

        user_id: session?.user?.user_id,
        community_id: community.community_id,
      });

      toast.success("Successfully followed", { position: "bottom-left" });

      setFollow(!follow);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const onUnfollowClick = async () => {
    setLoading(true);
    try {
      await unfollowCommunity({
        // @ts-ignore

        user_id: session?.user?.user_id,
        community_id: community.community_id,
      });

      toast.success("Successfully unfollowed", { position: "bottom-left" });

      setFollow(!follow);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "20px 0px",
        backgroundColor: "#1E1F23",
        color: "white",
        border: "2px solid #56575A",
        textAlign: "left",
      }}
    >
      <CardContent sx={{ backgroundColor: "#2C87FC" }}>
        <Typography variant="h5">About Community</Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          alignContent: "center",
        }}
      >
        <DescriptionIcon />
        <Typography sx={{ marginLeft: 1 }} variant="h6">
          {community.description}
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          alignContent: "center",
        }}
      >
        <CommentIcon />
        <Typography sx={{ marginLeft: 1 }} variant="h6">
          {community.caption}
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          alignContent: "center",
        }}
      >
        <AccessTimeIcon />
        <Typography sx={{ marginLeft: 1 }} variant="h6">
          Created{" "}
          <ReactTimeAgo date={new Date(community.created_on)} locale="en-US" />
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          alignContent: "center",
        }}
      >
        <GroupIcon />
        <Typography sx={{ marginLeft: 1 }} variant="h6">
          {community.followers} follower(s)
        </Typography>
      </CardContent>

      <CardActions>
        {session?.user ? (
          <div>
            {follow ? (
              <LoadingButton
                sx={{
                  color: "white",
                  backgroundColor: "#2C87FC",
                  marginLeft: 1,
                  width: "200px",
                }}
                onClick={() => onUnfollowClick()}
                loading={loading}
              >
                Unfollow <AddIcon sx={{ marginLeft: 1 }} />
              </LoadingButton>
            ) : (
              <LoadingButton
                size="medium"
                sx={{
                  color: "white",
                  backgroundColor: "#2C87FC",
                  marginLeft: 1,
                  width: "200px",
                }}
                onClick={() => onFollowClick()}
                loading={loading}
              >
                Follow <AddIcon sx={{ marginLeft: 1 }} />
              </LoadingButton>
            )}
          </div>
        ) : (
          <Button
            size="medium"
            sx={{
              color: "white",
              backgroundColor: "#2C87FC",
              marginLeft: 1,
            }}
            onClick={() => signIn()}
          >
            <Typography sx={{ color: "white" }}>Follow</Typography>
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
