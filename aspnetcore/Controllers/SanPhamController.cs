using aspnetcore.Controllers.Resources;
using aspnetcore.Helper;
using aspnetcore.Services;
using aspnetcore.Services.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace aspnetcore.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class SanPhamController : ControllerBase
    {
        private readonly ISanPhamService _service;
        public SanPhamController(ISanPhamService service)
        {
            _service = service;
        }
        [HttpGet]
        [ProducesResponseType(typeof(List<SanPhamModel>), 200)]
        [ProducesResponseType(typeof(GeneralResponse), 500)]
        public IActionResult Search([FromQuery] SanPhamSearchRequestResource filter)
        {
            ResultCodes resultCode;
            List<SanPhamModel> list_sanpham;
            (resultCode, list_sanpham) = _service.Search(filter.Search, filter.Category);
            Result resultValues;
            int statusCode;
            (statusCode, resultValues) = ResultHandler.GetStatusCodeAndResult(resultCode);
            GeneralResponse response = new GeneralResponse()
            {
                Success = (statusCode == 200) ? true : false,
                Error = resultValues
            };
            response.Result = list_sanpham;
            return StatusCode(statusCode, response);
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<string>), 200)]
        [ProducesResponseType(typeof(GeneralResponse), 500)]
        public IActionResult Categories()
        {
            ResultCodes resultCode;
            List<string> categories;
            (resultCode, categories) = _service.Categories();
            Result resultValues;
            int statusCode;
            (statusCode, resultValues) = ResultHandler.GetStatusCodeAndResult(resultCode);
            GeneralResponse response = new GeneralResponse()
            {
                Success = (statusCode == 200) ? true : false,
                Error = resultValues
            };
            response.Result = categories;
            return StatusCode(statusCode, response);
        }
    }
}
