namespace TodoApi.ApiService.EndPoints.TodoList
{
    public record TodoResponse(Guid Id, string Text, bool Completed, DateTime CreatedUtc);
}
