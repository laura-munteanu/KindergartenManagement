using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public interface IActivitiesRepository
    {
        List<Activity> GetList();
        Activity GetById(long id);
        long AddOrUpdate(Activity activity);
        void Delete(long id);
    }
}
