using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Entities
{
    public class Activity
    {
        public long Id { get; set; }
        public string ActivityName { get; set; }
        public bool InKindergarten { get; set; } 
        public bool IsDeleted { get; set; }
    }
}
