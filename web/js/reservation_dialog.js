const dialog = document.getElementById("myDialog");
const openButton = document.getElementById("openDialog");
const closeButton = document.getElementById("closeDialog");
const form = document.getElementById("reservation-form");

// open dialog
form.addEventListener("submit", (event) => {
    // ngan tu dong mo dialog
    event.preventDefault();

    // check valid
    if (form.reportValidity()) {
        // neu valid ok, mo dialog
        dialog.showModal();
    }
});

// close dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});
