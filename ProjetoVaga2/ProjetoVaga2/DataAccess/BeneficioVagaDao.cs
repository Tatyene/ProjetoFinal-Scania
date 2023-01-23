using Dapper;
using ProjetoVaga2.Models;

namespace ProjetoVaga2.DataAccess
{
    public class BeneficioVagaDao : Dao
    {
        //Lista o beneficios que 1 vaga possui / deve ser usado no momento de exibição das informações de 1vaga
        public IEnumerable<Vizualizar> ListarBeneficios(int id)
        {
            try
            {
                AbrirConexao();
                return Conn.Query<Vizualizar>(@"select bv.id, b.descricao
                    FROM tb_beneficiovagas bv, tb_beneficio b
                    WHERE b.id = bv.idbeneficio
                    and bv.idvaga = @id", new { id });
            }
            finally
            {
                FecharConexao();
            }
        }
        //Inclui beneficios em uma vaga
        public BeneficiosVagas? IncluirBeneficio(BeneficiosVagas beneficiosVagas)
        {
            try
            {
                AbrirConexao();
                string sql = "INSERT INTO tb_beneficiovagas (idvaga, idbeneficio) VALUES (@idvaga, @idbeneficio)";
                int registro = Conn.Execute(sql, new
                {
                    beneficiosVagas.idvaga,
                    beneficiosVagas.idbeneficio
                });
                if (registro > 0 ) 
                {
                    BeneficiosVagas beneficiosVagas1 = Conn.QueryFirstOrDefault<BeneficiosVagas>(
                        "SELECT * FROM tb_beneficiovagas WHERE id =" +
                        "(SELECT MAX(id) FROM tb_beneficiovagas)");
                    return beneficiosVagas1;
                }
                return null;
            }
            finally
            {
                FecharConexao();
            }
        }
        //Remove beneficio de uma vaga
        public bool RemoverBeneficio(int id)
        {
            try
            {
                AbrirConexao();
                int registro = Conn.Execute("DELETE FROM tb_beneficiovagas WHERE id = @id");
                return registro > 0; 
            }
            finally
            {
                FecharConexao();
            }
        }
        public BeneficiosVagas AlterarBeneficio (BeneficiosVagas beneficiosVagas, int id = 0)
        {
            try
            {
                AbrirConexao();
                if (id > 0)
                {
                    beneficiosVagas.id = 0;
                }
                string sql = "UPDATE tb_beneficiovagas SET idbeneficio = @idbeneficio";
                Conn.Execute(sql, new { beneficiosVagas.idbeneficio});

                return beneficiosVagas;
            }
            finally
            {
                FecharConexao();
            }
        }
    }
}
