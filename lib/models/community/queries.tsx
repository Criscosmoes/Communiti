import axios from "axios";
import { Community } from "./Community";

const getCommunities = async () => {
  const communities = await axios.get("http://localhost:5432/api/communities");

  return communities.data;
};

const addCommunity = async (community: any) => {
  const newCommunity = await axios.post(
    "http://localhost:5432/api/communities",
    community
  );

  return newCommunity.data;
};

const getRecentlyAddedCommunities = async () => {
  const communities = await axios.get(
    "http://localhost:5432/api/recent_communities"
  );

  return communities.data;
};

const getCommunitiesByTerm = async (term: string) => {
  const communities = await axios.get(
    `http://localhost:5432/api/communities/${term}`
  );

  return communities.data;
};

const getPopularCommunities = async () => {
  const communities = await axios.get(
    "http://localhost:5432/api/popular_communities"
  );

  return communities.data;
};

const getCommunityById = async (id: string) => {
  const community = await axios.get(
    `http://localhost:5432/api/communities/id/${id}`
  );

  return community.data;
};

export {
  getCommunities,
  getRecentlyAddedCommunities,
  getPopularCommunities,
  getCommunitiesByTerm,
  getCommunityById,
  addCommunity,
};
