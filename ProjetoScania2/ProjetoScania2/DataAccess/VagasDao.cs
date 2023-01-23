using Dapper;
using ProjetoScania2.Models;
using ProjetoScania2.ViewModels;

namespace ProjetoScania2.DataAccess
{
    public class VagasDao : Dao
    {
        //resumão da empresa
        //trazer uma lista de empresa que vai passar um id para selecionar as vagas que e aquela empresa possui: usado para inserir a inscrição
        public IEnumerable<CandidatoEmpresa> ListarTodos()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<CandidatoEmpresa>("SELECT id, nome FROM tb_empresa;");
            }
            finally
            {
                FecharConexao();
            }
        }
        //resumão vaga
        //vai receber o id do resumão acima das vagas que aquela empresa possui: usado para inserir a inscrição
        public CandidatoEmpresa Buscar(int id)
        {
            try
            {
                AbrirConexao();
                return Conn.QueryFirstOrDefault<CandidatoEmpresa>(
                    "SELECT id, nome FROM tb_empresa WHERE id = @id", new { id });
            }
            finally
            {
                FecharConexao();
            }
        }
        
        //resumão vaga
        //vai receber o id do resumão acima das vagas que aquela empresa possui
        public IEnumerable<CandidatoEmpresa> BuscarVagaId (int id)
        {
            try
            {
                AbrirConexao();
                return Conn.Query<CandidatoEmpresa>(
                    "SELECT v.id, v.titulo_vaga AS nome FROM tb_vaga v, tb_empresa e WHERE v.idempresa = e.id AND e.id = @id", new { id });
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
