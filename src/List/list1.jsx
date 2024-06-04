import { useContext } from "react";
import { TotalData } from "../combiner/combiner";
import "./list.css";
import { DNA } from "react-loader-spinner";

const List = () => {
  const { list } = useContext(TotalData);

  return (
    <div style={{ width: `35%`, height: `100%` }}>
      <h3 style={{ color: "red", textAlign: "center" }}>
        <i>hotels near to you</i>
      </h3>

      {
        list.data.data.length ? (
          <div style={{}} className="list">
            {list.data.data.map((eachObj, index) => {
              if (eachObj.name) {
                const { name, location_string, photo, rating, web_url } =
                  eachObj;
                //   console.log(photo.images.medium.url);
                return (
                  <div key={index} className="cd1">
                    <h4>{name}</h4>
                    {photo.images && (
                      <img
                        src={photo.images.medium.url}
                        alt="img not found"
                        width={`100%`}
                      />
                    )}

                    <p>{location_string}</p>
                    <h4>{rating}</h4>
                    <p>{web_url}</p>
                  </div>
                );
              }
            })}
          </div>
        )
        :
        (
          <DNA
        visible={true}
        height="200px"
        width="80%"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        className="loader"
      />
      )

      }
       </div>
  );
};

export default List;
