import {  getDocs  ,collection  } from "firebase/firestore"; 
import { db } from './configFirebase'  
async function getCollection(collections) {
    const data = collection(db, collections);
    const dataSnapshot = await getDocs(data);
    const dataList = dataSnapshot.docs.map(doc => doc.data());
    return dataList; 
};  
export { getCollection }