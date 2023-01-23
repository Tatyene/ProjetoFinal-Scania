using Dapper;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class ModalidadeDao : Dao
    {
        public IEnumerable<Modalidade> ListarModalidades()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Modalidade>("SELECT * FROM tb_modalidade;");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
