using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AppTrack.Core.Entities
{
    public class AppTrackUser
    {
        [Key]
        public int IdUser { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
    }
}
