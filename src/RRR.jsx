import { useRef, React, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_Fruitt, DelFruit } from "./reduX/actions";

const RRR = () => {
  const fruit = useRef("");
  const data = useSelector((state) => state.del);
  useEffect(()=>{
    window.localStorage.setItem('fruits',JSON.stringify(data))
  },[data])

  const dispatch1 = useDispatch();
  
  console.log(data);
  const fun = () => {
    fruit.current.value &&
    dispatch1(Add_Fruitt(fruit.current.value));
  };
  const del = (d) => {
    dispatch1(DelFruit(d));
  };
  return (
    <>
      <input type="text" ref={fruit} />
      <button onClick={fun}>add fruit</button>
      <table>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td width={100}>{item}</td>
              <td width={100}>
                <button
                  onClick={() => {
                    del(index);
                  }}
                >
                  remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default RRR;
