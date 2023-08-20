import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";

const schema = {
    type: "object",
    required: ["MONGODB_URI"],
    properties: {
        MONGODB_URI: {
            type: "string",
        },
    },
};

export default fp(async (fastify, opts) => {
    fastify.register(fastifyEnv, {
        schema: schema,
        dotenv: true,
        confKey: "config",
    });
});

declare module "fastify" {
    export interface FastifyInstance {
        config: {
            MONGODB_URI: string;
        };
    }
}
