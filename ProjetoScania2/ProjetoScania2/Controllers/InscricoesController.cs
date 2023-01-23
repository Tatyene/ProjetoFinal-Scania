using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoScania2.DataAccess;
using ProjetoScania2.Models;
using ProjetoScania2.ViewModels;
using System.Diagnostics;
using System.Runtime.Intrinsics.X86;

namespace ProjetoScania2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InscricoesController : ControllerBase
    {
        InscricaoDao inscricaoDao;
        InscricaoVagaDao inscricaoVagaDao;

        public InscricoesController()
        {
            inscricaoDao = new InscricaoDao();
            inscricaoVagaDao = new InscricaoVagaDao();
        }

        //Lista de inscrições existentes no banco de dados! / ok no postman - 22/01
        [HttpGet]
        public IEnumerable<ListarVagaECandidatoVM> GetInscricao()
        {
            return inscricaoDao.ListarTodos();
        }
        //Lista de inscrições por id! / ok no postman - 22/01
        [HttpGet("{id}")]
        public ListarVagaECandidatoVM GetInscricao(int id)
        {
            return inscricaoDao.Buscar(id);
        }

        //Busca as vagas que o candidato se inscreveu pelo id do candidato / ok no postman - 22/01
        [HttpGet("candidatovaga/{idcandidato}")]
        public IEnumerable<ListarVagaECandidatoVM> GetCandidatoVaga(int idcandidato)
        {
            return inscricaoVagaDao.BuscarCandidato(idcandidato);
        }
        //Busca os candidatos que o vaga recebeu pelo id da vaga / ok no postman - 22/01
        [HttpGet("vagacandidato/{idvaga}")]
        public IEnumerable<ListarVagaECandidatoVM> GetVagaCandidato(int idvaga)
        {
            return inscricaoVagaDao.BuscarVaga(idvaga);
        }



        //Realiza a inscrição do candidato na vaga /  ok no postman - 22/01
        [HttpPost]
        public InscricoesVaga? PostInscricao(InscricoesVaga inscricao)
        {
            return inscricaoDao.Incluir(inscricao);
        }
        //Deleta a inscrição do candidato a vaga por id / / ok no postman - 22/01
        [HttpDelete("{id}")]
        public bool DeleteInscricao(int id)
        {
            return inscricaoDao.Remover(id);
        }

    }
}
