using Dapper;
using ProjetoVaga2.Models;
using System.Globalization;

namespace ProjetoVaga2.DataAccess
{
    public class VagasDao : Dao
    {

        public IEnumerable<VagasDTO> ListarTodas()
        {
            try
            {
                AbrirConexao();
                return Conn.Query<VagasDTO>(@"SELECT v.id, e.nome AS nomeempresa, t.descricao AS turno, m.descricao AS modalidade, esc.descricao AS escolaridade, v.titulo_vaga, v.descricao, v.salario, v.data_limite_inscricao, v.quantidade_vaga 
                        FROM tb_empresa e, tb_turno t, tb_modalidade m, tb_escolaridade esc, tb_vaga v 
                        WHERE v.idempresa = e.id AND v.idturno = t.id AND v.idmodalidade = m.id AND v.idescolaridade = esc.id");
            }
            finally
            {
                FecharConexao();
            }
        }

        public VagasDTO Buscar(int id)
        {
            try
            {
                AbrirConexao();
                return Conn.QueryFirstOrDefault<VagasDTO>(@"SELECT v.id, e.nome AS nomeempresa, t.descricao AS turno, m.descricao AS modalidade, esc.descricao AS escolaridade, v.titulo_vaga, v.descricao, v.salario, v.data_limite_inscricao, v.quantidade_vaga  
                        FROM tb_empresa e, tb_turno t, tb_modalidade m, tb_escolaridade esc, tb_vaga v 
                        WHERE v.idempresa = e.id AND v.idturno = t.id AND v.idmodalidade = m.id AND v.idescolaridade = esc.id AND v.id = @id", new { id });
            }
            finally
            {
                FecharConexao();
            }
        }

        public bool RemoverVaga(int id)
        {
            try
            {
                AbrirConexao();
                int registros = Conn.Execute("DELETE FROM tb_vaga WHERE id = @id", new { id });
                return registros > 0;
            }
            finally
            {
                FecharConexao();
            }
        }
        public Vagas Alterar(Vagas vagas, int id = 0)
        {
            try
            {
                AbrirConexao();
                if (id > 0)
                {
                    vagas.id = id;
                }
                string sql = "UPDATE tb_vaga SET idempresa = @idempresa, idturno = @idturno, idmodalidade = @idmodalidade, idescolaridade = @idescolaridade, titulo_vaga = @titulo_vaga, descricao = @descricao, salario = @salario, data_limite_inscricao = @data_limite_inscricao, quantidade_vaga = @quantidade_vaga ";
                Conn.Execute(sql, new { vagas.idempresa, vagas.idturno, vagas.idmodalidade, vagas.idescolaridade, vagas.titulo_vaga, vagas.descricao, vagas.salario, vagas.data_limite_inscricao, vagas.quantidade_vaga });

                return vagas;

            }
            finally
            {
                FecharConexao();
            }
        }
        public Vagas? Incluir(Vagas vagas) 
        {
            try
            {
                AbrirConexao();
                string sql = "INSERT INTO tb_vaga (idempresa, idturno, idmodalidade, idescolaridade, titulo_vaga, descricao, salario, data_limite_inscricao, quantidade_vaga) VALUES (@idempresa, @idturno, @idmodalidade, @idescolaridade, @titulo_vaga, @descricao, @salario, @data_limite_inscricao, @quantidade_vaga)";
                int registro = Conn.Execute(sql, new
                {
                    vagas.idempresa,
                    vagas.idturno,
                    vagas.idmodalidade,
                    vagas.idescolaridade,
                    vagas.titulo_vaga,
                    vagas.descricao,
                    vagas.salario,
                    vagas.data_limite_inscricao,
                    vagas.quantidade_vaga
                });

                if (registro > 0)
                {
                    Vagas vagas1 = Conn.QueryFirstOrDefault<Vagas>(
                        "SELECT * FROM tb_vaga WHERE id = " +
                        "(SELECT MAX(id) FROM tb_vaga)");
                    return vagas1;
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
