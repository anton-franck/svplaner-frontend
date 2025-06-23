"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

export const SearchBar = () => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let klasse = inputRef.current?.value.trim();
        if (klasse) {
            // Prüfen, ob das Muster einstellig ist (z.B. 8d) und ggf. mit führender Null ergänzen
            const match = klasse.match(/^(\d)([a-zA-Z])$/);
            if (match) {
                klasse = `0${match[1]}${match[2]}`;
            }
            router.push(`/vertretung/filtert?klasse=${encodeURIComponent(klasse)}`);
        }
    };

    return (
        <div className="flex flex-col items-center w-full justify-center">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="mb-1 text-sm text-neutral-600">
                    Filter nach deiner Klasse:
                </label>
                <div className="flex">
                    <input
                        ref={inputRef}
                        type="text"
                        name="class"
                        placeholder="Suche..."
                        className="border-l outline-none flex items-start border-t border-b border-neutral-400 bg-gray-300 placeholder:text-black/80 text-black rounded-l-lg p-2 w-full min-w-[300px] max-w-[300px] lg:min-w-md lg:max-w-xl"
                    />
                    <Button className="border rounded-r-lg rounded-l-none hover:bg-gray-200 border-neutral-400 p-[19px] pb-[21px] my-auto cursor-pointer bg-gray-300" variant={"outline"} type="submit">
                        <Icon icon="fa-solid fa-magnifying-glass" className="text-black" />
                    </Button>
                </div>
            </form>
        </div>
    );
}
