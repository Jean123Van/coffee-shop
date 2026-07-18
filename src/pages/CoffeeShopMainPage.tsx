import { useMemo } from 'react';
import ImageBanner from '../components/CoffeeShopMainPage/ImageBanner';
import TitleHeader from '../components/CoffeeShopMainPage/TitleHeader';
import Ratings from '../components/CoffeeShopMainPage/Ratings';

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
            <Ratings ratings={data.ratings} totalRating={totalRating} />
        </>
    );
}

export default CoffeeShopMainPage;
