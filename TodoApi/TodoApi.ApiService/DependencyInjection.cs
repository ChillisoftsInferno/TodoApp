using TodoApi.ApiService.Configuration;
using TodoApi.Infrastructure;

namespace TodoApi.ApiService
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApi(this IServiceCollection services, IConfiguration config)
        {
            services.Configure<TodoSettings>(options =>
            {
                options.CustomSetting = config["CUSTOM_SETTING_ONE"] ?? string.Empty;
                options.EnableExtraEndpoints = config.GetValue<bool>("ENABLE_EXTRA_ENDPOINTS");
            });

            services.AddInfrastructure(config);
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            return services;
        }
    }
}
