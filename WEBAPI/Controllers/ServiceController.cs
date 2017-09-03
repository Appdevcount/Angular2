using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WEBAPI.Controllers
{
    public class ServiceController : ApiController
    {
        List<Employee> Emps= new List < Employee >
            {
                new Employee { code="Emp1", name="Emp", gender="Male", annualSalary=1, dateOfBirth="07/07/1999" },
                new Employee { code="Emp2", name="Emp", gender="Male", annualSalary=1, dateOfBirth="07/07/1999" },
                new Employee { code="Emp3", name="Emp", gender="Female", annualSalary=1, dateOfBirth="07/07/1999" },
                new Employee { code="Emp4", name="Emp", gender="Male", annualSalary=1, dateOfBirth="07/07/1999" },
                new Employee { code="Emp5", name="Emp", gender="Male", annualSalary=1, dateOfBirth="07/07/1999" }
            };
        public IEnumerable<Employee> Get()
        {
            return Emps;
        }
        public Employee Get(string code)
        {
            return Emps.FirstOrDefault(c => c.code == code);
        }
             
    }
}

public class Employee
{
    public string code { get; set; }
    public string name { get; set; }
    public string gender { get; set; }
    public int annualSalary { get; set; }
    public string dateOfBirth { get; set; }
}

