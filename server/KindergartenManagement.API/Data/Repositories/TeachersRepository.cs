using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public class TeachersRepository : ITeachersRepository
    {
        private ApplicationDbContext _dbContext;
        public TeachersRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public long Add(Teacher teacher)
        {
            _dbContext.Teachers.Add(teacher);
            _dbContext.SaveChanges();
            return teacher.Id;
        }

        public long Update(Teacher teacher)
        {
            _dbContext.Update(teacher);
            _dbContext.SaveChanges();
            return teacher.Id;
        }

        public void Delete(long id)
        {
            var existingTeacher = GetById(id);
            if (existingTeacher != null) 
            {
                existingTeacher.IsDeleted = true;
                _dbContext.Update(existingTeacher);
                _dbContext.SaveChanges();
            }
        }

        public Teacher GetById(long id)
        {
            var teacher = _dbContext.Teachers
                .Where(x => x.Id == id && x.IsDeleted == false)
                .SingleOrDefault();
            return teacher;
        }

        public List<Teacher> GetList()
        {
            var teachers = _dbContext.Teachers
                .Where(x => x.IsDeleted == false)
                .ToList();
            return teachers;
        }
    }
}
