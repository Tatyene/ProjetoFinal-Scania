using Dapper;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class EscolaridadeDao : Dao
    {
        public IEnumerable<Escolaridade> ListarEscolaridade()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Escolaridade>("SELECT * FROM tb_escolaridade");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
