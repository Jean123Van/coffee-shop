import cafeImage from '../../assets/images/cafe.webp';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn/PrimaryBtn';
import { LuSearch } from 'react-icons/lu';
import { COLORS } from '../../theme/colors';

function BannerWithSearch() {
    return (
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
    );
}

export default BannerWithSearch;
