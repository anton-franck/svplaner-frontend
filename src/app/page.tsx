import { Metadata } from "next";
import { getCachedRepresentation } from "../lib/vertretung.service";

import { RepresentationRenderer } from "@/components/representation-renderer";
import { SearchBar } from "@/components/searchbar";
import { ChooseBtns } from "@/components/choose-btns";


export async function generateMetadata(): Promise<Metadata> {
  const meta_title = process.env.SITE_NAME || "";
  const meta_description = process.env.SITE_DESCRIPTION || "";
  return {
    title: meta_title,
    description: meta_description,
  };
}

export default async function Home() {
  const title = process.env.SITE_NAME || "";
  const representation = await getCachedRepresentation();

  return (
    <div>
      <div className="my-5 max-lg:mb-10 lg:my-20">
        <div className="flex justify-center m-4">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <SearchBar />
        <ChooseBtns />
      </div>


      <RepresentationRenderer stand={representation.stand} today={true} informations={representation.today.informations} entries={representation.today.entries} />

      <RepresentationRenderer stand={representation.stand} today={false} informations={representation.tomorrow.informations} entries={representation.tomorrow.entries} />


    </div>
  );
}
