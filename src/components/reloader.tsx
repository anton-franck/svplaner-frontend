"use client";

import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RepresentationEntry {
    stand: string;
}

export const Reloader: React.FC<RepresentationEntry> = ({ stand }) => {
    return (
        <div className="pt-2 pl-2 max-lg:pl-4 ">
            <button
                type="button"
                onClick={e => {
                    const icon = (e.currentTarget.querySelector('.reload-icon') as HTMLElement);
                    if (icon) {
                        icon.classList.add('animate-spin');
                        setTimeout(() => {
                            icon.classList.remove('animate-spin');
                            window.location.reload();
                        }, 700); // Dauer der Animation in ms
                    } else {
                        window.location.reload();
                    }
                }}
                className="w-fit flex group items-center cursor-pointer "
            >
                <div className="sm:flex sm:gap-1">
                    <p className="hidden sm:block">Vertretungsplan</p>
                    {stand}
                </div>
                <FontAwesomeIcon
                    icon={faRotateRight}
                    className="w-4 ml-2 reload-icon"
                />
            </button>
        </div>
    );
}