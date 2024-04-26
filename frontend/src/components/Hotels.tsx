import { z } from "zod";
import { DataSchema } from "../modell";

type Data = z.infer<typeof DataSchema>;

const Hotels = (props: { hotels: Data }) => {
  const { hotels } = props;

  return (
    <div className="flex flex-col items-center gap-4">
      {hotels?.map((hotel) => (
        <div key={hotel.id}>
          <div className="flex flex-wrap justify-center">
            <div className="bg bg-slate-300">
              <h1 className="font-bold text-[14px] text-center m-8 p-5 bg-secondary">
                {hotel.name}
              </h1>
              <div className="flex justify-center items-center pb-2">
                <p className="text font-semibold">
                  {hotel.pricePerNightInUSD} USD
                </p>
                <p className="text font-light ml-2">per night</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
