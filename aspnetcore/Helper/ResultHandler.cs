using System.Collections.Generic;

namespace aspnetcore.Helper
{
    public class Result
    {
        public int Code { get; set; }
        public string Message { get; set; }
        public string Detail { get; set; }
    }
    public enum ResultCodes
    {
        SUCCESS = 0x0000,
        SERVER_ERR = 0x0010,
        NOT_FOUND = 0x0020,
        UN_AUTH = 0x0021,
    }
    public static class ResultHandler
    {
        private static Dictionary<int, KeyValuePair<int, Result>> dictionary = null;

        public static void Initialize()
        {
            dictionary = new Dictionary<int, KeyValuePair<int, Result>>();
            dictionary.Add(0x0000, new KeyValuePair<int, Result>(
                200, new Result { Code = 0x0000, Message = "Success", Detail = "" }));
            dictionary.Add(0x0010, new KeyValuePair<int, Result>(
                500, new Result { Code = 0x0010, Message = "Server Error", Detail = "" }));
            dictionary.Add(0x0020, new KeyValuePair<int, Result>(
                404, new Result { Code = 0x0020, Message = "Not found", Detail = "" }));
            dictionary.Add(0x0021, new KeyValuePair<int, Result>(
                401, new Result { Code = 0x0021, Message = "Unauthorized", Detail = "" }));
        }
        public static (int, Result) GetStatusCodeAndResult(ResultCodes resultCode)
        {
            return (
                dictionary[(int)resultCode].Key,
                dictionary[(int)resultCode].Value
            );
        }

    }
}