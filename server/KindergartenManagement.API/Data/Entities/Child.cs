using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Entities
{
    public class Child
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public long GroupId { get; set; }  
        public string Photo { get; set; }
        public bool IsDeleted { get; set; }
    }
}
