import { FastifyPluginAsync } from "fastify";
import mongodb from "@fastify/mongodb";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { messageSchema } from "schemas";

const routes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.register(mongodb, {
        forceClose: true,
        url: fastify.config.MONGODB_URI,
        database: "board",
    });

    fastify.get(
        "/",
        (request, reply) =>
            fastify.mongo.db?.collection("messages").find().toArray()
    );

    fastify.withTypeProvider<JsonSchemaToTsProvider>().post(
        "/",
        {
            schema: { body: messageSchema },
        },
        (request, reply) =>
            fastify.mongo.db
                ?.collection("messages")
                .insertOne({ ...request.body, added: new Date().toISOString })
    );

    fastify.get("/new", (req, reply) => {
        reply.view("form.ejs", { text: "Hello World!" });
    });
};

export default routes;
