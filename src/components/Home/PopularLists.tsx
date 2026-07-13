import SectionHeader from '../Headers/SectionHeader/SectionHeader';

function PopularLists() {
    const popularLists = [
        {
            id: '1',
            name: 'Best study spots',
            places: '32',
            imageAddress:
                'https://miro.medium.com/v2/resize:fit:1400/0*abfsokCQEgYAXpF_',
        },
        {
            id: '2',
            name: 'Best latte art',
            places: '16',
            imageAddress:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynJNJqU6-GgGsOZAqANgt48E8MP2RNJM5q3ishjZfTNE1P53xZ4ZFgWM&s=10',
        },
        {
            id: '3',
            name: 'Hidden gems',
            places: '24',
            imageAddress:
                'https://www.coffeehan.com/wp-content/uploads/2023/07/Gooses-Nest-Chiang-Mai-Thailand-Facade.jpg',
        },
    ];

    return (
        <div>
            <SectionHeader onSeeAll={() => {}} title="Popular lists" />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    overflow: 'scroll',
                    padding: '2px',
                }}
            >
                {popularLists.map((popularList) => (
                    <div
                        style={{
                            width: '200px',
                            height: '230px',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '10px',
                            boxShadow: '0 0 5px rgba(109, 76, 65, 0.15)',
                            borderRadius: '8px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <img
                                src={popularList.imageAddress}
                                width="100%"
                                height={160}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>
                        <span
                            style={{
                                fontSize: '15px',
                                fontWeight: 'bold',
                            }}
                        >
                            {popularList.name}
                        </span>
                        <span
                            style={{
                                color: 'grey',
                                fontSize: '12px',
                            }}
                        >
                            {popularList.places} places
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularLists;
