using Dapper;
using ProjetoScania2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class ModalidadeDao : Dao
    {
        public IEnumerable<Vizualizar> ListarModalidades()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Vizualizar>("SELECT * FROM tb_modalidade;");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
