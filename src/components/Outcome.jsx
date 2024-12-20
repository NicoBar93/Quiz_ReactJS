import quizCompleted from "../assets/quiz-complete.png"
import QUESTIONS from "../question.js";
export default function Outcome({ userAnswers, results }) {

    const correctAnswers = results.filter(result => result === 'correct').length;
    const wrongAnswers = results.filter(result => result === 'wrong').length;
    const skippedAnswers = QUESTIONS.length - (correctAnswers + wrongAnswers);

    return (
        <div id="summary">
            <img src={quizCompleted} alt="Quiz completed" />
            <h2>Quiz completed</h2>
            <div id="summary-stats">
                {console.log(correctAnswers, wrongAnswers, skippedAnswers)}
                <p>
                    <span className="number">{parseFloat(((skippedAnswers / QUESTIONS.length) * 100).toFixed(0))} %</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{parseFloat(((correctAnswers / QUESTIONS.length) * 100).toFixed(0))} %</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{parseFloat(((wrongAnswers / QUESTIONS.length) * 100).toFixed(0))} %</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = ''
                    switch (results[index]) {
                        case 'correct':
                            cssClass = 'correct';
                            break;
                        case 'wrong':
                            cssClass = 'wrong';
                            break;
                        default:
                            cssClass = 'skipped';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={`user-answer ${cssClass}`}>{!answer ? 'There was no answer' : answer}</p>
                        </li>
                    )
                }
                )}
            </ol>
        </div>
    )
}