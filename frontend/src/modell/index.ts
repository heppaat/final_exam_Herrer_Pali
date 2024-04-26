import { z } from "zod";

export const QueryMinAndMaxSchema = z.object({
  min: z.number(),
  max: z.number(),
});

export const DataSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    pricePerNightInUSD: z.number(),
  })
);
