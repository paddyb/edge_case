# edge_case
example code for an edge.js issue

clone and run nnpm install

\>**node io.js** to invoke the proxy and fetch data

\>**node ex.js** to run an express route that invokes the proxy and fetches data

change proxy/DataProxy.cs from
```c#
public async Task<object> GetData(object args)
{
    return await Task.Run(()=> data);
}
```

to
```cs
public async Task<object> GetData(object args)
{
    return data;
}
```

rebuild and verify express route doesn't hang

