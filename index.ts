import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/*", async (req, res) => {
  const host = req.headers.host;
  const path = req.url;

  if (host === "n.si-f.cc") {
    const target = `https://notes.silicoflare.site${path}`;
    return res.redirect(target, 301);
  }

  return res.redirect(`https://silicoflare.site${path}`, 301);
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Redirector running on ${address}`);
});
