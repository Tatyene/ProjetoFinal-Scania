using Dapper;
using ProjetoScania2.ViewModels;

namespace ProjetoScania2.DataAccess
{
    public class InscricaoVagaDao : Dao
    {
        //Busca as vagas que o candidato se inscreveu pelo id do candidato
        public IEnumerable<ListarVagaECandidatoVM> BuscarCandidato(int idcandidato)
        {
            try
            {
                AbrirConexao();
                string sql =
                    "SELECT i.id, c.nome AS nomecandidato, v.titulo_vaga, e.nome AS nomeempresa, i.datainscricao FROM tb_candidato c, tb_vaga v, tb_empresa e, tb_inscricao_candidato i ";
                if (idcandidato == 0)
                {
                    return Conn.Query<ListarVagaECandidatoVM>(sql);
                }
                else
                {
                    sql += "WHERE c.id = i.idcandidato AND v.id = i.idvaga AND e.id = v.idempresa AND i.idcandidato = @idcandidato;";
                    return Conn.Query<ListarVagaECandidatoVM>(sql, new { idcandidato });
                }
            }
            finally
            {
                FecharConexao();
            }
        }

        //Busca os candidatos que o vaga recebeu pelo id da vaga
        public IEnumerable<ListarVagaECandidatoVM> BuscarVaga(int idvaga)
        {
            try
            {
                string sql =
                    "SELECT i.id, c.nome AS nomecandidato, v.titulo_vaga, e.nome AS nomeempresa,  i.datainscricao FROM tb_candidato c, tb_vaga v, tb_empresa e, tb_inscricao_candidato i ";
                if (idvaga == 0)
                {
                    return Conn.Query<ListarVagaECandidatoVM>(sql);
                }
                else
                {
                    sql += "WHERE c.id = i.idcandidato AND v.id = i.idvaga AND e.id = v.idempresa AND i.idvaga = @idvaga;";
                    return Conn.Query<ListarVagaECandidatoVM>(sql, new { idvaga });
                }
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
