using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public class ActivitiesRepository : IActivitiesRepository
    {
        private ApplicationDbContext _dbContext;

        public ActivitiesRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public long AddOrUpdate(Activity activity)
        {
            if (activity.Id > 0)
            {
                _dbContext.Update(activity);
            }
            else
            {
                _dbContext.Activities.Add(activity);
            }
            _dbContext.SaveChanges();
            return activity.Id;
        }

        public void Delete(long id)
        {
            var existingActivity = GetById(id);
            if (existingActivity != null)
            {
                existingActivity.IsDeleted = true;
                _dbContext.Update(existingActivity);
                _dbContext.SaveChanges();
            }
        }

        public Activity GetById(long id)
        {
            var activity = _dbContext.Activities
               .Where(x => x.Id == id && x.IsDeleted == false)
               .SingleOrDefault();
            return activity;
        }

        public List<Activity> GetList()
        {
            var activities = _dbContext.Activities
                .Where(x => x.IsDeleted == false)
                .ToList();
            return activities;
        }
    }
}
