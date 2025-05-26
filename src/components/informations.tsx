import { Icon } from "./ui/icon";

interface InformationsProps {
    informations?: string[];
}

export const Informations = ({ informations }: InformationsProps) => {
    if (!informations || informations.length === 0) return null;

    return (
        <div className="flex justify-center my-5 lg:mx-16 mx-4 ">
            <div className="bg-orange-300/80 w-fit flex gap-4 border-2 rounded-lg border-black p-4 items-center shadow-lg">
                <div className="p-1 px-[13px] rounded-full shadow border-2 border-black w-fit bg-orange-400/90">
                    <Icon icon="fa-solid fa-info" className="text-black" />
                </div>
                <div className="font-bold flex flex-col gap-2">
                    {informations.map((info, index) => (
                        <p key={index}>{info}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};