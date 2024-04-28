

import { db } from "./dataBase";

/************************** fonction d'ajout de todo ****************** */
export const addItem = async (entityName : string , data: any) => {
    console.log("we are");
    
    try {
        await db.addData(entityName, data)
        console.log("we are");

        return {
            isSuccess: true,
            message: ` ${data} added succesfully`
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de mise a jour de todo ****************** */

export const updateItem = async ( entityName : string , data: any) => {
    try {
        await db.updateData(entityName , data)
        return {
            isSuccess: true,
            message: ` ${data}  updated succesfully`
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recuperation  d'une todo ****************** */


export const getItem = async ( entityName : string,  _id: string) => {
    try {
        const todo = await db.getData(entityName, _id)
        return {
            isSuccess: true,
            result: todo
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de recuperation  de toutes les documents ****************** */

export const getAllItems = async (entityName : string) => {
    console.log("hi");
    
    try {
        const documents = await db.getAllData(entityName)
        // console.log(documents);
        
        return {
            isSuccess: true,
            results: documents,
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de suppression  d'une todo ****************** */


export const deleteItem = async (entityName : string, _id: string) => {
    try {
        await db.deleteData(entityName, _id)
        return {
            isSuccess: true,
            message: "todo deleted succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recherche d'une todo ****************** */




/**************************fonction de recuperation de todo par page  ****************** */

// fonction de recuperation de todo par page 