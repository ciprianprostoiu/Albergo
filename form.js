const createForm = (parentElement) => {
    let data = {};
    let callback = null;

    return {
        setLabels: (labels) => { data = labels; }, 
        onsubmit: (callbackInput) => { callback = callbackInput; },
        render: () => {
            parentElement.innerHTML = 
                `<div>Data<br/><input id="data" type="date" /></div>` +
                `<div>Singole<br/><input id="singole" type="number" /></div>` +
                `<div>Multiple<br/><input id="multiple" type="number" /></div>` +
                `<div>Suite<br/><input id="suite" type="number" /></div>` +
                `<button type='button' id='submit'>Submit</button>`;

            document.querySelector("#submit").onclick = () => {
                const result = {
                    data: document.querySelector("#data").value,
                    singole: document.querySelector("#singole").value,
                    multiple: document.querySelector("#multiple").value,
                    suite: document.querySelector("#suite").value
                };
                callback(result);  
            };
        }
    };
};

const formElement = document.getElementById("form");
const form = createForm(formElement);

form.onsubmit((result) => {
    console.log(result); 
});

form.render();
