import Fastify from "fastify";

const app = Fastify();

app.get("/*", async (req, res) => {
  const host = req.headers.host;
  const path = req.url;

  if (host === "n.si-f.cc") {
    const target = `https://notes.silicoflare.site${path}`;
    return res.redirect(target, 301);
  }

  return res.redirect(`https://silicoflare.site${path}`, 301);
});

export default async (req: Request, res: Response) => {
  await app.ready();
  app.server.emit("request", req, res);
};
