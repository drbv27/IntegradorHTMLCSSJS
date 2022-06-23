//1ro capturamos el nombre y el apellido pos medio de promps
//OJO debemos guardarlo en algun lado

const nombre = prompt("Ingresa tu nombre")
const apellido = prompt("Ingresa tu apellido")

const iniNombre = nombre.charAt(0).toUpperCase();//5.....añadimos el metodo toUpperCase()
const iniApe = apellido.charAt(0).toUpperCase();

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

    //........2
    document.querySelector("#aviso").innerHTML=""
    //........2

    const code = document.querySelector("#codigo").value;
    const pdt = document.querySelector("#producto").value;
    const price = parseInt(document.querySelector("#precio").value);//......3
    
    const producto = {
        codigo:code,
        producto:pdt,
        precio:price,
        iva:price*0.19,//......4
        total:price+(price*0.19),//....4
    }


    //parseInt(texto a convertir en numero)

    listaP = [...listaP,producto]
    console.table(listaP)

    const produAviso = document.createElement("h3");
    produAviso.textContent =`Acabas de Ingresar el producto: ${producto.producto}`;
    const aviso = document.querySelector("#aviso");
    aviso.appendChild(produAviso)

    //..............1
    //Borrado de Formulario
    document.querySelector("#codigo").value=""
    document.querySelector("#producto").value=""
    document.querySelector("#precio").value=""

    //............1
    
}


//Falta:
//1. Borrar el formulario cada que le demos guardar.......solucionado
//2. Que cada que ingresemos un producto, solo nos muestre...."acabas de ingresar el producto: {solo el ultimo}"....solucionado
//3.Convertir los valores de precio en numeros para hacer calculos....solucionado
//4. con esos valores en número vamos a calcular el IVA y guardarlo tambien el objeto.......solucionado
//5.Asegurarse de que las iniciales queden siempre en mayusculas
//6. Incluir mas CSS esto esta HORRIBLE !!!




/* console.table(bienvenida) */
/* console.log(iniNombre)
console.log(iniApe) */