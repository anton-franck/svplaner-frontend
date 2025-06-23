import { getCachedRepresentation } from "@/lib/vertretung.service";

import Link from "next/link";

import version from "../../../package.json";

export default async function Footer() {
    const representation = await getCachedRepresentation();
    const website = process.env.SCHOOL_WEBSITE || "";
    return (
        <footer className="max-sm:gap-2 max-sm:flex-col-reverse max-sm:flex sm:grid sm:grid-cols-3 items-center justify-center py-4 bg-gray-800 mt-8 text-white px-6">
            {representation.stand && (
                <p>
                    {
                        (() => {
                            // Extrahiere das Datum im Format "dd.mm.yyyy" am Anfang des Strings
                            const match = representation.stand.match(/^Stand:\s*(\d{2}\.\d{2}\.\d{4})/);
                            return match ? `Stand: ${match[1]}` : representation.stand;
                        })()
                    }
                </p>
            )}
            <Link className="mx-auto" href={"https://anton-franck.de"}>
                <p className="text-sm ">by Anton Franck</p>
            </Link>
            <div className="flex gap-4 justify-end">
                <p>V{version.version}</p>
                <Link href={website} className="underline  " >{website}</Link>
            </div>
        </footer >
    );
}