namespace Api.Contracts;

public record CreateContactRequest(
    string Name,
    string Email,
    string Message
);
