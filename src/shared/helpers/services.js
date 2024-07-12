import axios from "axios";


// const Get = (url) => {
//  return axios
//     .get(url)
//     .then((res) => {
//       return res
//     })
//     .catch((error) =>{
//       return error
//     });
// };

// // or

const Get =async(url)=>{
    try {
      const response = axios.get(url)
      return response
    } catch (error) {
        return error
    }

}

const Post = async (url,postdata) => {
  // console.log('url',url,"\npostdata",postdata)
  try {
    const data  = axios.post(url,postdata);
    return data;
  } catch (error) {
    return error;
  }
};

const Patch = async (url) => {
  try {
    const { data } = axios.patch(url);
    return data;
  } catch (error) {
    return { error };
  }
};
const Put = async (url) => {
  try {
    const { data } = axios.put(url);
    return data;
  } catch (error) {
    return { error };
  }
};

const Delete = async (url) => {
  try {
    const data = axios.delete(url);
    return data;
  } catch (error) {
    return error;
  }
};

export { Get, Post, Patch, Put, Delete };
