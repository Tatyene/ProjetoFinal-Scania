using Dapper;
using ProjetoScania2.DataAccess;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class EmpresasDao : Dao
    {
        public IEnumerable<Empresa> ListarEmpresas()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Empresa>("SELECT * FROM tb_empresa");
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
