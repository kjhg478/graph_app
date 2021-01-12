// 1
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
// 컴포넌트 import 할 땐 무조건 대문자 (첫글자)

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL Server Running"));