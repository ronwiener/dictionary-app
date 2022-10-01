const MeaningList = ({ mean }) => {
  console.log(mean);
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.definition}>
              <li>{def.definition}</li>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default MeaningList;
