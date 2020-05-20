using aspnetcore.Controllers.Resources;
using aspnetcore.Helper;
using aspnetcore.Services;
using aspnetcore.Services.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        [HttpPost]
        [ProducesResponseType(typeof(List<SanPhamModel>), 200)]
        [ProducesResponseType(typeof(GeneralResponse), 500)]
        public IActionResult ShowProducts([FromBody] SanPham_ShowProducts_Resource sanphamShowProductsResource)
        {
            ResultCodes resultCode;
            List<SanPhamModel> list_sanpham = new List<SanPhamModel>();
            (resultCode, list_sanpham) = _service.ShowProducts(
                sanphamShowProductsResource.Code,
                sanphamShowProductsResource.Name,
                sanphamShowProductsResource.Category,
                sanphamShowProductsResource.RecordStatus);
            Result resultValues; int statusCode;
            (statusCode, resultValues) = ResultHandler.GetStatusCodeAndResult(resultCode);
            GeneralResponse response = new GeneralResponse()
            {
                Success = (statusCode == 200) ? true : false,
                Error = resultValues
            };
            response.Result = list_sanpham;
            return StatusCode(statusCode, response);
        }
    }
}
