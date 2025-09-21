import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import minuscircle from '../../images/minuscircle.svg'
import addcircle from '../../images/addcircle.svg'

const faqData = [
    {
        question: 'What is MyPal and how does it work?',
        answer: 'MyPal is a hospitality mobile app designed to help businesses showcase their services and connect with customers. Users can browse exclusive deals, event listings, dining recommendations, and more. Businesses can upload videos and images of their offerings, while users can share their experiences through photos and videos.',
    },
    {
        question: 'How can businesses join MyPal?',
        answer: 'Businesses can join MyPal by signing up on the business web application. Businesses create their profile, upload descriptions, menus (if applicable), images, and videos of their services, and start connecting with potential customers.',
    },
    {
        question: 'How can businesses join MyPal?',
        answer: 'Businesses can join MyPal by signing up on the business web application. Businesses create their profile, upload descriptions, menus (if applicable), images, and videos of their services, and start connecting with potential customers.',
    },
    {
        question: 'What types of services can businesses offer on MyPal?',
        answer: 'Businesses can offer a wide range of services, including dining, event ticketing, outdoor activities, accommodation, beauty & health, nightlife, mobility, and luxury rentals.',
    },
    {
        question: 'How do users book services through MyPal?',
        answer: 'Users can browse services and contact businesses directly through the app to make reservations or bookings. The app facilitates communication between the user and the business.',
    },
    {
        question: 'Can users share their experiences on MyPal?',
        answer: 'Yes, users are encouraged to share their experiences by uploading photos and videos of the venues and services they have enjoyed, creating a community-driven platform.',
    },
    {
        question: 'Is there a cost for businesses to join MyPal?',
        answer: 'No, joining MyPal is free for all businesses. The platform is designed to help them grow their customer base and visibility without any financial barriers.',
    },
    {
        question: 'How does MyPal ensure the quality of services listed?',
        answer: 'Answer will be displayed here.',
    },{
        question: 'What should I do if I encounter an issue with a booking?',
        answer: 'Answer will be displayed here.',
    },
];

export default function Faq() {
    // State to track which FAQ item is currently open
    const [openIndex, setOpenIndex] = useState(0);

    // Function to toggle the open/closed state of an FAQ item
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-12 md:py-20 font-sans antialiased">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="w-full flex flex-row gap-[40px] items-center justify-start relative mb-8">
                {/* Left Gradient Line */}
                    <div className="hidden md:block border-t border-solid shrink-0 md:w-[20%] lg:w-[30%] h-0 relative -mt-px rotate-180"
                    style={{borderImage: "linear-gradient(90deg, rgba(94,94,94,1) 0%, rgba(102,102,102,0.14) 100%)",
                    borderImageSlice: 1,}}
                    ></div>

                    {/* Title */}
                    <div className="text-[#000000] text-center md:text-left font-['DrukCyr-Medium',_sans-serif] text-[28px] md:text-[34px] lg:text-[54px] font-bold relative flex items-center justify-center md:justify-start mx-auto">
                        FAQ'S
                    </div>

                    {/* Right Gradient Line */}
                    <div className="hidden md:block border-t border-solid shrink-0 md:w-[20%] lg:w-[30%] h-0 relative -mt-px" style={{borderImage: "linear-gradient(90deg, rgba(94,94,94,1) 0%, rgba(102,102,102,0.14) 100%)",borderImageSlice: 1,}}
                    ></div>
                </div>

                {/* FAQ section */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full rounded-2xl p-0 sm:p-2 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                            >
                                <div className="w-[80%] text-[#000000] text-left font-['AvenirNextRoundedStd-Medium',_sans-serif] text-2xl font-medium relative cursor-pointer" style={{letterSpacing: '-0.0506em'}}>
                                    {item.question}
                                </div>
                                {/* Icon for toggling */}
                                <div className="">
                                    {openIndex === index ? (
                                        <img src={minuscircle} alt="" className='cursor-pointer' />
                                    ) : (
                                        <img src={addcircle} alt="" className='cursor-pointer' />
                                    )}
                                </div>
                            </button>
                            {/* Answer content, conditionally rendered */}
                            {openIndex === index && (
                                <p className="mt-4 text-gray-600 animate-fadeIn w-[80%] text-left font-['Poppins-Regular',_sans-serif] text-lg font-normal">
                                    {item.answer}
                                </p>
                            )}
                            <div
                            className="border-solid border-[rgba(0,0,0,0.22)] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative mt-[15px] md:mt-[20px]"
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
