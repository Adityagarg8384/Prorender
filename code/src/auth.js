import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      type: "credentials",
      async authorize(credential) {
        const user = {
          email: credential?.username,
          username: credential?.username,
          userId: credential?.userid,
        };

        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.email = user?.email;
        token.username = user?.username;
        token.userid = user?.userid;
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user = {
          email: token?.email,
          username: token?.username,
          userid: token?.userid,
        };
      }

      return session;
    },
  },
});
