import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Community } from "../../../lib/models/community/Community";

type Props = {
  community: Community;
};

export default function CommunityTitleCard({ community }: Props) {
  return (
    <Card
      sx={{
        margin: "20px 0px",
        backgroundColor: "#1E1F23",
        color: "white",
        border: "2px solid #56575A",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="p">
          {community.community_name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 450 }}
        image={community.image}
        title={community.community_name}
      />
    </Card>
  );
}
