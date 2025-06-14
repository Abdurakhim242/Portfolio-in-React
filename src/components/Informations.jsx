import React from "react";
import App from "../App";

function Informations() {
  const informations = [
    { title: "Name", value: "Abdurakhim" },
    { title: "Age", value: 16 },
    { title: "Country", value: "Uzbekistan" },
    { title: "Email", value: "abdurakhim545@gmail.com" },
    { title: "Phone", value: "+998 91 187 02 42" },
    { title: "Education", value: "IT TAT" },
    { title: "Skills", value: "HTML, CSS, JavaScript, C#" },
  ];

  return (
    <div>
      <App info={informations} />
    </div>
  );
}

export default Informations;
