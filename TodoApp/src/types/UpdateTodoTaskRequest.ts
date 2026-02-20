import type { TodoTask } from "./TodoTask";

export type UpdateTodoTaskRequest = {
    task: TodoTask
    delete: boolean
}