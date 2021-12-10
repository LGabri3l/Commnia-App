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
    public class ProjectRepository : IProjectRepository
    {
        private readonly AppDBContext _context;

        public ProjectRepository(AppDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Project>> GetProjects()
        {
            var projects = await _context.Project.ToListAsync();
            return projects;
        }

        public async Task<Project> GetProject(int id)
        {
            var projects = await _context.Project.FirstOrDefaultAsync(x => x.IdProject == id);
            return projects;
        }

        public async Task InsertProject(Project project)
        {
            _context.Project.Add(project);
            await _context.SaveChangesAsync();
        }


        public async Task UpdateProject(Project project)
        {
            _context.Update(project);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable> GetProjectByBuilder()
        {
            
            var projectforbuilder = from p in _context.Project
                                    join b in _context.Builder on p.IdBuilder equals b.IdBuilder
                                    select new { p.Name, p.Address, p.Town, p.Council, p.StartDate, 
                                                 p.ApproximateValue, p.Construction, p.ExpectedConstructionEndDate, b.AccountName,    
                                                 p.State, p.IdProject, p.IdBuilder };
           return await projectforbuilder.ToListAsync();            

        }
    }
}
