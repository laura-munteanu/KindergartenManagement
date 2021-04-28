using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public class ChildrenRepository : IChildrenRepository
    {
        private ApplicationDbContext _dbContext;

        public ChildrenRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public long AddOrUpdate(Child child)
        {
            if (child.Id > 0)
            {
                _dbContext.Update(child);
            }
            else
            {
                _dbContext.Children.Add(child);
            }
            _dbContext.SaveChanges();
            return child.Id;
        }

        public void Delete(long id)
        {
            var existingChild = GetById(id);
            if (existingChild != null)
            {
                existingChild.IsDeleted = true;
                _dbContext.Update(existingChild);
                _dbContext.SaveChanges();
            }
        }

        public Child GetById(long id)
        {
            var child = _dbContext.Children
                .Where(x => x.Id == id && x.IsDeleted == false)
                .SingleOrDefault();
            return child;
        }

        public List<Child> GetList()
        {
            var children = _dbContext.Children
                .Where(x => x.IsDeleted == false)
                .ToList();
            return children;
        }
    }
}
