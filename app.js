const productos=[
    {
        id:1,
        nombre:'Pizza Americana',
        precio:20
    },
    {
        id:2,
        nombre:'Pizza Hawaiana',
        precio:24
    },
    {
        id:3,
        nombre:'Pizza Vegetariana',
        precio:30
    }
]

let rpt;
let carrito=[];

const calculartotal=()=>{
    var t=0;
    for(var i = 0; i < carrito.length; i++){
        t += carrito[i].precio*carrito[i].cantidad;
    }
   return t;
}
const pedido=()=>{
    var lista="";
    for( i=0;i<carrito.length;i++){
        lista+=carrito[i].nombre+":   "+carrito[i].cantidad+"  x S/. " +carrito[i].precio+"\n";
    }
    return lista;
}

const agregarCarrito=(productId,quantity)=>{
    const product=productos.find(product=>product.id==productId);
    carrito=[
        ...carrito,
        {
            ...product,
            cantidad:quantity
        }
    ]
    console.log(carrito)
}

while(rpt!=0){
    let productId=prompt('Seleccione su pedido:\n1:Pizza Americana   S/20 \n2:Pizza Hawaiana   s/24\n3:Pizza Vegetariana   S/30');
    let c=prompt('Ingrese la cantidad')
    agregarCarrito(productId,c)
    rpt=prompt('Desea continuar: si=cualquier tecla no=0')
    if(rpt==0){
        console.log('PIZZERRIA GUSEPI'+"\n" +'Descripción'+'  Cantidad'+'  Precio')
        console.log(pedido());
        console.log('Monto Total:S/. '+calculartotal()+ ' soles');
        
    }
}