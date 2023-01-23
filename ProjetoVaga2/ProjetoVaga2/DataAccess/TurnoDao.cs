using Dapper;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class TurnoDao : Dao
    {
        public IEnumerable<Vizualizar> ListarTurno()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Vizualizar>("SELECT * FROM tb_turno");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
