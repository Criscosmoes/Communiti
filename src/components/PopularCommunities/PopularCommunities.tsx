import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Community } from "../../../lib/models/community/Community";

type Props = {
  popularCommunities: Community[];
};

export default function PopularCommunities({ popularCommunities }: Props) {
  const renderedCommunities = popularCommunities.map((community) => {
    return (
      <CardContent key={community.community_id}>
        <Typography variant="h5">{community.community_name}</Typography>
        <Typography sx={{ color: "#898B8F" }}>{community.caption}</Typography>
      </CardContent>
    );
  });

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: 2,
        backgroundColor: "#1E1F23",
        color: "white",
        border: "2px solid #56575A",
        textAlign: "left",
      }}
    >
      <CardContent>
        <Typography variant="h4">Popular Communities</Typography>
      </CardContent>
      {renderedCommunities}
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      ></CardActions>
    </Card>
  );
}
