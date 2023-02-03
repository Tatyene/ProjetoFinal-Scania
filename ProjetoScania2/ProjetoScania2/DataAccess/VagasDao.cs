using Dapper;
using ProjetoScania2.Models;
using ProjetoScania2.ViewModels;
using ProjetoVaga2.Models;

namespace ProjetoScania2.DataAccess
{
    public class VagasDao : Dao
    {
        
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
        

        public Vagas BuscarVagaApi(int id)
        {
            try
            {
                AbrirConexao();
                return Conn.QueryFirstOrDefault<Vagas>(@"SELECT * FROM tb_vaga WHERE id = @id", new { id });
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
                string sql = "UPDATE tb_vaga SET idempresa = @idempresa, idturno = @idturno, idmodalidade = @idmodalidade, idescolaridade = @idescolaridade, titulo_vaga = @titulo_vaga, descricao = @descricao, salario = @salario, data_limite_inscricao = @data_limite_inscricao, quantidade_vaga = @quantidade_vaga " +
                    "where id = @id";
                Conn.Execute(sql, new { vagas.idempresa, vagas.idturno, vagas.idmodalidade, vagas.idescolaridade, vagas.titulo_vaga, vagas.descricao, vagas.salario, vagas.data_limite_inscricao, vagas.quantidade_vaga, vagas.id });

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
