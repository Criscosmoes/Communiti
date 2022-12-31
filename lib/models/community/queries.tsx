import axios from "axios";

const getCommunities = async () => {
  const communities = await axios.get("http://localhost:5432/api/communities");

  return communities.data;
};

export { getCommunities };
