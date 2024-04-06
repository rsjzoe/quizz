import { useState } from "react";
import { dataQuizz } from "./quizz";
import { useEffect } from "react";

export function Quizz(props) {
  const [displayGif, setDisplayGif] = useState(true);
  const [indexQuizz, setIndexQuizz] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [compteur, setCompteur] = useState(0);
  const [color, setColor] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setDisplayGif(false);
    }, 5000);
  }, []);

  return (
    <>
      {displayGif ? (
        <img src="/quiz.gif" className="gif" />
      ) : (
        <div className="quizz">
          <div className="question">{dataQuizz[indexQuizz].question}</div>
          <div className="answer">
            {dataQuizz[indexQuizz].choix.map((index, k) => (
              <span
                className="choice"
                key={k}
                onClick={(e) => {
                  if (clicked) {
                  } else {
                    if (k == dataQuizz[indexQuizz].indexAnswer) {
                      e.currentTarget.classList.add("vert");
                      setCompteur(compteur + 1);
                    } else {
                      e.currentTarget.classList.add("red");
                    }
                  }
                  setClicked(true);
                  setColor(e.currentTarget);
                }}
              >
                {index}
              </span>
            ))}
          </div>
          <div className="footer">
            {clicked && (
              <button
                className="btn"
                onClick={() => {
                  if (indexQuizz < dataQuizz.length - 1) {
                    setIndexQuizz(indexQuizz + 1);
                  }
                  color.classList.remove("vert");
                  color.classList.remove("red");
                  setClicked(false);
                }}
              >
                next
              </button>
            )}
            <div className="score">Score : {compteur}</div>
          </div>
        </div>
      )}
    </>
  );
}
