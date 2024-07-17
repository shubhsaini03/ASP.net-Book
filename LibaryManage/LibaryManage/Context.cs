
using LibaryManage.Entities;
using Microsoft.EntityFrameworkCore;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options) { }


    public DbSet<FormDatas> FormData{ get; set; }

}
    