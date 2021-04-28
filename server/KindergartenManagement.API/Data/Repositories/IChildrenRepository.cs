using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public interface IChildrenRepository
    {
        List<Child> GetList();
        Child GetById(long id);
        long AddOrUpdate(Child child);
        void Delete(long id);
    }
}
