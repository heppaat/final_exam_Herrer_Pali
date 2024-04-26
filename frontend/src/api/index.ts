import { safeFetch } from "../lib/http";
import { QueryMinAndMaxSchema, DataSchema } from "../modell";
import { z } from "zod";

type QueryParamsType = z.infer<typeof QueryMinAndMaxSchema>;

export const getHotels = (params: QueryParamsType) =>
  safeFetch({
    method: "GET",
    url: `http://localhost:3000/api/hotels?min=${params.min}&max=${params.max}`,
    schema: DataSchema,
  });

export const getSingleHotel = (hotelNameObject: { includes: string }) =>
  safeFetch({
    method: "GET",
    url: `http://localhost:3000/api/hotels?includes=${hotelNameObject.includes}`,
    schema: DataSchema,
  });
