//1ro capturamos el nombre y el apellido pos medio de promps
//OJO debemos guardarlo en algun lado

const nombre = prompt("Ingresa tu nombre")
const apellido = prompt("Ingresa tu apellido")

const iniNombre = nombre.charAt(0);
const iniApe = apellido.charAt(0);

//crear una etiqueta h2 con JS y la guardo en una constante llamada....bienvenida

const bienvenida = document.createElement("h2")
//ahora le inyecto el texto al h2 que llamé bienvenida
bienvenida.textContent = `Bienvenido: ${iniNombre} ${iniApe}`

//ahora como hago para enviar esto a la pagina web desde JS

const saludo = document.querySelector("#bienvenido")
//ahora despues de esto le incrusto el h2 o mejor le adiciono su HIJO
saludo.appendChild(bienvenida)
/*-------------------------------------*/
//crear el array vacio que va a ir guardando mis productos
let listaP = [];

function guardar(){
    const code = document.querySelector("#codigo").value;
    const pdt = document.querySelector("#producto").value;
    const price = document.querySelector("#precio").value;
   /*  console.log(code)
    console.log(pdt)
    console.log(price) */
    const producto = {
        codigo:code,
        producto:pdt,
        precio:price,
    }

    listaP = [...listaP,producto]
    console.table(listaP)

    const produAviso = document.createElement("h3");
    produAviso.textContent =`Acabas de Ingresar el producto: ${producto.producto}`;
    const aviso = document.querySelector("#aviso");
    aviso.appendChild(produAviso)
}


//Falta:
//1. Borrar el formulario cada que le demos guardar
//2. Que cada que ingresemos un producto, solo nos muestre...."acabas de ingresar el producto: {solo el ultimo}"
//3.Convertir los valores de precio en numeros para hacer calculos
//4. con esos valores en numero vamos a calcular el IVA y guardarlo tambien el objeto
//5. Incluir mas CSS esto esta HORRIBLE !!!




/* console.table(bienvenida) */
/* console.log(iniNombre)
console.log(iniApe) */