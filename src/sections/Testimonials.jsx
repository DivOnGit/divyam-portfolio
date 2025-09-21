import React from 'react';
import TitleHeader from "../components/TitleHeader.jsx";
import { testimonials } from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="What People Say About Me?"
                    sub="🌟 Highlights"
                />

                <div className="lg:columns-3 md:columns-2 columns-3 mt-16">
                    {testimonials.map(({ imgPath, name, mentions, review, linkedin_id }, idx) => (
                        <GlowCard key={name} index={idx} card={{ review }}>
                            <div className="flex items-center gap-3 mb-3">
                                <img src={imgPath} alt={name} width="55" height="55" />
                                <p className="font-bold">{name}</p>
                                {linkedin_id ? (
                                    <a
                                        href={linkedin_id}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        {mentions}
                                    </a>
                                ) : (
                                    <span className="text-white-50">{mentions}</span>
                                )}
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
