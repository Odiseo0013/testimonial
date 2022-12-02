import React, { useState, useEffect } from "react";
import Axios from "axios";


function Resp() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://testimonialapi.toolcarton.com/api",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div className="App">
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h3>{item.location}</h3>
            <p>{item.message}</p>
            <p>{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resp;