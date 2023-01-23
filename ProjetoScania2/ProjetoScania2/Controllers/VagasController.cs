using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoScania2.DataAccess;
using ProjetoScania2.Models;
using ProjetoScania2.ViewModels;

namespace ProjetoScania2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VagasController : ControllerBase
    {
        ResumoVagaDao resumoVagaDao;
        VagasDao vagasDao;

        public VagasController()
        {
            resumoVagaDao = new ResumoVagaDao();
            vagasDao = new VagasDao();
        }
        //Tabela de todas as vagas ela irá aparecer apenas para o usuario: getresumovaga / ok testado no postman 23/01
        [HttpGet]
        public IEnumerable<ResumoVagaVM> GetResumoVagas()
        {
            return resumoVagaDao.Buscar();
        }
        //Para buscar uma vaga específica, o candidato clicará nela e abrirá todos os dados que ela possui: getvagaid / ok testado no postman 23/01
        [HttpGet("{id}")]
        public TudoVagaVM MostrarVaga(int id)
        {
            return resumoVagaDao.Buscar(id);
        }
        //resumão da empresa
        //trazer uma lista de empresa que vai passar um id para selecionar as vagas que e aquela empresa possui: usado para inserir a inscrição / ok testado no postman 23/01
        [HttpGet("empresa")]
        public IEnumerable<CandidatoEmpresa> GetEmpresa()
        {
            return vagasDao.ListarTodos();
        }
        //resumão vaga
        //vai receber o id do resumão acima das vagas que aquela empresa possui: usado para inserir a inscrição / ok testado no postman 23/01
        [HttpGet("empresa/{id}")]
        public CandidatoEmpresa GetVagas(int id)
        {
            return vagasDao.Buscar(id);
        }
        //resumão vaga
        //vai receber o id do resumão acima das vagas que aquela empresa possui / ok testado no postman 23/01
        [HttpGet("vagaempresa/{id}")]
        public IEnumerable<CandidatoEmpresa> GetEmpresaVaga(int id)
        {
            return vagasDao.BuscarVagaId(id);
        }
    }
}
