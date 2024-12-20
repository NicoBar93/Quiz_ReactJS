import { useRef } from 'react';


export default function Answers({ answers, onSelect, answerState, selectedAnswer }) {
    const shuffledQuestion = useRef();


    if (!shuffledQuestion.current) {
        shuffledQuestion.current = [...answers];
        shuffledQuestion.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledQuestion.current.map((answer) => {

                const isSelected = selectedAnswer === answer;
                let cssClass = '';

                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }
                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            className={cssClass}
                            onClick={() => onSelect(answer)}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                )
            }
            )}
        </ul>
    )
}