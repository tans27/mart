import React, { useState ,  createContext,useEffect} from 'react'   
import {  getDocs  ,collection  } from "firebase/firestore"; 
import { db } from './configFirebase'  
const DataOrderContext = createContext() 
function DataOrderProvider({children}) {  
    const [dataOrder, setDataOrder ] = useState([])  
    const [idOrder, setIdOrder] = useState([])
    const [refresh, setRefresh] = useState(false)  
    async function getCollection() {
        const data = collection(db, 'order');
        const dataSnapshot = await getDocs(data);
        const dataOrder = dataSnapshot.docs.map(doc => doc.data());
        setDataOrder(dataOrder); 
    }; 
    useEffect(() => {
        getCollection()
    },[])
    const value = {
        dataOrder, 
        idOrder,  
        refresh, 
        setDataOrder,
        setIdOrder,
        setRefresh, 
    }
    return ( 
        <DataOrderContext.Provider value={value}> 
            {children}
        </DataOrderContext.Provider> 
    )
}
export { DataOrderContext, DataOrderProvider }
