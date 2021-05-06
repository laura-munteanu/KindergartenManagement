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
    public class ActivitiesController : ControllerBase
    {
        private IActivitiesRepository _activitiesRepository;

        public ActivitiesController(IActivitiesRepository activitiesRepository)
        {
            _activitiesRepository = activitiesRepository;
        }
        [HttpGet]
        public List<Activity> GetList()
        {
            return _activitiesRepository.GetList();
        }
        [HttpGet("{id}")]
        public Activity GetByID(long id)
        {
            return _activitiesRepository.GetById(id);
        }
    }
}
