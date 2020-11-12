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
        public StatusCodeResult Insert([FromBody] User data)
        {
            userModel.Insert(data);
            return new StatusCodeResult(200);
        }

        [HttpPost("update")]
        public StatusCodeResult Update([FromBody] User data)
        {
            userModel.Update(data);
            return new StatusCodeResult(200);
        }

        [HttpPost("delete")]
        public StatusCodeResult Delete([FromBody] int id)
        {
            var user = new User();
            user.Id = id;
            userModel.Delete(user);
            return new StatusCodeResult(200);
        }

        [HttpGet("get")]
        public JsonResult Get([FromBody] int id)
        {
            var user = userModel.Get(id);
            return Json(user);
        }
    }
}
