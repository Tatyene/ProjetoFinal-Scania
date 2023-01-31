using Dapper;
using ProjetoScania2.ViewModels;

namespace ProjetoScania2.DataAccess
{
    public class UsersDao : Dao
    {
        public Usuario Validar(string nome, string senha)
        {
            try
            {
                AbrirConexao();
                string sql = "Select * from tb_usuarios where nome=@nome And senha=@senha";
                var entidade = Conn.QueryFirstOrDefault<Usuario>(sql, new { nome, senha });

                return entidade;
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
