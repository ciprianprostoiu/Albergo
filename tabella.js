const tableDiv = document.getElementById("table");



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
        data=[{giorno: "Data", singola: "Singole", doppia: "Multiple", suite: "Suite"}]
        let oggi = new Date(); 

        const giorno = oggi.getDate();
        const mese = oggi.getMonth() + 1;
        const anno = oggi.getFullYear();

        const data1 = giorno + "/" + mese + "/" + anno;

        const conf = {
          giorno: data1,
          singola: 10,
          doppia: 5,
          suite: 3
        };
        data.push(conf);

        while (true) {
          oggi.setDate(oggi.getDate() + 1);    

          const giorno1 = oggi.getDate();
          const mese1 = oggi.getMonth();
          const anno1 = oggi.getFullYear();

          const Data2 = giorno1 + "/" + (mese1 + 1) + "/" + anno1;

          const newconf = {
            giorno: Data2,
            singola: 10,
            doppia: 5,
            suite: 3
          };

          data.push(newconf);

          if (giorno1 === giorno && mese1=== mese) {
            break;
          }
        }
      }
    }
  }
}

const table1 = creaTable(tableDiv); // i due componenti non riescono a comunicare correttamente
table1.addData()
//download().then((r) => r.json).then((r) => {table1.setData(r); table1.render();})
table1.render()