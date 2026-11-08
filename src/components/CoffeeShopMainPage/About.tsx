import { useEffect, useRef, useState } from 'react';
import MainPageSectionContainer from '../Containers/MainPageSectionContainer/MainPageSectionContainer';
import { COLORS } from '../../theme/colors';

interface AboutProps {
    content?: string;
}

function About({ content }: AboutProps) {
    const textRef = useRef<HTMLSpanElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);

    const [isExpandable, setIsExpandable] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const measureElement = measureRef.current;

        if (!measureElement) return;

        const checkExpandable = () => {
            setIsExpandable(
                measureElement.scrollHeight > measureElement.clientHeight,
            );
        };

        checkExpandable();

        window.addEventListener('resize', checkExpandable);

        return () => {
            window.removeEventListener('resize', checkExpandable);
        };
    }, []);

    return (
        <MainPageSectionContainer
            title="About"
            style={{
                marginTop: '10px',
            }}
        >
            <div style={{ position: 'relative' }}>
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
                    {content}
                </span>

                {/* Measurement element */}
                <span
                    ref={measureRef}
                    style={{
                        position: 'absolute',
                        visibility: 'hidden',
                        pointerEvents: 'none',
                        fontSize: '13px',
                        lineHeight: '18px',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '2',
                        overflow: 'hidden',
                    }}
                >
                    {content}
                </span>

                {isExpandable && (
                    <button
                        onClick={() => setIsExpanded((prev) => !prev)}
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                            padding: '0',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            color: COLORS.brown,
                        }}
                    >
                        {isExpanded ? 'See less' : 'See more'}
                    </button>
                )}
            </div>
        </MainPageSectionContainer>
    );
}

export default About;
