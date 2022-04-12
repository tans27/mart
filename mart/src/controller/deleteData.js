import { doc, deleteDoc } from "firebase/firestore";
import { db } from './configFirebase'  
const deleteData = async (category,id) => {
    await deleteDoc(doc(db, category, id)); 
} 
export { deleteData }