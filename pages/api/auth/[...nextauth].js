import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const res = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const user = await res.json();

        console.log({ user });

        if (user) {
          return user;
        } else return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  //   callbacks: {
  //     async jwt({ token, user }) {
  //       return { ...token, ...user };
  //     },
  //     async session({ session, token, user }) {
  //       // Send properties to the client, like an access_token from a provider.
  //       session.user = token;

  //       return session;
  //     },
  //   },

  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
