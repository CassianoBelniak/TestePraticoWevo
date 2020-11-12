using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestePraticoWevo.Models.Database.Tables;

namespace TestePraticoWevo.Models.Database
{
    public interface IDatabaseConnection
    {
        DbSet<User> Users { set; get; }
        DbSet<Sex> Sexes { set; get; }
    }
}
