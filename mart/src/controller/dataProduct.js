import React, { useState ,  createContext,useEffect} from 'react'   
import {  getDocs  ,collection  } from "firebase/firestore"; 
import { db } from './configFirebase'  
const DataProductContext = createContext() 
function DataProductProvider({children}) {  
    const [dataProduct, setDataProduct ] = useState([])  
    const [idProduct, setIdProduct] = useState([])
    const [refresh, setRefresh] = useState(false)  
    async function getCollection() {
        const data = collection(db, 'products');
        const dataSnapshot = await getDocs(data);
        const dataProduct = dataSnapshot.docs.map(doc => doc.data());
        setDataProduct(dataProduct); 
    }; 
    useEffect(() => {
        getCollection()
    },[])
    const value = {
        dataProduct, 
        idProduct,  
        refresh, 
        setDataProduct,
        setIdProduct,
        setRefresh, 
    }
    return ( 
        <DataProductContext.Provider value={value}> 
            {children}
        </DataProductContext.Provider> 
    )
}
export { DataProductContext, DataProductProvider }
