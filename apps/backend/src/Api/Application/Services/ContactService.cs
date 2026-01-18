using Api.Contracts;
using Api.Domain;

namespace Api.Application.Services;

public class ContactService
{
    public ContactMessage Create(CreateContactRequest request)
    {
        return new ContactMessage
        {
            Name = request.Name,
            Email = request.Email,
            Message = request.Message
        };
    }
}
