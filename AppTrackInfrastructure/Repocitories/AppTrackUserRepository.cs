using AppTrack.Core.Entities;
using AppTrack.Core.Interfaces;
using AppTrackInfrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppTrack.Infrastructure.Repocitories
{
   public class AppTrackUserRepository : IAppTrackUserRepository
    {
        private readonly AppDBContext _context;

        public AppTrackUserRepository(AppDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable> GetUser()
        {
            var getUser = await _context.AppTrackUser.ToListAsync();
            return getUser;
        }



    }
}
