const download = () =>{
    return new Promise((resolve,reject)=>{
      const urlget="https://ws.progettimolinari.it/cache/get";
      fetch(urlget, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "key": "66a7273b-a12f-48bb-86a9-e665265b8165"
        },
        body: JSON.stringify({
          "key": "albergo"
        })
      })
      .then(result=>result.json())
      .then(data=> resolve(data.result));
    })
}