using AppTrack.Core.Interfaces;
using AppTrack.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AppTrack.API.Responses;

namespace AppTrack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectController(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetProjects()
        {
            var projects = await _projectRepository.GetProjects();
            return Ok(projects);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProject(int id)
        {
            var project = await _projectRepository.GetProject(id);
            return Ok(project);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Project project)
        {
            await _projectRepository.InsertProject(project);
            return Ok(project);
        }

        [HttpPut]
        public async Task<IActionResult> Put(Project project)
        {
            
            await _projectRepository.UpdateProject(project);            
            return Ok(project);
        }

        [Route("GetProjectForBuilder")]
        public async Task<IActionResult> GetProjectByBuilder()
        {
            var result = await _projectRepository.GetProjectByBuilder();
            return Ok(result);
        }
    }
}
