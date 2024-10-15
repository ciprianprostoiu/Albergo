const table = document.getElementById("table");



const createTable = (parentElement) => {
  let data;
  return {
    build: (dataInput) => {
      data = dataInput;
    },
    render: () => {
      let htmlTable = "<table>";
      htmlTable += data.map((row) => 
        "<tr>" + row.map((col) => 
          "<td>" + col + "</td>"
        ).join("")
      ).join("") + "</tr>";
      htmlTable += "</table";
      parentElement.innerHTML = htmlTable;
    }
  }
}

const table1 = createTable(document.querySelector("#table1"));
table1.build([["Cognome", "Voto"], ["Pogba", "6"], ["Vlahovic", 8], ["Thuram", 6.5]]);
table1.render();
