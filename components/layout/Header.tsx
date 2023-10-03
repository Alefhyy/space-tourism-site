import Image from 'next/image'
import { IHeader } from "@/types";
import Link from "next/link";

const Header = async ({
    navigationLinks,
}: IHeader) => {

    return(
        <header className="text-floral-white flex justify-between w-full pl-14 pt-10 absolute z-10">
            <Image src="logo.svg" width={48} height={48} alt='Logo' className='mr-16'/>
            <hr className=' h-[1px] z-10 invisible lg:visible w-full flex self-center opacity-25 relative left-8'/>
            <nav className='backdrop-blur-xl px-28 bg-gray tracking-[2.7px]'>
                <ul className="flex gap-14 uppercase items-center h-full py-10 pr-28 backdrop-opacity-25">
                    {navigationLinks.map(({ title, link, _key, number }) => {
                        return (
                            <li key={_key}>
                                <Link href={link}>
                                <span className='font-bold cursor-pointer pr-[11px]'>{number}</span>
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

