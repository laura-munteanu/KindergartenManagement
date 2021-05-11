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
    public class GroupsController : ControllerBase
    {
        private IGroupsRepository _groupsRepository; 

        public GroupsController(IGroupsRepository groupsRepository)
        {
            _groupsRepository = groupsRepository;
        }

        [HttpGet]
        public List<Group> GetList()
        {
            return _groupsRepository.GetList();
        }

        [HttpGet("{id}")]
        public Group GetById(long id)
        {
            return _groupsRepository.GetById(id);
        }
        [HttpPost]
        public long Add(Group group)
        {
            return _groupsRepository.Add(group);
        }

        [HttpPut]
        public long Update(Group group)
        {
            return _groupsRepository.Update(group);
        }

        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            _groupsRepository.Delete(id);
        }

    }
}
