using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public interface ITeachersRepository
    {
        List<Teacher> GetList();
        Teacher GetById(long id);
        long Add(Teacher teacher);
        long Update(Teacher teacher);   

        void Delete(long id);

    }
}
