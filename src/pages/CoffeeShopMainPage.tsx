import { useMemo } from 'react';
import { LuShare, LuStar } from 'react-icons/lu';

function CoffeeShopMainPage() {
    const data = useMemo(
        () => ({
            coverImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcxVRjFLT7uYkq_Ha9Ywk4_t-E5p5J0o0iSD4IHhLucGBZgcISjgzABI&s=10',
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQXAMJSyROkMFk2lX3Zc9KBEH1YVdJcjeWmoj3iB4Wg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uYfT4E9UANyTPu7azMcYZGLBmGDlZIgHpGd71kGfuQ&s=10',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYXRiG2UAlrx__ZHvVy2-UoeME9DlVFoZC6uJTTHDrg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9IKrFssozgqnInTzd6x3wwQSmuKwDuTi4fwxekA30g&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuSyc0pMdk3goCInGMMLSkY8J-dx0TA805Ai7eOVmCQ&s',
            ],
            name: "Bean O'clock",
            ratings: {
                coffeeQuality: '4.9',
                foodQuality: '4.8',
                ambience: '4.6',
                service: '4.5',
                valueForMoney: '4.3',
                cleanliness: '4.7',
            },
            totalReviews: '128',
            address: 'Visayan Village',
            operatingHours: '7:00 AM - 10:00 PM',
        }),
        [],
    );

    const totalRating = useMemo(() => {
        const ratings = Object.values(data.ratings);

        return (
            ratings.reduce((total, value) => total + Number(value), 0) / 6
        ).toFixed(1);
    }, [data]);

    return (
        <>
            <div
                style={{
                    height: '350px',
                    marginBottom: '60px',
                    position: 'relative',
                }}
            >
                <button
                    style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        border: 'none',
                        width: '40px',
                        height: '40px',
                        borderRadius: '100%',
                        top: '25px',
                        right: '25px',
                    }}
                >
                    <LuShare size={15} />
                </button>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-45px',
                        zIndex: '10',
                        width: '100%',
                        height: '100px',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '12px',
                        padding: '0 40px',
                    }}
                >
                    {data.images.map((image, index, arr) => (
                        <div
                            style={{
                                width: '100px',
                                height: '100%',
                                backgroundColor: 'white',
                                padding: '2px',
                                borderRadius: '7px',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: '5px',
                                    height: '100%',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={image}
                                    width={'100%'}
                                    height={'100%'}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                                {index + 1 === arr.length && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            top: '0',
                                            left: '0',
                                            height: '100%',
                                            backgroundColor:
                                                'rgba(0, 0, 0, 0.75)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: 'white',
                                                fontSize: '14px',
                                            }}
                                        >
                                            +12
                                        </span>{' '}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <img
                    src={data.coverImg}
                    style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h1
                    style={{
                        marginBottom: '7px',
                    }}
                >
                    Bean O'Clock
                </h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '5px',
                        gap: '8px',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }}
                    >
                        {totalRating}
                    </span>
                    <div>
                        <LuStar color="gold" fill="gold" />
                        <LuStar color="gold" fill="gold" />
                        <LuStar color="gold" fill="gold" />
                        <LuStar color="gold" fill="gold" />
                    </div>
                    <span
                        style={{
                            color: 'grey',
                            fontSize: '12px',
                        }}
                    >
                        ({data.totalReviews} reviews)
                    </span>
                </div>
                <span
                    style={{
                        fontSize: '14px',
                        color: 'rgba(57, 57, 57, 1)',
                        marginBottom: '3px',
                    }}
                >
                    {data.address}
                </span>
                <span
                    style={{
                        fontSize: '14px',
                        color: 'rgba(57, 57, 57, 1)',
                    }}
                >
                    {data.operatingHours}
                </span>
            </div>
        </>
    );
}

export default CoffeeShopMainPage;
