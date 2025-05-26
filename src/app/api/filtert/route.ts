import { getCachedRepresentation } from "@/lib/vertretung.service";
import { NextResponse } from "next/server";

interface Entry {
  klasse?: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const klasse = searchParams.get("klasse") ?? undefined;
  const representation = await getCachedRepresentation();

  const filtered = klasse
    ? {
        ...representation,
        today: {
          ...representation.today,
          entries: representation.today.entries.filter((item: Entry) =>
            item.klasse?.toLowerCase().split(" ").includes(klasse.toLowerCase())
          ),
        },
        tomorrow: {
          ...representation.tomorrow,
          entries: representation.tomorrow.entries.filter((item: Entry) =>
            item.klasse?.toLowerCase().split(" ").includes(klasse.toLowerCase())
          ),
        },
      }
    : representation;

  if (
    klasse &&
    filtered.today.entries.length === 0 &&
    filtered.tomorrow.entries.length === 0
  ) {
    return NextResponse.json(
      { message: "Keine Vertretungsdaten für die ausgewählte Klasse." },
      { status: 404 }
    );
  }

  return NextResponse.json(filtered);
}
