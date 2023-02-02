using Dapper;
using ProjetoScania2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class EscolaridadeDao : Dao
    {
        public IEnumerable<Vizualizar> ListarEscolaridade()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Vizualizar>("SELECT * FROM tb_escolaridade");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
