using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoScania2.DataAccess;
using ProjetoScania2.Models;
using ProjetoScania2.ViewModels;
using ProjetoVaga2.Models;

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
        
        //resumão vaga
        //vai receber o id do resumão acima das vagas que aquela empresa possui: usado para inserir a inscrição / ok testado no postman 23/01
        [HttpGet("empresa/{id}")]
        public CandidatoEmpresa GetVagas(int id)
        {
            return vagasDao.Buscar(id);
        }
        
        //vai pegar o id da empresa e trazer uma lista de vagas que ela possui
        [HttpGet("vagaempresa/{id}")]
        public IEnumerable<CandidatoEmpresa> GetEmpresaVaga(int id)
        {
            return vagasDao.BuscarVagaId(id);
        }

        [HttpGet("vaga/{id}")]
        public Vagas GetVaga(int id)
        {
            return vagasDao.BuscarVagaApi(id);
        }
        //Deleta Vaga / ok testado no postman 23/01
        [HttpDelete("{id}")]
        public bool DeletarVaga(int id)
        {
            return vagasDao.RemoverVaga(id);
        }

        //Atualiza a vaga / ok testado no postman 23/01
        [HttpPut("{id}")]
        public Vagas AlterarVagas(Vagas vagas)
        {
            return vagasDao.Alterar(vagas);
        }
        //Realiza o cadastro da vaga / ok testado no postman 23/01
        [HttpPost]
        public Vagas? PostVagas(Vagas vagas)
        {
            return vagasDao.Incluir(vagas);
        }
    }
}
