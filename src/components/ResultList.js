import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import MeaningList from "./MeaningList";
import PartOfSpeech from "./PartOfSpeech";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";

const ResultList = () => {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState({
    word: "",
    definition: "",
    partOfSpeech: "",
    phonetic: "",
    phoneticSound: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWord = () => {
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inputValue}?key=ebf3f298-19ef-4bb0-84be-53dee7a921dd`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setError(false);
        setResponse({
          word: inputValue.toLowerCase(),
          definition: data[0].shortdef.map((def, idx) => {
            return <li key={idx}>{def}</li>;
          }),
          partOfSpeech: data[0].fl,
          phoneticSound: `https://media.merriam-webster.com/audio/prons/en/us/mp3/${inputValue
            .charAt(0)
            .toLowerCase()}/${data[0].hwi.prs[0].sound.audio}.mp3`,
        });
      })
      .catch((error) => {
        setError((error) => alert("This word is not in my dictionary"));
        setLoading(false);
      });
  };

  useEffect(() => {
    if (inputValue.length) {
      getWord(inputValue);
    }
  }, [inputValue.length]);

  const audio = new Audio(`${response.phoneticSound}`);

  const playSound = () => {
    audio.play();
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {loading ? (
        <div>
          <IconButton
            onClick={() => playSound()}
            className="speaker speaker-off"
          >
            <VolumeUpIcon style={{ fontSize: "2em", color: "blue" }} />
          </IconButton>
          <h3 className="text-xl font-bold mt-4">Definition:</h3>
          <MeaningList response={response} />
          <h3 className="text-xl font-bold mt-4">Part of Speech:</h3>
          <PartOfSpeech response={response} />
        </div>
      ) : undefined}
    </div>
  );
};

export default ResultList;
