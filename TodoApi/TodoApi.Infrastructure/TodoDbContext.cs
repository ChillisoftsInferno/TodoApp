using System;
using System.Collections.Generic;
using System.Reflection.Emit;
using System.Text;
using Microsoft.EntityFrameworkCore;
using TodoApi.Domain.Data;

namespace TodoApi.Infrastructure
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options) { }

        public DbSet<TodoItem> Todos => Set<TodoItem>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>(b =>
            {
                b.ToTable("todos");
                b.HasKey(x => x.Id);
                b.Property(x => x.Text).HasMaxLength(300).IsRequired();
                b.Property(x => x.Completed).IsRequired();
                b.Property(x => x.CreatedUtc).IsRequired();
            });
        }
    }
}
