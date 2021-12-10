using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AppTrack.Core.Entities
{
    public class Builder
    {
       [Key]
       public int IdBuilder { get; set; }
       public string AccountName { get; set; }
       public string ContactName { get; set; }
       public string Address { get; set; }
       public string ABN { get; set; }
    }
}
