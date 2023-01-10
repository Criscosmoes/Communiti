import axios from "axios";
import { Following } from "./Following";

const followCommunity = async (following: Following) => {
  const success = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_URL}/follow`,
    following
  );

  return success.data;
};

const unfollowCommunity = async (following: Following) => {
  const success = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_URL}/unfollow`,
    following
  );

  return success.data;
};

export { followCommunity, unfollowCommunity };
