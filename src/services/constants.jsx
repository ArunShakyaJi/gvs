export const links = [
    { name: 'About' , route:'/about' },
    { name: 'Contact' , route:'/contact-us'},
    {
        name: 'Services' , 
        submenu: true,
        sublink: [
            { name: 'Identity Verification', route: '/service/identity-verification' },
            { name: 'Criminal Record', route: '/service/criminal-check' },
            { name: 'Reference Check', route: '/service/reference-check' },
            { name: 'Address Verification', route: '/service/address-verification' },
            { name: 'Education Verification', route: '/education-service' },
            { name: 'Financial Due Diligence', route: '/service/financial-due-check' },
            { name: 'Credit Check', route: '/service/credit-check' },
            { name: 'Previous Employment Verification', route: '/service/previous-employment-check' },
        ],
    },
    { name: 'Solution',
    //  route:'/solutions',
     submenu: true,
     sublink: [
        {
            name: 'Employment Verification',
            route: '/solutions/employment-verification'
        },
        {
            name: 'Tenant Verification',
            route: '/solutions/tenant-verification'
        },
        {
            name: 'Customer Verification',
            route: '/solutions/customer-verification'
        },
        {
            name: 'Driver Verification',
            route:  '/solutions/driver-verification'
        },
        {
            name: 'Housekeeping stafF verification',
            route: '/solutions/housekeeper-verification'
        },
        
    ]
        
        },
];