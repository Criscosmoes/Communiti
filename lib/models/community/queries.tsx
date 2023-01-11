import axios from "axios";

const getCommunities = async () => {
  const communities = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/communities`
  );

  return communities.data;
};

const addCommunity = async (community: any) => {
  const newCommunity = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_URL}/communities`,
    community
  );

  return newCommunity.data;
};

const getCommunitiesByUserId = async (id: number | null) => {
  const communities = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/communities/userId/${id}`
  );

  return communities.data;
};

const getRecentlyAddedCommunities = async () => {
  const communities = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/recent_communities`
  );

  return communities.data;
};

const getCommunitiesByTerm = async (term: string) => {
  const communities = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/communities/${term}`
  );

  return communities.data;
};

const getPopularCommunities = async () => {
  const communities = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/popular_communities`
  );

  return communities.data;
};

const getCommunityById = async (userCommunity: any) => {
  const community = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_URL}/communities/community/id`,
    userCommunity
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
  getCommunitiesByUserId,
};
