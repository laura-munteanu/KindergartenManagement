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
        private IGroupsRepository _GroupsRepository;

        public GroupsController(IGroupsRepository GroupsRepository)
        {
            _GroupsRepository = GroupsRepository;
        }

        [HttpGet]
        public List<Group> GetList()
        {
           return _GroupsRepository.GetList();
        }

        [HttpGet("{id}")]
        public Group GetById(long id)
        {
            return _GroupsRepository.GetById(id);
        }
        
    }
}
