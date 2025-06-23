import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export const NavMenu = async () => {


    return (

        <Sheet>
            <SheetTrigger className="cursor-pointer"><FontAwesomeIcon className="w-4" icon={faBars} /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="grid grid-cols-4 items-center ">
                        <div></div>
                        <p className="col-span-2 flex justify-center">Menü</p>
                        <div className="justify-end flex">
                            <SheetClose className="hover:text-gray-400 col-span-1 cursor-pointer w-fit   focus:outline-hidden">
                                <FontAwesomeIcon icon={faX} className="w-[10px] font-bold" />
                            </SheetClose>
                        </div>
                    </SheetTitle>
                    <div className="mx-auto flex flex-col gap-4 pt-6">
                        <Link href={"/"} >
                            <SheetClose className="cursor-pointer" >
                                <p>Home</p>
                            </SheetClose>
                        </Link>
                        <Link href={"/vertretung"} >
                            <SheetClose className="cursor-pointer" >

                                <p>Vertretung</p>

                            </SheetClose>
                        </Link>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>



    )
}