import fp from "fastify-plugin";
import fastifyView from "@fastify/view";
import ejs from "ejs";

export default fp(async (fastify) => {
    fastify.register(fastifyView, {
        engine: {
            ejs,
        },
        root: "./views",
    });
});
