using AppTrack.Core.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppTrack.Core.Interfaces
{
    public interface IProjectRepository
    {
        Task<IEnumerable<Project>> GetProjects();
        Task<Project> GetProject(int id);
        Task InsertProject(Project project);
        Task UpdateProject(Project project);
        Task<IEnumerable> GetProjectByBuilder();
    }
}
