// ============================================================
// IDIOMAS: textos de la página y traducciones del menú
// Español es el idioma original (está escrito en index.html y datos.js).
// Para corregir una traducción, cambia el texto de la derecha.
// Para agregar un platillo nuevo, agrégalo en datos.js y aquí: "Nombre en español":["English","中文"]
// Si un platillo no tiene traducción aquí, se muestra en español.
// ============================================================
var IDIOMAS={es:'Español',en:'English',zh:'中文'};

var TXT={
en:{n_bb:'The Black Ball',n_menu:'Menu',n_foro:'Cultural Forum',n_res:'Reviews',n_hor:'Hours & contact',
t_tag:'Good vibes, better flavor. Food, drinks and friends.',b_menu:'See menu',b_hor:'Hours & contact',b_res:'Book on WhatsApp',
m_title:'How to get here',m_text:'Find us in Puebla. Tap the map to open Google Maps.',m_btn:'Open in Google Maps',
q_choose:'What are you craving? Pick a menu.',c_food:'Food',c_food_s:'Starters, burgers, wings, desserts and more',c_drink:'Drinks',c_drink_s:'Cocktails, beer and drinks',
k_back:'← Back to menu',k_seedrink:'See drinks →',k_seefood:'See food →',p_note:'Prices in Mexican pesos (MXN).',
a_p:'Beer, cocktails, spirits and soft drinks.',a_n:'Ask for the drinks menu and daily specials at 22 26 01 46 16. Alcohol is sold only to adults 18 and over. Please drink responsibly.',
h_title:'Hours',h_lead:'Open Tuesday to Saturday, 11 pm to 3 am.',d0:'Sunday',d1:'Monday',d2:'Tuesday',d3:'Wednesday',d4:'Thursday',d5:'Friday',d6:'Saturday',closed:'Closed',
ct_title:'Contact',ct_lead:'Book your table, birthday or event.',ct_phone:'Phone & WhatsApp',ct_addr:'Address',
r_title:'Reviews',r_lead:'What our guests say.',r_empty:'No reviews yet. Be the first to share your experience!',r_btn:'Leave a Google review',r_wa:'Share your opinion on WhatsApp',
o_title:'Your order',o_empty:'Nothing added yet. Go to the menu and tap +.',o_name:'Your name or table number',o_total:'Total',o_send:'Send order via WhatsApp',
o_note:'Your order is sent to the restaurant on WhatsApp. Payment is made at the venue.',o_more:'Keep ordering',
s_open:'Open now · closing at 3:00 am',s_closed:'Closed now · open Tuesday to Saturday from 11:00 pm'},
zh:{n_bb:'黑球俱乐部',n_menu:'菜单',n_foro:'文化空间',n_res:'评价',n_hor:'营业时间与联系',
t_tag:'氛围好，味道更好。美食、饮品与朋友。',b_menu:'查看菜单',b_hor:'营业时间与联系',b_res:'WhatsApp 订位',
m_title:'如何前往',m_text:'我们在普埃布拉。点击地图打开谷歌地图。',m_btn:'在谷歌地图中打开',
q_choose:'想吃点什么？请选择菜单。',c_food:'美食',c_food_s:'开胃菜、汉堡、鸡翅、甜点等',c_drink:'饮品',c_drink_s:'鸡尾酒、啤酒和饮料',
k_back:'← 返回菜单',k_seedrink:'查看饮品 →',k_seefood:'查看美食 →',p_note:'价格单位：墨西哥比索 (MXN)。',
a_p:'啤酒、鸡尾酒、烈酒和无酒精饮料。',a_n:'饮品菜单和每日优惠请致电 22 26 01 46 16 咨询。仅向年满18岁者售酒，请适量饮酒。',
h_title:'营业时间',h_lead:'周二至周六，晚上11点至凌晨3点。',d0:'星期日',d1:'星期一',d2:'星期二',d3:'星期三',d4:'星期四',d5:'星期五',d6:'星期六',closed:'休息',
ct_title:'联系我们',ct_lead:'预订餐桌、生日或活动。',ct_phone:'电话和 WhatsApp',ct_addr:'地址',
r_title:'评价',r_lead:'顾客怎么说。',r_empty:'暂无评价，欢迎分享您的体验！',r_btn:'在谷歌留下评价',r_wa:'通过 WhatsApp 分享意见',
o_title:'您的订单',o_empty:'还没有添加任何菜品。请到菜单点击 +。',o_name:'您的姓名或桌号',o_total:'合计',o_send:'通过 WhatsApp 发送订单',
o_note:'订单将通过 WhatsApp 发送给餐厅，到店付款。',o_more:'继续点餐',
s_open:'营业中 · 凌晨3点关门',s_closed:'暂停营业 · 周二至周六晚上11点开门'}
};

var MENU_TR={
// Categorías
"Entradas":["Starters","开胃菜"],"Hamburguesas":["Burgers","汉堡"],"Emparedados":["Sandwiches","三明治"],"Snack":["Snacks","小吃"],"Alitas":["Wings","鸡翅"],"Otros":["Others","其他"],"Hot dogs":["Hot dogs","热狗"],"Botanas":["Bar snacks","下酒小食"],"Postres":["Desserts","甜点"],
// Platillos
"Aceitunas preparadas 50 gr":["Marinated olives 50 g","腌橄榄 50克"],"Champiñones en salmuera 50 gr":["Pickled mushrooms 50 g","腌蘑菇 50克"],"Chalupas (6)":["Chalupas (6) – small fried tortillas with sauce","墨西哥小玉米饼 (6个)"],
"Plato deli 250 gr":["Deli platter 250 g","熟食拼盘 250克"],"Platón español":["Spanish platter","西班牙拼盘"],"Sincronizadas (3)":["Sincronizadas (3) – ham & cheese quesadillas","火腿芝士饼 (3个)"],
"Salchichas preparadas":["Loaded sausages","调味香肠"],"Ensalada de la casa":["House salad","招牌沙拉"],
"Tradicional 100 gr":["Classic 100 g","经典 100克"],"Doble carne 200 gr":["Double patty 200 g","双层牛肉 200克"],"Hawaiana 100 gr":["Hawaiian 100 g","夏威夷 100克"],"Champiñones y queso 100 gr":["Mushroom & cheese 100 g","蘑菇芝士 100克"],"BBQ 100 gr":["BBQ 100 g","烧烤酱 100克"],
"3 cerditos 120 gr":["Three little pigs 120 g","三只小猪 120克"],"Jamón serrano 60 gr y manchego 50 gr":["Serrano ham 60 g & manchego 50 g","塞拉诺火腿60克配曼彻戈奶酪50克"],"Arrachera 120 gr y queso manchego":["Skirt steak 120 g & manchego","牛排120克配曼彻戈奶酪"],"Cochinita pibil 120 gr":["Cochinita pibil (yucatan pulled pork) 120 g","尤卡坦烤猪肉 120克"],
"Papas a la francesa 250 gr":["French fries 250 g","薯条 250克"],"Nachos 250 gr":["Nachos 250 g","玉米片 250克"],"Boneless 500 gr":["Boneless chicken 500 g","无骨鸡块 500克"],"Nuggets 10 pzas":["Nuggets (10)","鸡块 (10块)"],"Platón botanero":["Snack platter","小吃拼盘"],"Platón mixto":["Mixed platter","综合拼盘"],
"10 piezas":["10 pieces","10个"],"20 piezas":["20 pieces","20个"],
"Tacos de arrachera 200 gr":["Skirt steak tacos 200 g","牛排塔可 200克"],"Gringa de arrachera":["Steak gringa (flour tortilla with cheese)","牛排芝士饼"],"Crepa de jamón y Philadelphia":["Ham & cream cheese crepe","火腿奶油奶酪可丽饼"],"Platón ranchero 1 kg":["Ranchero platter 1 kg","牧场拼盘 1公斤"],
"2 sencillos (promoción)":["2 plain hot dogs (promo)","经典热狗2个 (优惠)"],"Hawaiano":["Hawaiian","夏威夷"],"Queso amarillo y tocino":["Cheddar & bacon","芝士培根"],"Champiñones y queso":["Mushrooms & cheese","蘑菇芝士"],
"Cacahuates":["Peanuts","花生"],"Chicharrines":["Chicharrines (crunchy snack)","脆片"],"Papas Saratoga":["Saratoga chips","薯片"],"Esquites":["Esquites (corn cup)","玉米杯"],"Churritos":["Churritos (corn puffs)","玉米脆条"],"Palomitas":["Popcorn","爆米花"],"Mega botana":["Mega snack to share","超大分享小吃"],
"Afogato":["Affogato","阿芙佳朵"],"Rosca de chocolate":["Chocolate ring cake","巧克力环形蛋糕"],"Flan":["Flan (caramel custard)","焦糖布丁"],"Crepa de cajeta o lechera":["Crepe with cajeta or condensed milk","焦糖奶酱或炼乳可丽饼"],"Canoli":["Cannoli","卡诺里"],
// Descripciones
"Jamón holandés, jamón serrano, salami, chorizo, queso manchego y queso Philadelphia":["Dutch ham, serrano ham, salami, chorizo, manchego and cream cheese","荷兰火腿、塞拉诺火腿、萨拉米、辣香肠、曼彻戈奶酪和奶油奶酪"],
"Jamón serrano y queso manchego 150 gr, platillo preparado":["Serrano ham and manchego 150 g, prepared dish","塞拉诺火腿和曼彻戈奶酪150克"],"Jamón y queso":["Ham and cheese","火腿和奶酪"],
"BBQ, chipotle, mango, habanero, mostaza o miel":["BBQ, chipotle, mango habanero, mustard or honey","烧烤、烟熏辣椒、芒果哈瓦那辣椒、芥末或蜂蜜"],
"Lechuga, zanahoria, jitomate y pepino. Agrega 50 gr de arrachera o atún por $50":["Lettuce, carrot, tomato, cucumber. Add 50 g steak or tuna +$50","生菜、胡萝卜、番茄、黄瓜。加50克牛排或金枪鱼 +$50"],
"Carne, lechuga y queso amarillo":["Beef, lettuce and cheddar","牛肉、生菜和芝士"],"Carne, piña, lechuga y queso amarillo":["Beef, pineapple, lettuce and cheddar","牛肉、菠萝、生菜和芝士"],
"Embutidos, lechuga, queso amarillo, salchicha, jamón y tocino":["Cold cuts, lettuce, cheddar, sausage, ham and bacon","冷切肉、生菜、芝士、香肠、火腿和培根"],"Con frijolitos y cebolla morada":["With beans and pickled red onion","配豆泥和腌红洋葱"],
"Agrega queso o chorizo por $30":["Add cheese or chorizo +$30","加芝士或辣香肠 +$30"],"Agrega chorizo, arrachera o esquites por $30":["Add chorizo, steak or esquites +$30","加辣香肠、牛排或玉米杯 +$30"],
"Boneless, nachos y papas a la francesa 400 gr":["Boneless, nachos and fries 400 g","无骨鸡块、玉米片和薯条 400克"],"Boneless 400 gr y papas a la francesa 100 gr":["Boneless 400 g and fries 100 g","无骨鸡块400克和薯条100克"],
"BBQ, habanero mango, chipotle, mostaza miel, atómica o búfalo":["BBQ, mango habanero, chipotle, honey mustard, atomic or buffalo","烧烤、芒果哈瓦那辣椒、烟熏辣椒、蜂蜜芥末、超辣或水牛城"],"Mismos sabores":["Same flavors","口味相同"],"En 3 tortillas":["On 3 tortillas","3张玉米饼"],
"Chorizo, chistorra, salchicha, aguja de cerdo y frijolitos":["Chorizo, chistorra, sausage, pork chuck and beans","辣香肠、奇斯托拉香肠、香肠、猪颈肉和豆泥"],"Salchicha Frankfurt 50 gr":["Frankfurt sausage 50 g","法兰克福香肠 50克"],"Salchicha 50 gr y piña":["Sausage 50 g and pineapple","香肠50克和菠萝"],
"De todo para compartir":["A bit of everything to share","什么都有，适合分享"],"Café espresso y helado":["Espresso and ice cream","浓缩咖啡和冰淇淋"]
};
