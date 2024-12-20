import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import QUESTIONS from "../question.js"
import { useState, useEffect } from "react"


export default function Question({ length, onSelect, skipAnswer, setResults }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    });

    let timer = 15000;

    if (answer.selectedAnswer) {
        timer = 500;
    }
    if (answer.isCorrect !== null) {
        timer = 700;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[length].answers[0]
            })

            setTimeout(() => {
                onSelect(answer);
            }, 700);
        }, 500);
    }

    useEffect(() => {
        if (answer.isCorrect !== null) {
            setResults((prev) => [...prev, answer.isCorrect ? 'correct' : 'wrong']);
        }
    }, [answer.isCorrect, setResults]);

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeout={timer}
                skipAnswer={answer.selectedAnswer === '' ? skipAnswer : null}
                mode={answerState}
            />
            <h2>{QUESTIONS[length].text}</h2>
            <Answers
                answers={QUESTIONS[length].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}