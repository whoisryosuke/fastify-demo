// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true
});

fastify.register(require("./pages/root"));
fastify.register(require("./pages/about"));

// Run the server!
fastify.listen(8080, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
