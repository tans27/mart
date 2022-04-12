import { getStorage ,ref, getMetadata} from "firebase/storage";
import axios from 'axios'
const storage = getStorage(); 
const getImage = (category,image) => { 
    getMetadata(ref(storage, image))
    .then((metadata) => { 
        axios.get(`https://firebasestorage.googleapis.com/v0/b/folib-flower.appspot.com/o/${category}%2F${metadata.name}`)
          .then(res => {     
            return res.data.downloadTokens
        })  
    })
    .catch((error) => { 
        console.log(error);
    });  
}
export { getImage  }