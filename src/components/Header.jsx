import QuizLogo from '../assets/quiz-logo.png'
export default function Header() {
    return (
        <header>
            <img src={QuizLogo} alt="logo" />
            <h1>ReactQuizz</h1>
        </header>
    )
}