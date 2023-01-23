using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoVaga2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VagasController : ControllerBase
    {
        VagasDao vagasDao;
        
        public VagasController()
        {
            vagasDao = new VagasDao();
        }

        //Lista todas as vagas / ok testado no postman 23/01
        [HttpGet]
        public IEnumerable<VagasDTO> GetVagas()
        {
            return vagasDao.ListarTodas();
        }
        //Busca a vaga por id / ok testado no postman 23/01
        [HttpGet("{id}")]
        public VagasDTO GetVagas(int id)
        {
            return vagasDao.Buscar(id);
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
