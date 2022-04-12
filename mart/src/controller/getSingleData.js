import { doc, getDoc } from "firebase/firestore";  
import { db } from './configFirebase'
const getSingleData = async (category, idDocument) => {  
    const docSnap = await getDoc(doc(db, category, idDocument)) 
    if (docSnap.exists()) { 
        return  docSnap.data();
      } else {
        return false
      }
} 
export { getSingleData } 

