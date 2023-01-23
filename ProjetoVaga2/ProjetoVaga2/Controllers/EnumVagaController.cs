using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoVaga2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnumVagaController : ControllerBase
    {
        BeneficiosDao beneficiosDao;
        EscolaridadeDao escolaridadeDao;
        TurnoDao turnoDao;
        ModalidadeDao modalidadeDao;

        public EnumVagaController()
        {
            beneficiosDao = new BeneficiosDao();
            escolaridadeDao = new EscolaridadeDao();
            turnoDao = new TurnoDao();
            modalidadeDao = new ModalidadeDao();
        }
        //Lista os benefícios
        [HttpGet("beneficios")]
        public IEnumerable<Beneficios> GetBeneficios()
        {
            return beneficiosDao.ListarBeneficios();
        }
        //Lista a escolaridade
        [HttpGet("escolaridade")]
        public IEnumerable<Escolaridade> GetEscolaridades()
        {
            return escolaridadeDao.ListarEscolaridade();
        }
        //Lista os turnos
        [HttpGet("turno")]
        public IEnumerable<Turno> GetTurnos()
        {
            return turnoDao.ListarTurno();
        }
        //Lista a modalidade
        [HttpGet("modalidade")]
        public IEnumerable<Modalidade> GetModalidades()
        {
            return modalidadeDao.ListarModalidades();
        }
    }
}
