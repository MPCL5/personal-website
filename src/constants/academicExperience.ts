export interface IPaper {
    title: string;
    authors: string;
    abstract: string;
    venue: string;
    url: string;
}

export interface IAcademicExperience {
    term: string;
    institution: string;
    roles: string[];
    community?: string[];
    paper?: IPaper;
}

// Newest first — the first entry is the default-selected tab.
export const ACADEMIC_EXPERIENCE: IAcademicExperience[] = [
    {
        term: 'Spring 2025',
        institution: 'Bilkent University',
        roles: [
            'Teaching Assistant — CS101 Algorithms and Programming I',
            'Teaching Assistant — CS223 Digital Design',
        ],
        community: [
            'IEEE Transactions on Computational Biology and Bioinformatics (TCBB) — Reviewer',
            'Research in Computational Molecular Biology (RECOMB) — Speaker',
            'Intelligent Systems for Molecular Biology (ISMB) Conference — Reviewer',
        ],
        paper: {
            title: 'Generated Data with Fake Privacy: Hidden Dangers of Fine-tuning Large Language Models on Generated Data',
            authors: 'Akkus A, Poorghaffar Aghdam M, Li M, Chu J, Backes M, Zhang Y, Sav S.',
            abstract: 'Fine-tuning large language models (LLMs) with generated data is often considered a privacy-preserving alternative to real data, but our study reveals significant privacy risks. We evaluate Personal Information Identifier (PII) leakage and Membership Inference Attacks (MIAs) on the Pythia Model Suite and Open Pre-trained Transformer (OPT), finding that fine-tuning with generated data can increase privacy vulnerabilities.',
            venue: "USENIX Security '25",
            url: 'https://usenix.org/conference/usenixsecurity25/presentation/akkus',
        },
    },
    {
        term: 'Fall 2024',
        institution: 'Bilkent University',
        roles: [
            'Teaching Assistant — CS101 Algorithms and Programming I',
        ],
        community: [
            'Research in Computational Molecular Biology (RECOMB) — Reviewer',
        ],
        paper: {
            title: 'A Reinforcement Learning-based Approach for Dynamic Privacy Protection in Genomic Data Sharing Beacons',
            authors: 'Poorghaffar Aghdam M, Shukueian Tabrizi S, Ayoz K, Ayday E, Sav S, Cicek AE',
            abstract: 'A reinforcement learning-based approach to enhance privacy in the Beacon Project, protecting genomic data from membership inference attacks. Designed a dynamic defense mechanism that adapts in real-time to evolving threats, distinguishing between legitimate users and attackers.',
            venue: 'bioRxiv 2024-10',
            url: 'https://doi.org/10.1101/2024.10.28.620587',
        },
    },
    {
        term: 'Spring 2024',
        institution: 'Bilkent University',
        roles: [
            'Teaching Assistant — CS464 Introduction to Machine Learning',
            'Teaching Assistant — CS201 Fundamental Structures of Computer Science I',
        ],
        community: [
            'Intelligent Systems for Molecular Biology (ISMB) — Reviewer',
        ],
    },
    {
        term: 'Fall 2023',
        institution: 'Bilkent University',
        roles: [
            'Teaching Assistant — CS102 Algorithms and Programming II',
            'Teaching Assistant — CS201 Fundamental Structures of Computer Science I',
        ],
        community: [
            'Research in Computational Molecular Biology (RECOMB) — Reviewer',
        ],
    },
    {
        term: 'Spring 2022',
        institution: 'University of Tabriz',
        roles: [
            'Teaching Assistant — Theory of Languages and Automata',
        ],
    },
    {
        term: 'Spring 2021',
        institution: 'University of Tabriz',
        roles: [
            'Teaching Assistant — Algorithms',
        ],
    },
    {
        term: 'Fall 2020',
        institution: 'University of Tabriz',
        roles: [
            'Teaching Assistant — Data Structures',
        ],
    },
]
