using System.ComponentModel.DataAnnotations;

namespace aspnetcore.Controllers.Resources
{
    public class UserLoginRequestResource
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Sha1Pass { get; set; }
    }
}