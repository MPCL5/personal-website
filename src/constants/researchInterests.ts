export interface IResearchInterest {
    number: string;
    title: string;
    description: string;
}

export const RESEARCH_INTERESTS: IResearchInterest[] = [
    {
        number: '01',
        title: 'Digital Privacy',
        description: 'Tracking, fingerprinting, and how users are followed across the web.',
    },
    {
        number: '02',
        title: 'Data Privacy',
        description: 'Protecting sensitive information across datasets and pipelines.',
    },
    {
        number: '03',
        title: 'Privacy-Preserving ML',
        description: 'Training and deploying models without leaking the data behind them.',
    },
    {
        number: '04',
        title: 'Dark Patterns',
        description: 'Interfaces engineered to nudge users against their own interest.',
    },
]
