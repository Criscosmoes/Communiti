import axios from "axios";

const getRecentyAddedUsers = async () => {
  const users = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/recent_users`
  );

  return users.data;
};

const getUserByOauthId = async (id: string) => {
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/users/user/${id}`
  );

  return user.data;
};

export { getRecentyAddedUsers, getUserByOauthId };
