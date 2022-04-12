import React, { useState ,  createContext,useLayoutEffect} from 'react'   
import {  getDocs  ,collection  } from "firebase/firestore"; 
import { db } from './configFirebase' 
const DataPostContext = createContext() 
function DataPostProvider({children}) {  
    const [dataPost, setDataPost ] = useState([])  
    const [idPost, setIdPost] = useState([])
    const [refresh, setRefresh] = useState(false) 
    let collectionDataPost =React.useRef([])
    let collectionIdPost = React.useRef([])
    useLayoutEffect(() => { 
        getDocs(collection(db, "posts"))
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                 querySnapshot.forEach((doc) => {  
                    collectionDataPost.current.push(doc.data()) 
                    collectionIdPost.current.push(doc.id)  
                });     
            }
            setDataPost(collectionDataPost.current)
            setIdPost(collectionIdPost.current)
        })
        .catch((err) => console.log(err))
      }, [refresh])   
    const value = {
        dataPost, 
        idPost, 
        refresh, 
        setDataPost,
        setIdPost,
        setRefresh,
    }
    return ( 
        <DataPostContext.Provider value={value}> 
            {children}
        </DataPostContext.Provider> 
    )
}
export { DataPostContext, DataPostProvider }
