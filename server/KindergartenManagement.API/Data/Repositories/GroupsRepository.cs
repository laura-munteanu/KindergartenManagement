using KindergartenManagement.API.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Repositories
{
    public class GroupsRepository : IGroupsRepository
    {
        private ApplicationDbContext _dbContext;

        public GroupsRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public long AddOrUpdate(Group childrenGroup)
        {
            if(childrenGroup.Id > 0)
            {
                //update
                _dbContext.Update(childrenGroup);

            }
            else
            {
                //insert
                _dbContext.Add(childrenGroup);
            }
            _dbContext.SaveChanges();
            return childrenGroup.Id;
        }

        public void Delete(long id)
        {
            var existingGroup = GetById(id);
            if (existingGroup != null)
            {
                existingGroup.IsDeleted = true;
                _dbContext.Update(existingGroup);
                _dbContext.SaveChanges();
            }
        }

        public Group GetById(long id)
        {
            var Group = _dbContext.Groups
                .Where(x => x.Id == id && x.IsDeleted == false)
                .SingleOrDefault();
            return Group;

        }

        public List<Group> GetList()
        {
            var Groups = _dbContext.Groups
                .Where(x => x.IsDeleted == false)
                .ToList();
            return Groups;

        }
    }
}
