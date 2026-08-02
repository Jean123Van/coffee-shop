import { useEffect, useRef, useState } from 'react';
import MainPageSectionContainer from '../Containers/MainPageSectionContainer/MainPageSectionContainer';

function About() {
    const textRef = useRef<HTMLSpanElement>(null);
    const [isExpandable, setIsExpandable] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const element = textRef.current;

        if (!element) return;

        const setSpanBehavior = () => {
            if (isExpanded && element.scrollHeight === element.clientHeight) {
                setIsExpandable(true);
                return;
            }

            if (element.scrollHeight > element.clientHeight) {
                setIsExpandable(true);
            } else {
                setIsExpandable(false);
            }
        };

        setSpanBehavior();

        window.addEventListener('resize', setSpanBehavior);

        return () => {
            window.removeEventListener('resize', setSpanBehavior);
        };
    }, [isExpanded]);

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
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: isExpanded ? 'unset' : '2',
                        overflow: 'hidden',
                    }}
                >
                    Nestled in the heart of the neighborhood, this cozy coffee
                    shop is known for its warm atmosphere, expertly crafted
                    espresso, and freshly baked pastries. Whether you're
                    stopping by for a quick morning pick-me-up or settling in
                    for an afternoon of work, the welcoming staff and
                    comfortable seating make it a favorite among locals.
                </span>
                {isExpandable && (
                    <button onClick={() => setIsExpanded((prev) => !prev)}>
                        {isExpanded ? 'See less' : 'See more'}
                    </button>
                )}
            </div>
        </MainPageSectionContainer>
    );
}

export default About;
