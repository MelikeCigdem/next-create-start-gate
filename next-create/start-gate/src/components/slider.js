import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

const HowWeDidSlider = () => {
    return (
        <div className="block md:hidden">
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper h-160"
            >
                <SwiperSlide className='h-160'>
                    <div className="h-160 bg-[#8B7E4E]/60 rounded-2xl py-6 px-8 mr-2 flex flex-col">
                        <ul className="list-disc list-inside flex flex-col gap-2 leading-7 flex-grow">
                            <li>Your team and project must operate in at least one of the following StartGate verticals:
                                <ul className="list-disc list-inside pl-4">
                                    <li>Game Development</li>
                                    <li>Game Technologies Development</li>
                                    <li>Game Industry Service Development</li>
                                </ul>
                            </li>
                            <li>Founders or co-founders must be over 18 years old.</li>
                            <li>The team must be incorporated.</li>
                            <li>The team must be ready for the challenging competition in the gaming industry and consist of at least 2 people.</li>
                            <li>The team must be willing to support you in this challenge and ready to meet StartGate's performance indicators.</li>
                            <li>The team must be able to develop their pre-alpha prototypes into beta within 9 months.</li>
                            <li>An engaging and informative pitch deck that describes your team and project is required.</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-160'>
                    <div className="h-160 bg-[#8B7E4E]/60 rounded-2xl py-6 px-8 mr-2 flex flex-col">
                        <ul className="list-disc list-inside flex flex-col gap-2 leading-7 flex-grow">
                            <li>After passing the initial evaluation, you need to have the following documents to support your evaluation process and show us that you have planned "Do you really want to exist in the gaming industry?" well:
                                <ul className="list-disc list-inside pl-4">
                                    <li>Game Design Document</li>
                                    <li>Project Development Document</li>
                                    <li>Business Strategy Document</li>
                                    <li>Market Analysis Document</li>
                                    <li>Market Strategy Document</li>
                                    <li>Financial Projection Document</li>
                                </ul>
                            </li>
                            <li>In the application form, a video answering the following questions should be added to the "Introduction Video" section, which should not exceed 3 minutes and 250 MB:
                                <ul className="list-disc list-inside pl-4">
                                    <li>Why do you want to enter the gaming world and make a name for yourself?</li>
                                    <li>Why do you want to be a part of StartGate?</li>
                                    <li>Why do you think your game will excite people?</li>
                                </ul>
                            </li>
                            <li>The team must resonate with StartGate's culture, values, and goals, reinforcing an inclusive and supportive ecosystem perception.</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HowWeDidSlider;
