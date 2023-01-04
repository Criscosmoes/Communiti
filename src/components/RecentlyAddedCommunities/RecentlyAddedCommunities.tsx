import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Community } from "../../../lib/models/community/Community";
import Link from "next/link";

type Props = {
  recentlyAddedCommunities: Community[];
};

export default function RecentlyAddedCommunities({
  recentlyAddedCommunities,
}: Props) {
  const renderedCommunities = recentlyAddedCommunities.map((community) => {
    return (
      <CardContent key={community.community_id}>
        <Link className="link" href={`/community/${community.community_id}`}>
          <Typography variant="h5">{community.community_name}</Typography>
        </Link>
        <Typography sx={{ color: "#898B8F" }}>{community.caption}</Typography>
      </CardContent>
    );
  });

  return (
    <Card
      sx={{
        minWidth: 275,
        marginBottom: 2,
        marginTop: 2,
        backgroundColor: "#1E1F23",
        color: "white",
        border: "2px solid #56575A",
        textAlign: "left",
      }}
    >
      <CardContent>
        <Typography variant="h4">Recently Added</Typography>
      </CardContent>
      {renderedCommunities}
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          size="medium"
          sx={{ color: "white", backgroundColor: "#2C87FC" }}
        >
          Add Community
        </Button>
      </CardActions>
    </Card>
  );
}
