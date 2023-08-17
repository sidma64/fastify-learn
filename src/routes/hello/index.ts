import { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get("/:name", async function (request, reply) {
        const { name } = request.params as { name: string };
        return `Hello ${name}`;
    });
};

export default example;
