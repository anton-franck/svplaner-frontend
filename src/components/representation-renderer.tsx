import { DayLabel } from "./daylabel";
import { Informations } from "./informations";
import { RepresentationCard } from "./representation-card";

type RepresentationEntry = {
    stunde: string;
    klasse: string;
    fach: string;
    vertretung: string;
    raum: string;
    bemerkung: string;
};

interface RepresentationRendererProps {
    entries: RepresentationEntry[];
    informations?: string[];
    id?: string;
    stand: string;
    today?: boolean;
}

export const RepresentationRenderer = ({ entries, id, informations, stand, today }: RepresentationRendererProps) => {
    const representation = entries;

    return (
        <div className={today ? "" : "mt-20"}>
            <DayLabel stand={stand} today={today ?? false} />
            <Informations informations={informations} />
            <div className="flex flex-wrap gap-4 max-lg:mx-2 justify-center" id={id}>
                {representation.map((entry, index) => (
                    <RepresentationCard key={index} entry={entry} />
                ))}
            </div>
        </div>
    );
}