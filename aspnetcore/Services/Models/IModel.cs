namespace aspnetcore.Services.Models
{
    public interface IModel
    {
        bool ConvertFromDTO(object dto);
    }
}