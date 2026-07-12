import { LuStar } from 'react-icons/lu';
import SectionHeader from '../Headers/SectionHeader/SectionHeader';
import { COLORS } from '../../theme/colors';

function TopRatedList() {
    const coffeeShops = [
        {
            name: "Bean O'clock",
            location: 'Visayan Village',
            tags: ['Great coffee', 'Good for work', 'Quiet'],
            rating: '4.8',
            totalReviews: '128',
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H4apmbsNflCZg4R18J3i6vB3Jo1gjxZRMyNLbsZEyYDqm4alhwe3ACeJ&s=10',
        },
        {
            name: "Martha's Cafe",
            location: 'Mankilam',
            tags: ['Cozy', 'Good for work', 'Spacious'],
            rating: '4.8',
            totalReviews: '128',
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5IuYLC8vPI2yLZ0AMogHCP9bVoy9dUhSsNL_Y6ENjQw&s',
        },
        {
            name: 'The Turq Cafe',
            location: 'New City Hall',
            tags: ['Good food', 'Cozy', 'Spacious'],
            rating: '4.8',
            totalReviews: '128',
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveQoq9f0ubEZeaMmkXJBoBBR0ksr43mnkhl201vCdtB1d1L2xkt3hNqsk&s=10',
        },
        {
            name: 'Shell Cafe',
            location: 'Canocotan',
            tags: ['Good food', 'Good for work', 'Parking'],
            rating: '4.8',
            totalReviews: '128',
            thumbnail:
                'https://yummy-poc-bucket-imgs-files.s3.amazonaws.com/uploads/2018/06/shell-select-cafe-tagaytay-4.jpeg',
        },
        {
            name: 'Dear Coffee and Co.',
            location: 'New City Hall',
            tags: ['Great coffee', 'Cozy', 'Good food'],
            rating: '4.8',
            totalReviews: '128',
            thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_kmCQGy9rvXwUooHJWhhAQsq2PXJK9hh5-v4waysq8aZc1chsk8TiOo&s=10',
        },
    ];

    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <SectionHeader title="Top rated coffee shops" onSeeAll={() => {}} />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    overflow: 'scroll',
                    padding: '2px',
                }}
            >
                {coffeeShops.map((coffeeShop) => (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 0 5px rgba(109, 76, 65, 0.15)',
                            borderRadius: '8px',
                            flexShrink: 0,
                            width: '220px',
                            height: '260px',
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                backgroundColor: 'rgba(0,0,0, 0.8)',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '3px 6px',
                                borderRadius: '5px',
                                gap: '5px',
                            }}
                        >
                            <LuStar size={12} color="gold" fill="gold" />
                            <span
                                style={{
                                    color: 'white',
                                    fontSize: '12px',
                                }}
                            >
                                {coffeeShop.rating}
                            </span>
                        </div>
                        <img
                            src={coffeeShop.thumbnail}
                            style={{ objectFit: 'cover' }}
                            height={150}
                        />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                padding: '10px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {coffeeShop.name}
                            </span>
                            <span
                                style={{
                                    color: 'grey',
                                    fontSize: '12px',
                                }}
                            >
                                {coffeeShop.location}
                            </span>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '2px',
                                }}
                            >
                                {coffeeShop.tags.map((tag) => (
                                    <span
                                        style={{
                                            backgroundColor: COLORS.warmBrown,
                                            fontSize: '11px',
                                            color: COLORS.brown,
                                            padding: '2px 4px',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span
                                style={{
                                    fontSize: '11px',
                                    color: 'grey',
                                }}
                            >
                                {coffeeShop.totalReviews} reviews
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopRatedList;
