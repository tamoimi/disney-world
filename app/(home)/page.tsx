import Image from "next/image";
import { API_URL } from "../api/disney-api";

async function getCharacters() {
  const response = await fetch(`${API_URL}/character`);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const characters = await getCharacters();
  console.log("characters", characters);

  return (
    <main className="">
      {characters.data.map((c: any) => (
        <div key={c.id}>
          <Image src={c.imageUrl} width={100} height={100} alt={"imageUrl"} />
        </div>
      ))}
    </main>
  );
}
