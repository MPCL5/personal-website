interface NavigationItem {
    label: string,
    path: string
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {label: '/Home', path: '/'},
    {label: '/Contact', path: '/contact'},
    {label: '/Blog', path: 'https://blog.masoud.live/'},
    {label: '/Publications', path: '/publications'},
]
