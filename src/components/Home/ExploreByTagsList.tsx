import HighlightsTile from '../Containers/HighlightsTile/HighlightsTile';
import SectionHeader from '../Headers/SectionHeader/SectionHeader';
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

function ExploreByTagsList() {
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
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <SectionHeader title="Explore by tags" />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    overflow: 'scroll',
                    padding: '2px',
                }}
            >
                {tags.map((tag) => (
                    <HighlightsTile icon={tag.icon} name={tag.name} />
                ))}
            </div>
        </section>
    );
}

export default ExploreByTagsList;
