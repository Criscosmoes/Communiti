import axios from "axios";

const checkIfLoggedIn = async (cookie: string) => {
  const user = await axios({
    method: "GET",
    url: "http://localhost:5432/api/current_user",
    headers: {
      cookie,
    },
  });

  return user.data;
};

export { checkIfLoggedIn };
