using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public interface ISchedulesRepository
    {
        List<Schedule> GetList(long groupId, DateTime startTime, DateTime endTime);
        Schedule GetById(long id);
        long Add(Schedule schedule);
        long Update(Schedule schedule); 
        bool Delete(long id);
    }
}
