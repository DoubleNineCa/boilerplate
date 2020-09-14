import "reflect-metadata";
import "dotenv-safe/config";

import typeormConnection from "./typeormConnection";
import { User } from "./entities/User";
import app from "./app";

const main = async () => {
  const conn = await typeormConnection();
  if (conn) {
    conn.runMigrations();
  }

  const port = process.env.PORT || 4000;
  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`)
  );
};

main().catch(err => {
  console.log(err);
});
