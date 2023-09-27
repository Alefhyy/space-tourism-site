"use client";
import { IHeader } from "@/types";
import Link from "next/link";

const Header = () => {
    return(
        <header>
            <nav>
                <ul className="text-white flex gap-20">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Destination</Link></li>
                    <li><Link href="/">Crew</Link></li>
                    <li><Link href="/">Technology</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;