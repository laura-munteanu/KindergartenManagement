using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Entities
{
    public class Teacher
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
    }
}
