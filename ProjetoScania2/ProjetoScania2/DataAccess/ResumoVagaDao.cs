using Dapper;
using ProjetoScania2.ViewModels;

namespace ProjetoScania2.DataAccess
{
    public class ResumoVagaDao : Dao
    {
        //Tabela de todas as vagas ela irá aparecer apenas para o usuario: getresumovaga
        public IEnumerable<ResumoVagaVM> Buscar()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<ResumoVagaVM>
                    ("SELECT v.id, v.titulo_vaga, e.nome AS nomeempresa, v.salario, v.data_limite_inscricao, en.cidade, en.uf FROM tb_vaga v, tb_empresa e, tb_endereco en WHERE en.id = e.idendereco AND e.id = v.idempresa;");
            }
            finally
            {
                FecharConexao();
            }
        }
        //Para buscar uma vaga específica, o candidato clicará nela e abrirá todos os dados que ela possui: getvagaid
        public TudoVagaVM Buscar(int id)
        {
            try
            {
                AbrirConexao();
                return Conn.QueryFirstOrDefault<TudoVagaVM>(@"SELECT v.id, e.nome AS nomeempresa, t.descricao AS turno, m.descricao AS modalidade, esc.descricao AS escolaridade, v.titulo_vaga, v.descricao, v.salario, en.cidade, en.uf, v.data_limite_inscricao  
                        FROM tb_empresa e, tb_turno t, tb_modalidade m, tb_escolaridade esc, tb_vaga v, tb_endereco en  
                        WHERE v.idempresa = e.id AND v.idturno = t.id AND v.idmodalidade = m.id AND v.idescolaridade = esc.id AND e.id = v.idempresa AND v.id = @id ", new { id });
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
