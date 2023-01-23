using Dapper;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class TurnoDao : Dao
    {
        public IEnumerable<Turno> ListarTurno()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Turno>("SELECT * FROM tb_turno");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
