"use client"
import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { INavigationLink } from "@/types";

interface IMenuMobile {
    navigationLinks: INavigationLink[];
}

const MenuMobile = ({navigationLinks}: IMenuMobile) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    
    return (
       <div>

       </div>
    )
}

export default MenuMobile;