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

type Props = {
  community: Community;
};

export default function CommunityCard({ community }: Props) {
  console.log(community);
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
        <Typography variant="body1">{community.caption}</Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 450 }}
        image={community.image}
        title={community.community_name}
      />
      <CardContent></CardContent>
      <CardActions>
        <Button
          size="medium"
          sx={{ color: "white", backgroundColor: "#2C87FC" }}
        >
          <Typography sx={{ marginRight: 1 }}>Go to Community</Typography>{" "}
          <ArrowForwardIcon />
        </Button>
        <Button
          size="medium"
          sx={{ color: "white", backgroundColor: "#2C87FC" }}
        >
          <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
