import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Community } from "../../../lib/models/community/Community";
import CommunityList from "../CommunityList/CommunityList";
import RecentlyAddedCommunities from "../RecentlyAddedCommunities/RecentlyAddedCommunities";
import PopularCommunities from "../PopularCommunities/PopularCommunities";

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
};

export default function Dashboard({
  communities,
  recentlyAddedCommunities,
  popularCommunities,
}: Props) {
  console.log(popularCommunities, "dash");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid sx={{ display: { xs: "none", md: "block" } }} item md={3}>
          <Item>xs=8</Item>
        </Grid> */}
        <Grid item md={9} xs={12}>
          <Item sx={{ backgroundColor: "#17181C" }}>
            <CommunityList communities={communities} />
          </Item>
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block" } }} item md={3}>
          <Item sx={{ backgroundColor: "#17181C" }}>
            <PopularCommunities popularCommunities={popularCommunities} />
          </Item>

          <Item sx={{ backgroundColor: "#17181C" }}>
            <RecentlyAddedCommunities
              recentlyAddedCommunities={recentlyAddedCommunities}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
