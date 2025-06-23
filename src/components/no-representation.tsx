import { Icon } from "./ui/icon";

export const NoRepresentation = () => {
    return (
        <div className="flex justify-center lg:mx-16 mx-4 ">
            <div className="bg-green-400 w-fit flex gap-4 border-2 rounded-lg border-black p-4 items-center shadow-lg">

                <Icon icon="fa-solid fa-check" className="text-black text-xl sm:text-2xl w-5" />
                <div className="font-bold flex flex-col gap-2">
                    <p>Keine Vertretungen für diese Klasse</p>
                </div>
            </div>
        </div>
    );
}