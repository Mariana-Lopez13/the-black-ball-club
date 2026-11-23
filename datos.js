// ============================================================
// DATOS DEL NEGOCIO: menú y horario
// Aquí se cambian precios, platillos y el horario del aviso
// "Abierto ahora / Cerrado ahora". No hace falta tocar nada más.
// ============================================================

// MENÚ DE COMIDA
// Cada categoría:  ["Nombre de la categoría", [ productos ]]
// Cada producto:   ["Nombre", "Descripción (déjala vacía así: '' si no lleva)", precio]
var MENU_COMIDA=[
["Entradas",[["Aceitunas preparadas 50 gr","",60],["Champiñones en salmuera 50 gr","",60],["Chalupas (6)","",60],["Plato deli 250 gr","Jamón holandés, jamón serrano, salami, chorizo, queso manchego y queso Philadelphia",350],["Platón español","Jamón serrano y queso manchego 150 gr, platillo preparado",250],["Sincronizadas (3)","Jamón y queso",80],["Salchichas preparadas","BBQ, chipotle, mango, habanero, mostaza o miel",80],["Ensalada de la casa","Lechuga, zanahoria, jitomate y pepino. Agrega 50 gr de arrachera o atún por $50",70]]],
["Hamburguesas",[["Tradicional 100 gr","Carne, lechuga y queso amarillo",110],["Doble carne 200 gr","Carne, lechuga y queso amarillo",140],["Hawaiana 100 gr","Carne, piña, lechuga y queso amarillo",120],["Champiñones y queso 100 gr","",120],["BBQ 100 gr","",110]]],
["Emparedados",[["3 cerditos 120 gr","Embutidos, lechuga, queso amarillo, salchicha, jamón y tocino",100],["Jamón serrano 60 gr y manchego 50 gr","",100],["Arrachera 120 gr y queso manchego","",125],["Cochinita pibil 120 gr","Con frijolitos y cebolla morada",100]]],
["Snack",[["Papas a la francesa 250 gr","Agrega queso o chorizo por $30",100],["Nachos 250 gr","Agrega chorizo, arrachera o esquites por $30",80],["Boneless 500 gr","",280],["Nuggets 10 pzas","",100],["Platón botanero","Boneless, nachos y papas a la francesa 400 gr",180],["Platón mixto","Boneless 400 gr y papas a la francesa 100 gr",280]]],
["Alitas",[["10 piezas","BBQ, habanero mango, chipotle, mostaza miel, atómica o búfalo",130],["20 piezas","Mismos sabores",220]]],
["Otros",[["Tacos de arrachera 200 gr","En 3 tortillas",125],["Gringa de arrachera","",125],["Crepa de jamón y Philadelphia","",100],["Platón ranchero 1 kg","Chorizo, chistorra, salchicha, aguja de cerdo y frijolitos",700]]],
["Hot dogs",[["2 sencillos (promoción)","Salchicha Frankfurt 50 gr",75],["Hawaiano","Salchicha 50 gr y piña",80],["Queso amarillo y tocino","",80],["Champiñones y queso","",80]]],
["Botanas",[["Cacahuates","",35],["Chicharrines","",35],["Papas Saratoga","",35],["Esquites","",50],["Churritos","",35],["Palomitas","",35],["Mega botana","De todo para compartir",200]]],
["Postres",[["Afogato","Café espresso y helado",50],["Rosca de chocolate","",40],["Flan","",50],["Crepa de cajeta o lechera","",95],["Canoli","",50]]]
];

// CARTA DE COCTELERÍA (bebidas)
// Mientras esté vacía ([]), la página muestra un aviso para preguntar por la carta.
// Cuando tengas los datos, llénala con el mismo formato que la comida. Ejemplo:
// var MENU_COCTELERIA=[
//   ["Cervezas",[["Corona","",45],["Michelada","Clásica o preparada",70]]],
//   ["Cocteles",[["Margarita","Clásica o de sabor",110]]]
// ];
var MENU_BEBIDAS=[
["Cocteles",[["Verano Gin","Trozos de fresa, Moras, Agua quina y mineral, Ginebra o Vodka (500 ml)",145],["Margarita", "Natural, Tamarindo, Frutos rojos, Maracuya con tequila (350 ml)",145],["Carajillo","Licor 43 y Cafe expresso (250 ml)",145],["Mezcalina","Sabores de tamarindo, Frutos rojos, pepino, maracuya con mezcal (350 ml)",145],["Gin & Tnic","Ginebra, Pepino y agua tonica (350 ml)",145],["Baby Mango","Chamoy y Smirnoff de tamarindo, juego de mango (350 ml)",145],["Mojito","Ron, Azucar, Hierbabuena, mineral y jugo de limon (350 ml)",145],["The Black","Tequila, Ron, Vodka, menta verde y refresco de toronja",145]]],
["Cocteles",[["Conga","Jugo de Piña, Jugo de Naranja, Granadina y Ron",110],["Piña Colada","Jugo de Piña, Crema de leche, crema de coco y Ron", 110],["Crepa de cajeta o lechera","",95],["Canoli","",50]]]
];

// HORARIO (para el aviso de "Abierto ahora")
// dias: 0=domingo, 1=lunes, 2=martes, 3=miércoles, 4=jueves, 5=viernes, 6=sábado
// abre y cierra: hora en formato de 24 horas (23 = 11:00 pm, 3 = 3:00 am)
// Si cierra es menor que abre, el horario pasa de medianoche.
// OJO: la tabla de horarios que se ve en la página se edita aparte, en index.html.
var HORARIO={
  dias:[2,3,4,5,6],
  abre:23,
  cierra:3,
  textoAbierto:'Abierto ahora \u00b7 cerramos a las 3:00 am',
  textoCerrado:'Cerrado ahora \u00b7 abrimos de martes a s\u00e1bado a las 11:00 pm'
};

// ============================================================
// DATOS GENERALES
// ============================================================
var NEGOCIO={
  telefono:'522226014616',   // WhatsApp con código de país (52 = México)
  // Pega aquí el enlace exacto de tu ubicación: en Google Maps toca "Compartir" y copia el enlace.
  mapsUrl:'https://www.google.com/maps/search/?api=1&query=The+Black+Ball+Club+Puebla',
  // Enlace para dejar reseña en Google (déjalo vacío '' si todavía no lo tienes)
  resenasUrl:''
};

// PEDIDOS: pon activo:false para quitar los botones "+" y el carrito
var PEDIDOS={activo:true};

// RESEÑAS: agrega solo reseñas reales de clientes. Formato:
// {nombre:'Ana', estrellas:5, texto:'Excelente ambiente y comida.'}
var RESENAS=[];
