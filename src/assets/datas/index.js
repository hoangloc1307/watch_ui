export const menu = [
    {
        id: 1,
        to: '/category/box',
        href: '',
        title: 'The box',
        multilangTitle: 'menu.box',
        icon: 'inventory_2',
        mobile: true,
        desktop: true,
    },
    {
        id: 2,
        to: '/category/man',
        href: '',
        title: 'Man',
        multilangTitle: 'menu.man',
        icon: 'male',
        mobile: true,
        desktop: true,
    },
    {
        id: 3,
        to: '/category/woman',
        href: '',
        title: 'Woman',
        multilangTitle: 'menu.woman',
        icon: 'female',
        mobile: true,
        desktop: true,
    },
    {
        id: 4,
        to: '/category/accessory',
        href: '',
        title: 'Accessory',
        multilangTitle: 'menu.accessory',
        icon: 'watch',
        mobile: true,
        desktop: true,
    },
    {
        id: 5,
        to: '/gallery',
        href: '',
        title: 'Gallery',
        multilangTitle: 'menu.gallery',
        icon: 'photo_library',
        mobile: true,
        desktop: true,
    },
    {
        id: 6,
        to: '/blogs',
        href: '',
        title: 'Blogs',
        multilangTitle: 'menu.blogs',
        icon: 'newspaper',
        mobile: true,
        desktop: true,
    },
    {
        id: 7,
        to: '/about',
        href: '',
        title: 'About us',
        multilangTitle: 'menu.aboutUs',
        icon: 'contact_page',
        mobile: true,
        desktop: true,
    },
    {
        id: 8,
        to: '',
        href: '',
        title: 'Language',
        multilangTitle: 'menu.language',
        icon: 'language',
        mobile: true,
        desktop: false,
        children: [
            {
                id: 1,
                to: '',
                href: '',
                title: 'English',
                multilangTitle: 'menu.english',
                icon: 'translate',
                mobile: true,
                desktop: false,
            },
            {
                id: 2,
                to: '',
                href: '',
                title: 'Vietnamese',
                multilangTitle: 'menu.vietnamese',
                icon: 'translate',
                mobile: true,
                desktop: false,
            },
        ],
    },
];

export const menuFooter = [
    {
        titlevi: 'Sản phẩm',
        titleen: 'Products',
        list: [
            {
                titlevi: 'Đồng hồ nam',
                titleen: "Men's watches",
                link: '/product-category/man',
            },
            {
                titlevi: 'Đồng hồ nữ',
                titleen: "Women's watches",
                link: '/product-category/woman',
            },
        ],
    },
    {
        titlevi: 'Về DYOSS',
        titleen: 'About DYOSS',
        list: [
            {
                titlevi: 'Giới thiệu',
                titleen: 'Introduce',
                link: '/about-us',
            },
            {
                titlevi: 'Bài viết',
                titleen: 'Blogs',
                link: '/blogs',
            },
            {
                titlevi: 'Câu hỏi thường gặp',
                titleen: 'FAQ',
                link: '/',
            },
            {
                titlevi: 'Thanh toán & giao nhận',
                titleen: 'Payment & shipping',
                link: '/',
            },
            {
                titlevi: 'Chế độ bảo hành',
                titleen: 'Warranty policy',
                link: '/',
            },
            {
                titlevi: 'Liên hệ',
                titleen: 'Contact',
                link: '/',
            },
        ],
    },
    {
        titlevi: 'Cộng đồng',
        titleen: 'Social',
        list: [
            {
                titlevi: 'Instagram',
                titleen: 'Instagram',
                link: '/',
            },
            {
                titlevi: 'Facebook',
                titleen: 'Facebook',
                link: '/',
            },
            {
                titlevi: 'Youtube',
                titleen: 'Youtube',
                link: '/',
            },
            {
                titlevi: 'Pinterest',
                titleen: 'Pinterest',
                link: '/',
            },
        ],
    },
    {
        titlevi: 'Liên hệ',
        titleen: 'Contact',
        list: [
            {
                titlevi: 'Điện thoại: 0123 456 789',
                titleen: 'Hotline: 0123 456 789',
                link: '/',
            },
            {
                titlevi: 'Zalo: 0123 456 789',
                titleen: 'Zalo: 0123 456 789',
                link: '/',
            },
            {
                titlevi: 'Viber: 0123 456 789',
                titleen: 'Viber: 0123 456 789',
                link: '/',
            },
        ],
    },
];

export const showrooms = [
    {
        namevi: 'SHOWROOM 1 VÀ BẢO HÀNH DYOSS',
        nameen: 'SHOWROOM 1 AND DYOSS WARRANTY',
        addressvi: '453/32 Nguyễn Đình Chiểu, Phường 5, Quận 3, Thành Phố Hồ Chí Minh.',
        addressen: '453/32 Nguyen Dinh Chieu, Ward 5, District 3, Ho Chi Minh City.',
        hotline: '0123 456 789',
    },
    {
        namevi: 'SHOWROOM 2',
        nameen: 'SHOWROOM 2',
        addressvi: '3/31 Thành Thái, Phường 14, Quận 10, Thành Phố Hồ Chí Minh.',
        addressen: '3/31 Thanh Thai, Ward 14, District 10, Ho Chi Minh City.',
        hotline: '0123 456 789',
    },
];
