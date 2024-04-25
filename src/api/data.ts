import { Task } from "../model/Task";
import { Design } from "../model/design";

export const tasks :Task[] =  [
    {
        Title : "Fature",
        imageUrl : "/laptop-3196481_640.jpg",
        slug : "fature"
    },
    {
        Title : "Devis",
        imageUrl : "/bookkeeping-615384_1280.jpg",
        slug : "devis"
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

 export const design : Design[] = [
    {
        _id : 1,
        style : "p-8 bg-white rounded shadow-md"
    },
    {
        _id : 1,
        style : "p-8 bg-gradient-to-r from-green-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 2,
        style : "p-8 bg-gradient-to-r from-indigo-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 3,
        style : "p-8 bg-gradient-to-r from-violet-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 4,
        style : "p-8 bg-gradient-to-r from-red-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 5,
        style : "p-8 bg-gradient-to-r from-orange-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 6,
        style : "p-8 bg-gradient-to-r from-pink-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 7,
        style : "p-8 bg-gradient-to-r from-blue-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 8,
        style : "p-8 bg-gradient-to-r from-gray-500 from-15% to-white-500 to-10%  rounded shadow-md"
    },
    {
        _id : 9,
        style : "p-8 bg-gradient-to-r from-indigo-500 from-15% to-white-500 to-10%  rounded shadow-md"
    }
]