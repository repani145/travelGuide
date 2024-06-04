

const useFtchData=()=>{
//     var siva = new XMLHttpRequest();
// siva.open("GET", "https://fakestoreapi.com/products", true);
// siva.onreadystatechange = function () {
//   if (siva.readyState === 4 && siva.status === 200) {
//     console.log(JSON.parse(siva.responseText));
//   }
// };
// siva.send();
fetch("https://fakestoreapi.com/products")
  .then(response => console.log(response))
//   .then(data => console.log(data))
  .catch(error => console.error("Error:", error));



}
export { useFtchData };