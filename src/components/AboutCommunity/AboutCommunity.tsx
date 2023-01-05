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

type Props = {
  community: Community;
};

export default function AboutCommunity({ community }: Props) {
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
          Created On 10/10/2030
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
          {community.followers} followers
        </Typography>
      </CardContent>

      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      ></CardActions>
    </Card>
  );
}
