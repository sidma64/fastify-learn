import { FastifyPluginAsync, RequestGenericInterface } from "fastify";

interface nameRequest extends RequestGenericInterface {
    Params: {
        name: string;
    };
}

const hello: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get<nameRequest>("/:name", async function (req) {
        const { name } = req.params;
        return { message: `Hello ${name}` };
    });
};

export default hello;
