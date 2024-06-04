// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const submitHandler = (event) => {
//     event.preventDefault();
//     const obj = {
//       usename: event.target[0].value,
//       email: event.target[1].value,
//       gender: event.target[2].value,
//       password: event.target[3].value,
//     };
//     // console.log(obj)
//     setData((state) => [...state, obj]);
    
//   };

//   // const postData = ()=>{
//   //   fetch('url',options)
//   //   .then(val=>{})
//   //   .then(data)
//   // }
//   console.log(data)
//   return (
//     <><center>
//       <form onSubmit={submitHandler}>
//         <input type="text" placeholder="create user name" />
//         <br></br>
//         <input type="email" placeholder="enter email" />
//         <br></br>
//         <label for={'sel'}>gender :</label>
//         <select id={'sel'}>
//           <option value={"male"}>male</option>
//           <option value={"female"}>female</option>
//           <option value={"other"}>other</option>
//         </select>
//         <br></br>
//         <input type="password" placeholder="create password" />
//         <br></br>
//         <button type="submit">submit</button>
//       </form>
//       </center>
//     </>
//   );
// }

// export default App;