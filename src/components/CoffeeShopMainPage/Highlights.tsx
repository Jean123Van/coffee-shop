import HighlightsTile from '../Containers/HighlightsTile/HighlightsTile';
import MainPageSectionContainer from '../Containers/MainPageSectionContainer/MainPageSectionContainer';
import {
    LuDoorOpen,
    LuMonitor,
    LuWifi,
    LuPlug,
    LuCar,
    LuVolumeX,
    LuTrees,
    LuSandwich,
    LuCakeSlice,
} from 'react-icons/lu';

function Highlights() {
    const tags = [
        {
            name: 'Open now',
            icon: LuDoorOpen,
        },
        {
            name: 'Good for work',
            icon: LuMonitor,
        },
        {
            name: 'Has outlets',
            icon: LuPlug,
        },
        {
            name: 'Fast wifi',
            icon: LuWifi,
        },
        {
            name: 'Quiet',
            icon: LuVolumeX,
        },
        {
            name: 'Outdoor seats',
            icon: LuTrees,
        },
        {
            name: 'Spacious Parking',
            icon: LuCar,
        },
        {
            name: 'Meals available',
            icon: LuSandwich,
        },
        {
            name: 'Great Pastries',
            icon: LuCakeSlice,
        },
    ];

    return (
        <MainPageSectionContainer
            title="Highlights"
            style={{ marginTop: '20px' }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    overflow: 'scroll',
                    padding: '1px',
                }}
            >
                {tags.map((tag) => (
                    <HighlightsTile icon={tag.icon} name={tag.name} />
                ))}
            </div>
        </MainPageSectionContainer>
    );
}

export default Highlights;
