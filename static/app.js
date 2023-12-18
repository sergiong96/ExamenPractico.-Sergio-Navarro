console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...

//VARIABLES
//Variables diálogo añadir
const addButton = document.querySelector("#lateralBar ul li[data-target='add']");
const addDialog = document.querySelector("#tableSection dialog#addDialog");
const cancelBtnAddDialog = document.querySelector("#tableSection dialog#addDialog button[data-action='cancelar']");

//Variables diálogo borrar
const delButton = document.querySelectorAll("#tableSection tbody td>button");
const delDialog = document.querySelector("#tableSection dialog#deleteDialog");
const deleteBtnDelDialog = document.querySelector("#tableSection dialog#deleteDialog button[data-action='borrar']");
const mantBtnDelDialog = document.querySelector("#tableSection dialog#deleteDialog button[data-action='mantener']");



//EVENTOS
//Eventos para abrir diálogos
if (addButton) {
    addButton.addEventListener("click", () => {
        addDialog.showModal();
    });
}

if (delButton) {
    delButton.forEach((button) => {
        button.addEventListener("click", () => {
            delDialog.showModal();
        });
    });
}



//Eventos para  cerrar diálogos
if (cancelBtnAddDialog) {
    cancelBtnAddDialog.addEventListener("click", () => {
        addDialog.close();
    });
}

if (deleteBtnDelDialog && mantBtnDelDialog) {
    deleteBtnDelDialog.addEventListener("click", () => {
        delDialog.close();
    });

    mantBtnDelDialog.addEventListener("click", () => {
        delDialog.close();
    });
}
