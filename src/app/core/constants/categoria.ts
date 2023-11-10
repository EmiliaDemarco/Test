
import { Categoria } from "../interface/categorias";
//arrey corchetes y objetos llaves : tipo de dato
export const CATEGORIAS:Categoria[] = [
    {
        nombre: "Hamburgesas", 
        id:0, 
        imgUrl:'https://media.istockphoto.com/id/1467073662/es/foto/el-concepto-de-amor-por-la-comida-r%C3%A1pida-una-hamburguesa-grande-sobre-fondo-amarillo.jpg?s=612x612&w=0&k=20&c=C-C7FTkuK0tAeNZrmTjau_R3GOHLsPyxe0Y1JALBeNA=',
        productos: [{
            id:1,
            nombre: "Hamburgesa con queso",
            precio: 2500,
            ingredientes: ["Hamburgesa con queso"],
            imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kLXvAZ7Z/200/200/original?country=cr"
        },
        {
            id:2,
            nombre: "Hamburgesa completa",
            precio: 3500,
            ingredientes: ["Hamburgesa contomate, lechuga, jamon, queso y huevo"],
            imagen: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=63wu4OoYL-c0AujGSv5Ri3GheQAWVyz8xWDjcczjcCA="
        },
        {
            id:3,
            nombre: "Hamburgesa vegetariana",
            precio: 3500,
            ingredientes: ["Hamburgesa "],
            imagen: "https://www.pequerecetas.com/wp-content/uploads/2009/04/hamburguesa-de-garbanzos-casera-receta.jpg"
        },
        {
            id:4,
            nombre: "Hamburgesa pan negro",
            precio: 4000,
            ingredientes: [],
            imagen: "https://recetinas.com/wp-content/uploads/2023/03/Hamburguesa-con-pan-negro.jpg",
        },
        {
            id:14,
            nombre: "Mini hamburguesas",
            precio: 4500,
            ingredientes: [],
            imagen: "https://mejorconsalud.as.com/wp-content/uploads/2018/10/mini-hamburguesas-de-cordero-768x512.jpg",
        },

    ]     
    }, 
    {
        nombre: "Pastas", 
        id:1, 
        imgUrl:'https://images.pexels.com/photos/42326/noodles-pasta-spaghetti-farfalle-42326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        productos: [{
            id:5,
            nombre: "Malfattis",
            precio: 3500,
            ingredientes: [],
            imagen: "https://es.cravingsjournal.com/wp-content/uploads/2017/11/malfatti-de-ricotta-y-espinaca-1.jpg"
        },
        {
            id:6,
            nombre: "Spaghetti con salsa",
            precio: 2800,
            ingredientes: [],
            imagen: "https://assets.unileversolutions.com/recipes-v2/236484.jpg"
        },
        {
            id:7,
            nombre: "Sorrentinos de jamón y queso",
            precio: 3300,
            ingredientes: [],
            imagen: "https://imag.bonviveur.com/sorrentinos-rellenos-de-jamon-y-queso-con-salsa-marinara.jpg"
        },
        {
            id:15,
            nombre: "Ravioles",
            precio: 3300,
            ingredientes: [],
            imagen: "https://www.diariamenteali.com/medias/receta-de-ravioles-con-espinacaabc-1900Wx500H?context=bWFzdGVyfHJvb3R8Mjg2NDQ2fGltYWdlL2pwZWd8aGQyL2gzMS85MDc0MjE0MzcxMzU4L3JlY2V0YS1kZS1yYXZpb2xlcy1jb24tZXNwaW5hY2FhYmNfMTkwMFd4NTAwSHw2ZjIwN2I0MDJjZjY5NjQ2NDBlYzkyZjRiODkxYmYwYmIzNzQ0NTAxYTI1ZDczMDkyNWEyYzcyZTgwYTE2NmYx"
        },]
    }, 
    {
        nombre: "Bebidas", 
        id:2, 
        imgUrl:'https://images.pexels.com/photos/4753648/pexels-photo-4753648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        productos: [{
            id:8,
            nombre: "Coca-Cola 250ml",
            precio: 300,
            ingredientes: [],
            imagen: "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_10_oz_zero_bebidas_liquidas_700x700.jpg?v=1620489359"
        },
        {
            id:9,
            nombre: "Sprite 250ml",
            precio: 300,
            ingredientes: [],
            imagen: "https://www.cocacola.es/content/dam/one/es/es2/sprite/home-page/sprite-1-5-l.jpg"
        },
        {
            id:10,
            nombre: "Fanta 250ml",
            precio: 300,
            ingredientes: [],
            imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77908950115591-fe533c263b9f0f87b316627716940746-640-0.jpg"
        },]
    }, 
    {
        nombre: "Postres", 
        id:3, 
        imgUrl:'https://images.pexels.com/photos/7296703/pexels-photo-7296703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        productos: [{
            id:11,
            nombre: "Macarons surtidos x5",
            precio: 3000,
            ingredientes: [],
            imagen: "https://cocina-casera.com/wp-content/uploads/2018/04/Macarons1.jpg"
        },
        {
            id:12,
            nombre: "Panqueques con dulce de leche",
            precio: 2800,
            ingredientes: [],
            imagen: "https://imag.bonviveur.com/panqueques.jpg"
        },
        {
            id:13,
            nombre: "Volcan de chocolate",
            precio: 2900,
            ingredientes: [],
            imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/44JGMDKPJFHGDK3NU6AA26GBHE.jpg"
        },
        {
            id:14,
            nombre: "Flan casero",
            precio: 3000,
            ingredientes: [],
            imagen: "https://dgari.com/wp-content/uploads/2022/02/Flan-de-vainilla-con-caramelo.png"
        },
        {
            id:15,
            nombre: "Franui",
            precio: 4000,
            ingredientes: [],
            imagen: "https://valenciaplaza.com/public/Image/2021/4/franui-partido_NoticiaAmpliada.jpg"
        },] 
    }, 
  ]
