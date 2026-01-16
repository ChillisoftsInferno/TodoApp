var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("todos-postgres")
    .WithDataVolume("todos-db-volume");
postgres.WithPgAdmin();

var db = postgres.AddDatabase("todosdb");

builder.AddProject<Projects.TodoApi_ApiService>("apiservice")
    .WithReference(db);

builder.Build().Run();