

import { GraphQLServer, PubSub } from "graphql-yoga";
import { models } from ".././config/db/";
import schema from "../../graphql/";

const pubsub = new PubSub();

const context = {
    models,
    pubsub
};

export default new GraphQLServer({
    schema,
    context
});