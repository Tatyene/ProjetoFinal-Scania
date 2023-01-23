using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoScania2.DataAccess;
using ProjetoScania2.Models;

namespace ProjetoScania2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatosController : ControllerBase
    {
        CandidatoDao candidatoDao;

        public CandidatosController()
        {
            candidatoDao = new CandidatoDao();
        }
        //Resumão lista de candidatos do site mesmo que não estajam inscritos em nenhuma vaga, é apresentada para empresa : getResumoCandidato / ok no postman - 22/01
        [HttpGet]
        public IEnumerable<CandidatoEmpresa> GetCandidato()
        {
            return candidatoDao.ListarTodos();
        }
        //Resumão do candidato do site mesmo que não estajam inscritos em nenhuma vaga pelo id: getResumoCandidato(id) usado para inserir o candidato na inscrição / ok no postman - 22/01
        [HttpGet("{id}")]
        public CandidatoEmpresa GetCandidato(int id)
        {
            return candidatoDao.Buscar(id);
        }
    }
}
