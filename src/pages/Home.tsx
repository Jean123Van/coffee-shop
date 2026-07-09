import cafeImage from '../assets/images/cafe.webp';
import { LuSearch, LuStar } from 'react-icons/lu';
import PrimaryBtn from '../components/Buttons/PrimaryBtn/PrimaryBtn';
import { COLORS } from '../theme/colors';

function Home() {
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
                gap: '10px',
            }}
        >
            <section
                style={{
                    backgroundImage: `linear-gradient(
                    to right,
                    rgba(43, 30, 26, 0.85),
                    rgba(78, 52, 46, 0.60),
                    rgba(109, 76, 65, 0.35)
                ),url(${cafeImage})`,
                    backgroundSize: 'cover',
                    height: '400px',
                    backgroundPosition: 'center',
                    borderRadius: '10px',
                    padding: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: '20px',
                }}
            >
                <h1
                    style={{
                        color: 'white',
                        fontWeight: 'normal',
                        fontSize: '40px',
                        marginBottom: '20px',
                    }}
                >
                    Find and review <br /> the best coffee shops
                </h1>
                <h5
                    style={{
                        color: 'white',
                        fontWeight: 'normal',
                        fontSize: '16px',
                        lineHeight: '22px',
                        marginBottom: '30px',
                    }}
                >
                    Real experiences from real people. <br /> Find your next
                    favorite coffee spot.
                </h5>
                <div
                    style={{
                        backgroundColor: 'white',
                        padding: '10px',
                        width: '100%',
                        maxWidth: '700px',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                >
                    <LuSearch
                        color="grey"
                        size={20}
                        style={{
                            marginLeft: '10px',
                        }}
                    />
                    <input
                        placeholder="Search coffee shops..."
                        style={{
                            width: '100%',
                            border: 'none',
                            color: 'grey',
                            outline: 'none',
                            fontSize: '14px',
                        }}
                    />
                    <PrimaryBtn
                        style={{
                            padding: '10px 15px 10px 15px',
                            backgroundColor: COLORS.brown,
                        }}
                    >
                        Search
                    </PrimaryBtn>
                </div>
            </section>

            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '15px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '18px',
                            fontWeight: 'normal',
                        }}
                    >
                        Top rated coffee shops
                    </h2>
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                            color: COLORS.brown,
                            cursor: 'pointer',
                            fontSize: '13px',
                        }}
                    >
                        See all
                    </button>
                </div>
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
                                                backgroundColor:
                                                    COLORS.warmBrown,
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
        </section>
    );
}

export default Home;
