import axios from "axios";

const getRecentyAddedUsers = async () => {
  const users = await axios.get("http://localhost:5432/api/recent_users");

  return users.data;
};

export { getRecentyAddedUsers };
