var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(policy =>
    policy.AddDefaultPolicy(p =>
    p.WithOrigins("*").AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
