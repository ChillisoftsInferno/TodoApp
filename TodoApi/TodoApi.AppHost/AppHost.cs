using Aspire.Hosting;

var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("todos-postgres")
    .WithDataVolume("todos-db-volume");
postgres.WithPgAdmin();

var db = postgres.AddDatabase("todosdb");

var apiService = builder.AddProject<Projects.TodoApi_ApiService>("apiservice")
    .WithReference(db);

//builder.AddViteApp("todos-frontend", "../../FrontEnd")
//    .WithNpm()
//    .WithReference(apiService);

builder.Build().Run();