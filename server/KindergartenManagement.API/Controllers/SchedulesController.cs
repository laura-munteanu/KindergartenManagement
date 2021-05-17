using KindergartenManagement.API.Data.Entities;
using KindergartenManagement.API.Data.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SchedulesController : ControllerBase
    {
        private ISchedulesRepository _schedulesRepository;

        public SchedulesController(ISchedulesRepository schedulesRepository)
        {
            _schedulesRepository = schedulesRepository;
        }

        [HttpGet]
        public List<Schedule> GetList([FromQuery] long groupId, [FromQuery] DateTime startTime, [FromQuery] DateTime endTime)
        {
            return _schedulesRepository.GetList(groupId, startTime, endTime);
        }

        [HttpGet("{id}")]
        public Schedule GetById(long id)
        {
            return _schedulesRepository.GetById(id);
        }

        [HttpPost]
        public long Add(Schedule schedule) 
        {
            return _schedulesRepository.Add(schedule);
        }

        [HttpPut]
        public long Update(Schedule schedule) 
        {
            return _schedulesRepository.Update(schedule);
        }

        [HttpDelete("{id}")]
        public bool Delete(long id)
        {
            return _schedulesRepository.Delete(id);
        }
    }
}
