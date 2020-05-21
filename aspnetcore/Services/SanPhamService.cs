using aspnetcore.Helper;
using aspnetcore.Repositories.DTOs;
using aspnetcore.Services.Models;
using System.Collections.Generic;

namespace aspnetcore.Services
{
    public interface ISanPhamService
    {
        (ResultCodes, List<SanPhamModel>) Search(string search, string category);
        (ResultCodes, List<string>) Categories();
    }
    public class SanPhamService : BaseService, ISanPhamService
    {
        public (ResultCodes, List<string>) Categories()
        {
            List<string> categories = procedureHelper.GetData<string>(
                "get_categories", new {});
            return (ResultCodes.SUCCESS, categories);
        }

        public (ResultCodes, List<SanPhamModel>) Search(string search, string category)
        {
            List<SanPhamModel> list_sanpham = new List<SanPhamModel>();
            List<SanPhamDTO> list_sanphamDTO = procedureHelper.GetData<SanPhamDTO>(
                "get_sanpham", new
                {
                    Search = search,
                    Category = category,
                });
            foreach (SanPhamDTO item in list_sanphamDTO)
            {
                SanPhamModel sanpham = new SanPhamModel();
                if (!sanpham.ConvertFromDTO(item))
                {
                    return (ResultCodes.NOT_FOUND, null);
                }
                list_sanpham.Add(sanpham);
            }
            return (ResultCodes.SUCCESS, list_sanpham);
        }
    }
}
