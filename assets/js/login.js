const form =
document.getElementById(
"login-form"
);

form.addEventListener(
"submit",

function(e){

e.preventDefault();

const tipo =
document
.getElementById(
"tipo"
)
.value;

if(
tipo==="tutor"
){

window.location=
"painel-tutor.html";

}

else if(
tipo==="veterinario"
){

window.location=
"painel-veterinario.html";

}

else if(
tipo==="admin"
){

window.location=
"painel-admin.html";

}

}

);