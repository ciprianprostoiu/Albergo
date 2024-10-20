const download = () =>{
    return new Promise((resolve,reject)=>{
      const urlget="https://ws.cipiaceinfo.it/cache/get";
      fetch(urlget, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "key": "f0c42ac1-0660-485c-80b0-a7cd2b00acb2"
        },
        body: JSON.stringify({
          "key": "albergo"
        })
      })
      .then(result=>result.json())
      .then(data=> resolve(data.result));
    })
}