import axios from "axios";
import { Following } from "./Following";

const followCommunity = async (following: Following) => {
  const success = await axios.post(
    `http://localhost:5432/api/follow`,
    following
  );

  return success.data;
};

const unfollowCommunity = async (following: Following) => {
  const success = await axios.post(
    `http://localhost:5432/api/unfollow`,
    following
  );

  return success.data;
};

export { followCommunity, unfollowCommunity };
