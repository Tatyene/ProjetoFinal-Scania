using System.ComponentModel.DataAnnotations;

namespace ProjetoVaga2.Models
{
    public class Vagas
    {
        public int id { get; set; }
        public int idempresa { get; set; }
        public int idturno { get; set; }
        public int idmodalidade { get; set; }
        public int idescolaridade { get; set; }
        public string? titulo_vaga { get; set; }
        public string? descricao { get; set; }
        public double salario { get; set; }
        public DateTime data_limite_inscricao { get; set; }
        public int quantidade_vaga { get; set; }
    }
}
