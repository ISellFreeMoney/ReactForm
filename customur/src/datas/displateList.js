import starwars from '../assets/starwars.jpg'
import breakingbad from '../assets/breakingbad.webp'
import aot from '../assets/aot.jpg'
import fma from '../assets/fma.jpg'
import yoda from '../assets/yoda.webp'
import heisenberg from '../assets/heisenberg.webp'
import erenh from '../assets/erenHumain.jpg'
import erent from '../assets/erentitan.webp'
import elric from '../assets/elric.webp'


export const displateList = [
    {
        name: 'Star Wars',
        category: 'displate',
        size: 'petit',
        id: 'dP',
        isBestSales: true,
        weight: '0.25',
        cover: starwars
    },
    {
        name: 'Breaking Bad',
        category: 'displate',
        size: 'moyen',
        id: 'dM',
        isBestSales: false,
        weight: '0.5',
        cover: breakingbad

    },
    {
        name: 'Attack on Titans',
        category: 'displate',
        size: 'grand',
        id: 'dG',
        isBestSales: false,
        weight: '0.75',
        cover: aot

    },
    {
        name: 'Fullmetal Alchemist',
        category: 'displate',
        size: 'très grand',
        id: 'dTG',
        isBestSales: true,
        weight: '1.0',
        cover: fma

    },
    {
        name: 'Yoda',
        category: 'cadre',
        size: 'petit',
        id: 'cP',
        isBestSales: true,
        weight: '0.2',
        cover: yoda

    },
    {
        name: 'Heisenberg',
        category: 'cadre',
        size: 'moyen',
        id: 'cM',
        isBestSales: false,
        weight: '0.4',
        cover: heisenberg

    },
    {
        name: 'Eren Humain',
        category: 'cadre',
        size: 'grand',
        id: 'cG',
        isBestSales: false,
        weight: '0.6',
        cover: erenh

    },
    {
        name: 'Eren Titan',
        category: 'cadre',
        size: 'double',
        id: 'cD',
        isBestSales: true,
        weight: '1.0',
        cover: erent

    },
    {
        name: 'Frere Elric',
        category: 'cadre',
        size: 'double grand',
        id: 'cDG',
        isBestSales: false,
        weight: '1.2',
        cover: elric

    }
]