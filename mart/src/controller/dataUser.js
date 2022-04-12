import React, { useState ,  createContext,useLayoutEffect} from 'react'   
import {  getDocs  ,collection  } from "firebase/firestore"; 
import { db } from './configFirebase' 
const DataUserContext = createContext() 
function DataUserProvider({children}) {  
    const [dataUser, setDataUser ] = useState([])  
    const [idUser, setIdUser] = useState([])
    const [refresh, setRefresh] = useState(false) 
    let collectionDataUser =React.useRef([])
    let collectionIdUser = React.useRef([])
    useLayoutEffect(() => { 
        getDocs(collection(db, "users"))
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                 querySnapshot.forEach((doc) => {  
                    collectionDataUser.current.push(doc.data()) 
                    collectionIdUser.current.push(doc.id)  
                });     
            }
            setDataUser(collectionDataUser.current)
            setIdUser(collectionIdUser.current)
        })
        .catch((err) => console.log(err))
      }, [refresh])   
    const value = {
        dataUser, 
        idUser, 
        refresh, 
        setDataUser,
        setIdUser,
        setRefresh,
    }
    return ( 
        <DataUserContext.Provider value={value}> 
            {children}
        </DataUserContext.Provider> 
    )
}
export { DataUserContext, DataUserProvider }
