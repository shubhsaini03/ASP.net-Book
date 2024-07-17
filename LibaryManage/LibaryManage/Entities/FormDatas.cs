using System;

namespace LibaryManage.Entities
     
{
   
    public class FormDatas
        {
            public int Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }

            public string state { get; set; } = string.Empty;
            public string city { get; set; } = string.Empty;
            public string gender { get; set; } = string.Empty;
            public DateTime DOB { get; set; }
            public string photo { get; set; }
            public string[] Hobbies { get; set; }


        }
    
}
