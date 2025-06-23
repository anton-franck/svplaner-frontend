"use client";

import { Button } from "./ui/button"

export const ChooseBtns = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 80; // Höhe des Headers in px
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="flex justify-center m-4">
            <div className="flex gap-2 ">
                <Button className="cursor-pointer" variant="outline" onClick={() => scrollTo("today")}>
                    Heute
                </Button>
                <Button className="cursor-pointer" variant="outline" onClick={() => scrollTo("tommorow")}>
                    Morgen
                </Button>
            </div>
        </div>
    );
};