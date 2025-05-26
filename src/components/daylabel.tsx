"use client";


import { useMemo } from "react";
import type { JSX } from "react";

interface DayLabelProps {
    today: boolean;
    stand: string;

}

export const DayLabel = ({ today, stand }: DayLabelProps): JSX.Element => {
    const label = useMemo(() => {
        const standDateParts = stand.replace("Stand: ", "").split(" ");
        const [day, month, year] = standDateParts[0].split(".");
        const [hour, minute] = standDateParts[1].split(":");
        const baseDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));

        const labelDate = (date: Date) => date.toLocaleDateString("de-DE");
        const weekday = (date: Date) =>
            date.toLocaleDateString("de-DE", { weekday: "long" });

        const now = new Date();
        const isSameDay =
            baseDate.getDate() === now.getDate() &&
            baseDate.getMonth() === now.getMonth() &&
            baseDate.getFullYear() === now.getFullYear();

        if (today) {
            if (isSameDay) {
                return `Heute (${labelDate(baseDate)})`;
            } else {
                return `${weekday(baseDate)} (${labelDate(baseDate)})`;
            }
        }

        const nextDate = new Date(baseDate);
        nextDate.setDate(nextDate.getDate() + 1);
        const nextDay = nextDate.getDay();

        if (nextDay === 6) {
            nextDate.setDate(nextDate.getDate() + 2); // Samstag -> Montag
            return `Montag (${labelDate(nextDate)})`;
        } else if (nextDay === 0) {
            nextDate.setDate(nextDate.getDate() + 1); // Sonntag -> Montag
            return `Montag (${labelDate(nextDate)})`;
        }

        return `Morgen (${labelDate(nextDate)})`;
    }, [stand, today]);

    return (
        <p
            className="ml-2 max-lg:ml-5 mb-2 mt-4 font-bold"
            id={today ? "today" : "tommorow"}
        >
            {label}
        </p>
    );
};

