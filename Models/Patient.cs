using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.MobileServices.Query;
using Microsoft.WindowsAzure.MobileServices.SQLiteStore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Patients.Models
{
    public class Patient
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateOfBirth { get; set; }
    }




    public class PatientDatabase
    {
        readonly MobileServiceSQLiteStore database;

        public PatientDatabase(string dbPath)
        {
            database = new MobileServiceSQLiteStore(dbPath);
            database.DefineTable<Patient>();
            database.InitializeAsync().Wait();
        }

        public async Task<List<Patient>> GetItemsAsync()
        {
            var query = new MobileServiceTableQueryDescription("Patient");
            JToken jtoken = await database.ReadAsync(query);

            ObservableCollection<Patient> patientlist = new ObservableCollection<Patient>();

            var converted_result = jtoken.Select(x => JsonConvert.DeserializeObject<Patient>(x.ToString()));
            return converted_result.ToList();
        }

        /*public async Task<List<Patient>> GetItemsNotDoneAsync()
        {
            return await database.ExecuteQueryAsync("Patient", "SELECT * FROM [Patient] WHERE [Done] = 0");
        }*/

        public async Task<Patient> GetItemAsync(Guid id)
        {
            var patient = await database.LookupAsync("Patient", id.ToString());
            return JsonConvert.DeserializeObject<Patient>(patient.ToString());
        }

        public async Task<int> SaveItemAsync(Patient item)
        {
            await database.UpsertAsync("Patient",new List<JObject>() { JObject.FromObject(item)},true);
            return 200;
        }

        public async Task<int> DeleteItemAsync(Patient item)
        {
            await database.DeleteAsync("Patient", new List<string>() { item.Id.ToString() });
            return 200;
        }
    }
}
