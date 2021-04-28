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
    public class ChildrenController : ControllerBase
    {
        private IChildrenRepository _childrenRepository;

        public ChildrenController(IChildrenRepository childrenRepository)
        {
            _childrenRepository = childrenRepository;
        }
        [HttpGet]
        public List<Child> GetList()
        {
            return _childrenRepository.GetList();
        }
        [HttpGet("{id}")]
        public Child GetByID(long id)
        {
            return _childrenRepository.GetById(id);
        }
    }
}
