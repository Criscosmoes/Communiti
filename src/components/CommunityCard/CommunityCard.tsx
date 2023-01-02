import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Community } from "../../../lib/models/community/Community";
import Link from "next/link";

type Props = {
  community: Community;
};

export default function CommunityCard({ community }: Props) {
  return (
    <Card
      sx={{
        margin: 2,
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
            <Typography sx={{ color: "white" }}>Go to Community</Typography>

            <ArrowForwardIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Link>
        <Button
          size="medium"
          sx={{ color: "white", backgroundColor: "#2C87FC", marginLeft: 1 }}
        >
          <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
