using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoVaga2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoScania2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnumVagaController : ControllerBase
    {
        EscolaridadeDao escolaridadeDao;
        TurnoDao turnoDao;
        ModalidadeDao modalidadeDao;

        public EnumVagaController()
        {
            escolaridadeDao = new EscolaridadeDao();
            turnoDao = new TurnoDao();
            modalidadeDao = new ModalidadeDao();
        }
        
        //Lista a escolaridade
        [HttpGet("escolaridade")]
        public IEnumerable<Vizualizar> GetEscolaridades()
        {
            return escolaridadeDao.ListarEscolaridade();
        }
        //Lista os turnos
        [HttpGet("turno")]
        public IEnumerable<Vizualizar> GetTurnos()
        {
            return turnoDao.ListarTurno();
        }
        //Lista a modalidade
        [HttpGet("modalidade")]
        public IEnumerable<Vizualizar> GetModalidades()
        {
            return modalidadeDao.ListarModalidades();
        }
    }
}
