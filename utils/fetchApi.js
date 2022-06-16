import axios from 'axios';


 export const baseUrl = "https://bayut.p.rapidapi.com"
  

 

  export const fetchApi= async(url)=>{
        const {data} =await axios.get((url),{
            headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7247038281msh3169b745986a42cp1dace4jsnc4f14371fb54'
        }
        })

        return data;
  }

  