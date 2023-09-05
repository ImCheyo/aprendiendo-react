import { TwitterFollowCard } from "./TwitterFollowCard"
import './App.css'

const users = [
    {
        userName: 'imcheyo',
        name: 'Beneharo Bentor',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'midudev',
        isFollowing: true
    },
    {
        userName: 'misho',
        name: 'Misho',
        isFollowing: true
    },
    {
        userName: 'marta',
        name: 'marta',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                    key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}