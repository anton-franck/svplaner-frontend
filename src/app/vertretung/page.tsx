import { Metadata } from "next";

import { RepresentationRenderer } from "@/components/representation-renderer";
import { ChooseBtns } from "@/components/choose-btns";
import { getCachedRepresentation } from "@/lib/vertretung.service";


export async function generateMetadata(): Promise<Metadata> {
    const meta_title = process.env.SITE_NAME || "";
    const meta_description = process.env.SITE_DESCRIPTION || "";
    return {
        title: meta_title,
        description: meta_description,
    };
}

export default async function Vertretung() {
    const representation = await getCachedRepresentation();

    return (
        <div>
            <div className="my-10">
                <ChooseBtns />
            </div>
            <RepresentationRenderer stand={representation.stand} today={true} informations={representation.today.informations} entries={representation.today.entries} />

            <RepresentationRenderer stand={representation.stand} today={false} informations={representation.tomorrow.informations} entries={representation.tomorrow.entries} />
        </div>
    );
}
