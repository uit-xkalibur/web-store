using aspnetcore.Services;
using Microsoft.AspNetCore.Mvc;
using aspnetcore.Controllers.Resources;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using aspnetcore.Services.Models;
using aspnetcore.Helper;

namespace aspnetcore.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _service;
        public UsersController(IUsersService service)
        {
            _service = service;
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserModel), 200)]
        [ProducesResponseType(typeof(GeneralResponse), 500)]
        public IActionResult Login(
            [FromBody] UserLoginRequestResource userAccount)
        {
            ResultCodes resultCode;
            UserModel user = null;
            (resultCode, user) = _service.Login(
                userAccount.Username, userAccount.Sha1Pass);

            Result resultValue; int statusCode;
            (statusCode, resultValue) = ResultHandler.GetStatusCodeAndResult(resultCode);
            GeneralResponse response = new GeneralResponse()
            {
                Error = resultValue,
            };

            if (ResultCodes.NOT_FOUND == resultCode)
                response.Error.Detail = "Invalid Username";

            if (ResultCodes.UN_AUTH == resultCode)
                response.Error.Detail = "Invalid Password";

            response.Result = user;
            return StatusCode(statusCode, response);
        }
    }
}