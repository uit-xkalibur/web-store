using aspnetcore.Helper;
using aspnetcore.Repositories.DTOs;

namespace aspnetcore.Services.Models
{
    public class SanPhamModel:IModel
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
        public bool ConvertFromDTO(object dto)
        {
            if (null == dto) return false;
            SanPhamDTO sanphamDTO = (SanPhamDTO)dto;
            ID = sanphamDTO.ID;
            Code = sanphamDTO.Code;
            Name = sanphamDTO.Name;
            Category = sanphamDTO.Category;
            Image = FileHandler.GetFileUrl(PrefixPaths.PRODUCTS, sanphamDTO.Image);
            Price = sanphamDTO.Price;
            return true;
        }
    }
}
