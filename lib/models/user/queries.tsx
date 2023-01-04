import axios from "axios";

const getRecentyAddedUsers = async () => {
  const users = await axios.get("http://localhost:5432/api/recent_users");

  return users.data;
};

const getUserByOauthId = async (id: string) => {
  const user = await axios.get(`http://localhost:5432/api/users/user/${id}`);

  return user.data;
};

export { getRecentyAddedUsers, getUserByOauthId };
