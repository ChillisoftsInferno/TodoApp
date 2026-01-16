using Microsoft.Extensions.DependencyInjection;
using TodoApi.Domain.Gateways;
using TodoApi.Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

namespace TodoApi.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<TodoDbContext>(opt =>
                opt.UseNpgsql(config.GetConnectionString("todosdb")));

            services.AddScoped<ITodoRepository, TodoRepository>();

            return services;
        }
    }
}
