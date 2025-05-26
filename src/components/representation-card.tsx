type RepresentationEntry = {
    stunde: string;
    klasse: string;
    fach: string;
    vertretung: string;
    raum: string;
    bemerkung: string;
};

export const RepresentationCard = ({ entry }: { entry: RepresentationEntry }) => {
    return (
        <div className="border-3 bg-neutral-100 shadow-lg border-black p-2 m-2 rounded-lg flex font-bold flex-col hover:bg-neutral-200 duration-100 justify-center items-center gap-2 min-w-[340px] max-w-[400px] min-h-[160px] lg:p-3">
            <div className="flex flex-wrap gap-4">
                {entry.stunde && <p>Stunde: {entry.stunde}</p>}
                {entry.klasse && <p>Klasse: {entry.klasse}</p>}
                {entry.fach && <p>Fach: {entry.fach}</p>}
                {entry.vertretung && <p>Vertretung: {entry.vertretung}</p>}
                {entry.raum && <p className="">Raum: {entry.raum}</p>}
                {entry.bemerkung && <p>Bemerkung: {entry.bemerkung}</p>}
            </div>
        </div>
    );
};