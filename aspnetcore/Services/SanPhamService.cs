using aspnetcore.Helper;
using aspnetcore.Repositories.DTOs;
using aspnetcore.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetcore.Services
{
    public interface ISanPhamService
    {
        (ResultCodes,List<SanPhamModel>) ShowProducts(string code,string name,string category,bool recordStatus);
    }
    public class SanPhamService:BaseService, ISanPhamService
    {
        public (ResultCodes,List<SanPhamModel>) ShowProducts(string code, 
                                                        string name, 
                                                        string category, 
                                                        bool recordStatus)
        {
            List<SanPhamModel> list_sanpham = new List<SanPhamModel>();
            List<SanPhamDTO> list_sanphamDTO = procedureHelper.GetData<SanPhamDTO>(
                "get_sanpham", new
                {
                    Code = code,
                    Name = name,
                    Category = category,
                    RecordStatus = Convert.ToInt32(recordStatus)
                });
            foreach(SanPhamDTO item in list_sanphamDTO)
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
