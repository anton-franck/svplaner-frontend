import { ClassControler } from "@/components/classcontroler"
import { NoRepresentation } from "@/components/no-representation"
import { RepresentationRenderer } from "@/components/representation-renderer"
import { getCachedRepresentation } from "@/lib/vertretung.service"

interface Entry {
    klasse?: string
}

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Filtert({ searchParams }: Props) {
    const params = await searchParams
    const klasse = params.klasse as string | undefined // z.B. /vertretung/filtert?klasse=10d
    const representation = await getCachedRepresentation()

    // Beispiel: Filter nach Klasse, falls vorhanden
    const filtered = klasse
        ? {
            ...representation,
            today: {
                ...representation.today,
                entries: representation.today.entries.filter((item: Entry) =>
                    item.klasse?.toLowerCase().split(" ").includes(klasse.toLowerCase()),
                ),
            },
            tomorrow: {
                ...representation.tomorrow,
                entries: representation.tomorrow.entries.filter((item: Entry) =>
                    item.klasse?.toLowerCase().split(" ").includes(klasse.toLowerCase()),
                ),
            },
        }
        : representation

    if (filtered.today.entries.length === 0 && filtered.tomorrow.entries.length === 0) {
        return (
            <div>
                <ClassControler filterclass={klasse ?? ""} />
                <div className="my-50">
                    <NoRepresentation />
                </div>
            </div>
        )
    }

    return (
        <div>
            <ClassControler filterclass={klasse ?? ""} />
            <div className="my-20">
                <p>Gefilterte Daten für Klasse: {klasse ?? "Alle"}</p>
                {filtered.today.entries.length > 0 && (
                    <RepresentationRenderer
                        stand={filtered.stand}
                        today={true}
                        informations={representation.today.informations}
                        entries={filtered.today.entries}
                    />
                )}

                {filtered.tomorrow.entries.length > 0 && (
                    <RepresentationRenderer
                        stand={filtered.stand}
                        today={false}
                        informations={representation.tomorrow.informations}
                        entries={filtered.tomorrow.entries}
                    />
                )}
            </div>
        </div>
    )
}
