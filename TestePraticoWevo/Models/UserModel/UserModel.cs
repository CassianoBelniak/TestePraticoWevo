using System;
using System.Collections.Generic;
using System.Linq;
using TestePraticoWevo.Models.Database;
using TestePraticoWevo.Models.Database.Tables;

namespace TestePraticoWevo.Models.UserModel
{
    public class UserModel : IUserModel
    {
        IDatabaseConnection connection;
        public UserModel(IDatabaseConnection connection)
        {
            this.connection = connection;
        }
        public void Insert(User user)
        {
            connection.Users.Add(user);
        }

        public void Delete(User user)
        {
            connection.Users.Remove(user);
        }

        public User Get(int id)
        {
           return connection.Users.Find(id);
        }

        public List<User> List()
        {
            return connection.Users.ToList<User>();
        }

        public void Update(User user)
        {

        }
    }
}
