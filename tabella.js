const tableDiv = document.getElementById("table");
const outputform=document.getElementById("outputform");
const base = {
  singola: 10,
  doppia: 5,
  suite: 3
};

download().then((r2) => {table1.addData(r2); table1.render()});
const creaTable = (parentElement) => {
  let data = {};
  data_mostra={};
  return {
    returnData: () => {
      //FUNZIONE CHE RESTITUISCE LA LISTA DEI DATI (30G)
      return(data);
    },
    render: () => { // problema nella generazione della tabella
      let html = `<table class="table m-3 table-bordered"><tr><th>Data</th><th>Singole</th><th>Doppie</th><th>Suite</th></tr>`;
      for (const giorno in data_mostra) {
        const row = data[giorno];
        html += "<tr>" + 
        "<td>" + giorno + "</td>" + 
        "<td>" + row.singola + "</td>" + 
        "<td>" + row.doppia + "</td>" + 
        "<td>" + row.suite + "</td>" + 
        "</tr>";
      }
      html += "</table>";
      parentElement.innerHTML = html;
    },
    addData: (dataInput) => {
      data = dataInput;
      data_mostra={};
      if (Object.keys(data).length === 0){
        let oggi = new Date();
        let giorno = oggi.getDate();
        let mese = oggi.getMonth()+1;
        const anno = oggi.getFullYear();

        let gio=0
        if (giorno<10){
          gio="0"+ giorno;
        }else{
          gio=giorno
        }
        let mes=0
        if(mese<10){
          mes="0"+ mese;
        }
        else{
          mes=mese;
        }

        const data1 = anno + "-" + mes + "-" + gio;
        data[data1]= {...base};
        data_mostra[data1] = {...base};
        while (true) {
          oggi.setDate(oggi.getDate() + 1);    

          let giorno1 = oggi.getDate();
          let mese1 = oggi.getMonth()+1;
          const anno1 = oggi.getFullYear();
          if (giorno1<10){
            gio="0"+ giorno1;
          }else{
            gio=giorno1
          }
          if(mese1<10){
            mes="0"+ mese1;
          }
          else{
            mes=mese1
          }
          const Data2 = anno1 + "-" + mes + "-" + gio;

          data[Data2]= {...base}
          data_mostra[Data2] = {...base};



          if (giorno1 === giorno && mese1-1 === mese) {
            break;
        }
        }
      }else{
        let oggi = new Date();
        let giorno = oggi.getDate();
        let mese = oggi.getMonth()+1;
        const anno = oggi.getFullYear();

        let gio=0
        if (giorno<10){
          gio="0"+ giorno;
        }else{
          gio=giorno
        }
        let mes=0
        if(mese<10){
          mes="0"+ mese;
        }
        else{
          mes=mese
        }

        const data1 = anno + "-" + mes + "-" + gio;
        if(data1 in data){
          data_mostra[data1] = data.data1;
          console.log(data1)
          for (const giorno in data){
            if (giorno < data1){
              delete data[giorno];
            }
          }
        }else{
          data[data1]= {...base}
          data_mostra[data1] = {...base};
        }

        while (true) {
          oggi.setDate(oggi.getDate() + 1);    

          let giorno1 = oggi.getDate();
          let mese1 = oggi.getMonth()+1;
          const anno1 = oggi.getFullYear();
          if (giorno1<10){
            gio="0"+ giorno1;
          }else{
            gio=giorno1
          }
          if(mese1<10){
            mes="0"+ mese1;
          }
          else{
            mes=mese1
          }
          const Data2 = anno1 + "-" + mes + "-" + gio;
          if(Data2 in data){
            data_mostra[Data2] = data.Data2;
          }else{
            data[Data2]= {...base}
            data_mostra[Data2] = {...base};
          }


          if (giorno1 === giorno && mese1-1 === mese) {
            break;
        }
      }
      }
      upload(data)
      },
    remove:(resultform)=>{
      const formdata=resultform.data;
      const formsingole=resultform.singole;
      const formdoppia=resultform.doppia;
      const formsuite=resultform.suite;
      let controllogiorno=false;
      let controllosingola=false;
      let controllodoppia=false;
      let controllosuite=false;
      if (formdata in data){
        controllogiorno=true;
        if(formsingole > 0 && data[formdata].singola >= formsingole){
          data[formdata].singola-=formsingole;
          controllosingola=true;
        }
        if(formdoppia > 0 && data[formdata].doppia >= formdoppia){
          data[formdata].doppia-=formdoppia;
          controllodoppia=true;
        }
        if(formsuite > 0 && data[formdata].suite >= formsuite){
          data[formdata].suite-=formsuite;
          controllosuite=true;
        }
      }
      else{
        controllogiorno=true;
        data[formdata]={...base};
        console.log(data)
        console.log(formdata)
        if(formsingole > 0 && data[formdata].singola >= formsingole){
          data[formdata].singola-=formsingole;
          controllosingola=true;
        }
        if(formdoppia > 0 && data[formdata].doppia >= formdoppia){
          data[formdata].doppia-=formdoppia;
          controllodoppia=true;
        }
        if(formsuite > 0 && data[formdata].suite >= formsuite){
          data[formdata].suite-=formsuite;
          controllosuite=true;
        }
      }
      if((controllogiorno==true)&&((controllosingola==true)||(controllodoppia==true)||(controllosuite==true))){
        upload(table1.returnData()).then(() => {outputform.innerHTML="OK"; table1.render();})
        console.log(data);
      }
      else{
        outputform.innerHTML="KO";
      }
      
    }
  }
}

const table1 = creaTable(tableDiv); 

// table1.setData([{data: "Data", singole: "Singole", doppie: "Doppie", suite: "Suite"}]);
//DONLOAD
//table1.addData()
//download().then((r) => r.json).then((r) => {table1.setData(r); table1.render();})
