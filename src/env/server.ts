import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    CLERK_SECRET_KEY: z.string(),
    DATABASE_URL: z.string(),
  },
  experimental__runtimeEnv: process.env,
});
