using Aspire.Hosting;

var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("todos-postgres")
    .WithDataVolume("todos-db-volume");
postgres.WithPgAdmin();

var db = postgres.AddDatabase("todosdb");

var appConfigValue = builder.AddParameter("MyCustomConfigValue", secret: true);
var enableExtraEndpoints = builder.AddParameter("EnableExtraEndpoints");

var apiService = builder.AddProject<Projects.TodoApi_ApiService>("apiservice")
    .WithReference(db)
    .WithEnvironment("CUSTOM_SETTING_ONE", appConfigValue)
    .WithEnvironment("ENABLE_EXTRA_ENDPOINTS", enableExtraEndpoints);

builder.Build().Run();