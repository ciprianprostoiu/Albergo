const upload =(valore)=>{
    return new Promise((resolve,reject)=>{
      const urlset="https://ws.cipiaceinfo.it/cache/set";
      fetch(urlset,{
        method: "POST",
        headers: {
          "content-type": "application/json",
          "key": "f0c42ac1-0660-485c-80b0-a7cd2b00acb2"
        },
        body: JSON.stringify({
          "key": "albergo",
          "value": valore
        })
      })
      .then(response=>response.json())
      .then(() =>resolve(download()))
  });
  };