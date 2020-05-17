using System;
using System.Text.Json.Serialization;
using aspnetcore.Repositories.DTOs;

namespace aspnetcore.Services.Models
{
    public class UserModel : IModel
    {
        public int ID { get; set; }
        public string Username { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Role { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Token { get; set; }

        public bool ConvertFromDTO(object dto)
        {
            if (null == dto) return false;
            UserDTO userDTO = (UserDTO)dto;
            ID = userDTO.ID;
            Username = userDTO.Username;
            Password = BitConverter.ToString(userDTO.Password).Replace("-", "");
            Role = userDTO.Role;
            Address = userDTO.Address;
            Phone = userDTO.Phone;
            return true;
        }
    }
}