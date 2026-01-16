namespace TodoApi.ApiService.EndPoints.TodoList
{
    public record CreateTodoRequest(string Text);
    public record UpdateTodoRequest(string? Text, bool? Completed);
}
