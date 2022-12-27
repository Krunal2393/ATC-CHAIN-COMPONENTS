import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { authLoginService } from "../../../services/auth.login.services";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      Credentials: {},
      async authorize(credentials) {

        const res = await authLoginService.login(credentials);
        console.log("res api auth ---> ", res.data.user_details);
        if (res.data.user_details.status !== 200) {
          throw new Error("Wrong username and password");
        }
        if (res.data.user_details.status === 200) {
          return res.data.user_details;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login/",
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: "SUPER_TESTING_JWT",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("user call badck --> ", user);
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          fcm_token: user.fcm_token,
          is_fresh_login: user.is_fresh_login,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.fcm_token = token.fcm_token;
      session.is_fresh_login = token.is_fresh_login;
      return session;
    },
  },
  // pages: {
  //   signIn: "/login",
  // },
};

const auth_func = (req, res) => NextAuth(req, res, options);
export default auth_func;
