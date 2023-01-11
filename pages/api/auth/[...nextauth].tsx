import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { getUserByOauthId } from "../../../lib/models/user/queries";
import { User } from "../../../lib/models/user/User";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user }) {
      const check = await axios.get(
        `${process.env.NODE_HOST_URL}/users/${user.id}`
      );

      if (check.data.length > 0) {
        return true;
      }

      await axios.post(`${process.env.NODE_HOST_URL}/users`, {
        username: user.name,
        oauth_id: user.id,
        image: user.image,
      });

      return true;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.

      const currentUser: User = await getUserByOauthId(token?.sub!);

      // @ts-ignore

      session.user.user_id = currentUser?.user_id;

      return session;
    },
  },
});
