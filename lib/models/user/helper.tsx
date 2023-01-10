import axios from "axios";

const checkIfLoggedIn = async (cookie: string) => {
  const user = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_HOST_URL}/current_user`,
    headers: {
      cookie,
    },
  });

  return user.data;
};

export { checkIfLoggedIn };
