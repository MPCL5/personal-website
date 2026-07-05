export interface IResearchInterest {
    number: string;
    title: string;
    description: string;
}

export const RESEARCH_INTERESTS: IResearchInterest[] = [
    {
        number: '01',
        title: 'Digital Privacy',
        description: 'Tracking, malwaretising, and how scammer target search engines.',
    },
    {
        number: '02',
        title: 'Data Privacy',
        description: 'Protecting private information across datasets and pipelines.',
    },
    {
        number: '03',
        title: 'Privacy-Preserving ML',
        description: 'Training and deploying models without leaking the private data behind them.',
    },
    {
        number: '04',
        title: 'Privacy in Healthcare',
        description: 'Proctecting private aspects of paitent data while maximizing the utility.',
    },
]
