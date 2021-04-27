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
    public class TeachersController : ControllerBase
    {
        private ITeachersRepository _teachersRepository;
        public TeachersController(ITeachersRepository teachersRepository)
        {
            _teachersRepository = teachersRepository;
        }

        [HttpGet]
        public List<Teacher> GetList()
        {
            return _teachersRepository.GetList();
        }

        [HttpGet("{id}")]
        public Teacher GetById(long id)
        {
            return _teachersRepository.GetById(id);
        }
    }
}
