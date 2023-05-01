const MeaningList = ({ response }) => {
  console.log(response);
  return (
    <div>
      <p className="text-xl text-blue-800">{response.definition}</p>
    </div>
  );
};

export default MeaningList;
