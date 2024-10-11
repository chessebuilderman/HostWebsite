'use server';

import orion_img from 'public/images/orion.jpg';
import sg_img from 'public/images/sagittarius.jpg';
import um_img from 'public/images/um_img2.jpg';
import umin_img from 'public/images/uminor_img.png';

const price_data: PriceData[] = [
    {
        id: 'ursa_major',
        name: 'Ursa Major',
        price: 10000000000.32,
        description: `
        Are you ready to blast off? If so, the Ursa Major package is best for anyone looking for a fun or relaxing time. <br/>
        The Ursa Major package gives you a VIP experience while you travel. Hot lodges, artificial hot springs, and Fast Passes© are waiting for you. <br/>
        Book now!
        `,
        image: um_img.src,
        metadata: {
            sale: 99,
        },
    },
    {
        id: 'ursa_minor',
        name: 'Ursa Minor',
        price: 8000000000.443,
        description: `
        The Ursa Minor plan is almost as good as the Ursa Major plan. If you're just looking to get away, this is the perfect plan for you. Access to heated resorts with bunker lodging, you'll truly feel that once in a life time experience. <br/>
        Book now!
        `,
        image: umin_img.src,
        metadata: undefined,
    },
    {
        id: 'orion',
        name: 'Orion',
        price: 100000,
        description: `
        Are you a star? Do you have a big following? Well the Orion plan is perfect for you. <br/>
        You probably love content creation and we love people learning about us. In the end we both win. <br/>
        (**NOTE**: No refunds will be given if you do not meet the minimum 100,000 followers on all platforms) <br/>
        `,
        image: orion_img.src,
        metadata: undefined,
    },
    {
        id: 'sagittarius',
        name: 'Sagittarius',
        price: 444972.94,
        description: `
        This package is for those who are here for a good time, not a long time. With seats so close to the engines of the rocket, you'll truly be able to feel the thrill of life. <br/>
        With free unlimited Fast Passes©, you'll be able to get your heart racing in no time. <br/>
        Book now!
        `,
        image: sg_img.src,
        metadata: undefined,
    },
    // {
    //     name: 'Ursa Minor',
    //     price: 80000000000.44,
    //     description: 'Normal packages are just heated resorts, with new style bunker lodging.',
    //     image: '',
    // },
    // {
    //     name: 'Ursa Minor',
    //     price: 80000000000.44,
    //     description: 'Normal packages are just heated resorts, with new style bunker lodging.',
    //     image: '',
    // },
];
// export const getPriceData = async () => price_data.toSorted((a, b) => a.name.localeCompare(b.name));
export const getPriceData = async () => price_data.toSorted((a, b) => b.price - a.price);
export const getProduct = async (product_id: string) => price_data.find((product) => product.id === product_id);