
import { useTodos } from '../hooks/useTodos';

export const Title = () => {
    
    const { PendingTodos } = useTodos()

    return (
        <h2>
            Todos: { PendingTodos }
        </h2>
    )
}
