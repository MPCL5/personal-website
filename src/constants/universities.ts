export interface IUniversityData {
    name: string;
    degree: string;
    advisor: string;
    logo: { path: string, height: number, width: number };
    date: string;
    thesisSubject?: string;
}

export const UNIVERSITIES_DATA: IUniversityData[] = [
    {
        name: 'Bilkent University',
        degree: 'M.Sc. in\n' + 'Computer Science',
        logo: {path: '/img/BilkentUni.png', height: 234, width: 226},
        advisor: 'Dr. Cicek',
        date: 'September 2023 - Now'
    },
    {
        name: 'University of Tabriz',
        degree: 'B.Sc. in\n' + 'Computer Engineering',
        logo: {path: '/img/TbzUni.png', height: 160, width: 154},
        advisor: 'Dr. Tanha',
        date: 'September 2018 - July 2022'
    },
]
