import { NodePgClient, NodePgDatabase } from "drizzle-orm/node-postgres";

type ENV = {
  Variables: {
    db: NodePgDatabase<Record<string, never>> & {
      $client: NodePgClient;
    };
  },
  Bindings: {
    app: string;
  };
}

export default ENV;