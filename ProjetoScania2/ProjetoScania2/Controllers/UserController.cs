using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoScania2.DataAccess;
using ProjetoScania2.ViewModels;

namespace ProjetoScania2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UsersDao usersDao;

        public UserController()
        {
            usersDao= new UsersDao();   
        }


        [HttpPost]

        public Usuario PostUsuario(Usuario usuario)
        {
            return usersDao.Validar(usuario.nome!, usuario.senha!);
        }

    }
}
