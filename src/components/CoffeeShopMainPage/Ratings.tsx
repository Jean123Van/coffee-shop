import { COLORS } from '../../theme/colors';
import { LuStar } from 'react-icons/lu';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';
import MainPageSectionContainer from '../Containers/MainPageSectionContainer/MainPageSectionContainer';

interface RatingsProps {
    totalRating: string;
    ratings: { title: string; rating: string }[];
}

function Ratings({ ratings, totalRating }: RatingsProps) {
    return (
        <MainPageSectionContainer title="Ratings">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        width: '60%',
                    }}
                >
                    <table width={'100%'}>
                        <tbody>
                            {ratings.map((rating) => (
                                <tr>
                                    <td
                                        width={'25%'}
                                        style={{
                                            padding: '4px 0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'rgba(77, 77, 77, 1)',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {rating.title}
                                        </span>
                                    </td>
                                    <td>
                                        <div
                                            style={{
                                                flex: '1',
                                                backgroundColor:
                                                    COLORS.lightGray,
                                                height: '6px',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: '100%',
                                                    width: `${(Number(rating.rating) / 5) * 100}%`,
                                                    backgroundColor:
                                                        COLORS.brown,
                                                    borderRadius: '5px',
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td
                                        width={'7%'}
                                        style={{
                                            textAlign: 'right',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: 'rgba(77, 77, 77, 1)',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {rating.rating}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div
                    style={{
                        width: '40%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#d7ccc8a2',
                            boxShadow: `0 0 20px 5px ${COLORS.warmBrown}`,
                            height: '100%',
                            borderRadius: '5px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '5px 20px',
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {totalRating}
                            </span>
                            <div>
                                <LuStar color={COLORS.brown} fill="gold" />
                                <LuStar color={COLORS.brown} fill="gold" />
                                <LuStar color={COLORS.brown} fill="gold" />
                                <LuStar color={COLORS.brown} fill="gold" />
                            </div>
                            <span
                                style={{
                                    fontSize: '12px',
                                    color: 'grey',
                                }}
                            >
                                128 reviews
                            </span>
                        </div>

                        <PrimaryBtn
                            style={{
                                backgroundColor: COLORS.brown,
                                padding: '10px 20px',
                            }}
                        >
                            Write a review
                        </PrimaryBtn>
                    </div>
                </div>
            </div>
        </MainPageSectionContainer>
    );
}

export default Ratings;
