using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TodoApi.Domain.Data;
using TodoApi.Domain.Gateways;

namespace TodoApi.Infrastructure.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        private readonly TodoDbContext _db;

        public TodoRepository(TodoDbContext db) => _db = db;

        public Task<List<TodoItem>> GetAllAsync(CancellationToken ct) =>
            _db.Todos.OrderByDescending(t => t.CreatedUtc).ToListAsync(ct);

        public Task<TodoItem?> GetByIdAsync(Guid id, CancellationToken ct) =>
            _db.Todos.FirstOrDefaultAsync(t => t.Id == id, ct);

        public async Task AddAsync(TodoItem todo, CancellationToken ct) =>
            await _db.Todos.AddAsync(todo, ct);

        public Task DeleteAsync(TodoItem todo, CancellationToken ct)
        {
            _db.Todos.Remove(todo);
            return Task.CompletedTask;
        }

        public Task SaveChangesAsync(CancellationToken ct) => _db.SaveChangesAsync(ct);
    }
}
