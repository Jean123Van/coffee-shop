import cafeImage from '../assets/images/cafe.webp';
import { LuSearch } from 'react-icons/lu';

function Home() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0.85),
                    rgba(0, 0, 0, 0.55),
                    rgba(0, 0, 0, .45)
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
                    // border: '1px solid white',

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
                }}
            >
                Real experiences from real people. <br /> Find your next
                favorite coffee spot.
            </h5>
            <div
                style={{
                    backgroundColor: 'white',
                }}
            >
                <LuSearch />
                <input />
                {/* Use created reusable button component */}
                <button>Search</button>
            </div>
        </div>
    );
}

export default Home;
