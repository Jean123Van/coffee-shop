import coffee_mug from '@/assets/coffee_mug.png';

function CoffeeMugPouring() {
    return (
        <img
            src={coffee_mug}
            width={70}
            height={70}
            className="animate-[pour_1.5s_ease-in_infinite] mb-[15px]!"
        />
    );
}

export default CoffeeMugPouring;
