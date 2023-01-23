using Dapper;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class BeneficiosDao : Dao
    {
        public IEnumerable<Beneficios> ListarBeneficios()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Beneficios>("SELECT * FROM tb_beneficio");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
