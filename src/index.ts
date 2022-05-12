import "graphql-import-node/register";
import { ApolloServer } from "apollo-server";
import bookResolvers from "./resolvers/book";
import userResolvers from "./resolvers/user";
import reserveResolvers from "./resolvers/reserve";
import bookSchema from "./schema/book.graphql";
import reserveSchema from "./schema/reserve.graphql";
import userSchema from "./schema/user.graphql";
import mongoConnection from "./mongoose/index";
import { DateScalar } from "graphql-date-scalars";

const server = new ApolloServer({
  typeDefs: [bookSchema, reserveSchema, userSchema],
  resolvers: [
    bookResolvers,
    reserveResolvers,
    userResolvers,
    { Date: DateScalar },
  ],
});

server.listen().then(async ({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  await mongoConnection();
});
