using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KindergartenManagement.API.Data.Entities
{
    public class Schedule
    {
        public long Id { get; set; }
        public long ActivityId { get; set; }
        public long TeacherId { get; set; }
        public long GroupId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }  
    }
}
