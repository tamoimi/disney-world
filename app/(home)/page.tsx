import Image from "next/image";
import { API_URL } from "../api/disney-api";
import moment from "moment";

async function getCharacters() {
  const response = await fetch(`${API_URL}/character`);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const characters = await getCharacters();
  console.log("characters", characters.films);

  return (
    <main className="p-5 lg:px-72">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters &&
          characters.data.map((c: any) => (
            <div key={c.id} className="bg-slate-50/35 p-5 rounded shadow">
              <Image
                src={c.imageUrl}
                width={100}
                height={100}
                alt={c.name}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
              <h2 className="text-center mt-2 text-sm font-semibold">{c.name}</h2>
              <h2 className="text-center mt-2 text-sm">
                {moment(c.createdAt).format("MMM Do YYYY")}
              </h2>
              <h2 className="text-center mt-2 text-sm">{c.films}</h2>
            </div>
          ))}
      </div>
    </main>
  );
}
