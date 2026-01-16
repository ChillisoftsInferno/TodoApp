using TodoApi.Domain.Data;
using TodoApi.Domain.Gateways;

namespace TodoApi.ApiService.EndPoints.TodoList
{
    public static class TodoEndpoints
    {
        public static IEndpointRouteBuilder MapTodoEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/api/todos")
                .WithTags("Todos");

            group.MapGet("/", async (ITodoRepository repo, CancellationToken ct) =>
            {
                var todos = await repo.GetAllAsync(ct);
                return Results.Ok(todos.Select(Map));
            });

            group.MapPost("/", async (ITodoRepository repo, CreateTodoRequest req, CancellationToken ct) =>
            {
                if (string.IsNullOrWhiteSpace(req.Text))
                    return Results.BadRequest("Text is required.");

                var todo = new TodoItem(req.Text);

                await repo.AddAsync(todo, ct);
                await repo.SaveChangesAsync(ct);

                return Results.Created($"/api/todos/{todo.Id}", Map(todo));
            });

            group.MapPut("/{id:guid}", async (ITodoRepository repo, Guid id, UpdateTodoRequest req, CancellationToken ct) =>
            {
                var todo = await repo.GetByIdAsync(id, ct);
                if (todo is null) return Results.NotFound();

                if (req.Text is not null)
                {
                    if (string.IsNullOrWhiteSpace(req.Text))
                        return Results.BadRequest("Text cannot be empty.");

                    todo.SetText(req.Text);
                }

                if (req.Completed is not null)
                    todo.SetCompleted(req.Completed.Value);

                await repo.SaveChangesAsync(ct);

                return Results.Ok(Map(todo));
            });

            group.MapDelete("/{id:guid}", async (ITodoRepository repo, Guid id, CancellationToken ct) =>
            {
                var todo = await repo.GetByIdAsync(id, ct);
                if (todo is null) return Results.NotFound();

                await repo.DeleteAsync(todo, ct);
                await repo.SaveChangesAsync(ct);

                return Results.NoContent();
            });

            return app;
        }

        private static TodoResponse Map(TodoItem t)
            => new(t.Id, t.Text, t.Completed, t.CreatedUtc);
    }
}
