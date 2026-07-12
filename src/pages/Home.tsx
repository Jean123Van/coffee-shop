import BannerWithSearch from '../components/Home/BannerWithSearch';
import ExploreByTagsList from '../components/Home/ExploreByTagsList';
import PopularLists from '../components/Home/PopularLists';
import TopRatedList from '../components/Home/TopRatedList';

function Home() {
    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <BannerWithSearch />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '5px',
                    padding: '15px',
                    gap: '15px',
                }}
            >
                <TopRatedList />
                <ExploreByTagsList />
                <PopularLists />
            </div>
        </section>
    );
}

export default Home;
