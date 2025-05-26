import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

interface ClassControlerProps {
    filterclass: string;
}

export const ClassControler = ({ filterclass }: ClassControlerProps) => {
    return (
        <div className="pt-1 pl-2 max-lg:pl-4 w-fit">
            <Link href={"/"} className=" group cursor-pointer ">
                <div className="flex gap-2 items-center ">
                    <p>Filter für Klasse: {filterclass}</p>
                    <FontAwesomeIcon
                        icon={faDeleteLeft}
                        className="group-hover:animate-[custombounce_1.6s_linear_infinite] w-5"
                    />
                </div>

            </Link>
        </div>
    );
}