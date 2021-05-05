using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Entities
{
    public class Group
    {
        public long Id { get; set; }
        public string GroupName { get; set; }
        public bool IsDeleted { get; set; }
    }
}
