const upload =(valore)=>{
    return new Promise((resolve,reject)=>{
      const urlset="https://ws.progettimolinari.it/cache/set";
      fetch(urlset,{
        method: "POST",
        headers: {
          "content-type": "application/json",
          "key": "66a7273b-a12f-48bb-86a9-e665265b8165"
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