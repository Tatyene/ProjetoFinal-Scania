using Npgsql;

namespace ProjetoScania2.DataAccess
{
    public class Dao
    {
        private string Conexao
            => /*"Server=127.0.0.1;Port=5432;User Id=postgres;Password=angis2021;DataBase=dbrecursoshumanos";*/

         "Server=impacta-scania.postgres.database.azure.com;Database=dbrecursoshumanos;Port=5432;User Id=scania@impacta-scania;Password=Passw0rd;Trust Server Certificate=true";

        protected NpgsqlConnection Conn { get; set; }

        public Dao()
        {
            Conn = new NpgsqlConnection(Conexao);
        }

        protected void AbrirConexao()
        {
            Conn.Open();
        }

        protected void FecharConexao()
        {
            Conn.Close();
        }
    }
}
