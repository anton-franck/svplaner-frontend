import Image from "next/image"
import Link from "next/link"
import { NavMenu } from "./navmenu"

export const Header = () => {
    const logo = process.env.SCHOOL_LOGO_URL || "";
    return (
        <div className="sticky left-0 right-0 top-0 z-30 p-2 px-6 items-center bg-gray-400 shadow-lg grid-cols-2 grid max-lg:grid-cols-5">
            <div className="flex items-center gap-6 ">

                <div className="hidden lg:flex text-md items-center gap-4  justify-center">
                    <Link href={"/"} >
                        <p>Home</p>
                    </Link>
                    <Link href={"/vertretung"} >
                        <p>Vertretung</p>
                    </Link>
                </div>
            </div>
            <div className="lg:hidden text-md flex items-center gap-4 col-span-3 justify-center">
                <Link href={"/"} >
                    <p>Home</p>
                </Link>
                <Link href={"/vertretung"}>
                    <p>Vertretung</p>
                </Link>
            </div>
            <div className="flex justify-end">
                <NavMenu />
            </div>
        </div>
    )
}