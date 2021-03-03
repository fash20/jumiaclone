import { IoStorefrontOutline } from 'react-icons/io5'
import { GiMedicines, GiSmartphone, GiMailShirt, GiBabyFace, GiGamepad, GiSoccerBall } from 'react-icons/gi'
import { BiBuildingHouse, BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiRadio2Line } from 'react-icons/ri'
import { IoCarSportOutline, IoLaptopOutline, } from 'react-icons/io5'
import { IoIosBasketball } from 'react-icons/io'

export const categories = [
    {
        name: 'Supermarket',
        icon: <IoStorefrontOutline className='icon-margin' fontSize='20px' />,
        subGroup: [
            {
                name: 'FOOD CUPBOARD',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Health & Beuty',
        icon: <GiMedicines className='icon-margin' fontSize='20px' />,
        subGroup: [
            {
                name: 'MAKE UP',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
            {
                name: 'FOOD ',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
            {
                name: 'FOOD ITEM',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning",]

            },
            {
                name: 'FOOD PLATE',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
            {
                name: 'FOOD NAME',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
            {
                name: 'FOOD BOARD',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
            {
                name: 'FOOD CUP',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
            {
                name: 'FOOD CUPBOD',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            }
        ]
    },
    {
        name: 'Home & Office',
        icon: < BiBuildingHouse className='icon-margin' fontSize='20px' />,
        subGroup: [
            {
                name: 'FURNITURES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Phone & Tablet',
        icon: <GiSmartphone className='icon-margin' fontSize='20px' />,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Computing',
        icon: <IoLaptopOutline className='icon-margin' fontSize='20px' />,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Electronics',
        icon: <RiRadio2Line className='icon-margin' fontSize='20px'/>,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Fashion',
        icon: <GiMailShirt className='icon-margin' fontSize='20px'/>,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Baby Products',
        icon: <GiBabyFace className='icon-margin' fontSize='20px'/>,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Gaming',
        icon: <GiGamepad className='icon-margin' fontSize='20px'/>,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Sport',
        icon: <IoIosBasketball className='icon-margin' fontSize='20px'/>,
        subGroup: [
            {
                name:'',
                items:[]

            },
        ]
    },
    {
        name: 'Automobile',
        icon: <IoCarSportOutline className='icon-margin' fontSize='20px'/>,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
    {
        name: 'Other Categories',
        icon: <BiDotsHorizontalRounded className='icon-margin' fontSize='20px'/>,
        subGroup: [
            {
                name: 'MOBILE PHONES',
                items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks"]

            },
        ]
    },
]