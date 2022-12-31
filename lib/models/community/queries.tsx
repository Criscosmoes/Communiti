import axios from "axios";

const getCommunities = async () => {
  const communities = await axios.get("http://localhost:5432/api/communities");

  return communities.data;
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

export {
  getCommunities,
  getRecentlyAddedCommunities,
  getPopularCommunities,
  getCommunitiesByTerm,
};
