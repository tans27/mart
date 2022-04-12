import { doc, setDoc } from "firebase/firestore";  
import { db } from './configFirebase'
const editSingelData = (category, idDocument, informations, value) => {  
  setDoc(doc(db,category, idDocument), { [informations]: value }, { merge: true }); 
}

const editMultipleData = (category,idDocument,data) => {
  setDoc(doc(db,category, idDocument),  data );  
}

export { editSingelData,editMultipleData }
