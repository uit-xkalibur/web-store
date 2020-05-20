using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetcore.Repositories.DTOs
{
    public class SanPhamDTO
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
        public bool RecordStatus { get; set; }
    }
}
