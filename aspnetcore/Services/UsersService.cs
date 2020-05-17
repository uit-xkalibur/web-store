using aspnetcore.Repositories.DTOs;
using aspnetcore.Services.Models;
using System.Linq;
using aspnetcore.Helper;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System;

namespace aspnetcore.Services
{
    public interface IUsersService
    {
        (ResultCodes, UserModel) Login(string username, string sha1Pass);
    }

    public class UsersService : BaseService, IUsersService
    {
        public static string Secret { get; set; }
        public (ResultCodes, UserModel) Login(string username, string sha1Pass)
        {
            UserModel user = new UserModel();
            var userDTO = procedureHelper.GetData<UserDTO>(
                "get_user_info", new { Username = username, })
                .FirstOrDefault();
            if (!user.ConvertFromDTO(userDTO))
            {
                return (ResultCodes.NOT_FOUND, null);
            }
            if (user.Password.ToLower() != sha1Pass.ToLower())
            {
                return (ResultCodes.UN_AUTH, null);
            }

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.ID.ToString()),
                    new Claim(ClaimTypes.Role, user.Role),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            return (ResultCodes.SUCCESS, user);
        }
    }
}