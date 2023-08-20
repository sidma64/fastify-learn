import { FastifyPluginAsync } from "fastify";
import mongodb from "@fastify/mongodb";
import messageSchema, { Message } from "./messageSchema.js";

const routes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.register(mongodb, {
        forceClose: true,
        url: fastify.config.MONGODB_URI,
        database: "board",
    });

    fastify.get("/", async function (request, reply) {
        return this.mongo.db?.collection("messages").find().toArray();
    });

    fastify.post<{ Body: Message }>(
        "/",
        { schema: { body: messageSchema } },
        async function (request, reply) {
            return this.mongo.db
                ?.collection("messages")
                .insertOne(request.body);
        }
    );
};

export default routes;
