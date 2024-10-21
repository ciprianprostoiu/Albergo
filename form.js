const createForm = (parentElement) => {
    let data = {};
    let callback = null;

    return {
        setLabels: (labels) => { data = labels; }, 
        onsubmit: (callbackInput) => { callback = callbackInput; },
        render: () => {
            parentElement.innerHTML = 
                `<div>Data<br/><input id="data" type="date" class="form-label form-control"/></div>` +
                `<div>Singole<br/><input id="singole" type="number" class="form-label form-control"/></div>` +
                `<div>Doppia<br/><input id="doppia" type="number" class="form-label form-control"/></div>` +
                `<div>Suite<br/><input id="suite" type="number" class="form-label form-control"/></div>` +
                `<button type='button' id='submit' class="btn btn-primary">Conferma</button>`;

            document.querySelector("#submit").onclick = () => {
                const result = {
                    data: document.querySelector("#data").value,
                    singole: document.querySelector("#singole").value,
                    doppia: document.querySelector("#doppia").value,
                    suite: document.querySelector("#suite").value
                };
                callback(result);  
            };
        }
    };
};

const formElement = document.getElementById("form");
const form = createForm(formElement);

form.onsubmit((resultform) => { // 
    console.log(resultform, table1.data);
    table1.addData(resultform);
    //table1.data += result;
    table1.render();
    table1.remove(resultform);
    document.querySelector("#data").value = "";
    document.querySelector("#singole").value = "";
    document.querySelector("#doppia").value = "";
    document.querySelector("#suite").value = "";
    dataProva = new Date();
    dataProvaStr = dataProva.getFullYear() + "-" + (dataProva.getMonth() + 1) + "-" + dataProva.getDate()  
    console.log(dataProvaStr);
    
});

form.render();
