using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using TestePraticoWevo.Models.Database.Tables;
using TestePraticoWevo.Models.UserModel;

namespace TestePraticoWevo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        IUserModel userModel;
        public UserController(IUserModel userModel)
        {
            this.userModel = userModel;
        }

        [HttpGet("list")]
        public JsonResult List()
        {
            var userList = userModel.List();
            return Json(userList);
        }

        [HttpPost("insert")]
        public StatusCodeResult Insert([FromBody] JObject data)
        {
            var user = data.ToObject<User>();
            userModel.Insert(user);
            return new StatusCodeResult(100);
        }

        [HttpPost("delete")]
        public StatusCodeResult Delete(int id)
        {
            var user = new User();
            user.Id = id;
            userModel.Delete(user);
            return new StatusCodeResult(100);
        }

        [HttpGet("get")]
        public JsonResult Get(int id)
        {
            var user = userModel.Get(id);
            return Json(user);
        }
    }
}
