using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace proxy
{
    public class DataProxy
    {
        private readonly IEnumerable<string> data = new[] { "s1", "s2", "s3" };
        public async Task<object> GetProxy(object args)
        {
            return new { getData = (Func<object, Task<object>>)GetData };
        }

        public async Task<object> GetData(object args)
        {
            //return data;
            return await Task.Run(()=> data);
        }
    }
}
