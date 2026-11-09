import { useMemo, useState } from 'react';
import ImageBanner from '../components/CoffeeShopMainPage/ImageBanner';
import TitleHeader from '../components/CoffeeShopMainPage/TitleHeader';
import Ratings from '../components/CoffeeShopMainPage/Ratings';
import Highlights from '../components/CoffeeShopMainPage/Highlights';
import About from '../components/CoffeeShopMainPage/About';
import { twMerge } from 'tailwind-merge';
import VirtualTour from '@/components/CoffeeShopMainPage/VirtualTour';
import { useQuery } from '@tanstack/react-query';
import { fetchCafeById } from '@/api/cafe';
import { useParams } from 'react-router-dom';
import CoffeeMugPouring from '@/components/Animations/CoffeeMugPouring';
import { formatCafeSchedule } from '@/helpers/cafe/formatCafeSchedule';

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
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['cafe', id],
        queryFn: () => fetchCafeById(id!),
        enabled: !!id,
    });

    const schedule = useMemo(() => {
        if (!data) return;

        return formatCafeSchedule(data);
    }, [data]);

    const [activeTab, setActiveTab] =
        useState<AvailableTabs>('overViewAndRatings');

    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQXAMJSyROkMFk2lX3Zc9KBEH1YVdJcjeWmoj3iB4Wg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uYfT4E9UANyTPu7azMcYZGLBmGDlZIgHpGd71kGfuQ&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYXRiG2UAlrx__ZHvVy2-UoeME9DlVFoZC6uJTTHDrg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9IKrFssozgqnInTzd6x3wwQSmuKwDuTi4fwxekA30g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuSyc0pMdk3goCInGMMLSkY8J-dx0TA805Ai7eOVmCQ&s',
    ];

    if (isLoading) {
        return (
            <div className="flex flex-col justify-center items-center">
                <CoffeeMugPouring />
                <h1 className="text-brown font-bold">Loading please wait</h1>
            </div>
        );
    }

    if (error && error?.response.status === 404) {
        return <h1>Cafe does not exist</h1>;
    }

    return (
        <>
            <ImageBanner
                coverImg={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcxVRjFLT7uYkq_Ha9Ywk4_t-E5p5J0o0iSD4IHhLucGBZgcISjgzABI&s=10'
                }
                images={images}
            />
            <TitleHeader
                // totalRating={totalRating}
                // totalReviews={data.totalReviews}
                address={data.location}
                operatingHours={schedule || []}
                name={data.cafeName}
            />

            <div className="border-b-1 mb-[15px]! flex flex-row gap-[20px] border-lightGray">
                <HeaderTabs
                    onClick={() => setActiveTab('overViewAndRatings')}
                    isActive={activeTab === 'overViewAndRatings'}
                    name="Overview & Ratings"
                />
                {/* <HeaderTabs
                    onClick={() => setActiveTab('virtualTour')}
                    isActive={activeTab === 'virtualTour'}
                    name="3D Virtual Tour"
                /> */}
            </div>

            {activeTab === 'overViewAndRatings' && (
                <>
                    {/* <Ratings ratings={data.ratings} totalRating={totalRating} /> */}
                    {/* <Highlights /> */}
                    <About content={data.aboutUs} />
                </>
            )}

            {activeTab === 'virtualTour' && <VirtualTour />}
        </>
    );
}

export default CoffeeShopMainPage;
