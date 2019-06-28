using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Patients.Models;
namespace Patients.Controllers
{
    [Route("api/[controller]")]
    public class PatientDataController : Controller
    {
        static PatientDatabase database;

        public static PatientDatabase Database
        {
            get
            {
                database = database ?? new PatientDatabase("local.db");
                return database;
            }
        }


        [HttpGet("[action]")]
        public async Task<IEnumerable<Patient>> GetPatientsAsync()
        {
            return await Database.GetItemsAsync();
        }

        [HttpPost("[action]")]
        public async Task<int> UpsertPatientsAsync([FromBody]Patient input)
        {           
            return await Database.SaveItemAsync(input);
        }
        [HttpDelete("[action]")]
        public async Task<int> DeletePatientsAsync(Guid Id)
        {
            Patient Deletetion = await Database.GetItemAsync(Id);
            return await Database.DeleteItemAsync(Deletetion);
        }

    }
    
}
