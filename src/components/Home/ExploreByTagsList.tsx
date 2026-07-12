import { COLORS } from '../../theme/colors';
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
                    <div
                        style={{
                            boxShadow: '0 0 5px rgba(109, 76, 65, 0.15)',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '10px 15px',
                            borderRadius: '7px',
                            gap: '10px',
                            alignItems: 'center',
                            minWidth: '80px',
                        }}
                    >
                        <tag.icon color={COLORS.brown} size={22} />
                        <span
                            style={{
                                fontSize: '12px',
                            }}
                        >
                            {tag.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExploreByTagsList;
