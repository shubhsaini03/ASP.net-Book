
using LibaryManage.DTO;
using LibaryManage.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AngularFormBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly Context _context;
        private readonly IWebHostEnvironment _environment;

        public FormController(Context context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromForm] FileUploadDTO fileUploadDto)
        {
            if (fileUploadDto.File == null || fileUploadDto.File.Length == 0)
                return BadRequest("No file uploaded.");

            var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            var filePath = Path.Combine(uploadsFolder, fileUploadDto.File.FileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await fileUploadDto.File.CopyToAsync(fileStream);
            }

            return Ok(new { FilePath = $"/uploads/{fileUploadDto.File.FileName}" });
        }

        [HttpPost("user")]
        public async Task<IActionResult> AddUsers([FromBody] List<FormDatas> formDatas)
        {
            if (formDatas == null || !formDatas.Any())
                return BadRequest("No data provided.");

            foreach (var formData in formDatas)
            {
                  _context.FormData.Add(formData);
            }

            await _context.SaveChangesAsync();
            return Ok("Data successfully added.");
        }
    }
}
