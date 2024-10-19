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
        "<td>" + row.data + "</td>" + 
        "<td>" + row.singole + "</td>" + 
        "<td>" + row.multiple + "</td>" + 
        "<td>" + row.suite + "</td>" + 
        "</tr>";
      })
      html += "</table>";
      parentElement.innerHTML = html;
    },
    addData: (dataInput) => {
      data.push(dataInput);
    }
  }
}

const table1 = creaTable(tableDiv); // i due componenti non riescono a comunicare correttamente
table1.addData([{data: "Data", singole: "Singole", multiple: "Multiple", suite: "Suite"}]);
//download().then((r) => r.json).then((r) => {table1.setData(r); table1.render();})
table1.render()