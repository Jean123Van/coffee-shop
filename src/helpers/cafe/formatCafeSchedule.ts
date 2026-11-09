import type { Cafe } from '@/types/cafe';

const formatCafeSchedule = (cafe: Cafe) => {
    const days = [
        {
            day: 'Monday',
            isOpen: cafe.isOpenMonday,
            start: cafe.mondayStart,
            end: cafe.mondayEnd,
        },
        {
            day: 'Tuesday',
            isOpen: cafe.isOpenTuesday,
            start: cafe.tuesdayStart,
            end: cafe.tuesdayEnd,
        },
        {
            day: 'Wednesday',
            isOpen: cafe.isOpenWednesday,
            start: cafe.wednesdayStart,
            end: cafe.wednesdayEnd,
        },
        {
            day: 'Thursday',
            isOpen: cafe.isOpenThursday,
            start: cafe.thursdayStart,
            end: cafe.thursdayEnd,
        },
        {
            day: 'Friday',
            isOpen: cafe.isOpenFriday,
            start: cafe.fridayStart,
            end: cafe.fridayEnd,
        },
        {
            day: 'Saturday',
            isOpen: cafe.isOpenSaturday,
            start: cafe.saturdayStart,
            end: cafe.saturdayEnd,
        },
        {
            day: 'Sunday',
            isOpen: cafe.isOpenSunday,
            start: cafe.sundayStart,
            end: cafe.sundayEnd,
        },
    ];

    const formatTime = (time: string) => {
        const [hours, minutes] = time.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;

        return `${formattedHours}:${String(minutes).padStart(2, '0')}${period}`;
    };

    const schedules = [];
    let i = 0;

    while (i < days.length) {
        if (!days[i].isOpen) {
            i++;
            continue;
        }

        let endIndex = i;

        while (
            endIndex + 1 < days.length &&
            days[endIndex + 1].isOpen &&
            days[endIndex + 1].start === days[i].start &&
            days[endIndex + 1].end === days[i].end
        ) {
            endIndex++;
        }

        const dayRange =
            i === endIndex
                ? days[i].day
                : `${days[i].day} - ${days[endIndex].day}`;

        schedules.push(
            `${dayRange}: ${formatTime(days[i].start)} - ${formatTime(days[i].end)}`,
        );

        i = endIndex + 1;
    }

    return schedules;
};

export { formatCafeSchedule };
