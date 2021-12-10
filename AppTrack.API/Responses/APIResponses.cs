using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppTrack.API.Responses
{
    public class APIResponses<T>
    {

        public APIResponses(T data)
        {
            Data = data;
        }
        public T Data { get; set; }
    }
}
