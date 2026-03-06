import { useState } from "react";
import { 
    DialogTitle, 
    styled, 
    TextField, 
    Button, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon, 
    Checkbox, 
    IconButton, 
    Paper, 
    Box, 
    CircularProgress, 
    Typography 
} from "@mui/material";
import { 
    useGetTodoListQuery, 
    useAddTodoTaskMutation, 
    useUpdateTodoTaskMutation,
    useDeleteTodoTaskMutation
} from "../../../store/api";

import type { TodoTask } from "../../../types/TodoTask";

export const Title = styled(DialogTitle)({
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
})

const MainContainer = styled(Paper)({
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
})

const InputBox = styled(Box)({
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem'
})

export const TodoPage = () => {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    
    const { data, isLoading, isError } = useGetTodoListQuery();
    const [addTodo] = useAddTodoTaskMutation();
    const [updateTodo] = useUpdateTodoTaskMutation();
    const [deleteTodo] = useDeleteTodoTaskMutation();

    const todoList: TodoTask[] = data ?? [];

    const handleAddTodo = async () => {
        if (!newTaskTitle.trim()) return;
        try {
            await addTodo({ text: newTaskTitle }).unwrap();
            setNewTaskTitle("");
        } catch (error) {
            console.error("Failed to add todo:", error);
        }
    };

    const handleToggleTodo = async (todo: TodoTask) => {
        try {
            await updateTodo({ 
                id: todo.id,
                params: { completed: !todo.completed }
            }).unwrap();
        } catch (error) {
            console.error("Failed to toggle todo:", error);
        }
    };

    const handleDeleteTodo = async (todo: TodoTask) => {
        try {
            await deleteTodo(todo.id).unwrap();
        } catch (error) {
            console.error("Failed to delete todo:", error);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <MainContainer elevation={3}>
            <Title>Todo List</Title>

            <InputBox>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Add a new task..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                    size="small"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddTodo}
                >
                    Add
                </Button>
            </InputBox>

            {isLoading ? (
                <Box display="flex" justifyContent="center" p={4}>
                    <CircularProgress />
                </Box>
            ) : isError ? (
                <Typography color="error" textAlign="center">
                    Error loading tasks. Please try again.
                </Typography>
            ) : (
                <List>
                    {todoList.length === 0 ? (
                        <Typography color="textSecondary" textAlign="center">
                            No tasks yet. Add one above!
                        </Typography>
                    ) : (
                        todoList.map((todo) => (
                            <ListItem
                                key={todo.id}
                                divider
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(todo)}>
                                        X
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={todo.completed}
                                        tabIndex={-1}
                                        disableRipple
                                        onChange={() => handleToggleTodo(todo)}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={todo.text}
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                        color: todo.completed ? '#888' : 'inherit'
                                    }}
                                />
                            </ListItem>
                        ))
                    )}
                </List>
            )}
        </MainContainer>
    );
}