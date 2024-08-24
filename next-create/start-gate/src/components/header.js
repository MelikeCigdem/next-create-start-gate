import React from 'react';
import vector from "../image/Vector.png";
import hamburger from "../image/hamburger.svg"
import logo from "../image/logo.svg";
import text from "../image/text.svg";
import Image from 'next/image';


const Header = () => {
    return (
        <header className="w-full p-5">
            <div className="flex justify-between p-4">
                <div className="mb-[18px]">
                    <div className="items-center block">
                        <Image src={logo} width={230} height={43} alt="StartGate Logo" />
                        <Image src={text} width={230} height={43} alt="StartGate Text" />
                    </div>
                </div>
                {/* Mobile Menu Icon */}
                <div className="flex lg:hidden pt-2">
                    <div className="cursor-pointer pr-2">
                        <a href="#" >
                            <Image
                                src={vector}
                                alt="StartGate Logo"
                                width={30}
                                height={30}
                                priority
                            />
                        </a>
                    </div>
                    <div>
                        <Image src={hamburger} width={40} height={40} alt="StartGate Logo" />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex justify-end flex-1">
                    <div className="flex items-center space-x-2 md:space-x-1 lg:space-x-4 lg:text-lg">
                        {["Biz Kimiz?", "Portfolyo", "Programlar", "Network", "SSS", "İletişim"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-white whitespace-nowrap bg-get-size"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="px-3 py-1 border-2 border-transparent cursor-pointer text-white whitespace-nowrap bg-get-size get-border"
                        >
                            Ziyaretçi Başvurusu
                        </a>
                        <div className="flex items-center space-x-2 lg:space-x-4">
                            <a
                                href="#"
                                className="bg-get-red px-3 py-1 cursor-pointer whitespace-nowrap"
                            >
                                Başvur
                            </a>
                            <a
                                href="#"
                                className="px-2 py-1 cursor-pointer"
                            >
                                <Image
                                    src={vector}
                                    alt="StartGate Logo"
                                    width={25}
                                    height={25}
                                    priority
                                />
                            </a>
                        </div>
                    </div>

                </nav>
            </div>
        </header>
    )
}
export default Header