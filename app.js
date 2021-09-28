import axios from "axios";

async function getData() {

   const dataGetir = await axios.get('https://jsonplaceholder.typicode.com/users')

   console.log(dataGetir);

}  

export default getData;