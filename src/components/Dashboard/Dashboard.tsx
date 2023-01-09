import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Community } from "../../../lib/models/community/Community";
import CommunityList from "../CommunityList/CommunityList";
import RecentlyAddedCommunities from "../RecentlyAddedCommunities/RecentlyAddedCommunities";
import PopularCommunities from "../PopularCommunities/PopularCommunities";
import RecentlyAddedUsers from "../RecentlyAddedUsers/RecentlyAddedUsers";
import { User } from "../../../lib/models/user/User";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {
  communities: Community[];
  recentlyAddedCommunities: Community[];
  popularCommunities: Community[];
  recentUsers: User[];
};

export default function Dashboard({
  communities,
  recentlyAddedCommunities,
  popularCommunities,
  recentUsers,
}: Props) {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          sx={{ display: { xs: "none", md: "none", lg: "block" } }}
          md={3}
          lg={3}
        >
          <Item sx={{ backgroundColor: "#17181C" }}>
            <RecentlyAddedUsers recentUsers={recentUsers} />
          </Item>
        </Grid>
        <Grid md={8} xs={12} lg={6} item>
          <Item sx={{ backgroundColor: "#17181C" }}>
            <CommunityList communities={communities} />
          </Item>
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block" } }} md={4} lg={3} item>
          <Item sx={{ backgroundColor: "#17181C" }}>
            <RecentlyAddedCommunities
              recentlyAddedCommunities={recentlyAddedCommunities}
            />
          </Item>

          <Item sx={{ backgroundColor: "#17181C" }}>
            <PopularCommunities popularCommunities={popularCommunities} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
