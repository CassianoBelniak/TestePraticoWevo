using Microsoft.EntityFrameworkCore;
using TestePraticoWevo.Models.Database.Tables;

namespace TestePraticoWevo.Models.Database
{
    public class DatabaseMySQLConnection: DbContext, IDatabaseConnection
    {
        public DatabaseMySQLConnection(DbContextOptions<DatabaseMySQLConnection> options): base(options){}

        public DbSet<User> Users { set; get; }
        public DbSet<Sex> Sexes { set; get; }

    }
}
