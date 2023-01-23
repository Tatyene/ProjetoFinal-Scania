using Dapper;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class BeneficiosDao : Dao
    {
        public IEnumerable<Vizualizar> ListarBeneficios()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Vizualizar>("SELECT * FROM tb_beneficio");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
