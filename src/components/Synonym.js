const Synonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.synonyms.map((syn) => ({ syn } ? <li>{syn}</li> : ""))
        )
      )}
    </div>
  );
};

export default Synonym;
