import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "330028206376-9crvpmv6njkhno2prvtcvglrnnmhateb" ,
      clientSecret: "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" ,
    }),
  ],
};

export default NextAuth({
  ...authOptions,
});
