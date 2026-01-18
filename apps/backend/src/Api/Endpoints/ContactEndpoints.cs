using Api.Application.Services;
using Api.Contracts;

namespace Api.Endpoints;

public static class ContactEndpoints
{
    public static void MapContactEndpoints(this WebApplication app)
    {
        app.MapPost("/contact", (
            CreateContactRequest request,
            ContactService service
        ) =>
        {
            var message = service.Create(request);
            return Results.Created($"/contact/{message.Id}", message);
        });
    }
}
