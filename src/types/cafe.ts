interface Cafe {
    id: number;
    cafeName: string;
    location: string;
    aboutUs: string;

    userCreatorId: number;

    isOpenMonday: boolean;
    mondayStart: string;
    mondayEnd: string;

    isOpenTuesday: boolean;
    tuesdayStart: string;
    tuesdayEnd: string;

    isOpenWednesday: boolean;
    wednesdayStart: string;
    wednesdayEnd: string;

    isOpenThursday: boolean;
    thursdayStart: string;
    thursdayEnd: string;

    isOpenFriday: boolean;
    fridayStart: string;
    fridayEnd: string;

    isOpenSaturday: boolean;
    saturdayStart: string;
    saturdayEnd: string;

    isOpenSunday: boolean;
    sundayStart: string;
    sundayEnd: string;
}

export type { Cafe };
