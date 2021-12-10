using AppTrack.Core.Interfaces;
using AppTrack.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AppTrack.API.Responses;

namespace AppTrack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppTrackUserController : ControllerBase
    {
        private readonly IAppTrackUserRepository _appTrackUserRepository;

        public AppTrackUserController(IAppTrackUserRepository appTrackUserRepository)
        {
            _appTrackUserRepository = appTrackUserRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var result = await _appTrackUserRepository.GetUser();
            return Ok(result);
        }

    }
}
