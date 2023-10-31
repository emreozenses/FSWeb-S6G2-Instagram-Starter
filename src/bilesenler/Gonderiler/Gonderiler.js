import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;
  

  return (
    <div className="posts-container-wrapper">
      { gonderiler.map((gonderi) => (
        <Gonderi gonderi= { gonderi } key= { gonderi.id } gonderiyiBegen= { gonderiyiBegen } />
      )
)}

    </div>
  );
};

export default Gonderiler;
