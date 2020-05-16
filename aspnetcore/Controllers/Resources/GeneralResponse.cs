using aspnetcore.Helper;

namespace aspnetcore.Controllers.Resources
{
    public class GeneralResponse
    {
        public object Result { get; set; }
        public bool Success { get; set; }
        public Result Error { get; set; }
        public bool UnAuthorizedRequest { get; set; }

        public GeneralResponse()
        {
            Result = null;
            Success = false;
            Error = null;
            UnAuthorizedRequest = true;
        }
    }
}