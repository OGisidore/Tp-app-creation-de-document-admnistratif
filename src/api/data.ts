import { generateID } from "../helpers/utiles";
import { Task } from "../model/Task";
import { Design } from "../model/design";

export const tasks: Task[] = [
    {
        Title: "Fature",
        imageUrl: "/laptop-3196481_640.jpg",
        slug: "fature"
    },
    {
        Title: "Devis",
        imageUrl: "/bookkeeping-615384_1280.jpg",
        slug: "devis"
    },
    //{
    //     Title : "Bon de commande",
    //     imageUrl : "/contract-3002431_640.jpg",
    //     slug : "Bon-de-commande"

    // },
    // {
    //     Title : "Lettre",
    //     imageUrl : "/tax-468440_640.jpg",
    //     slug : "Lettre"

    // }
]

export const design: Design[] = [
    {
        _id: 1,
        style: "  bg-white rounded shadow-md"
    },
    {
        _id: 1,
        style: "  bg-gradient-to-r from-green-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 2,
        style: "  bg-gradient-to-r from-indigo-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 3,
        style: "  bg-gradient-to-r from-violet-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 4,
        style: "  bg-gradient-to-r from-red-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 5,
        style: "  bg-gradient-to-r from-orange-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 6,
        style: "  bg-gradient-to-r from-pink-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 7,
        style: "  bg-gradient-to-r from-blue-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 8,
        style: "  bg-gradient-to-r from-gray-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id: 9,
        style: "  bg-gradient-to-r from-indigo-500 from-15% to-white-500 to-10%  rounded shadow-md"
    }
]

const uniteOptions = [
    "A", "G", "H", "Img", "J", "Kg", "Km", "L", "lot", "M", "M2", "M3", "ML", "Min", "P", "Pcs", "sec", "T"
];

export const unitValue = uniteOptions.map((value => {
    return {
        _id: generateID,
        value: value
    }
}))


const tvaOptions = [
    "0.00", "1.00", "2.00", "2.10", "2.40", "2.50", "3.00", "3.80", "4.00", "4.50",
    "4.80", "5.00", "5.50", "6.00", "6.50", "7.00", "7.60", "8.00", "8.50", "8.75",
    "9.00", "10.00", "10.50", "11.00", "11.50", "12.00", "12.50", "13.00", "13.50",
    "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "19.25", "19.60", "20.00",
    "20.60", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00",
    "29.00"
];
export const tvaPercent = tvaOptions.map((value) => {
    return {
        _id: generateID(),
        value: value
    };
});


export const limitoptions = [
    "Ne pas préciser",
    "À la réception",
    "À la commande",
    "Fin de mois",
    "15 jours",
    "20 jours",
    "30 jours",
    "45 jours",
    "60 jours",
    "90 jours",
    "30 jours fin de mois",
    "45 jours fin de mois",
    "60 jours fin de mois",
    "90 jours fin de mois",
    "Autre délai",
    "Saisir une date"
];
export const paymentMode = [
    "Ne pas préciser",
    "Carte bancaire",
    "Chèque",
    "Chèque Emploi Service Universel (CESU)",
    "Chèque vacances",
    "Espèces",
    "Mandat cash",
    "Virement bancaire",
    "Prélèvement",
    "LCR Lettre de Change Relevé",
    "Traite",
    "PayPal",
    "Autre"
];


export var discountRates:any[] = []
const generdiscountRate = () => {
    for (let index = 1; index < 100; index++) {
        const element = index;
        discountRates.push({
            _id : generateID(),
            value : element + "%"
        })

    }
}
generdiscountRate()

