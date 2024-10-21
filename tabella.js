const tableDiv = document.getElementById("table");
const outputform=document.getElementById("outputform");


const creaTable = (parentElement) => {
  let data = [];
  return {
    setData: (dataInput) => {
      data = dataInput;
    },
    render: () => { // problema nella generazione della tabella
      let html = `<table class="table m-3 table-bordered">`;
      data.forEach((row) => {
        html += "<tr>" + 
        "<td>" + row.giorno + "</td>" + 
        "<td>" + row.singola + "</td>" + 
        "<td>" + row.doppia + "</td>" + 
        "<td>" + row.suite + "</td>" + 
        "</tr>";
      })
      html += "</table>";
      parentElement.innerHTML = html;
    },
    addData: () => {
      if (data.length === 0) {
        data=[{giorno: "Data", singola: "Singole", doppia: "Doppie", suite: "Suite"}]
        let oggi = new Date(); 

        let giorno = oggi.getDate();
        let mese = oggi.getMonth() + 1;
        const anno = oggi.getFullYear();
        if (giorno<10){
          giorno="0"+giorno;
        }
        if(mese<10){
          mese="0"+mese;
        }
        const data1 = anno + "-" + mese + "-" + giorno;

        const conf = {
          giorno: data1,
          singola: 10,
          doppia: 5,
          suite: 3
        };
        data.push(conf);

        while (true) {
          oggi.setDate(oggi.getDate() + 1);    

          let giorno1 = oggi.getDate();
          let mese1 = oggi.getMonth();
          const anno1 = oggi.getFullYear();
          
          const Data2 = anno1 + "-" + (mese1 + 1) + "-" + giorno1;

          const newconf = {
            giorno: Data2,
            singola: 10,
            doppia: 5,
            suite: 3
          };

          data.push(newconf);

          if (giorno1 === giorno && mese1 === mese) {
            break;
        }
        }
      }
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
      let indice=-1;
      for (let i =0; i<data.length;i++){
        if (data[i].giorno==formdata){
          indice=i;
          controllogiorno=true;
          break;
        }
      }
      if (controllogiorno==true){
        if (formsingole>0){
          if((data[indice].singola>0)&&(data[indice].singola>=formsingole)){
            data[indice].singola-=formsingole;
            controllosingola=true;
          }
          else{
            controllosingola=false;
          }
        }
        if (formdoppia>0){
          if((data[indice].doppia>0)&&(data[indice].doppia>=formdoppia)){
            data[indice].doppia-=formdoppia;
            controllodoppia=true;
          }
          else{
            controllodoppia=false;
          }
        }
        if (formsuite>0){
          if((data[indice].suite>0)&&(data[indice].suite>=formsuite)){
            data[indice].suite-=formsuite;
            controllosuite=true;
          }
          else{
            controllosuite=false;
          }
        }
      }
      if((controllogiorno==true)&&((controllosingola==true)||(controllodoppia==true)||(controllosuite==true))){
        outputform.innerHTML="OK";
        table1.render();
      }
      else{
        outputform.innerHTML="KO";
      }
    }
  }
}

const table1 = creaTable(tableDiv); 
// table1.setData([{data: "Data", singole: "Singole", doppie: "Doppie", suite: "Suite"}]);
table1.addData()
//download().then((r) => r.json).then((r) => {table1.setData(r); table1.render();})
table1.render()