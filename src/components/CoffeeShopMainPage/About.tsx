import MainPageSectionContainer from '../Containers/MainPageSectionContainer/MainPageSectionContainer';

function About() {
    return (
        <MainPageSectionContainer
            title="About"
            style={{
                marginTop: '10px',
            }}
        >
            <span
                style={{
                    fontSize: '13px',
                    lineHeight: '18px',
                }}
            >
                Nestled in the heart of the neighborhood, this cozy coffee shop
                is known for its warm atmosphere, expertly crafted espresso, and
                freshly baked pastries. Whether you're stopping by for a quick
                morning pick-me-up or settling in for an afternoon of work, the
                welcoming staff and comfortable seating make it a favorite among
                locals. Seasonal specialty drinks, ethically sourced beans, and
                a thoughtfully curated menu ensure there's something for every
                coffee lover to enjoy.
            </span>
        </MainPageSectionContainer>
    );
}

export default About;
