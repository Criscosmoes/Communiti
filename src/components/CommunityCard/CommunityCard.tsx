import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSession, signIn } from "next-auth/react";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

import { Community } from "../../../lib/models/community/Community";
import Link from "next/link";
import { useState } from "react";
import {
  followCommunity,
  unfollowCommunity,
} from "../../../lib/models/following/queries";

type Props = {
  community: Community;
};

export default function CommunityCard({ community }: Props) {
  const { data: session } = useSession();

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
        marginTop: "15px",
        marginBottom: "15px",
        backgroundColor: "#1E1F23",
        color: "white",
        border: "2px solid #56575A",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="p">
          {community.community_name}
        </Typography>
        <Typography sx={{ color: "#898B8F" }} variant="body1">
          {community.caption}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 450 }}
        image={community.image}
        title={community.community_name}
      />
      <CardContent></CardContent>
      <CardActions>
        <Link href={`/community/${community.community_id}`}>
          <Button
            size="medium"
            sx={{ color: "white", backgroundColor: "#2C87FC" }}
          >
            <div className="mobile">
              <Typography sx={{ color: "white" }}>Go to Community</Typography>

              <ArrowForwardIcon sx={{ marginLeft: 1 }} />
            </div>
          </Button>
        </Link>
        {session?.user ? (
          <div>
            {follow ? (
              <LoadingButton
                size="medium"
                sx={{
                  color: "white",
                  backgroundColor: "#2C87FC",
                  marginLeft: 1,
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
