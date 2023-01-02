import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getCommunityById } from "../../../lib/models/community/queries";
import { Community } from "../../../lib/models/community/Community";
import CommunityTitleCard from "../../../src/components/CommunityTitleCard/CommunityTitleCard";
import AboutCommunity from "../../../src/components/AboutCommunity/AboutCommunity";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {
  community: Community;
};

export default function CommunityPage({ community }: Props) {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          sx={{ display: { xs: "none", md: "none", lg: "block" } }}
          md={3}
          lg={3}
        ></Grid>
        <Grid md={8} xs={12} lg={6} item>
          <Item sx={{ backgroundColor: "#17181C" }}>
            <CommunityTitleCard community={community} />
          </Item>
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block" } }} md={4} lg={3} item>
          <Item sx={{ backgroundColor: "#17181C" }}>
            <AboutCommunity community={community} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps(context: any) {
  const community = await getCommunityById(context.params.communityId);

  console.log(community);

  return {
    props: {
      community,
    },
  };
}
