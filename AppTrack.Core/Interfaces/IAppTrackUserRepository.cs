using AppTrack.Core.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace AppTrack.Core.Interfaces
{
   public  interface IAppTrackUserRepository
    {
        Task<IEnumerable> GetUser();
    }
}
