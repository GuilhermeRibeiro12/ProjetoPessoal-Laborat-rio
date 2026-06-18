const form =
document.getElementById(
"admin-form"
);

form.addEventListener(
"submit",

function(e){

e.preventDefault();

const exame={

codigo:
document
.getElementById(
"codigo"
)
.value,

status:
document
.getElementById(
"status"
)
.value

};

localStorage.setItem(

exame.codigo,

JSON.stringify(
exame
)

);

document
.getElementById(
"mensagem"
)
.innerHTML=
"Resultado salvo ✅";

form.reset();

}

);