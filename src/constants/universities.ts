export interface IUniversityData {
    name: string;
    kicker: string;
    degree: string;
    advisor: string;
    logo: { path: string, height: number, width: number };
    date: string;
    current?: boolean;
    thesisSubject?: string;
}

// Newest first — rendered as a recency-sorted vertical stack.
export const UNIVERSITIES_DATA: IUniversityData[] = [
    {
        name: 'Radboud University',
        kicker: 'Ph.D. Candidate',
        degree: 'Computer Science',
        logo: {path: '/img/radboud.jpg', height: 82, width: 82},
        advisor: 'Dr. Güneş Acar',
        date: 'Feb 2026 — Now',
        current: true,
    },
    {
        name: 'Bilkent University',
        kicker: 'M.Sc.',
        degree: 'Computer Engineering',
        logo: {path: '/img/BilkentUni.png', height: 82, width: 82},
        advisor: 'Dr. Cicek',
        date: 'Sep 2023 — Jan 2026',
    },
    {
        name: 'University of Tabriz',
        kicker: 'B.Sc.',
        degree: 'Computer Engineering',
        logo: {path: '/img/TbzUni.png', height: 82, width: 82},
        advisor: 'Dr. Tanha',
        date: 'Sep 2018 — Jul 2022',
    },
]
