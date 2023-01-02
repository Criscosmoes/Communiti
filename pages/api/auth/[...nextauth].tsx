import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

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
        `http://localhost:5432/api/users/${user.id}`
      );

      if (check.data.length > 0) {
        return true;
      }

      await axios.post("http://localhost:5432/api/users", {
        username: user.name,
        oauth_id: user.id,
        image: user.image,
      });

      return true;
    },
  },
});
