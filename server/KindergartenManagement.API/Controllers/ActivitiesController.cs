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

        [HttpPost]
        public long Add(Activity activity)
        {
            return _activitiesRepository.Add(activity);
        }

        [HttpPut]
        public long Update(Activity activity) 
        {
            return _activitiesRepository.Update(activity);
        }

        [HttpDelete("{id}")]
        public void Delete(long id)
        {
             _activitiesRepository.Delete(id);
        }
    }
}
