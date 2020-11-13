using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestePraticoWevo.Models.Database.Tables
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { set; get; }
        public string CPF { set; get; }
        public string Email { set; get; }
        public string Phone { set; get; }
        [ForeignKey("SexId")]
        public Sex Sex { set; get; }
        public int SexId { set; get; }
        [Column(TypeName = "Date")]
        public DateTime Birthday { set; get; }
    }
}
