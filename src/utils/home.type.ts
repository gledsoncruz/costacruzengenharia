export interface HomeProps {
    object: {
        slug: string;
        title: string;
        metadata: {
            bgbanner: {
                url: string;
                imgix_url: string;
            },
            headingslogam: string;
            workerbanner: {
                url: string;
                imgix_url: string;
            },
            menus: MenuProps[];
            contact: {
                cel: string;
                phone: string;
                address: string;
            }
            company: {
                title: string;
                content: string;
            }
            aboutcompany: AboutCompanyProps[]
            service: {
                services: ServiceProps[]
            }
        }
    }
}

interface MenuProps {
    name: string;
    url: string;
}

interface AboutCompanyProps {
    title: string;
    content: string;
    imageabout: {
        url: string;
        imgix_url: string;
    }
}

interface ServiceProps {
    name: string;
    description: string;
}