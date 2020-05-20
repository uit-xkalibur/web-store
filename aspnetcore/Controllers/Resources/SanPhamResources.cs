using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetcore.Controllers.Resources
{
    public class SanPham_ShowProducts_Resource
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public bool RecordStatus { get; set; }
    }
}
