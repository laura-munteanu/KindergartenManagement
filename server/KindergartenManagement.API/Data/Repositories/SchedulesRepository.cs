using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public class SchedulesRepository : ISchedulesRepository
    {
        private ApplicationDbContext _dbContext;

        public SchedulesRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public long Add(Schedule schedule)
        {
            throw new NotImplementedException();
        }

        public void Delete(long id)
        {
            throw new NotImplementedException();
        }

        public Schedule GetById(long id)
        {
            var schedule = _dbContext.Schedules
                .Where(x => x.Id == id)
                .SingleOrDefault();
            return schedule;
        }

        public List<Schedule> GetList(long groupId, DateTime startTime, DateTime endTime)
        {
            throw new NotImplementedException();
        }

        public long Update(Schedule schedule)
        {
            throw new NotImplementedException();
        }
    }
}
