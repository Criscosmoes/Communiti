import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Community } from "../../../lib/models/community/Community";
import CommunityList from "../CommunityList/CommunityList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {
  communities: Community[];
};

export default function Dashboard({ communities }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid sx={{ display: { xs: "none", md: "block" } }} item md={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item md={6} xs={12}>
          <Item sx={{ backgroundColor: "#17181C" }}>
            <CommunityList communities={communities} />
          </Item>
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block" } }} item md={3}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
