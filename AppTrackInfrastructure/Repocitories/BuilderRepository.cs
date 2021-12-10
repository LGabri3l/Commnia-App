using Microsoft.EntityFrameworkCore;
using AppTrack.Core.Entities;
using AppTrack.Core.Interfaces;
using AppTrackInfrastructure.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

using System;
using System.Text;
using System.Collections;
using System.Linq;

namespace AppTrack.Infrastructure.Repocitories
{
    public class BuilderRepository : IBuildRepository
    {
        private readonly AppDBContext _context;

        public BuilderRepository(AppDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Builder>> GetBuilders()
        {
            var builders = await _context.Builder.ToListAsync();
            return builders;
        }

        public async Task<Builder> GetBuilder(int id)
        {
            var builder = await _context.Builder.FirstOrDefaultAsync(x => x.IdBuilder == id);
            return builder;
        }

        public async Task InsertBuilder(Builder builder)
        {
            _context.Builder.Add(builder);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateBuilder(Builder builder)
        {
            _context.Builder.Update(builder);
            await _context.SaveChangesAsync();
        }        

        public async Task<IEnumerable> GetAllBuilders()
        {

            var projectforbuilder = from b in _context.Builder
                                    join p in _context.Project on b.IdBuilder equals p.IdBuilder
                                    where p.Construction == "Progress"
                                    group new { b, p } by new {  b.AccountName, b.ABN, p.ApproximateValue, b.ContactName, b.Address, b.IdBuilder, p.IdProject  } into g
                                    select new
                                    {
                                        g.Key.AccountName,
                                        g.Key.ABN,
                                        g.Key.Address,
                                        g.Key.ContactName,
                                        TotalValue = g.Sum(x => x.p.ApproximateValue),
                                        g.Key.IdBuilder,
                                        g.Key.IdProject 
                                    };
            return await projectforbuilder.ToListAsync();

        }

    }
}
