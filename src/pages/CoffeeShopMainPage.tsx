import { useMemo, useState } from 'react';
import ImageBanner from '../components/CoffeeShopMainPage/ImageBanner';
import TitleHeader from '../components/CoffeeShopMainPage/TitleHeader';
import Ratings from '../components/CoffeeShopMainPage/Ratings';
import Highlights from '../components/CoffeeShopMainPage/Highlights';
import About from '../components/CoffeeShopMainPage/About';
import { twMerge } from 'tailwind-merge';

function HeaderTabs({
    name,
    isActive,
    onClick,
}: {
    name: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            className={twMerge(
                'text-[20px] font-bold  text-lightGray pb-[10px] cursor-pointer',
                isActive && ' text-brown border-b-2',
            )}

            onClick={onClick}
        >
            {name}
        </button>
    );
}

type AvailableTabs = 'overViewAndRatings' | 'virtualTour';

function CoffeeShopMainPage() {
    const [activeTab, setActiveTab] =
        useState<AvailableTabs>('overViewAndRatings');

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
            ratings: [
                { title: 'Coffee Quality', rating: '4.9' },
                { title: 'Food Quality', rating: '4.8' },
                { title: 'Ambience', rating: '4.6' },
                { title: 'Service', rating: '4.5' },
                { title: 'Value For Money', rating: '4.3' },
                { title: 'Cleanliness', rating: '4.7' },
            ],
            totalReviews: '128',
            address: 'Visayan Village',
            operatingHours: '7:00 AM - 10:00 PM',
        }),
        [],
    );

    const totalRating = useMemo(() => {
        const ratings = data.ratings.reduce(
            (sum, item) => sum + Number(item.rating),
            0,
        );

        return (ratings / data.ratings.length).toFixed(1);
    }, [data]);

    return (
        <>
            <ImageBanner coverImg={data.coverImg} images={data.images} />
            <TitleHeader
                totalRating={totalRating}
                totalReviews={data.totalReviews}
                address={data.address}
                operatingHours={data.operatingHours}
                name={data.name}
            />

            <div className="border-b-1 mb-[15px]! flex flex-row gap-[20px] border-lightGray">
                <HeaderTabs
                    onClick={() => setActiveTab('overViewAndRatings')}
                    isActive={activeTab === 'overViewAndRatings'}
                    name="Overview & Ratings"
                />
                <HeaderTabs
                    onClick={() => setActiveTab('virtualTour')}
                    isActive={activeTab === 'virtualTour'}
                    name="3D Render & Virtual Tour"
                />
            </div>

            {activeTab === 'overViewAndRatings' && (
                <>
                    <Ratings ratings={data.ratings} totalRating={totalRating} />
                    <Highlights />
                    <About />
                </>
            )}

            {activeTab === 'virtualTour' && <div></div>}
        </>
    );
}

export default CoffeeShopMainPage;
