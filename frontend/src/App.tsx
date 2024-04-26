import { useState } from "react";
import { z } from "zod";
import { getHotels, getSingleHotel } from "./api";
import { QueryMinAndMaxSchema, DataSchema } from "./modell";
import Hotels from "./components/Hotels";

type Data = z.infer<typeof DataSchema>;

type QueryParamsType = z.infer<typeof QueryMinAndMaxSchema>;

function App() {
  const [query, setQuery] = useState("");
  const [minPrice, SetMinPrice] = useState<number | "">("");
  const [maxPrice, SetMaxPrice] = useState<number | "">("");
  const [hotels, setHotels] = useState<Data | null>(null);

  const handleSearchHotels = async () => {
    let response;
    if (query !== "") {
      response = await getSingleHotel({ includes: query });
    } else if (minPrice !== "" && maxPrice !== "") {
      const params: QueryParamsType = {
        min: Number(minPrice),
        max: Number(maxPrice),
      };
      response = await getHotels(params);
    } else {
      return;
    }

    if (!response.success) {
      return;
    }

    setHotels(response.data);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 py-10">
        <input
          className="border"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Hotels..."
        />
        <input
          className="border"
          type="number"
          value={minPrice}
          onChange={(e) =>
            SetMinPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Min Price..."
        />
        <input
          className="border"
          type="number"
          value={maxPrice}
          onChange={(e) =>
            SetMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Max Price..."
        />
        <div className="pt-4">
          <button className="btn btn-primary" onClick={handleSearchHotels}>
            Search
          </button>
        </div>
      </div>

      <div>
        <Hotels hotels={hotels!} />
      </div>
    </>
  );
}

export default App;
