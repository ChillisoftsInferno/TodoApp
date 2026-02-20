import type { TodoTask } from "./TodoTask"

export type GetTodoListResponse = {
    value: {
        todoList: TodoTask[]
    }
}