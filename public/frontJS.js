"use strict";

const modDiv = document.querySelector(".modalDiv");

const delFormDiv = document.querySelector(".deleteForm");
const cancelDelButton = document.getElementById("cancelDel");

const editFormDiv = document.querySelector(".editForm");
const cancelEditButton = document.getElementById("cancelEdit");
const firstNameEditInput = document.getElementById("f_name_edit");
const lastNameEditInput = document.getElementById("l_name_edit");

const hiddenDeleteInput = document.getElementById("hidDelInput");
const hiddenEditInput = document.getElementById("hidEditInput");

// The delete button/s code. ------------------------------
const deleteButtons = document.querySelectorAll(".deleteName");
for (let delButton of deleteButtons) {
    delButton.addEventListener('click', delPopUp)
}

function delPopUp(e){
    let hiddenDiv = e.target.previousElementSibling;
    let idString = hiddenDiv.dataset.id_value;
    hiddenDeleteInput.value = idString;
    modDiv.classList.toggle("hiddenDiv");
    delFormDiv.classList.toggle("hiddenDiv");
}

cancelDelButton.addEventListener("click", cancelDel);
function cancelDel(){
    modDiv.classList.toggle("hiddenDiv");
    delFormDiv.classList.toggle("hiddenDiv");
}

// The edit button/s code. ------------------------------
const editButtons = document.querySelectorAll(".editName");
for (let editButton of editButtons) {
    editButton.addEventListener('click', editPopUp)
}

function editPopUp(e){
    let paraElement = e.target.parentElement.previousElementSibling;
    let firstNameSpanText = paraElement.querySelector(".firstName").textContent;
    firstNameEditInput.value = firstNameSpanText;
    let lastNameSpanText = paraElement.querySelector(".lastName").textContent;
    lastNameEditInput.value = lastNameSpanText;

    let hiddenDiv = e.target.previousElementSibling.previousElementSibling;
    let idString = hiddenDiv.dataset.id_value;
    hiddenEditInput.value = idString;

    modDiv.classList.toggle("hiddenDiv");
    editFormDiv.classList.toggle("hiddenDiv");
}

cancelEditButton.addEventListener("click", cancelEdit);
function cancelEdit(){
    modDiv.classList.toggle("hiddenDiv");
    editFormDiv.classList.toggle("hiddenDiv");
}

