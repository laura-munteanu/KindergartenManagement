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
            _dbContext.Schedules.Add(schedule);
            _dbContext.SaveChanges();
            return schedule.Id;
        }

        public bool Delete(long id)
        {
            var existingSchedule = GetById(id);
            if (existingSchedule != null)
            {
                _dbContext.Remove(existingSchedule);
                _dbContext.SaveChanges();
                return true;
            }
            return false;
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
            {
                var schedules = _dbContext.Schedules
                    .Where(x => x.GroupId == groupId && startTime <= x.StartTime && x.StartTime < endTime)
                    .ToList();
                return schedules;
            }
        }

        public long Update(Schedule schedule)
        {
            _dbContext.Schedules.Update(schedule);
            _dbContext.SaveChanges();
            return schedule.Id;
        }
    }
}
