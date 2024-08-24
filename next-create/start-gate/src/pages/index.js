import Image from "next/image";
import textImage from "../image/text2.svg";
import men from "../image/Untitled-1 1.svg"
import one from "../image/one.svg"
import two from "../image/two.svg"
import three from "../image/three.svg"
import four from "../image/four.svg"
import five from "../image/five.svg"
import six from "../image/six.svg"
import seven from "../image/seven.svg"
import twoHover from "../image/twoHover.svg"
import { useState } from "react";
import HowWeDidSlider from "@/components/slider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const offerItems = [
    "Office space at StartGate Campus for 3 promising companies identified by StartGate",
    "Shared workspace where you can be part of the ecosystem",
    "Participation in training sessions to enhance your skills and talents",
    "High-speed internet to support your work",
    "Guidance from mentors to address any questions you may have",
    "Access to meeting rooms for your group meetings",
    "Networking opportunities to help you become recognised in the game ecosystem",
    "Music room where you can create music or relax",
    "Perks offered by the StartGate ecosystem to make your life easier (AWS, Google For StartUps, ClickUp, Marketing, and many more)",
    "PodCast and Vlog Studio for your broadcasts",
    "Priority access to other programmes at StartGate after graduation",
    "Sleep capsules for resting at the 24/7 living StartGate campus",
    "Access to the investor pool after graduation",
    "Game room to experience new gaming adventures or connect with your gamer roots",
    "Opportunity for successful companies to showcase their products at StartGate The Arena Of Glory Demo Day",
    "Acoustic meeting cabins for undisturbed personal meetings",
    "24/7 access to StartGate Campus",
    "Unlimited access to delicious and always fresh coffee and tea",
  ];
  const [isHovered, setIsHovered] = useState(false);

  // Hover olaylarını kontrol etmek için state
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="h-96">
        <h4 className="text-white hidden md:block  text-center max-md:text-xl text-[20px]">
          GAMES FORGE
        </h4>
        <h6 className="text-white  hidden md:block  text-center max-md:text-xl text-[10px]">tartGate {'>'} GamesForg</h6>
      </div>


      <div className="p-2 max-sm:p-0">
        <div className="mx-auto -mt-28 max-w-[780px]">
          <Image
            src={textImage}
            width={592}
            height={265}
            className="w-full mx-auto"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-white text-center max-md:text-xl text-[40px]">
            INCUBATION PROGRAMME
          </h3>
        </div>
      </div>
      <div className="mt-20 p-2 container mb-4">
        <h1 className="text-center text-4xl mb-9">
          <span className="text-white"> What is the</span>
          <span className=" text-[#D9BB7E]">
            GamesForge Incubation
          </span>
          <br />
          <span className="text-white">
            Programme?
          </span>
        </h1>
        {/* ---------- */}
        <div className="border border-white/30 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[20%_80%] items-center">
            <div className="lg:border-r border-white/30 rounded-xl p-8 max-md:border-b">
              <h2 className="text-[26px] text-[#D9BB7E] max-md:text-center">
                Scope
              </h2>
              <p className="text-2xl max-md:text-center text-white">
                Teams that produce products to be developed in PC-Console, Mobile, GameTech, and other game development verticals.
              </p>
            </div>
            <div className="p-8 max-lg:border-l border-white/30">
              <p className="text-2xl max-md:text-center text-white">
                GamesForge Incubation Programme is an online entrepreneurship programme where we embark on a nine-month journey of intensive development and investor meetings with fun and dynamic game companies that have completed the Pre-Alpha phase and are moving full throttle towards the Beta phase.
              </p>
            </div>
          </div>
        </div>
        {/* ----- */}
        <div className="mt-80 grid grid-cols-1 md:grid-cols-2 items-center p-2">
          <div>
            <Image
              src={men}
              alt="men"
              width={708}
              height={708}
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-col gap-16">
            <div>
              <h2 className="text-[#E2C489] text-[32px] md:text-4xl lg:text-[45px] max-md:text-center">
                What Will We Do
                <span> Together?</span>
              </h2>
              <hr className="w-20 h-[2px] bg-white border-0 mt-4 max-md:mx-auto" />
            </div>
            <ul className="list-disc list-inside text-white">
              <li>We will attend training sessions to unlock the secrets of game entrepreneurship.</li>
              <li>We will prepare the necessary roadmaps to create a systematic structure for teams aiming to be successful companies.</li>
              <li>We will turn our prototypes into pre-alphas.</li>
              <li>We will participate in many events to expand our network.</li>
              <li>We will meet with mentors to improve the quality of our project.</li>
              <li>We will help our community and strengthen the sense of a supportive community.</li>
              <li>But most importantly, we will have a lot of fun and develop games.</li>
            </ul>
          </div>
        </div>
        {/* ------- */}
        <div className="p-2 mt-40">
          <h1 className="text-[28px] text-white md:text-3xl lg:text-[45px] max-md:text-center">
            What Does the GamesForge
            <br />
            <span className="gamesforge-text-gradient gradient-text text-[#E2C489]">
              Incubation Programme Offer?
            </span>
          </h1>
          <hr className="w-20 h-[2px] bg-white border-0 mt-4 max-md:mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 text-sm md:text-lg lg:text-2xl">
            {offerItems.map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-8 border border-white/30 rounded-xl hover-bg transition-all duration-200 hover:bg-gradient-to-r hover:from-[#E2C489] hover:to-[#69A4B5] transition duration-300 ease-in-out flex items-center"
              >
                <p className="flex gap-4 max-md:text-lg text-white items-baseline">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-white w-1/6"
                    height="8"
                    width="8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                  </svg>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* ------- */}
        <div className="p-2 mt-40">
          <div className="flex flex-col justify-center items-center mb-14">
            <h1 className="text-[28px] md:text-3xl lg:text-[45px] text-center">
              <span className="text-white">
                GamesForge Incubation
              </span>
              <br />
              <span className="gr-text-title">
                Programme Application Criteria
              </span>
            </h1>
            <hr className="w-20 h-[2px] bg-white border-0 mt-4 max-md:mx-auto text-center" />
          </div>
          {/* Mobil */}

          <HowWeDidSlider />

          {/* Mobil end */}
          {/* Web */}
          <div className="hidden md:grid grid-cols-2 gap-[22px]">
            <div className="bg-[#8B7E4E] text-white  rounded-2xl py-6 px-8 mb-4">
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  Your team and project must operate in at least one of the
                  following StartGate verticals:
                  <ul className="list-disc list-inside pl-4">
                    <li>Game Development</li>
                    <li>Game Technologies Development</li>
                    <li>Game Industry Service Development</li>
                  </ul>
                </li>
                <li>Founders or co-founders must be over 18 years old.</li>
                <li>The team must be incorporated.</li>
                <li>
                  The team must be ready for the challenging competition in the
                  gaming industry and consist of at least 2 people.
                </li>
                <li>
                  The team must be willing to support you in this challenge and
                  ready to meet StartGate's performance indicators.
                </li>
                <li>
                  The team must be able to develop their pre-alpha prototypes into
                  beta within 9 months.
                </li>
                <li>
                  An engaging and informative pitch deck that describes your team
                  and project is required.
                </li>
              </ul>
            </div>

            <div className="bg-[#8B7E4E] text-white  rounded-2xl py-6 px-8 mb-4">
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  After passing the initial evaluation, you need to have the
                  following documents to support your evaluation process and show us
                  that you have planned "Do you really want to exist in the gaming
                  industry?" well:
                  <ul className="list-disc list-inside pl-4">
                    <li>Game Design Document</li>
                    <li>Project Development Document</li>
                    <li>Business Strategy Document</li>
                    <li>Market Analysis Document</li>
                    <li>Market Strategy Document</li>
                    <li>Financial Projection Document</li>
                  </ul>
                </li>
                <li>
                  In the application form, a video answering the following questions
                  should be added to the "Introduction Video" section, which should
                  not exceed 3 minutes and 250 MB:
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      Why do you want to enter the gaming world and make a name for
                      yourself?
                    </li>
                    <li>Why do you want to be a part of StartGate?</li>
                    <li>Why do you think your game will excite people?</li>
                  </ul>
                </li>
                <li>
                  The team must resonate with StartGate's culture, values, and
                  goals, reinforcing an inclusive and supportive ecosystem
                  perception.
                </li>
              </ul>
            </div>
          </div>
          {/* Web end */}
        </div>
        {/* ------ */}
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] p-2 items-center md:justify-between gap-6 max-md:gap-2 xl:px-20 2xl:gap-12 mt-40">
          <div className="text-center md:text-left">
            <h1 className="text-[32px] xl:text-[32px] gr-text-title" >Hizmetler</h1>
            <p className="max-md:text-base text-[22px] lg:text-[26px] md:mt-4 max-sm:mb-2 text-white">
              DreamForge Programı’nın Sağladığı İmkanlar
            </p>
          </div>
          {/* Burada hover olayını sadece bir tanesi üzerrinde yaptım. */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-center">
            <div className="border border-white/[0.32] rounded-xl sm:px-2 lg:py-4 py-2 xl:py-8 h-[176px] md:h-[276px] flex flex-col gap-4 items-center justify-center text-center transition-all duration-200 ease-linear hover:bg-gray-700">
              <div>
                <Image
                  src={one}
                  alt=""
                  width={708}
                  height={708}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />

              </div>
              <p className=" text-sm md:text-[16px] text-[20px] text-white">Ücretsiz Ortak Çalışma Alanı</p>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`border border-white/[0.32] rounded-xl sm:px-2 lg:py-4 py-2 xl:py-8 h-[176px] md:h-[276px] flex flex-col gap-4 items-center justify-center text-center transition-all duration-200 ease-linear ${isHovered ? 'bg-[#D9BB7E]' : 'bg-transparent'}`}
            >
              <div>
                <Image
                  src={isHovered ? twoHover : two}
                  alt=""
                  width={708}
                  height={708}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm md:text-[16px] text-[20px] text-white">
                Mentorluk
              </p>
            </div>
            <div className="border border-white/[0.32] rounded-xl sm:px-2 lg:py-4 py-2 xl:py-8 h-[176px] md:h-[276px] flex flex-col gap-4 items-center justify-center text-center transition-all duration-200 ease-linear hover:bg-gray-700">
              <div>
                <Image
                  src={three}
                  alt=""
                  width={708}
                  height={708}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm md:text-[16px] text-[20px] text-white">İş Koçu Desteği</p>
            </div>
            <div className="border border-white/[0.32] rounded-xl sm:px-2 lg:py-4 py-2 xl:py-8 h-[176px] md:h-[276px] flex flex-col gap-4 items-center justify-center text-center transition-all duration-200 ease-linear hover:bg-gray-700">
              <div>
                <Image
                  src={four}
                  alt=""
                  width={708}
                  height={708}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm md:text-[16px] text-[20px] text-white">STARTGATE
                "Ecosystem
                Member"
                networkten
                faydalanma</p>
            </div>
            <div className="border border-white/[0.32] rounded-xl sm:px-2 lg:py-4 py-2 xl:py-8 h-[176px] md:h-[276px] flex flex-col gap-4 items-center justify-center text-center transition-all duration-200 ease-linear hover:bg-gray-700">
              <div>
                <Image
                  src={five}
                  alt=""
                  width={708}
                  height={708}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className=" text-sm md:text-[16px] text-[20px] text-white">StartGate Etkinliklerine Katılım İmkanı</p>
            </div>
            <div className="border border-white/[0.32] rounded-xl sm:px-2 lg:py-4 py-2 xl:py-8 h-[176px] md:h-[276px] flex flex-col gap-4 items-center justify-center text-center transition-all duration-200 ease-linear hover:bg-gray-700">
              <div>
                <Image
                  src={six}
                  alt=""
                  width={708}
                  height={708}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className=" text-sm md:text-[16px] text-[20px] text-white">Perk
                Desteği</p>
            </div>
            <div className="border border-white/[0.32] rounded-xl sm:px-2 lg:py-4 py-2 xl:py-8 h-[176px] md:h-[276px] flex flex-col gap-4 items-center justify-center text-center transition-all duration-200 ease-linear hover:bg-gray-700">
              <div>
                <Image
                  src={seven}
                  alt=""
                  width={708}
                  height={708}
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm md:text-[16px] text-[20px] text-white">Kafetarya</p>
            </div>
          </div>
        </div>
        {/* ----- */}
        <div className="mb-4 p-4 py-8 md:p-12 mt-32 rounded-xl max-md:mx-2 bg-gradient-to-r from-[#6AA4B6] to-[#DEC38B]">
          <div className="flex max-lg:flex-col items-center gap-8 px-8 lg:border-l-[3px] lg:border-white text-white">
            <div>
              <p className="max-lg:text-2xl max-lg:text-center lg:text-[32px] leading-none">
                Are you ready for an adventure that will make your dreams come true?
                <br />
                <br />
                If you have incorporated, completed the pre-alpha stage, and want to create unique experiences and make your name resonate in the gaming universe, apply now and become a part of the supportive and developing community of gamers, the
                <span>"StartGate Ecosystem"!</span>
              </p>
            </div>
            <a className="bg-white text-[#D9BB7E] text-center max-h-[50px] max-w-[195px] w-full px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-[#6AA4B6] transition-all duration-300 ease-in-out">
              APPLY
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
