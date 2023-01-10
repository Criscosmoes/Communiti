import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { User } from "../../../lib/models/user/User";

type Props = {
  recentUsers: User[];
};

export default function RecentlyAddedUsers({ recentUsers }: Props) {
  const renderedCommunities = recentUsers.map((user) => {
    return (
      <CardContent
        key={user.user_id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{user.username}</Typography>
        <img
          className="user-image"
          src={user.image}
          referrerPolicy="no-referrer"
        />
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
        <Typography variant="h4">Recently Added Users</Typography>
      </CardContent>
      {renderedCommunities}
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      ></CardActions>
    </Card>
  );
}
