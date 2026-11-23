// ============================================================
// FUNCIONAMIENTO DE LA PÁGINA
// (Normalmente no hace falta modificar este archivo.
//  Datos: datos.js · Traducciones: idiomas.js)
// ============================================================
var lang='es', carrito={};
function T(k){return lang!=='es'&&TXT[lang]&&TXT[lang][k]||null}
function tr(s){var m=MENU_TR[s];return m&&lang==='en'?m[0]:m&&lang==='zh'?m[1]:s}
function $(id){return document.getElementById(id)}
function money(n){return '$'+n}

// 1) Menú: dibuja una carta con traducción y botón "+" para pedir
function dibujarCarta(datos,id){
  var host=$(id);if(!host)return false;host.innerHTML='';
  if(!datos.length)return false;
  var cols=[document.createElement('div'),document.createElement('div')];
  datos.forEach(function(cat,i){
    var d=document.createElement('div');d.className='cat';
    var h=document.createElement('h3');h.textContent=tr(cat[0]);d.appendChild(h);
    cat[1].forEach(function(it){
      var r=document.createElement('div');r.className='item';
      var t=document.createElement('div');
      var b=document.createElement('b');b.textContent=tr(it[0]);t.appendChild(b);
      if(it[1]){var s=document.createElement('small');s.textContent=tr(it[1]);t.appendChild(s)}
      var p=document.createElement('span');p.className='price';p.textContent=money(it[2]);
      r.appendChild(t);r.appendChild(p);
      if(PEDIDOS.activo){var a=document.createElement('button');a.className='add';a.type='button';a.textContent='+';a.setAttribute('aria-label','+ '+tr(it[0]));
        a.addEventListener('click',function(){agregar(it)});r.appendChild(a)}
      d.appendChild(r);
    });
    cols[i%2].appendChild(d);
  });
  cols.forEach(function(c){host.appendChild(c)});
  return true;
}

// 2) Pedidos por WhatsApp
function agregar(it){var c=carrito[it[0]]||(carrito[it[0]]={n:it[0],p:it[2],q:0});c.q++;pintarCarrito()}
function cambiar(n,d){carrito[n].q+=d;if(carrito[n].q<=0)delete carrito[n];pintarCarrito()}
function pintarCarrito(){
  var ks=Object.keys(carrito),total=0,cnt=0,host=$('cart-list');host.innerHTML='';
  ks.forEach(function(k){var c=carrito[k];total+=c.p*c.q;cnt+=c.q;
    var r=document.createElement('div');r.className='crow';
    var n=document.createElement('span');n.className='nm';n.textContent=tr(c.n)+' · '+money(c.p);
    var q=document.createElement('span');q.className='qty';
    var m=document.createElement('button');m.type='button';m.textContent='−';m.addEventListener('click',function(){cambiar(k,-1)});
    var x=document.createElement('b');x.textContent=c.q;
    var pl=document.createElement('button');pl.type='button';pl.textContent='+';pl.addEventListener('click',function(){cambiar(k,1)});
    q.appendChild(m);q.appendChild(x);q.appendChild(pl);r.appendChild(n);r.appendChild(q);host.appendChild(r)});
  $('cartn').textContent=cnt;$('cart-total').textContent=money(total);
  $('cart-empty').hidden=ks.length>0;$('cart-form').hidden=!ks.length;
}
$('cart-send').addEventListener('click',function(){
  var l=['Hola, quiero hacer un pedido en The Black Ball Club:'],t=0;
  Object.keys(carrito).forEach(function(k){var c=carrito[k];t+=c.p*c.q;l.push('- '+c.q+' x '+c.n+' ('+money(c.p)+')')});
  l.push('Total: '+money(t));
  var nm=$('cname').value.trim();if(nm)l.push('Nombre / mesa: '+nm);
  window.open('https://wa.me/'+NEGOCIO.telefono+'?text='+encodeURIComponent(l.join('\n')),'_blank');
});

// 3) Reseñas
function pintarResenas(){
  var h=$('r-list');h.innerHTML='';
  RESENAS.forEach(function(r){var c=document.createElement('div');c.className='card';
    var n=document.createElement('h3');n.textContent=r.nombre;
    var s=document.createElement('p');s.className='stars';s.textContent='★★★★★'.slice(0,r.estrellas||5);
    var t=document.createElement('p');t.textContent=r.texto;
    c.appendChild(n);c.appendChild(s);c.appendChild(t);h.appendChild(c)});
  $('r-empty').hidden=RESENAS.length>0;
}

// 4) Aviso "Abierto ahora / Cerrado ahora" con la hora de Puebla
function estado(){
  var f=new Intl.DateTimeFormat('en-US',{timeZone:'America/Mexico_City',weekday:'short',hour:'numeric',hour12:false}).formatToParts(new Date());
  var wd={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[f.find(function(p){return p.type==='weekday'}).value];
  var h=parseInt(f.find(function(p){return p.type==='hour'}).value,10)%24,C=HORARIO;
  var pm=C.cierra<=C.abre,hoy=C.dias.indexOf(wd)!==-1,ayer=C.dias.indexOf((wd+6)%7)!==-1;
  var ab=pm?((hoy&&h>=C.abre)||(ayer&&h<C.cierra)):(hoy&&h>=C.abre&&h<C.cierra),mad=pm&&ayer&&h<C.cierra;
  $('statusText').textContent=ab?(T('s_open')||C.textoAbierto):(T('s_closed')||C.textoCerrado);
  $('status').classList[ab?'add':'remove']('open');
  var rows=document.querySelectorAll('#hours tr');for(var i=0;i<rows.length;i++)rows[i].classList.remove('today');
  var fila=document.querySelector('#hours tr[data-d="'+(mad?(wd+6)%7:wd)+'"]');if(fila)fila.classList.add('today');
}

// 5) Idiomas
function aplicarIdioma(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i]').forEach(function(e){
    if(e.dataset.es===undefined)e.dataset.es=e.textContent;
    e.textContent=T(e.dataset.i)||e.dataset.es});
  var ph=$('cname');if(ph.dataset.es===undefined)ph.dataset.es=ph.placeholder;ph.placeholder=T('o_name')||ph.dataset.es;
  dibujarCarta(MENU_COMIDA,'comida');
  if(dibujarCarta(MENU_COCTELERIA,'cocteleria'))$('coct-aviso').hidden=true;
  pintarCarrito();estado();
}
var sel=$('lang');
Object.keys(IDIOMAS).forEach(function(k){var o=document.createElement('option');o.value=k;o.textContent=IDIOMAS[k];sel.appendChild(o)});
try{lang=localStorage.getItem('idioma')||''}catch(e){lang=''}
if(!IDIOMAS[lang]){var nv=(navigator.language||'es').slice(0,2);lang=IDIOMAS[nv]?nv:'es'}
sel.value=lang;
sel.addEventListener('change',function(){lang=sel.value;try{localStorage.setItem('idioma',lang)}catch(e){}aplicarIdioma()});

// 6) Enlaces: mapa, reseñas y WhatsApp
document.querySelectorAll('.js-maps').forEach(function(a){a.href=NEGOCIO.mapsUrl});
if(NEGOCIO.resenasUrl){$('r-google').href=NEGOCIO.resenasUrl;$('r-google').hidden=false}
$('r-wa').href='https://wa.me/'+NEGOCIO.telefono+'?text='+encodeURIComponent('Hola, quiero compartir mi opinión sobre The Black Ball Club: ');
$('cartlink').hidden=!PEDIDOS.activo;
pintarResenas();aplicarIdioma();

// 7) Navegación por vistas (cada sección tiene su lugar, sin desplazarse)
(function(){
  var main=['black-ball','menu','foro','resenas','horarios','pedido'],sub=['menu','menu-comida','menu-cocteleria'];
  function show(id,on){$(id).hidden=!on}
  function route(){
    var h=(location.hash||'#black-ball').slice(1),v=h.indexOf('menu')===0?'menu':h;
    if(main.indexOf(v)<0){h='black-ball';v=h}
    if(v==='menu'&&sub.indexOf(h)<0)h='menu';
    main.forEach(function(x){show('v-'+x,x===v)});
    if(v==='menu'){show('m-choose',h==='menu');show('m-comida',h==='menu-comida');show('m-cocteleria',h==='menu-cocteleria')}
    document.querySelectorAll('.topnav a').forEach(function(a){
      if(a.getAttribute('href')==='#'+v)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',route);route();
})();
