const tableDiv = document.getElementById("table");



const creaTable = (parentElement) => {
  let data;
  return {
    build: (dataInput) => {
      data = dataInput;
    },
    render: () => {
      let html = `<table class="table m-3 table-bordered">`;
      html += data.map((row) => "<tr>" + row.map((col) => "<td>" + col + "</td>"
        ).join("")
      ).join("") + "</tr>";
      html += "</table";
      parentElement.innerHTML = html;
    }
  }
}

const table1 = creaTable(tableDiv);
table1.build([["Data", "Singola", "Multiple", "Suite"]]);
table1.render();
