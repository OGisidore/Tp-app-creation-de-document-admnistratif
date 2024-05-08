




export const CalculateHTAmount = (quantity:number, unitPrice:number, discount:number)=>{
    const total = quantity * unitPrice
    return total - (total * (discount/100))

}
export const CalculateTTCAmount = (htAmount:number , TVArate:number)=>{
    return htAmount + (htAmount * (TVArate/100))

}



export const convertFiletoLink = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        var reader = new FileReader()
        reader.onload = (event) => {
            resolve(event.target?.result as string)
        }
        reader.onerror = () => {
            reject(new Error("Error reading the file"))
        };
        reader.readAsDataURL(file);

    })

}


export const convertFiletoBlob = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
        var reader = new FileReader()
        reader.onload = (event) => {
            if(event.target?.result instanceof ArrayBuffer){
                const blob = new Blob ([event.target.result], {type : file.type});
                resolve(blob)
            } else{
                reject(new Error("error converting file to blob"))
            }
            
        };
        reader.onerror = () => {
            reject(new Error("Error reading the file"))
        };
        reader.readAsArrayBuffer(file);

    })

}


export const convertBlobtoUrl = (blob: Blob): string => {
    return URL.createObjectURL(blob)
}
    
export const linkToBlob = async (url: string): Promise<Blob> => {
    return new Promise (async (resolve, reject)=>{
           try {    const response = await fetch(url)
        if(!response.ok){
            reject(`la requete a echoue avec le statut ${response.status}`)
        }

        const buffer = await response.arrayBuffer();
        const blob = new Blob([buffer]);
        resolve(blob) 
    } catch (error) {
        reject("erreur lors de la conversion du lien en blob :"+ error)
       
        
    }
    })
  
   
    
}