async function routes(fastify, options) {
  fastify.get("/about", async (request, reply) => {
    return { about: "me" };
  });
}

module.exports = routes;
