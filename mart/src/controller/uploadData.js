import {  addDoc ,collection  } from "firebase/firestore";  
import { db } from './configFirebase'  
import { getStorage, ref, uploadBytes } from "firebase/storage";

const uploadData = async (res,storage) => { 
    await addDoc(collection(db, storage), {
        title:res.title,
        author:res.author,
        date:  res.date,
        image:res.image.name,
        category:res.category, 
        content:res.content,
        status:res.status,
        hastag:  res.hastag,
        view:0,
    });
    const storageRef = ref( getStorage(), `posts/${res.image.name}`);

    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg',
    };
    
    // Upload the file and metadata
    uploadBytes(storageRef, res.image, metadata);
}
export { uploadData } 