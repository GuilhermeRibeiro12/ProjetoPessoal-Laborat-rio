const botaoMenu =
document.querySelector(".menu-botao");

const linksMenu =
document.querySelector(".menu-links");

const formulario =
document.querySelector(
"#formulario-contato"
);

const mensagemForm =
document.querySelector(
".mensagem-form"
);

/* MENU */

if(
botaoMenu &&
linksMenu
){

botaoMenu.addEventListener(
"click",
()=>{

const menuAberto =
linksMenu.classList.toggle(
"ativo"
);

botaoMenu.setAttribute(
"aria-expanded",
String(menuAberto)
);

}
);

linksMenu.addEventListener(
"click",
(evento)=>{

if(
evento.target.tagName==="A"
){

linksMenu.classList.remove(
"ativo"
);

botaoMenu.setAttribute(
"aria-expanded",
"false"
);

}

}
);

}

/* FORM CONTATO */

if(
formulario
){

formulario.addEventListener(
"submit",
(evento)=>{

evento.preventDefault();

const dados =
new FormData(
formulario
);

const nome =
dados.get(
"nome"
);

const assunto =
dados.get(
"assunto"
);

mensagemForm.textContent =
`Obrigado, ${nome}! Sua mensagem sobre "${assunto}" foi registrada.`;

formulario.reset();

}
);

}

/* RESULTADOS */

const formResultado =
document.getElementById(
"form-resultados"
);

if(
formResultado
){

formResultado.addEventListener(
"submit",

function(e){

e.preventDefault();

const codigo =
document
.getElementById(
"codigo"
)
.value
.trim();

const painel =
document
.getElementById(
"resultado"
);

const exame =
JSON.parse(
localStorage.getItem(
codigo
)
);

if(
exame
){

if(
exame.status
===
"Concluído"
){

painel.innerHTML=
`
<h3>
Resultado disponível
</h3>

<p>
✅ Status:
Concluído
</p>

<a
href="resultado.pdf"
target="_blank">

Baixar PDF

</a>
`;

}else{

painel.innerHTML=
`
<h3>
Exame encontrado
</h3>

<p>
🟡 Status:
Em análise
</p>
`;

}

}else{

painel.innerHTML=
`
<p>
❌ Código não encontrado
</p>
`;

}

}

);

}