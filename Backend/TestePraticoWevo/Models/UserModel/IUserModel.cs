using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestePraticoWevo.Models.Database.Tables;

namespace TestePraticoWevo.Models.UserModel
{
    public interface IUserModel
    {
        void Insert(User user);
        void Delete(User user);
        User Get(int id);
        List<User> List();
        void Update(User user);

    }
}
