using Dapper;
using Microsoft.Extensions.ObjectPool;
using ProjetoScania2.Models;
using ProjetoScania2.ViewModels;

namespace ProjetoScania2.DataAccess
{
    public class InscricaoDao : Dao
    {
        
        //Lista de inscrições existentes no banco de dados!
        public IEnumerable<ListarVagaECandidatoVM> ListarTodos()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<ListarVagaECandidatoVM>(@"SELECT c.nome AS nomecandidato, v.titulo_vaga, e.nome AS nomeempresa, i.datainscricao 
                                FROM tb_candidato c, tb_vaga v, tb_empresa e, tb_inscricao_candidato i
                                WHERE c.id = i.idcandidato 
                                AND v.id = i.idvaga
                                AND e.id = v.idempresa");
            }
            finally
            {
                FecharConexao();
            }
        }
        //Lista de inscrições por id!
        public ListarVagaECandidatoVM Buscar(int id)
        {
            try
            {
                AbrirConexao();
                return Conn.QueryFirstOrDefault<ListarVagaECandidatoVM>(@"SELECT c.nome AS nomecandidato, v.titulo_vaga, e.nome AS nomeempresa, i.datainscricao 
                                FROM tb_candidato c, tb_vaga v, tb_empresa e, tb_inscricao_candidato i
                                WHERE c.id = i.idcandidato 
                                AND v.id = i.idvaga
                                AND e.id = v.idempresa 
                                AND i.id = @id", new { id });
            }
            finally
            {
                FecharConexao();
            }
        }

        public bool Remover(int id)
        {
            try
            {
                AbrirConexao();
                int registros = Conn.Execute("DELETE FROM tb_inscricao_candidato WHERE id = @id", new { id });
                return registros > 0;
            }
            finally
            {
                FecharConexao();
            }
        }

        public InscricoesVaga? Incluir(InscricoesVaga entidade)
        {
            try
            {
                AbrirConexao();
                string sql = "INSERT INTO tb_inscricao_candidato" +
                    "( idcandidato, idvaga, datainscricao) " +
                    "VALUES (@idcandidato, @idvaga, @datainscricao)";
                int registro = Conn.Execute(sql, new
                {
                    entidade.idcandidato,
                    entidade.idvaga,
                    datainscricao = DateTime.UtcNow
                });
                if (registro > 0)
                {
                    InscricoesVaga inscricao = Conn.QueryFirstOrDefault<InscricoesVaga>(
                        "SELECT * FROM tb_inscricao_candidato WHERE id = (" +
                        "SELECT MAX(id) FROM tb_inscricao_candidato)");
                    return inscricao;
                }
                return null;

            }

            finally
            {
                FecharConexao();
            }
        }
    }
}
