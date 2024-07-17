
using Microsoft.AspNetCore.Http;
namespace LibaryManage.DTO
{
    public class FileUploadDTO
    {
        public IFormFile File { get; set; }
    }
}
