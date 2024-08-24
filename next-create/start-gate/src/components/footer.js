import Image from "next/image";
import logo from "../image/logo.svg";
import text from "../image/text.svg";
import location from "../image/location.svg"
import phone from "../image/phone.svg"
import mail from "../image/mail.svg"
import facebook from "../image/facebook.svg"
import instagram from "../image/instagram.svg"
import twitter from "../image/twitter.svg"
import youtube from "../image/youtube.svg"
import linkedn from "../image/linkedn.svg"
import 'animate.css';
import { useEffect, useRef } from "react";


const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__fadeInLeft', 'animate__animated', 'opacity-100', 'duration-1000');
                    }
                });
            },
            {
                threshold: 0.5, // Footer'ın %50'si görünür olduğunda animasyonu tetikler
            }
        );

        const footerElement = footerRef.current;

        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => {
            if (footerElement) {
                observer.unobserve(footerElement);
            }
        };
    }, []);

    return (
        <>
            {/* ------footer  web*/}
            <div ref={footerRef} className="relative z-20 w-full hidden md:block">
                <footer className="bg-purple-4" style={{ opacity: 1, background: 'rgb(25 0 18)' }}>
                    <div className="max-w-1xl container mx-auto pb-[20px] pt-[50px] md:py-[50px] px-[50px]">
                        <div className="md:mb-[80px]">
                            <div className="grid lg:grid-cols-4 gap-5">
                                {/* Logo */}
                                <div className="text-center lg:text-left mx-auto lg:mx-0">
                                    <div className="mb-[18px]">
                                        <div className="items-center block">
                                            <Image src={logo} width={230} height={43} alt="StartGate Logo" />
                                            <Image src={text} width={230} height={43} alt="StartGate Text" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="md:flex hidden items-center mb-[29px] mt-[6px]">
                                            <Image
                                                alt="location"
                                                loading="lazy"
                                                width={17}
                                                height={23}
                                                decoding="async"
                                                src={location}
                                                style={{ color: 'transparent' }}
                                            />
                                            <span className=" text-[16px] text-white ml-[12px]">
                                                Maslak Mahallesi Eski Büyük Dere Caddesi No:21 SARIYER/İSTANBUL
                                            </span>
                                        </div>
                                        <div className="flex md:justify-start justify-center items-center mb-[18px]">
                                            <Image
                                                alt="phone"
                                                loading="lazy"
                                                width={18}
                                                height={20}
                                                decoding="async"
                                                src={phone}
                                                style={{ color: 'transparent' }}
                                            />
                                            <span className=" text-[16px] text-white ml-[12px]">+90 850 309 24 92</span>
                                        </div>

                                        <div className="flex md:justify-start justify-center items-center mb-[18px]">
                                            <Image
                                                alt="mail"
                                                loading="lazy"
                                                width={20}
                                                height={15}
                                                decoding="async"
                                                src={mail}
                                                style={{ color: 'transparent' }}
                                            />
                                            <span className=" text-[16px] text-white ml-[12px]">info@startgate.com</span>
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-6 text-white">
                                        <p>Sosyal Medya Adreslerimiz</p>
                                    </div>
                                    <div className="flex justify-center lg:justify-start items-center gap-[44px] mb-[24px]">
                                        <a href="https://www.facebook.com/startgatecom" className="w-full max-w-[30px]">
                                            <Image
                                                alt="facebook"
                                                loading="lazy"
                                                width={15}
                                                height={27}
                                                decoding="async"
                                                src={facebook}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://www.instagram.com/startgatecom/?hl=en" target="_blank" className="w-full max-w-[30px]">
                                            <Image
                                                alt="instagram"
                                                loading="lazy"
                                                width={25}
                                                height={24}
                                                decoding="async"
                                                src={instagram}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://twitter.com/Startgatecom" target="_blank" className="w-full max-w-[25px]">
                                            <Image
                                                alt="twitter"
                                                loading="lazy"
                                                width={55}
                                                height={55}
                                                decoding="async"
                                                src={twitter}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://www.youtube.com/@startgate" className="w-full max-w-[30px]">
                                            <Image
                                                alt="youtube"
                                                loading="lazy"
                                                width={28}
                                                height={21}
                                                decoding="async"
                                                src={youtube}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://www.linkedin.com/company/startgatecom/" target="_blank" className="w-full max-w-[26px] -translate-y-[2px]">
                                            <Image
                                                alt="linkedin"
                                                loading="lazy"
                                                width={31}
                                                height={30}
                                                decoding="async"
                                                src={linkedn}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                    </div>
                                </div>

                                {/* About */}
                                <div className="hidden lg:block ml-10">
                                    <span className=" text-[20px] text-white mb-[28px] block">Biz Kimiz?</span>
                                    <div>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">StartGate</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Takımımız</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Kurumsal Kimlik Rehberi</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">İletişim</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Sıkça Sorulan Sorular</a>
                                    </div>
                                </div>

                                {/* Programmes */}
                                <div className="hidden lg:block">
                                    <span className=" text-[20px] text-white mb-[28px] block">Programlar</span>
                                    <div>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Guild Programı </a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Squad Programı</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Dream Forge Programı</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Game Forge Programı </a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Tekmer Programı</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Game Ascend Programı</a>
                                        <a className=" text-[16px] text-white mb-[18px] block" href="#">Global XPan Programı</a>
                                    </div>
                                </div>

                                {/* News*/}
                                <div className="hidden lg:block">
                                    <div className="mb-[73px]">
                                        <span className=" text-[20px] text-white mb-[28px] block">Haberler</span>
                                        <div>
                                            <a className=" text-[16px] text-white mb-[18px] block" href="#">Haberler</a>
                                            <a className=" text-[16px] text-white mb-[18px] block" href="#">Duyurular</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className=" text-[20px] text-white mb-[24px] block">Bizden haberdar olmak için abone ol</span>
                                        <div className="flex justify-center lg:justify-start items-center gap-[4px] mb-[24px]">
                                            <input
                                                placeholder="E-mail..."
                                                id="basic_mail"
                                                aria-required="true"
                                                className="w-full sm:w-auto h-[52px] p-4 text-[16px] text-primary border border-gray-300 rounded-lg"
                                                type="text"
                                            />
                                            <a
                                                href="#"
                                                className="bg-get-red text-white px-6 py-3 sm:py-1 cursor-pointer whitespace-nowrap rounded-lg h-[52px] flex items-center justify-center"
                                            >
                                                Gönder
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className="hidden md:block" />
                            <div className="flex md:block justify-center items-center pt-[24px] text-center">
                                <hr className="block md:hidden my-[14px]" />
                                <div className="block md:flex justify-between items-center pt-[24px] text-center">
                                    <div className="flex gap-x-4">
                                        <span className=" text-[14px] text-white">Politikalarımız</span>
                                        <span className=" text-[14px] text-white">Mevzuat</span>
                                        <span className=" text-[14px] text-white">Kalite Yönetim Sertifikaları</span>
                                    </div>
                                    <div>
                                        <span className=" text-[14px] text-white">©Copyright StartGate. All Right Reserved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* ------footer  mobil*/}
            <div className="relative z-20 w-full md:hidden ">
                <footer
                    className="bg-purple-400"
                    style={{ background: "rgb(25 0 18)", opacity: 1 }}
                >
                    <div className="max-w-2xl mx-auto py-12 md:py-12 px-12">
                        <div className="md:mb-20">
                            <div className="grid lg:grid-cols-4 gap-5">
                                {/* Logo */}
                                <div className="text-center lg:text-left mx-auto lg:mx-0">
                                    <div className="mb-4 flex justify-center">
                                        <div className="items-center block">
                                            <Image src={logo} width={230} height={43} alt="StartGate Logo" />
                                            <Image src={text} width={230} height={43} alt="StartGate Text" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center lg:justify-start items-center gap-[44px] mb-[24px]">
                                        <a href="https://www.facebook.com/startgatecom" className="w-full max-w-[30px]">
                                            <Image
                                                alt="facebook"
                                                loading="lazy"
                                                width={15}
                                                height={27}
                                                decoding="async"
                                                src={facebook}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://www.instagram.com/startgatecom/?hl=en" target="_blank" className="w-full max-w-[30px]">
                                            <Image
                                                alt="instagram"
                                                loading="lazy"
                                                width={25}
                                                height={24}
                                                decoding="async"
                                                src={instagram}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://twitter.com/Startgatecom" target="_blank" className="w-full max-w-[25px]">
                                            <Image
                                                alt="twitter"
                                                loading="lazy"
                                                width={55}
                                                height={55}
                                                decoding="async"
                                                src={twitter}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://www.youtube.com/@startgate" className="w-full max-w-[30px]">
                                            <Image
                                                alt="youtube"
                                                loading="lazy"
                                                width={28}
                                                height={21}
                                                decoding="async"
                                                src={youtube}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                        <a href="https://www.linkedin.com/company/startgatecom/" target="_blank" className="w-full max-w-[26px] -translate-y-[2px]">
                                            <Image
                                                alt="linkedin"
                                                loading="lazy"
                                                width={31}
                                                height={30}
                                                decoding="async"
                                                src={linkedn}
                                                style={{ color: 'transparent' }}
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <div className="flex justfy-center">
                                            <div className="flex flex-col sm:block items-center mb-7 mt-2">
                                                <div className="flex justify-center sm:justify-center w-full sm:w-auto mb-2">
                                                    <Image
                                                        alt="location"
                                                        loading="lazy"
                                                        width="17"
                                                        height="23"
                                                        src={location}
                                                    />
                                                </div>
                                                <span className=" text-lg text-white ml-3 text-center sm:text-left">
                                                    Maslak Mahallesi Eski Büyükdere Caddesi No:21 SARIYER/İSTANBUL
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex gap-x-4 md:justify-start justify-center items-center ">
                                            <div className="flex md:justify-start justify-center items-center mt-4 mb-4">
                                                <Image
                                                    alt="phone"
                                                    loading="lazy"
                                                    width="18"
                                                    height="20"
                                                    src={phone}
                                                />
                                                <span className=" text-lg text-white ml-3">
                                                    +90 850 309 24 92
                                                </span>
                                            </div>
                                            <div className="flex md:justify-start justify-center items-center  mt-4 mb-4">
                                                <Image
                                                    alt="mail"
                                                    loading="lazy"
                                                    width="20"
                                                    height="15"
                                                    src={mail}
                                                />
                                                <span className=" text-lg text-white ml-3">
                                                    info@startgate.com
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>

                                {/* News & Subscribe Form */}
                                <div className="block">
                                    <div className="flex flex-col ">
                                        <span className=" text-xl text-white mb-6 block text-center">
                                            Bizden haberdar olmak için abone ol.
                                        </span>
                                        <div>
                                            <div className="flex justify-center lg:justify-start items-center gap-[4px] mb-[24px]">
                                                <input
                                                    placeholder="E-mail..."
                                                    id="basic_mail"
                                                    aria-required="true"
                                                    className="w-full  h-[52px] p-4  text-[16px] text-primary border border-gray-300 rounded-lg"
                                                    type="text"
                                                />
                                                <a
                                                    href="#"
                                                    className="bg-get-red text-white px-6 py-3 sm:py-1 cursor-pointer  whitespace-nowrap rounded-lg h-[52px] flex items-center justify-center"
                                                >
                                                    Gönder
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div>
                            <div className="flex gap-x-4 items-center justify-center">
                                <span className=" text-[14px] text-white whitespace-nowrap ">Politikalarımız</span>
                                <span className=" text-[14px] text-white whitespace-nowrap">Kalite Yönetim Sertifikaları</span>
                                <span className=" text-[14px] text-white whitespace-nowrap" >Mevzuat</span>
                            </div>
                            <hr className="hidden md:block" />
                            <div className="block md:flex justify-end items-center pt-6 text-center">
                                <hr className="block md:hidden my-3" />
                                <div>
                                    <span className=" text-sm text-white block">
                                        ©Copyright StartGate. All Right Reserved
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;