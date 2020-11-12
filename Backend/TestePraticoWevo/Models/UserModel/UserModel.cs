using System;
using System.Collections.Generic;
using System.Linq;
using TestePraticoWevo.Models.Database;
using TestePraticoWevo.Models.Database.Tables;

namespace TestePraticoWevo.Models.UserModel
{
    public class UserModel : IUserModel
    {
        DatabaseContext context;
        public UserModel(DatabaseContext context)
        {
            this.context = context;
        }
        public void Insert(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
        }

        public void Delete(User user)
        {
            context.Users.Attach(user);
            context.Users.Remove(user);
            context.SaveChanges();
        }

        public User Get(int id)
        {
           return context.Users.Find(id);
        }

        public List<User> List()
        {
            return context.Users.ToList<User>();
        }

        public void Update(User user)
        {
            context.Users.Update(user);
            context.SaveChanges();
        }
    }
}
