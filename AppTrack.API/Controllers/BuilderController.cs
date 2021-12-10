using AppTrack.Core.Interfaces;
using AppTrack.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AppTrack.API.Responses;

namespace AppTrack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuilderController : ControllerBase
    {
        private readonly IBuildRepository _buildRepository;

        public BuilderController(IBuildRepository buildRepository)
        {
            _buildRepository = buildRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetBuilders()
        {
            var builders = await _buildRepository.GetBuilders();
            return Ok(builders);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBuilder(int id)
        {
            var builder = await _buildRepository.GetBuilder(id);
            return Ok(builder);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Builder builder)
        {
            await _buildRepository.InsertBuilder(builder);
            return Ok(builder);
        }

        [HttpPut]
        public async Task<IActionResult> Put(Builder builder)
        {
            await _buildRepository.UpdateBuilder(builder);
            return Ok(builder);
        }
                
        [Route("GetAllBuilders")]
        public async Task<IActionResult> GetAllBuilders()
        {
            var result = await _buildRepository.GetAllBuilders();
            return Ok(result);
        }
    }
}
