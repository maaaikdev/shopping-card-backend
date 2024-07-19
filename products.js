// const products = [
//     {
//         id: 1,
//         name: "iPhone 12 Pro",
//         desc: "6.1-inch display",
//         desc2: "",
//         price: 15000,
//         off: 12000,
//         image: "https://maaaik.site/images/iphone12pro.jpg",
//         quantity: 40,
//         sold: 4,
//     },
//     {
//         id: 2,
//         name: "iPhone 12",
//         desc: "5.4-inch display",
//         price: 20000,
//         off: 17000,
//         image: "https://maaaik.site/images/iphone12.jpg",
//         quantity: 12,
//         sold: 8,
//     },    
//     {
//         id: 3,
//         name: "iPhone 12",
//         desc: "5.4-inch display",
//         price: 25000,
//         off: 21000,
//         image: "https://maaaik.site/images/iphone12.jpg",
//         quantity: 25,
//         sold: 11,
//     },
//     {
//         id: 4,
//         name: "Galaxy S",
//         desc: "6.5-inch display",
//         price: 24000,
//         off: 18000,
//         image: "https://maaaik.site/images/galaxyS.png",
//         quantity: 9,
//         sold: 3,
//     },
// ];

const products = [
    {
        id: 1,
        name: "Maquina Patillera Recargable Vgr V-091 Profesional Trimmer",
        desc: "VGR",
        desc2: "<p>M&aacute;quina cortadora de cabello, patillera, barbera, cuerpo de metal inhal&aacute;mbrica esqueleto barber&iacute;a profesional.</p><ul><li>Barbera.</li><li>Es inal&aacute;mbrica y funciona con bater&iacute;a recargable.</li><li>Posee cabezales lavables.</li><li>Pr&aacute;ctica para llevarla a todos tus viajes.</li><li>Viene con 3 peines.</li><li>Accesorio incluido: aceite lubricante.</li></ul>",
        price: 60000,
        off: 85800,
        mainImage: "photos/1/v-091_1.jpg",
        image: [
            "photos/1/v-091_1.jpg",
            "photos/1/v-091_2.jpg",
            "photos/1/v-091_3.jpg",
            "photos/1/v-091_4.jpg",
            "photos/1/v-091_5.jpg",
            "photos/1/v-091_6.jpg",
            "photos/1/v-091_7.jpg"
        ],
        quantity: 36,
        sold: 3,
        boxState: 100
    },
    {
        id: 2,
        name: "Maquina De Peluqueria A Profesional Corta Pelo Vgr V 220",
        desc: "VGR",
        desc2: "<ul><li>Pantalla LED: porcentaje de potencia</li><li>Carcasa de metal completa</li><li>Ergon&oacute;mica y f&aacute;cil de usar</li><li>Dise&ntilde;o inal&aacute;mbrico y port&aacute;til</li><li>Bater&iacute;a de litio recargable CONTENIDO</li><li>Cable de carga USB</li><li>Peines gu&iacute;a de corte (2-0.118-0.157 in)</li><li>Tapa de protecci&oacute;n</li><li>Cepillo de limpieza</li></ul>",
        price: 140000,
        off: 160000,
        mainImage: "photos/2/v-220_5.jpg",
        image: [
            "photos/2/v-220_5.jpg",
            "photos/2/v-220_2.jpg",
            "photos/2/v-220_3.jpg",
            "photos/2/v-220_4.jpg",
            "photos/2/v-220_1.jpg",
            "photos/2/v-220_6.jpg"
        ],
        quantity: 2,
        sold: 0,
        boxState: 100
    },
    {
        id: 3,
        name: "Cortadora de pelo y barba ref GM 6032",
        desc: "PROGEMEI",
        desc2: "<ul><li>Recortador de cabello y barba.</li><li>Dise&ntilde;o ergon&oacute;mico.</li><li>Hoja de acero inoxidable.</li><li>Motor de aleaci&oacute;n de Pd plateado de alta velocidad de rotaci&oacute;n.</li><li>Interruptor tipo presi&oacute;n.</li><li>Luz indicadora de carga.</li></ul>",
        price: 35000,
        off: 47000,
        mainImage: "photos/3/v-220_5.jpg",
        image: [
            "photos/3/v-220_5.jpg",
            "photos/3/v-220_2.jpg",
            "photos/3/v-220_3.jpg",
            "photos/3/v-220_4.jpg",
            "photos/3/v-220_1.jpg",
            "photos/3/v-220_6.jpg"
        ],
        quantity: 9,
        sold: 0,
        boxState: 100
    },
    {
        id: 4,
        name: "Picadora hielo raspados cholados triturador hielo",
        desc: "GENERÍCA",
        desc2: "<ul><li>Trituradora de hielo para triturar cubitos de hielo en hielo esponjoso como la nieve.</li><li>F&aacute;cil de usar, f&aacute;cil de limpiar, f&aacute;cil de transportar y f&aacute;cil de almacenar.</li></ul><p>El dise&ntilde;o port&aacute;til de funcionamiento manual de manivela te ayuda a obtener hielo afeitado, conos de nieve para bebidas divertidas incluso al aire &uacute;ltima intervensi&oacute;n sin electricidad</p>",
        price: 60000,
        off: 70000,
        mainImage: "photos/4/ice-shaver_2.jpg",
        image: [
            "photos/4/ice-shaver_5.jpg",
            "photos/4/ice-shaver_2.jpg",
            "photos/4/ice-shaver_3.jpg",
            "photos/4/ice-shaver_1.jpg",
            "photos/4/ice-shaver_6.jpg"
        ],
        quantity: 1,
        sold: 0,
        boxState: 75
    },
    {
        id: 5,
        name: "Mini picadora de ajo eléctrica multifuncional para el hogar, batidor de ajo inalámbrico, USB, portátil",
        desc: "REMINGTON",
        desc2: "<ul><li>Mini picadora de ajo port&aacute;til</li><li>Operaci&oacute;n con un solo toque</li><li>Resistente al agua dise&ntilde;ado para una f&aacute;cil limpieza</li><li>USB recargable</li><li>Material de calidad alimentaria sin BPA.</li></ul>",
        price: 32000,
        off: 42000,
        mainImage: "photos/5/garlic-chopper_7.jpg",
        image: [
            "photos/5/garlic-chopper_1.webp",
            "photos/5/garlic-chopper_2.webp",
            "photos/5/garlic-chopper_3.webp",
            "photos/5/garlic-chopper_4.webp",
            "photos/5/garlic-chopper_5.webp",
            "photos/5/garlic-chopper_6.jpg",
            "photos/5/garlic-chopper_7.jpg",
            "photos/5/garlic-chopper_8.jpg",
            "photos/5/garlic-chopper_9.jpg",
            "photos/5/garlic-chopper_10.jpg",
            "photos/5/garlic-chopper_11.jpg",
            "photos/5/garlic-chopper_12.jpg"
        ],
        quantity: 3,
        sold: 0,
        boxState: 80
    },   
    
    {
        id: 6,
        name: "Mini lavadora portátil ultrasónica Turbo Lavadora portátil con USB para viajes u hogar",
        desc: "NADUSEP",
        desc2: "<p>Mini lavadora portátil Lavadora ultrasónica de turbina, lavadora portátil con USB para viajes de negocios en el hogar Habitación universitaria Apartamento RV, Lavadora Turbo para limpiar calcetines, ropa interior, pequeños trapos Descripción: La lavadora turbo ultrasónica portátil es limpieza ultrasónica y limpieza turbo, con interacción inteligente. Fuente de alimentación USB, fuente de alimentación de 30 W, el trabajo de lavado se puede cronometrar durante 30 minutos y puede soportar un peso de ropa de 2.2 lbs.</p>",
        price: 30000,
        off: 40000,
        mainImage: "photos/6/turbine-wash_1.jpg",
        image: [
            "photos/6/turbine-wash_1.jpg",
            "photos/6/turbine-wash_2.jpg",
            "photos/6/turbine-wash_3.jpg",
            "photos/6/turbine-wash_4.jpg",
            "photos/6/turbine-wash_5.jpg",
            "photos/6/turbine-wash_6.jpg"
        ],
        quantity: 1,
        sold: 0,
        boxState: 80
    },
    {
        id: 7,
        name: "Masajeador Eléctrico Térmico De Hombro Almohadilla Térmica",
        desc: "NUOYI MIAO",
        desc2: "<p>Faja de hombro con calefacci&oacute;n recargable por USB para alivio del dolor - Envoltura terap&eacute;utica ajustable con calor para dolor muscular de hombro, hombro congelado, bursitis, tendinitis - Soporte de almohadilla t&eacute;rmica el&eacute;ctrica para hombres y mujeres</p>",
        price: 32000,
        off: 45000,
        mainImage: "photos/7/shoulder_1.webp",
        image: [
            "photos/7/shoulder_1.webp",
            "photos/7/shoulder_2.jpg",
            "photos/7/shoulder_3.jpg",
        ],
        quantity: 1,
        sold: 0,
        boxState: 75
    },    
    {
        id: 8,
        name: "Plancha Vapor Vertical & Accesorios",
        desc: "HOME ELEMENTS",
        desc2: "<p>La plancha vertical es ideal para llevar a los viajes, por su tamaño compacto; remueve fácilmente cualquier tipo de arrugas en las camisas, las cortinas y en seda. Cuenta con luz indicadora de encendido para mayor seguridad; control de temperatura variable para todo tipo de prendas; ráfaga de vapor para un mejor planchado y tanque con capacidad de 120 ml. La plancha vertical incluye cepillo que ayuda a penetrar mejor el vapor en las prendas, una almohadilla de tela para remover pequeñas partículas, soporte para la plancha que evita quemar las superficies facilitando el uso y dosificador para llenar el tanque con la cantidad exacta de agua.</p>",
        price: 75000,
        off: 94900,
        mainImage: "photos/8/vertical-plank_1.jpg",
        image: [
            "photos/8/vertical-plank_1.jpg",
            "photos/8/vertical-plank_2.jpg",
            "photos/8/vertical-plank_3.jpg",
            "photos/8/vertical-plank_4.jpg",
            "photos/8/vertical-plank_5.jpg",
            "photos/8/vertical-plank_6.jpg",
        ],
        quantity: 1,
        sold: 0,
        boxState: 80
    },
    {
        id: 9,
        name: "Masajeador Inalámbrico De Cuello Espalda Cervical Electrodos Color Blanco",
        desc: "ELECTROLAND",
        desc2: "<ul><li>Masajeador cervical a trav&eacute;s de impulsos el&eacute;ctricos</li><li>Activa la circulaci&oacute;n</li><li>Su tecnolog&iacute;a permite emular variedad de masajes</li><li>Elimina la tensi&oacute;n muscular</li><li>Inalambrico</li><li>Regulador de velocidad</li></ul>",
        price: 27000,
        off: 32000,
        mainImage: "photos/9/neck-massager_1.jpg",
        image: [
            "photos/9/neck-massager_1.jpg",
            "photos/9/neck-massager_2.jpg",
            "photos/9/neck-massager_3.jpg",
            "photos/9/neck-massager_4.jpg"
        ],
        quantity: 1,
        sold: 0,
        boxState: 80
    },
    {
        id: 10,
        name: "Masajeador Corporal Body Innovation",
        desc: "GENERÍCA",
        desc2: "<p>Con el Masajeador Modelador Anti Celulitis Body Innovation podrás moldear y quemar la grasa localizada en cada zona de tu cuerpo, gracias a su sistema de infrarrojo (fototerapia) y magnetismo (magnoterapia). Este tipo de sistemas son ideales para tratamientos con drenaje linfático y metabólico, garantizando así grandes resultados en muy poco tiempo.</p>",
        price: 35000,
        off: 45000,
        mainImage: "photos/10/cellulite-massager_1.jpg",
        image: [
            "photos/10/cellulite-massager_1.jpg",
            "photos/10/cellulite-massager_2.jpg",
            "photos/10/cellulite-massager_3.jpg",
            "photos/10/cellulite-massager_4.jpg"
        ],
        quantity: 1,
        sold: 0,
        boxState: 80
    },
    {
        id: 11,
        name: "Cojín De Silicona Gel Flexible + Obsequio Funda Protectora",
        desc: "GENERÍCA",
        desc2: "<p>Con el Masajeador Modelador Anti Celulitis Body Innovation podrás moldear y quemar la grasa localizada en cada zona de tu cuerpo, gracias a su sistema de infrarrojo (fototerapia) y magnetismo (magnoterapia). Este tipo de sistemas son ideales para tratamientos con drenaje linfático y metabólico, garantizando así grandes resultados en muy poco tiempo.</p>",
        price: 27000,
        off: 35000,
        mainImage: "photos/11/egg-sitter_1.webp",
        image: [
            "photos/11/egg-sitter_1.webp",
            "photos/11/egg-sitter_2.jpg",
            "photos/11/egg-sitter_3.jpg",
            "photos/11/egg-sitter_4.jpg"
        ],
        quantity: 1,
        sold: 0,
        boxState: 80
    },
    {
        id: 12,
        name: "Olla Arrocera Whiteline 1.2 Lt 6 Tazas Frecuencia 60 110V",
        desc: "WHITELINE",
        desc2: "<ul><li>Voltaje: 110V</li><li>Con funci&oacute;n: permite cocinar perfectamente cualquier tipo de arroz sin supervisi&oacute;n gracias a su funci&oacute;n de cocci&oacute;n automatica.</li><li>Cocci&oacute;n electrica.</li><li>Cuenta con apagado autom&aacute;tico.</li><li>Con funci&oacute;n de mantenimiento de calor.</li><li>Capacidad para 6 tazas.</li><li>Ideal para la preparaci&oacute;n de tus comidas diarias.</li></ul>",
        price: 65000,
        off: 80000,
        mainImage: "photos/12/rice-cooker_1.jpg",
        image: [
            "photos/12/rice-cooker_1.jpg",
            "photos/12/rice-cooker_2.jpg",
            "photos/12/rice-cooker_3.jpg",
            "photos/12/rice-cooker_4.jpg"
        ],
        quantity: 1,
        sold: 0,
        boxState: 65
    },
    {
        id: 13,
        name: "Lampara Led Uv Uñas Sun H2 Plus Digital 96w Temporizador",
        desc: "SUN",
        desc2: "<p>L&aacute;mpara LED UV SUN H2 Plus, potencia profesional 96W para secador de u&ntilde;as, 39Leds con pantalla LCD, luz solar para Gel de secado de manicura</p><ul><li>La l&aacute;mpara tambi&eacute;n se puede utilizar sin temporizador, ya que H2 Plus se inicia tan pronto como el sensor detecte la mano.</li><li>Botones t&aacute;ctiles, 30s, 60s, 90s, 120s de cuatro velocidades.</li><li>Alta potencia 96 W, secado r&aacute;pido, apto para el cuidado de todo tipo de gel para u&ntilde;as.</li><li>Inducci&oacute;n infrarroja inteligente, c&oacute;modo de usar.</li><li>La fuente de luz dual funciona al mismo tiempo, no da&ntilde;a los ojos ni las manos negras.</li><li>39 piezas de cuentas de l&aacute;mpara distribuidas uniformemente, boquilla de l&aacute;mpara de gran di&aacute;metro. Base extra&iacute;ble.</li><li>Plato f&aacute;cil de limpiar. Perfecto para la escuela, oficina, hogar y sala de estar.</li></ul>",
        price: 90000,
        off: 102000,
        mainImage: "photos/13/led-nail-lamp_1.jpg",
        image: [
            "photos/13/led-nail-lamp_1.jpg",
            "photos/13/led-nail-lamp_2.jpg",
            "photos/13/led-nail-lamp_3.jpg",
            "photos/13/led-nail-lamp_4.jpg",
            "photos/13/led-nail-lamp_5.jpg",
            "photos/13/led-nail-lamp_6.jpg",
            "photos/13/led-nail-lamp_7.jpg"
        ],
        quantity: 1,
        sold: 0,
        boxState: 85
    },
    {
        id: 14,
        name: "Reductor Quita Papada Facial Masajeador De Cuello 3 Niveles",
        desc: "NECKLINE",
        desc2: "<p>Este innovador redactor de papada y masajeador de cuello cuenta con tres niveles de resistencia para tonificar los m&uacute;sculos. Presiona la piel y al mismo tiempo levanta el cuello. Logra un rostro joven y esbelto con este descuento sorprendente! Para notables resultados se recomienda utilizar dos minutos al d&iacute;a.</p><ul><li>Viene con 3 niveles de bobinas de resistencia para resultados r&aacute;pidos desde principiante a tono avanzado y f&aacute;cil de seguir el manual de instrucciones.</li><li>Le dar&aacute; a su cara una elevaci&oacute;n dando como resultado una piel m&aacute;s apretada y m&aacute;s firme.</li><li>Elimina la flacidez de piel y puede reducir una doble -chin o pliegues del cuello.</li><li>Se hace para su neckline qu&eacute; ejercicio hace para su cuerpo, haciendo que se vea y se sienta m&aacute;s joven.</li><li>Redefine tu perfil, reducir la flacidez facial y quitarle a&ntilde;os a su apariencia!</li><li>El secreto est&aacute; en sus tres bobinas de la energ&iacute;a de resistencia que suavemente reafirmar los m&uacute;sculos subyacentes del cuello y tensar la piel al mismo tiempo para una elevaci&oacute;n dram&aacute;tica.</li><li>Disfrute resultados anti edad utilizando s&oacute;lo dos minutos al d&iacute;a!</li></ul>",
        price: 14000,
        off: 19900,
        mainImage: "photos/14/neckline-slimmer_1.jpg",
        image: [
            "photos/14/neckline-slimmer_1.jpg",
            "photos/14/neckline-slimmer_2.jpg",
        ],
        quantity: 1,
        sold: 0,
        boxState: 45
    },
    {
        id: 15,
        name: "Audifonos Inalambricos Bluetooth Mymobile X10 Microfono Envi",
        desc: "MYMOBILE",
        desc2: "<ul><li>Inal&aacute;mbrico</li><li>Micr&oacute;fono</li><li>Bluetooth</li><li>Duraci&oacute;n de 2 a 3 horas</li><li>Recargable USB</li><li>Sonido HD</li><li>Caja y cable de carga incluidos</li><li>Estuche goma incluidos</li></ul>",
        price: 32000,
        off: 54900,
        mainImage: "photos/14/neckline-slimmer_1.jpg",
        image: [
            "photos/14/neckline-slimmer_1.jpg",
            "photos/14/neckline-slimmer_2.jpg",
        ],
        quantity: 1,
        sold: 0,
        boxState: 65
    },
    {
        id: 16,
        name: "Pistola Masajeadora Terapéutica Fascial Gun Bx-520 4 Niveles",
        desc: "GÉNERICA",
        desc2: "<p>Es perfecta para despu&eacute;s del ejercicio para relajar los m&uacute;sculos, para aliviar el dolor muscular o utilizarla en casa, cuenta con cuatro cabezales con distintas funciones y cuatro niveles.</p><p>CARACTER&Iacute;STICAS</p><ul><li>Alivia dolor y calambres causados por lesiones musculares, esguinces y tensi&oacute;n muscular. -Suelto y engrosador tejido conectivo y fascia.</li><li>Reducir la acumulaci&oacute;n de &aacute;cido l&aacute;ctico en el musculo.</li><li>Aumenta la movilidad articular.</li><li>Eliminar la fatiga muscular.</li><li>Cambio de 4 niveles, velocidad ajustable.</li></ul><p>ESPECIFICACIONES:</p><ul><li>Vibraciones de frecuencia variable de 4 niveles</li><li>Ajuste de nivel</li><li>Bateria de litio RECARGABLE de ahorro de energ&iacute;a segura</li><li>Control de encendido y apagado.</li><li>Alivia la rigidez y el dolor muscular</li><li>Mejora la circulaci&oacute;n sangu&iacute;nea</li><li>Mejora la salud de los tejidos blandos</li><li>Aumenta el rango de ejercicio</li><li>Peso del producto: 1,5 kg</li><li>Material: ABS</li><li>Modelo de conector: DC 5V= 1A</li><li>Duraci&oacute;n: 1-2 horas</li><li>Material del mango: gel de silicona nano</li><li>Ambiente de uso: -10-40&deg;C</li></ul><p>TIEMPO DE USO:</p><ul><li>Tend&oacute;n de la corva: 20s-30s x 3 veces</li><li>Aductor largo y corto: 10s-155s x 2 veces</li><li>Triceps braquial: 20s-30s x 3 veces</li><li>Musculo mayor: 15s-30s</li><li>Cuadriceps femoral: 30s-45s x 2 veces</li><li>Artritis de rodilla: 30s-45s x 2 veces</li><li>Fascitis plantar: 20s-30s x 3 veces</li><li>Plantar fascia: 30s-1min x 4 veces</li><li>Posici&oacute;n supina: 15s-20s x 2 veces<br /><br /></li></ul>",
        price: 55000,
        off: 84000,
        mainImage: "photos/14/neckline-slimmer_1.jpg",
        image: [
            "photos/14/neckline-slimmer_1.jpg",
            "photos/14/neckline-slimmer_2.jpg",
        ],
        quantity: 3,
        sold: 0,
        boxState: 100
    },
    {
        id: 17,
        name: "Parlante BT MS-3603BT ",
        desc: "GÉNERICA",
        desc2: "<ul><li>Funci&oacute;n: USB / FM / BT&nbsp;</li><li>Tiempo de carga de la bater&iacute;a: 2 horas&nbsp;</li><li>Tiempo de reproducci&oacute;n: 2-3 horas</li><li>Medidas del parlante: 13.5 x 18 x 11.5 cm</li><li>Colores Disponble: Naranja, Verde, Morado, Rosa</li></ul>",
        price: 18000,
        off: 25000,
        mainImage: "photos/14/neckline-slimmer_1.jpg",
        image: [
            "photos/14/neckline-slimmer_1.jpg",
            "photos/14/neckline-slimmer_2.jpg",
        ],
        quantity: 1,
        sold: 0,
        boxState: 100
    },
];

module.exports = products