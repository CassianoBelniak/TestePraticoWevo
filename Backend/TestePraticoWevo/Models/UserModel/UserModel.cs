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
            if (!ValidadeUser(user))
                return;
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
            if (!ValidadeUser(user))
                return;
            context.Users.Update(user);
            context.SaveChanges();
        }

        bool ValidadeUser(User user)
        {
            if (user.Name.Length == 0)
                return false;
            if (user.Email.Length == 0)
                return false;
            if (!user.Email.Contains("@"))
                return false;
            if (user.CPF.Length < 11)
                return false;
            if (!IsDigitsOnly(user.CPF))
                return false;
            if (user.SexId == 0)
                return false;
            return true;
        }

        bool IsDigitsOnly(string str)
        {
            foreach (char c in str)
            {
                if (c < '0' || c > '9')
                    return false;
            }

            return true;
        }
    }
}
