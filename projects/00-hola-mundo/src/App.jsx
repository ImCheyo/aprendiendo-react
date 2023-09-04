import { TwitterFollowCard } from "./TwitterFollowCard"
import './App.css'

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard userName="imcheyo">
                Beneharo Bentor
            </TwitterFollowCard>
            <TwitterFollowCard userName="misho">
                Misho
            </TwitterFollowCard>

        </section>
    )
}