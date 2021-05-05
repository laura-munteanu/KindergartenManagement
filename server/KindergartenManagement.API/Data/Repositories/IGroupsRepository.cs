using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public interface IGroupsRepository 
    {
        List<Group> GetList();
        Group GetById(long id);
        long AddOrUpdate(Group childrenGroup);
        void Delete(long id);
    }
}
