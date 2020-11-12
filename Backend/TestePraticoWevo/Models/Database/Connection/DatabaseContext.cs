using Microsoft.EntityFrameworkCore;
using TestePraticoWevo.Models.Database.Tables;

namespace TestePraticoWevo.Models.Database
{
    public class DatabaseContext: DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options): base(options){}

        public DbSet<User> Users { set; get; }
        public DbSet<Sex> Sexes { set; get; }
    }
}
