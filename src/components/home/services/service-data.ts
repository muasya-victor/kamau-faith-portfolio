export interface ServiceItem {
    label:string
    children: string[]
}


export const services: ServiceItem[] = [
    {
        label: "Discovery Call - First Consultation",
        children: []
    },
    {
        label: "Full Logo Suite",
        children: []
    },
    {
        label: "Visual Identity Guide",
        children: [
            'Color Platte',
            'Creative Direction - Art and Photography',
            'Typography',
        ]
    },
    {
        label: "Brand Collateral",
        children: [
            'Social Media Templates',
            'Email Templates',
            'Illustrations , icons and Brand Patterns',
        ]
    },
    {
        label: "Brand Guidelines PDF",
        children: [
        ]
    },
]


