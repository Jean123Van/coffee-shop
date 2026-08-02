import { useEffect, useRef, useState } from 'react';
import MainPageSectionContainer from '../Containers/MainPageSectionContainer/MainPageSectionContainer';

function About() {
    const textRef = useRef<HTMLSpanElement>(null);
    const [showSeeMore, setShowSeeMore] = useState(true);
    const [canExpand, setCanExpand] = useState(true);

    useEffect(() => {
        if (!textRef.current) return;

        const element = textRef.current;

        const setTextBehavior = () => {
            if (element?.scrollHeight <= element?.clientHeight) {
                setCanExpand(false);
                setShowSeeMore(false);
            } else {
                setCanExpand(true);
                setShowSeeMore(true);
            }
        };

        setTextBehavior();

        const observer = new ResizeObserver(setTextBehavior);
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <MainPageSectionContainer
            title="About"
            style={{
                marginTop: '10px',
            }}
        >
            <div>
                <span
                    ref={textRef}
                    style={{
                        fontSize: '13px',
                        lineHeight: '18px',
                        ...(showSeeMore
                            ? {
                                  display: '-webkit-box',
                                  WebkitBoxOrient: 'vertical',
                                  WebkitLineClamp: '2',
                                  overflow: 'hidden',
                              }
                            : {}),
                    }}
                >
                    Nestled in the heart of the neighborhood, this cozy coffee
                    shop is known for its warm atmosphere, expertly crafted
                    espresso, and freshly baked pastries. Whether you're
                    stopping by for a quick morning pick-me-up or settling in
                    for an afternoon of work, the welcoming staff and
                    comfortable seating make it a favorite among locals.
                    Seasonal specialty drinks, ethically sourced beans, and a
                    thoughtfully curated menu ensure there's something for every
                    coffee lover to enjoy.
                    {/* Nestled in the heart of the neighborhood, this cozy coffee
                    shop is known for its warm atmosphere, expertly crafted
                    espresso, and freshly baked pastries. Whether you're
                    stopping by for a quick morning pick-me-up or settling in
                    for an afternoon of work, the welcoming staff and
                    comfortable seating make it a favorite among locals. */}
                </span>

                {canExpand && (
                    <button
                        onClick={() => {
                            setShowSeeMore((prev) => !prev);
                        }}
                    >
                        {showSeeMore ? 'See more...' : 'See less'}
                    </button>
                )}
            </div>
        </MainPageSectionContainer>
    );
}

export default About;
