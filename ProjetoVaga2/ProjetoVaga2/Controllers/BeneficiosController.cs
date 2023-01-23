using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoVaga2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeneficiosController : ControllerBase
    {
        BeneficioVagaDao beneficioVagaDao;

        public BeneficiosController()
        {
            beneficioVagaDao = new BeneficioVagaDao();
        }

        //Lista o beneficios que 1 vaga possui / deve ser usado no momento de exibição das informações de 1vaga
        [HttpGet("{id}")]
        public IEnumerable<Vizualizar> ListarBeneficiosVaga(int id)
        {
            return beneficioVagaDao.ListarBeneficios(id);
        }
        //Inclui beneficios em uma vaga
        [HttpPost]
        public BeneficiosVagas? IncluirBeneficio(BeneficiosVagas beneficiosVagas)
        {
            return beneficioVagaDao.IncluirBeneficio(beneficiosVagas);
        }
        //Remove beneficio de uma vaga
        [HttpDelete("{id}")]
        public bool DeletarBeneficio(int id)
        {
            return beneficioVagaDao.RemoverBeneficio(id);
        }
        [HttpPut("{id}")]
        public BeneficiosVagas AlterarBeneficio (BeneficiosVagas beneficiosVagas)
        {
            return beneficioVagaDao.AlterarBeneficio(beneficiosVagas);
        }
    }
}
