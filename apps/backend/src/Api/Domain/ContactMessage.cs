namespace Api.Domain;

public class ContactMessage
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; init; } = default!;
    public string Email { get; init; } = default!;
    public string Message { get; init; } = default!;
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
}
