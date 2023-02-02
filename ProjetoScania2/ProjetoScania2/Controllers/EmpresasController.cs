using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoVaga2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoScania2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        EmpresasDao empresasDao;

        public EmpresasController()
        {
            empresasDao = new EmpresasDao();
        }

        [HttpGet]
        public IEnumerable<Empresa> GetEmpresa()
        {
            return empresasDao.ListarEmpresas();
        }
    }
}
