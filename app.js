import "dotenv/config";
import fastify from "fastify";
import connectDB from "./src/config/connect.js";
import { PORT } from "./src/config/config.js";

const start = async () => {
  await connectDB();

  const app = fastify({ logger: true });

  app.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();
