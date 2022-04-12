import {  addDoc ,collection  } from "firebase/firestore";  
import { db } from './configFirebase'   

const uploadDataTest = async (res,storage) => { 
    await addDoc(collection(db, storage), { 
      dateOrder:res.dateOrder,
      dateSuccess:res.dateSuccess,   
      shipping:res.shipping,
      customer:res.customer,
      listProduct:res.listProduct,
      listPrice:res.listPrice,
      status:res.status,
    });
    // const storageRef = ref( getStorage(), `cities/${res.image[0].name}`);

    // // Create file metadata including the content type
    // /** @type {any} */
    // const metadata = {
    //   contentType: 'image/jpeg',
    // };
    
    // // Upload the file and metadata
    // uploadBytes(storageRef, res.image, metadata);
}
export { uploadDataTest } 