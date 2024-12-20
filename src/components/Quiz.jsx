import { useState, useCallback } from "react"
import QUESTIONS from "../question.js"
import Question from "./Question.jsx";
import Outcome from "./Outcome.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [results, setResults] = useState([]);

    const length = userAnswers.length;
    const quizCompleted = length === QUESTIONS.length;

    const nextQuestion = useCallback(function nextQuestion(answer) {

        setUserAnswers((prev) => {
            return [...prev, answer]
        });
    },
        []);

    const skipAnswer = useCallback(() => nextQuestion(null), [nextQuestion]);

    console.log(results);

    if (quizCompleted) {
        return (
            <Outcome
                userAnswers={userAnswers}
                results={results}
            />
        )
    }

    return (
        <div id="quiz">
            <Question
                key={length}
                length={length}
                userAnswers={userAnswers}
                onSelect={nextQuestion}
                skipAnswer={skipAnswer}
                setResults={setResults}
            />
        </div>
    );
}


// CON USE EFFECT
// const [shuffledQuestion, setShuffledQuestion] = useState([]);
// useEffect(() => {
//     const shuffled = [...question[length].answers].sort(() => Math.random() - 0.5);
//     setShuffledQuestion(shuffled);
// }, [length]);

// if (answer !== null) {
//     setBtnIsClicked(true);

//     const risposta = answer;
//     setAnswerState(answer);

//     setTimeout(() => {
//         const isAnswerCorrect = answer === question[length].answers[0];
//     }, 2000);

//     setTimeout(() => {
//         setUserAnswers((prev) => {
//             const updated = [...prev, answer];
//             return updated;
//         });
//         setBtnIsClicked(false);
//         setAnswerState(null);
//     }, 4000)

// } else if (!btnIsClicked) {
//     setUserAnswers((prev) => [...prev, null]);
//     setBtnIsClicked(false);
// }