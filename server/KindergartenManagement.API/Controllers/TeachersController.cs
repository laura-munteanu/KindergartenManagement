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
        private readonly ITeachersRepository _teachersRepository;
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

        [HttpPost]
        public long Add(Teacher teacher) 
        {
            return _teachersRepository.Add(teacher);
        }

        [HttpPut]
        public long Update(Teacher teacher)
        {
            return _teachersRepository.Update(teacher);
        }

        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            _teachersRepository.Delete(id);
        }

    }
}
