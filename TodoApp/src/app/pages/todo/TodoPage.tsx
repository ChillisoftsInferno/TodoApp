/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react";
import { useGetTodoListQuery } from "../../../store/api";
import type { TodoTask } from "../../../types/TodoTask";
import { DialogTitle, styled } from "@mui/material";

export const Title = styled(DialogTitle)({
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
})

export const TodoPage = () => {
    const todoList = useGetTodoListQuery()?.data?.value?.todoList;
    
    const mappedTodoTasks = useMemo(() => {
        if (todoList) {
        return todoList.reduce((mappedTodoTasks, currentTodo) => {
            mappedTodoTasks.set(currentTodo.id, currentTodo)
            return mappedTodoTasks
        }, new Map<number, TodoTask>())
        }
        
        return new Map<number, TodoTask>()
    }, [todoList])

    return (
        <>
        <Title>Todo List</Title>
        </>
    )
}