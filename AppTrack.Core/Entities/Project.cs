using System;
using System.ComponentModel.DataAnnotations;

namespace AppTrack.Core.Entities
{
    public class Project
    {

       [Key]
       public int IdProject { get; set; }
       public string Name { get; set; }
       public string Address { get; set; }
       public string Town { get; set; }
       public string Council { get; set; }
       public string State { get; set; }
       public int ApproximateValue { get; set; }
       public string Construction { get; set; }
       public DateTime StartDate { get; set; }
       public DateTime ExpectedConstructionEndDate { get; set; }
       public int IdBuilder { get; set; }
      


    }
}
