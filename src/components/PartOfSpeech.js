import React from "react";

const PartOfSpeech = ({ response }) => {
  console.log(response);
  return (
    <div>
      <p className="text-xl text-blue-800">{response.partOfSpeech}</p>
    </div>
  );
};

export default PartOfSpeech;
