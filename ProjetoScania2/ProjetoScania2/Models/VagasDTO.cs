namespace ProjetoVaga2.Models
{
    public class VagasDTO
    {
        public int id { get; set; }
        public string? nomeempresa { get; set; }
        public string? turno { get; set; }
        public string? modalidade { get; set; }
        public string? escolaridade { get; set; }
        public string? titulo_vaga { get; set; }
        public string? descricao { get; set; }
        public double salario { get; set; }
        public string? data_limite_inscricao { get; set; }
        public int quantidade_vaga { get; set; }

    }
}
