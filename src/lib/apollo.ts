import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o71rz810il01z2d2e567s9/master",
  cache: new InMemoryCache(),
});
