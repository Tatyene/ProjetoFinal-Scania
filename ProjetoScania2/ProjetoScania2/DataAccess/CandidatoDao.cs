using Dapper;
using ProjetoScania2.Models;

namespace ProjetoScania2.DataAccess
{
    public class CandidatoDao : Dao
    {
        //Resumão lista de candidatos do site mesmo que não estajam inscritos em nenhuma vaga, é apresentada para empresa : getResumoCandidato

        public IEnumerable<CandidatoEmpresa> ListarTodos()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<CandidatoEmpresa>("SELECT id, nome FROM tb_candidato;");
            }
            finally
            {
                FecharConexao();
            }
        }
        //Resumão do candidato do site mesmo que não estajam inscritos em nenhuma vaga pelo id: getResumoCandidato(id) usado para inserir o candidato na inscrição

        public CandidatoEmpresa Buscar(int id)
        {
            try
            {
                AbrirConexao();
                return Conn.QueryFirstOrDefault<CandidatoEmpresa>(
                    "SELECT id, nome FROM tb_candidato WHERE id = @id", new { id });
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
