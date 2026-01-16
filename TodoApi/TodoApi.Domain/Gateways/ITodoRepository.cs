using System;
using System.Collections.Generic;
using System.Text;
using TodoApi.Domain.Data;

namespace TodoApi.Domain.Gateways
{
    public interface ITodoRepository
    {
        Task<List<TodoItem>> GetAllAsync(CancellationToken ct);
        Task<TodoItem?> GetByIdAsync(Guid id, CancellationToken ct);
        Task AddAsync(TodoItem todo, CancellationToken ct);
        Task SaveChangesAsync(CancellationToken ct);
        Task DeleteAsync(TodoItem todo, CancellationToken ct);
    }
}
