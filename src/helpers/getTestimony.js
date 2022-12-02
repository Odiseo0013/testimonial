import axios from "axios";

export const getTestimonyInfo = async () => {

  try {

    const {data} = await axios.get('https://testimonialapi.toolcarton.com/api');
    //console.log(data);
    console.log(data[0]);

    return {
      name: data.name,
      id: data.id
    }
    
  } catch (error) {
    return null;
  }

}