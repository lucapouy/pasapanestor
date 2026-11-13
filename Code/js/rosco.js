// ==========================================
// PASAPALABRA - BANCO DE PREGUNTAS POR MODO
// ==========================================

const letras = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];


const bancos = {
  deporte: {
    A: [["Disciplina de carreras, saltos y lanzamientos.", "Atletismo"], ["Deporte de estrategia sobre un tablero.", "Ajedrez"]],
    B: [["Deporte de equipo que se juega con un aro y una pelota.", "Basquet"], ["Deporte de combate con guantes.", "Boxeo"]],
    C: [["Deporte de carreras con bicicletas.", "Ciclismo"], ["Deporte de equipo que se juega con bate y bases.", "Cricket"]],
    D: [["Prueba atlética que combina diez disciplinas.", "Decatlon"], ["Deporte que consiste en lanzar dardos a un blanco.", "Dardos"]],
    E: [["Deporte de combate con espada.", "Esgrima"], ["Deporte que se practica sobre un caballo.", "Equitacion"]],
    F: [["Deporte de equipo que busca marcar goles.", "Futbol"], ["Deporte de equipo que se juega con un disco.", "Floorball"]],
    G: [["Deporte que se practica en un campo con hoyos.", "Golf"], ["Disciplina deportiva con acrobacias y aparatos.", "Gimnasia"]],
    H: [["Deporte de equipo que se juega con las manos.", "Handball"], ["Deporte de equipo que se juega con palos y una bocha.", "Hockey"]],
    I: [["Prueba deportiva de resistencia que combina tres disciplinas.", "Ironman"], ["Deporte de equipo que se juega con un disco volador.", "Indiaca"]],
    J: [["Deporte de combate japonés con proyecciones.", "Judo"], ["Deporte de pelota que se juega con una cesta curva.", "Jai alai"]],
    K: [["Arte marcial de golpes con manos y pies.", "Karate"], ["Deporte de combate que combina patadas y puñetazos.", "Kickboxing"]],
    L: [["Deporte de combate cuerpo a cuerpo.", "Lucha"], ["Deporte de equipo que se juega con un palo y una pelota.", "Lacrosse"]],
    M: [["Prueba atlética de 42,195 kilómetros.", "Maraton"], ["Deporte de carreras de motos por terrenos difíciles.", "Motocross"]],
    N: [["Deporte acuático que consiste en desplazarse por el agua.", "Natacion"], ["Categoría de automovilismo estadounidense.", "NASCAR"]],
    Ñ: [["Contiene Ñ: actividad deportiva de ascenso a montañas.", "Montañismo"], ["Contiene Ñ: país cuya selección ganó el Mundial de fútbol de 2010.", "España"]],
    O: [["Deporte que consiste en orientarse y encontrar puntos de control.", "Orientacion"], ["Deporte olímpico de vela con una pequeña embarcación.", "Optimist"]],
    P: [["Deporte ecuestre en el que se golpea una pelota con un taco.", "Polo"], ["Deporte de raqueta que se juega en una pista cerrada.", "Padel"]],
    Q: [["Contiene Q: deporte de invierno que se practica sobre nieve.", "Esqui"], ["Contiene Q: deporte de raqueta que se juega en una cancha cerrada.", "Raquetbol"]],
    R: [["Deporte de equipo con una pelota ovalada.", "Rugby"], ["Deporte acuático que se practica en embarcaciones.", "Remo"]],
    S: [["Deporte acuático que consiste en deslizarse sobre olas.", "Surf"], ["Deporte de raqueta que se juega en una cancha cerrada.", "Squash"]],
    T: [["Deporte de raqueta que se juega individualmente o en parejas.", "Tenis"], ["Arte marcial de origen coreano.", "Taekwondo"]],
    U: [["Deporte de equipo que se juega con un disco volador.", "Ultimate"], ["Carrera de distancia superior a la maratón.", "Ultramaraton"]],
    V: [["Deporte de equipo que se juega pasando una pelota sobre una red.", "Voley"], ["Deporte náutico que utiliza embarcaciones impulsadas por el viento.", "Vela"]],
    W: [["Deporte acuático que combina una tabla y una vela.", "Windsurf"], ["Deporte acuático sobre una tabla arrastrada por una lancha.", "Wakeboard"]],
    X: [["Contiene X: deporte de carreras de motos por terrenos difíciles.", "Motocross"], ["Contiene X: deporte de combate que utiliza guantes.", "Boxeo"]],
    Y: [["Disciplina que combina posturas, respiración y concentración.", "Yoga"], ["Contiene Y: deporte de equipo que se juega con palos y una bocha.", "Hockey"]],
    Z: [["Actividad física grupal que combina baile y ejercicio.", "Zumba"], ["Actividad recreativa que consiste en rodar dentro de una esfera inflable.", "Zorbing"]]
  },

  historia: {
    A: [["Civilización antigua que construyó las pirámides de Giza.", "Antiguo Egipto"], ["Pueblo precolombino que fundó Tenochtitlán.", "Aztecas"]],
    B: [["Capital alemana donde se encuentra la Puerta de Brandeburgo.", "Berlin"], ["Corriente revolucionaria rusa que tomó el poder en 1917.", "Bolchevismo"]],
    C: [["Antigua ciudad rival de Roma en el norte de África.", "Cartago"], ["Expediciones militares medievales hacia Tierra Santa.", "Cruzadas"]],
    D: [["Desembarco aliado en Normandía durante la Segunda Guerra Mundial.", "Dia D"], ["Dinastía china que gobernó entre 1368 y 1644.", "Dinastia Ming"]],
    E: [["Período histórico que siguió a la Edad Antigua.", "Edad Media"], ["Expedición que completó la primera vuelta al mundo.", "Expedicion de Magallanes"]],
    F: [["País donde comenzó la Revolución de 1789.", "Francia"], ["Sistema social y político característico de la Europa medieval.", "Feudalismo"]],
    G: [["Civilización antigua cuya capital fue Atenas.", "Grecia"], ["Conflicto político e ideológico entre Estados Unidos y la URSS.", "Guerra Fria"]],
    H: [["Pueblo antiguo que habitó Anatolia.", "Hititas"], ["Genocidio cometido por el régimen nazi contra los judíos.", "Holocausto"]],
    I: [["Estado antiguo cuya capital fue Roma.", "Imperio romano"], ["Proceso por el que un territorio deja de depender de otro país.", "Independencia"]],
    J: [["País asiático que atacó Pearl Harbor en 1941.", "Japon"], ["Emperador romano asesinado en el año 44 a. C.", "Julio Cesar"]],
    K: [["Ciudad de Ucrania con una larga historia medieval.", "Kiev"], ["Contiene K: título del emperador alemán o prusiano.", "Kaiser"]],
    L: [["Movimiento político que defiende las libertades individuales.", "Liberalismo"], ["Rey francés conocido como el Rey Sol.", "Luis XIV"]],
    M: [["Civilización mesoamericana que desarrolló un calendario avanzado.", "Mayas"], ["Región histórica donde surgieron Sumeria y Babilonia.", "Mesopotamia"]],
    N: [["Emperador francés derrotado definitivamente en Waterloo.", "Napoleon"], ["Período de la Prehistoria en el que se desarrolló la agricultura.", "Neolitico"]],
    Ñ: [["Contiene Ñ: país europeo que tuvo un imperio colonial.", "España"], ["Contiene Ñ: territorio gobernado por un señor feudal.", "Señorio"]],
    O: [["Organización internacional fundada en 1945.", "ONU"], ["Imperio que tuvo su capital en Constantinopla.", "Otomano"]],
    P: [["Enfermedad que causó una gran epidemia en la Europa medieval.", "Peste negra"], ["Movimiento político argentino surgido en el siglo XX.", "Peronismo"]],
    Q: [["Dinastía china que unificó el país en el siglo III a. C.", "Qin"], ["Contiene Q: proceso histórico de ocupación y dominio de América por europeos.", "Conquista"]],
    R: [["Movimiento cultural europeo de los siglos XV y XVI.", "Renacimiento"], ["Cambio político y social que comenzó en Rusia en 1917.", "Revolucion rusa"]],
    S: [["Pueblo antiguo que desarrolló la escritura cuneiforme.", "Sumerios"], ["Estado socialista que fue una de las principales potencias del siglo XX.", "Union Sovietica"]],
    T: [["Ciudad mexica conquistada por Hernán Cortés.", "Tenochtitlan"], ["Tratado que formalizó el final de la Primera Guerra Mundial con Alemania.", "Tratado de Versalles"]],
    U: [["Sigla de la Unión de Repúblicas Socialistas Soviéticas.", "URSS"], ["Proceso histórico que unificó Italia en el siglo XIX.", "Unificacion italiana"]],
    V: [["Pueblo escandinavo navegante de la Edad Media.", "Vikingos"], ["Institución colonial que gobernaba territorios en nombre del rey.", "Virreinato"]],
    W: [["Batalla de 1815 que marcó la derrota final de Napoleón.", "Waterloo"], ["Apellido del presidente estadounidense durante la Primera Guerra Mundial.", "Wilson"]],
    X: [["Contiene X: salida forzada de una persona de su país.", "Exilio"], ["Contiene X: aumento del territorio dominado por un imperio.", "Expansion"]],
    Y: [["Conferencia de 1945 en la que participaron Roosevelt, Churchill y Stalin.", "Yalta"], ["Estado europeo que se disolvió durante la década de 1990.", "Yugoslavia"]],
    Z: [["Título del antiguo gobernante del Imperio ruso.", "Zar"], ["Antigua religión persa asociada a Zoroastro.", "Zoroastrismo"]]
  },

  "cultura-argentina": {
    A: [["Presidente argentino que regresó a la democracia en 1983.", "Alfonsin"], ["Comida tradicional preparada con carne asada.", "Asado"]],
    B: [["Prócer argentino creador de la bandera nacional.", "Belgrano"], ["Instrumento musical muy asociado al tango.", "Bandoneon"]],
    C: [["Danza folklórica muy popular en Santiago del Estero.", "Chacarera"], ["Comida argentina de chorizo dentro de un pan.", "Choripan"]],
    D: [["Dulce tradicional argentino elaborado con leche y azúcar.", "Dulce de leche"], ["Arquitecto argentino creador de la Casa Curutchet.", "Dieste"]],
    E: [["Comida hecha con masa y relleno, horneada o frita.", "Empanada"], ["Símbolo patrio que se utiliza en fechas nacionales.", "Escarapela"]],
    F: [["Conjunto de tradiciones musicales y culturales populares.", "Folklore"], ["Líder federal argentino del siglo XIX, conocido como el Tigre de los Llanos.", "Facundo Quiroga"]],
    G: [["Figura tradicional del hombre de campo argentino.", "Gaucho"], ["Cantor de tango conocido como el Zorzal Criollo.", "Gardel"]],
    H: [["Composición musical que representa a la Argentina como símbolo patrio.", "Himno"], ["Ave nacional argentina, típica de la región pampeana.", "Hornero"]],
    I: [["Proceso histórico que culminó con la declaración de 1816.", "Independencia"], ["Archipiélago del Atlántico Sur cuya soberanía reclama Argentina.", "Islas Malvinas"]],
    J: [["Provincia del noroeste argentino cuya capital es San Salvador.", "Jujuy"], ["Árbol de flores violetas muy común en ciudades argentinas.", "Jacaranda"]],
    K: [["Apellido del expresidente Néstor y de la expresidenta Cristina.", "Kirchner"], ["Tienda pequeña de barrio muy común en Argentina.", "Kiosco"]],
    L: [["Región argentina que incluye provincias como Corrientes y Entre Ríos.", "Litoral"], ["Vocabulario popular nacido en Buenos Aires.", "Lunfardo"]],
    M: [["Infusión tradicional argentina preparada con yerba.", "Mate"], ["Conflicto bélico de 1982 por un archipiélago del Atlántico Sur.", "Malvinas"]],
    N: [["Provincia patagónica cuya capital es la ciudad homónima.", "Neuquen"], ["Expresidente argentino cuyo apellido es Kirchner.", "Nestor"]],
    Ñ: [["Ave corredora sudamericana de la familia de los reidos.", "Ñandu"], ["Contiene Ñ: actividad de ascenso y recorrido por montañas.", "Montañismo"]],
    O: [["Monumento porteño ubicado en la avenida 9 de Julio.", "Obelisco"], ["Árbol nativo de la región pampeana.", "Ombu"]],
    P: [["Región del sur argentino compartida con Chile.", "Patagonia"], ["Movimiento político argentino fundado por Juan Domingo Perón.", "Peronismo"]],
    Q: [["Quebrada jujeña declarada Patrimonio de la Humanidad.", "Quebrada de Humahuaca"], ["Provincia argentina cuya capital es la ciudad homónima.", "Quilmes"]],
    R: [["Provincia patagónica cuya capital es Viedma.", "Rio Negro"], ["Género musical argentino surgido en la década de 1960.", "Rock nacional"]],
    S: [["Libertador argentino conocido como el Padre de la Patria.", "San Martin"], ["Presidente argentino que impulsó la educación pública en el siglo XIX.", "Sarmiento"]],
    T: [["Género musical y danza nacidos en Buenos Aires.", "Tango"], ["Provincia argentina donde se declaró la independencia en 1816.", "Tucuman"]],
    U: [["Ciudad fueguina conocida como la más austral del mundo.", "Ushuaia"], ["Partido político argentino fundado en 1891.", "Union Civica Radical"]],
    V: [["Capital de la provincia de Río Negro.", "Viedma"], ["Bebida elaborada a partir de la fermentación de la uva.", "Vino"]],
    W: [["Bandera de pueblos originarios andinos presente en el norte argentino.", "Wiphala"], ["Contiene W: club rosarino de fútbol cuyo nombre lleva apóstrofo.", "Newells"]],
    X: [["Contiene X: instrumento de percusión de láminas usado en música.", "Xilofono"], ["Contiene X: disciplina artística de grabado e impresión.", "Xilografia"]],
    Y: [["Planta cuyas hojas se usan para preparar mate.", "Yerba"], ["Presidente argentino de comienzos del siglo XX, Hipólito...", "Yrigoyen"]],
    Z: [["Danza folklórica argentina de pareja suelta.", "Zamba"], ["Viento cálido y seco característico de Cuyo.", "Zonda"]]
  },

  "cultura-general": {
    A: [["Capital de Grecia.", "Atenas"], ["Animal que produce miel.", "Abeja"]],
    B: [["Ciencia que estudia los seres vivos.", "Biologia"], ["Mamífero marino de gran tamaño.", "Ballena"]],
    C: [["País cuya capital es Ottawa.", "Canada"], ["Ciencia que estudia la materia y sus transformaciones.", "Quimica"]],
    D: [["Animal marino conocido por su inteligencia.", "Delfin"], ["Instrumento con seis caras utilizado en juegos.", "Dado"]],
    E: [["Animal de gran tamaño que tiene trompa.", "Elefante"], ["País europeo cuya capital es Madrid.", "España"]],
    F: [["País europeo cuya capital es París.", "Francia"], ["Instrumento musical de viento.", "Flauta"]],
    G: [["Animal doméstico que suele maullar.", "Gato"], ["Ciencia que estudia la Tierra.", "Geologia"]],
    H: [["Disciplina que estudia los hechos del pasado.", "Historia"], ["Órgano que bombea la sangre.", "Corazon"]],
    I: [["Porción de tierra rodeada de agua.", "Isla"], ["País europeo cuya capital es Roma.", "Italia"]],
    J: [["Animal de cuello muy largo.", "Jirafa"], ["Deporte de combate japonés.", "Judo"]],
    K: [["Ave no voladora originaria de Nueva Zelanda.", "Kiwi"], ["Unidad equivalente a mil gramos.", "Kilo"]],
    L: [["Satélite natural de la Tierra.", "Luna"], ["Felino conocido como el rey de la selva.", "Leon"]],
    M: [["Planeta conocido como el planeta rojo.", "Marte"], ["Fruta tropical de pulpa amarilla.", "Mango"]],
    N: [["País escandinavo cuya capital es Oslo.", "Noruega"], ["Ciencia que estudia el sistema nervioso.", "Neurologia"]],
    Ñ: [["Ave corredora sudamericana.", "Ñandu"], ["Contiene Ñ: estación del año más fría.", "Invierno"]],
    O: [["Gran masa de agua salada.", "Oceano"], ["Metal precioso de color amarillo.", "Oro"]],
    P: [["Animal doméstico conocido por ladrar.", "Perro"], ["Ciencia que estudia los seres vivos.", "Biologia"]],
    Q: [["Alimento elaborado a partir de la leche.", "Queso"], ["Ciencia que estudia la composición de la materia.", "Quimica"]],
    R: [["Corriente natural de agua.", "Rio"], ["Color característico de la sangre.", "Rojo"]],
    S: [["Estrella que ilumina nuestro sistema planetario.", "Sol"], ["Animal que se desplaza reptando.", "Serpiente"]],
    T: [["Instrumento que mide la temperatura.", "Termometro"], ["Felino de pelaje rayado.", "Tigre"]],
    U: [["País sudamericano cuya capital es Montevideo.", "Uruguay"], ["Fruta pequeña que crece en racimos.", "Uva"]],
    V: [["Medio de transporte que navega por el agua.", "Velero"], ["Deporte de equipo que se juega sobre una red.", "Voley"]],
    W: [["Deporte acuático que combina tabla y vela.", "Windsurf"], ["Red de páginas y recursos accesibles por internet.", "Web"]],
    X: [["Instrumento musical de percusión con láminas.", "Xilofono"], ["Contiene X: prueba escrita para evaluar conocimientos.", "Examen"]],
    Y: [["Disciplina que combina posturas y respiración.", "Yoga"], ["Alimento lácteo fermentado.", "Yogur"]],
    Z: [["Animal parecido al perro, de cola tupida.", "Zorro"], ["Calzado que cubre el pie.", "Zapato"]]
  },

  clasico: {
    A: [["País sudamericano cuya capital es Buenos Aires.", "Argentina"], ["Insecto que produce miel.", "Abeja"]],
    B: [["Instrumento musical de percusión.", "Bombo"], ["Animal marino de gran tamaño.", "Ballena"]],
    C: [["Metal cuyo símbolo químico es Cu.", "Cobre"], ["País cuya capital es Ottawa.", "Canada"]],
    D: [["Animal marino que utiliza ecolocalización.", "Delfin"], ["Objeto con seis caras usado en juegos.", "Dado"]],
    E: [["Animal de gran tamaño con trompa.", "Elefante"], ["Ciencia que estudia el ambiente.", "Ecologia"]],
    F: [["Deporte de equipo que se juega con una pelota.", "Futbol"], ["País europeo cuya capital es París.", "Francia"]],
    G: [["Animal doméstico que maúlla.", "Gato"], ["Ciencia que estudia la Tierra.", "Geologia"]],
    H: [["Disciplina que estudia el pasado.", "Historia"], ["Deporte de equipo que se juega con las manos.", "Handball"]],
    I: [["Porción de tierra rodeada de agua.", "Isla"], ["País europeo cuya capital es Roma.", "Italia"]],
    J: [["Animal de cuello largo.", "Jirafa"], ["Deporte de combate japonés.", "Judo"]],
    K: [["Ave originaria de Nueva Zelanda.", "Kiwi"], ["Unidad equivalente a mil gramos.", "Kilo"]],
    L: [["Satélite natural de la Tierra.", "Luna"], ["Felino conocido como rey de la selva.", "Leon"]],
    M: [["Planeta conocido como el planeta rojo.", "Marte"], ["Fruta tropical de pulpa amarilla.", "Mango"]],
    N: [["País cuya capital es Oslo.", "Noruega"], ["Deporte acuático.", "Natacion"]],
    Ñ: [["Ave corredora de Sudamérica.", "Ñandu"], ["Contiene Ñ: estación fría del año.", "Invierno"]],
    O: [["Masa de agua salada que cubre gran parte del planeta.", "Oceano"], ["Metal precioso amarillo.", "Oro"]],
    P: [["Deporte ecuestre que se juega con un taco.", "Polo"], ["Animal doméstico que ladra.", "Perro"]],
    Q: [["Alimento derivado de la leche.", "Queso"], ["Ciencia que estudia la materia.", "Quimica"]],
    R: [["Corriente natural de agua.", "Rio"], ["Color de la sangre.", "Rojo"]],
    S: [["Estrella central del sistema solar.", "Sol"], ["Animal que repta.", "Serpiente"]],
    T: [["Deporte de raqueta.", "Tenis"], ["Felino con rayas.", "Tigre"]],
    U: [["País cuya capital es Montevideo.", "Uruguay"], ["Fruta que crece en racimos.", "Uva"]],
    V: [["Deporte de equipo que se juega con una red.", "Voley"], ["Embarcación que navega por el agua.", "Velero"]],
    W: [["Deporte acuático con tabla y vela.", "Windsurf"], ["Red informática mundial.", "Web"]],
    X: [["Instrumento musical de láminas.", "Xilofono"], ["Contiene X: prueba de conocimientos.", "Examen"]],
    Y: [["Disciplina de posturas y respiración.", "Yoga"], ["Alimento lácteo fermentado.", "Yogur"]],
    Z: [["Animal parecido al perro.", "Zorro"], ["Calzado que cubre el pie.", "Zapato"]]
  },

  cine: {
    A: [["Película de ciencia ficción protagonizada por extraterrestres azules.", "Avatar"], ["Película de terror y ciencia ficción dirigida por Ridley Scott.", "Alien"]],
    B: [["Superhéroe de Ciudad Gótica.", "Batman"], ["Película protagonizada por una famosa muñeca.", "Barbie"]],
    C: [["Película clásica protagonizada por Humphrey Bogart.", "Casablanca"], ["Apellido del director de El padrino.", "Coppola"]],
    D: [["Película de ciencia ficción basada en la novela de Frank Herbert.", "Dune"], ["Apellido del actor protagonista de Titanic.", "DiCaprio"]],
    E: [["Película animada de Disney sobre una familia con poderes.", "Encanto"], ["Película de Steven Spielberg sobre un extraterrestre.", "ET"]],
    F: [["Película animada de Disney sobre dos hermanas.", "Frozen"], ["Película protagonizada por Tom Hanks como un hombre perdido en una isla.", "Forrest Gump"]],
    G: [["Película de Ridley Scott protagonizada por Russell Crowe.", "Gladiator"], ["Película de Francis Ford Coppola sobre una familia mafiosa.", "Godfather"]],
    H: [["Saga cinematográfica sobre un joven mago.", "Harry Potter"], ["Apellido del director de Psicosis.", "Hitchcock"]],
    I: [["Película de Christopher Nolan sobre sueños dentro de sueños.", "Inception"], ["Película de ciencia ficción sobre viajes espaciales.", "Interstellar"]],
    J: [["Película de 2019 protagonizada por Joaquin Phoenix.", "Joker"], ["Saga cinematográfica sobre dinosaurios creada por Spielberg.", "Jurassic Park"]],
    K: [["Película de Quentin Tarantino protagonizada por Uma Thurman.", "Kill Bill"], ["Apellido del director de 2001: Odisea del espacio.", "Kubrick"]],
    L: [["Película animada de Disney sobre un cachorro de león.", "Lion King"], ["Actor que interpretó a Neo en Matrix.", "Keanu Reeves"]],
    M: [["Película de ciencia ficción protagonizada por Neo.", "Matrix"], ["Saga de acción protagonizada por Max Rockatansky.", "Mad Max"]],
    N: [["Película protagonizada por Tom Hanks en una isla desierta.", "Naufrago"], ["Apellido del director de Oppenheimer.", "Nolan"]],
    Ñ: [["Contiene Ñ: película animada sobre un niño que visita la Tierra de los Muertos.", "Coco"], ["Contiene Ñ: título de una famosa saga de fantasía.", "El Señor de los Anillos"]],
    O: [["Película biográfica sobre el creador de la bomba atómica.", "Oppenheimer"], ["Película surcoreana de suspenso dirigida por Park Chan-wook.", "Oldboy"]],
    P: [["Película de Quentin Tarantino ambientada en el mundo criminal.", "Pulp Fiction"], ["Película surcoreana ganadora del Óscar a mejor película.", "Parasite"]],
    Q: [["Contiene Q: apellido del director de Pulp Fiction.", "Tarantino"], ["Contiene Q: película protagonizada por Denzel Washington y Dakota Fanning.", "Man on Fire"]],
    R: [["Película protagonizada por Sylvester Stallone como un boxeador.", "Rocky"], ["Película animada sobre una rata que cocina en París.", "Ratatouille"]],
    S: [["Película animada sobre un ogro verde.", "Shrek"], ["Película de gánsteres protagonizada por Al Pacino.", "Scarface"]],
    T: [["Película sobre un barco que naufraga en su viaje inaugural.", "Titanic"], ["Saga animada sobre juguetes que cobran vida.", "Toy Story"]],
    U: [["Película animada de Pixar sobre un anciano y un niño explorador.", "Up"], ["Western protagonizado por Clint Eastwood.", "Unforgiven"]],
    V: [["Película protagonizada por Tom Hardy sobre un simbionte.", "Venom"], ["Película española de Pedro Almodóvar protagonizada por Penélope Cruz.", "Volver"]],
    W: [["Película animada de Pixar protagonizada por un robot.", "Wall-E"], ["Película de superhéroes protagonizada por Gal Gadot.", "Wonder Woman"]],
    X: [["Saga de superhéroes mutantes de Marvel.", "X-Men"], ["Película de acción protagonizada por Vin Diesel.", "XXX"]],
    Y: [["Película mexicana dirigida por Alfonso Cuarón.", "Y tu mama tambien"], ["Película musical protagonizada por Ryan Gosling y Emma Stone.", "La La Land"]],
    Z: [["Película animada sobre animales que viven en una ciudad.", "Zootopia"], ["Película de suspenso protagonizada por Jake Gyllenhaal.", "Zodiac"]]
  },

  famosos: {
    A: [["Futbolista argentino campeón del mundo en 2022.", "Angel Di Maria"], ["Cantante británica conocida por Rolling in the Deep.", "Adele"]],
    B: [["Cantante británico conocido como el Duque Blanco.", "David Bowie"], ["Cantante estadounidense de Crazy in Love.", "Beyonce"]],
    C: [["Cantante argentino referente del rock nacional.", "Charly Garcia"], ["Actor estadounidense protagonista de Misión imposible.", "Tom Cruise"]],
    D: [["Actor argentino protagonista de El secreto de sus ojos.", "Ricardo Darin"], ["Cantante británica conocida por New Rules.", "Dua Lipa"]],
    E: [["Cantante estadounidense de rap conocida por Lose Yourself.", "Eminem"], ["Actriz argentina protagonista de numerosas películas nacionales.", "Eva de Dominici"]],
    F: [["Cantante británico líder de Queen.", "Freddie Mercury"], ["Cantante argentino conocido por su carrera solista y Los Fabulosos Cadillacs.", "Vicentico"]],
    G: [["Cantante argentino conocido como el líder de Soda Stereo.", "Gustavo Cerati"], ["Cantante argentina de cumbia conocida como la reina de la bailanta.", "Gilda"]],
    H: [["Actor australiano que interpretó a Wolverine.", "Hugh Jackman"], ["Cantante británico integrante de One Direction.", "Harry Styles"]],
    I: [["Futbolista español campeón del mundo en 2010.", "Iniesta"], ["Contiene I: actor estadounidense protagonista de Titanic.", "DiCaprio"]],
    J: [["Actor que interpretó a Jack Sparrow.", "Johnny Depp"], ["Cantante y actriz estadounidense conocida como J.Lo.", "Jennifer Lopez"]],
    K: [["Actor canadiense protagonista de Matrix.", "Keanu Reeves"], ["Cantante australiana de pop.", "Kylie Minogue"]],
    L: [["Futbolista argentino campeón del mundo en 2022.", "Lionel Messi"], ["Cantante estadounidense de pop.", "Lady Gaga"]],
    M: [["Cantante estadounidense conocida como la Reina del Pop.", "Madonna"], ["Futbolista argentino conocido como el Diez.", "Maradona"]],
    N: [["Futbolista brasileño que jugó en Barcelona y PSG.", "Neymar"], ["Actriz y cantante uruguaya radicada en Argentina.", "Natalia Oreiro"]],
    Ñ: [["Contiene Ñ: actriz argentina conocida por su trabajo en televisión.", "Florencia Peña"], ["Contiene Ñ: periodista y comunicador español.", "Iñaki Gabilondo"]],
    O: [["Actor estadounidense que interpretó a Moon Knight.", "Oscar Isaac"], ["Cantante británico conocido como el Príncipe de las Tinieblas.", "Ozzy Osbourne"]],
    P: [["Actor chileno protagonista de The Last of Us.", "Pedro Pascal"], ["Cantante estadounidense de Purple Rain.", "Prince"]],
    Q: [["Personaje argentino creador de Mafalda.", "Quino"], ["Contiene Q: cantante español conocido por sus baladas.", "Joaquin Sabina"]],
    R: [["Actor argentino protagonista de Nueve reinas.", "Ricardo Darin"], ["Cantante barbadense de Umbrella.", "Rihanna"]],
    S: [["Cantante colombiana conocida por Waka Waka.", "Shakira"], ["Actor estadounidense protagonista de Hombres de negro.", "Will Smith"]],
    T: [["Actor estadounidense protagonista de Forrest Gump.", "Tom Hanks"], ["Cantante estadounidense de pop y country.", "Taylor Swift"]],
    U: [["Actriz estadounidense protagonista de Kill Bill.", "Uma Thurman"], ["Velocista jamaicano múltiple campeón olímpico.", "Usain Bolt"]],
    V: [["Actor estadounidense protagonista de Top Gun.", "Val Kilmer"], ["Actor danés protagonista de Hannibal.", "Mads Mikkelsen"]],
    W: [["Actor estadounidense protagonista de Hombres de negro.", "Will Smith"], ["Cantante estadounidense conocida por I Wanna Dance with Somebody.", "Whitney Houston"]],
    X: [["Cantante y presentadora brasileña conocida como la Reina de los Bajitos.", "Xuxa"], ["Contiene X: actor que interpreta a Thor en Marvel.", "Chris Hemsworth"]],
    Y: [["Actriz mexicana protagonista de Roma.", "Yalitza Aparicio"], ["Cantante japonesa integrante de The Beatles junto a John Lennon.", "Yoko Ono"]],
    Z: [["Actriz estadounidense protagonista de Euphoria.", "Zendaya"], ["Cantante británico integrante de One Direction.", "Zayn Malik"]]
  },

    contrarreloj: {
    A: [
      ["Ciencia que estudia los cuerpos celestes.", "Astronomia"],
      ["Técnica artística que utiliza pigmentos diluidos en agua.", "Acuarela"]
    ],
    B: [
      ["Instrumento que indica los puntos cardinales.", "Brujula"],
      ["Microorganismo que puede reproducirse por división celular.", "Bacteria"]
    ],
    C: [
      ["Mamífero australiano que se desplaza saltando.", "Canguro"],
      ["Elemento químico presente en todos los seres vivos.", "Carbono"]
    ],
    D: [
      ["Poliedro que tiene doce caras.", "Dodecaedro"],
      ["Personaje de ficción conocido como el conde vampiro.", "Dracula"]
    ],
    E: [
      ["Fenómeno en el que un cuerpo celeste oculta parcial o totalmente a otro.", "Eclipse"],
      ["Piedra preciosa de color verde.", "Esmeralda"]
    ],
    F: [
      ["Proceso mediante el cual las plantas producen su alimento usando luz.", "Fotosintesis"],
      ["Resto o huella de un organismo del pasado conservado en rocas.", "Fosil"]
    ],
    G: [
      ["Gran masa de hielo que se desplaza lentamente.", "Glaciar"],
      ["Fuerza que atrae los cuerpos hacia la Tierra.", "Gravedad"]
    ],
    H: [
      ["Cada una de las dos mitades en que se divide la Tierra.", "Hemisferio"],
      ["Mamífero carnívoro africano conocido por su risa.", "Hiena"]
    ],
    I: [
      ["Objeto que atrae ciertos metales como el hierro.", "Iman"],
      ["Propiedad de un cuerpo de resistirse a cambiar su movimiento.", "Inercia"]
    ],
    J: [
      ["Animal mamífero de América que tiene manchas y es un gran felino.", "Jaguar"],
      ["Raíz aromática utilizada como condimento.", "Jengibre"]
    ],
    K: [
      ["Mamífero australiano que se alimenta principalmente de eucalipto.", "Koala"],
      ["Unidad de longitud equivalente a mil metros.", "Kilometro"]
    ],
    L: [
      ["Construcción con caminos confusos que dificultan encontrar la salida.", "Laberinto"],
      ["Órgano del cuello que participa en la producción de la voz.", "Laringe"]
    ],
    M: [
      ["Instrumento que permite observar objetos muy pequeños.", "Microscopio"],
      ["Fragmento de roca espacial que llega a la superficie terrestre.", "Meteorito"]
    ],
    N: [
      ["Célula especializada en transmitir impulsos nerviosos.", "Neurona"],
      ["Elemento químico metálico utilizado, entre otras cosas, en aleaciones.", "Niquel"]
    ],
    Ñ: [
      ["Ave corredora sudamericana de gran tamaño.", "Ñandu"],
      ["Contiene Ñ: período de doce meses.", "Año"]
    ],
    O: [
      ["Trayectoria que sigue un cuerpo alrededor de otro en el espacio.", "Orbita"],
      ["Gas indispensable para la respiración humana.", "Oxigeno"]
    ],
    P: [
      ["Porción de tierra rodeada de agua por casi todos sus lados.", "Peninsula"],
      ["Objeto que oscila alrededor de un punto fijo.", "Pendulo"]
    ],
    Q: [
      ["Objeto astronómico extremadamente luminoso y muy lejano.", "Quasar"],
      ["Unidad básica de información utilizada en computación cuántica.", "Qubit"]
    ],
    R: [
      ["Destello luminoso producido durante una tormenta eléctrica.", "Relampago"],
      ["Mamífero de gran tamaño que tiene uno o dos cuernos sobre el hocico.", "Rinoceronte"]
    ],
    S: [
      ["Planeta del sistema solar famoso por sus anillos.", "Saturno"],
      ["Relación estrecha entre organismos de distintas especies.", "Simbiosis"]
    ],
    T: [
      ["Instrumento que permite observar objetos lejanos en el espacio.", "Telescopio"],
      ["Región fría y sin árboles, con vegetación baja.", "Tundra"]
    ],
    U: [
      ["Instrumento musical pequeño de cuatro cuerdas, originario de Hawái.", "Ukelele"],
      ["Sociedad o situación ideal imaginada, difícil de alcanzar.", "Utopia"]
    ],
    V: [
      ["Abertura de la corteza terrestre por la que pueden salir lava y gases.", "Volcan"],
      ["Sustancia necesaria en pequeñas cantidades para el funcionamiento del organismo.", "Vitamina"]
    ],
    W: [
      ["Mamífero australiano robusto que excava madrigueras.", "Wombat"],
      ["Elemento químico también conocido como tungsteno.", "Wolframio"]
    ],
    X: [
      ["Tejido vegetal que transporta agua desde las raíces hacia las hojas.", "Xilema"],
      ["Elemento químico cuyo símbolo es Xe.", "Xenon"]
    ],
    Y: [
      ["Herramienta pesada de metal utilizada para golpear y moldear materiales.", "Yunque"],
      ["Elemento químico utilizado en medicina y en la sal yodada.", "Yodo"]
    ],
    Z: [
      ["Piedra preciosa de color azul intenso.", "Zafiro"],
      ["Antigua aeronave dirigible de estructura rígida.", "Zepelin"]
    ]
  }
};


// ==========================================
// CONFIGURACIÓN Y ESTADO DEL JUEGO
// ==========================================



const modo = new URLSearchParams(window.location.search)
    .get("modo") || "clasico";

const nombresModos = {
    deporte: "Deporte",
    historia: "Historia",
    "cultura-argentina": "Cultura Argentina",
    "cultura-general": "Cultura General",
    clasico: "Modo Clásico",
    cine: "Cine",
    contrarreloj: "Contrarreloj",
    famosos: "Famosos"
};

const preguntas = bancos[modo] || bancos.clasico;

function validarBanco() {
    const errores = [];

    letras.forEach(letra => {
        const opciones = preguntas[letra] || [];
        const validas = opciones.filter(dato =>
            preguntaCoincide(letra, dato)
        );

        if (validas.length !== 2) {
            errores.push(
                `${letra}: tiene ${validas.length} preguntas válidas (debería tener 2)`
            );
        }
    });

    if (errores.length > 0) {
        console.error(`Errores en el banco ${modo}:`, errores);
    } else {
        console.log(`Banco ${modo}: 27 letras y 2 preguntas válidas por letra.`);
    }
}

validarBanco();

// ==========================================
// ELEMENTOS HTML
// ==========================================

const rosco = document.getElementById("rosco");
const preguntaElemento = document.getElementById("pregunta");
const letraActualElemento = document.getElementById("estadoPregunta");
const respuestaInput = document.getElementById("respuesta");

const formularioRespuesta = document.getElementById("formRespuesta");

const botonResponder = formularioRespuesta?.querySelector(
    'button[type="submit"]'
);

const botonPasapalabra = document.getElementById("btnPasapalabra");
const botonPausar = document.getElementById("btnPausa");
const botonReiniciar = document.getElementById("btnReiniciar");
const botonJugarOtra = document.getElementById("btnJugarOtra");

const tiempoElemento = document.getElementById("tiempo");

// ==========================================
// CONTADORES DEL MODO RACHA
// ==========================================

let rachaActual = 0;
let mejorRacha = 0;

let panelRacha = null;
let rachaActualElemento = null;
let mejorRachaElemento = null;

function crearPanelRacha() {

    if (modo !== "contrarreloj") return;
    if (!tiempoElemento || !tiempoElemento.parentElement) return;

    if (panelRacha) return;

    panelRacha = document.createElement("div");

    panelRacha.id = "panelRacha";

    panelRacha.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin: 15px auto;
        padding: 14px;
        border-radius: 12px;
        background: rgba(255,255,255,0.08);
        text-align: center;
        font-weight: bold;
    `;

    const crearContador = (titulo, id) => {

        const contenedor = document.createElement("div");

        const etiqueta = document.createElement("div");
        etiqueta.textContent = titulo;

        const valor = document.createElement("div");
        valor.id = id;
        valor.textContent = "0";

        valor.style.cssText = `
            font-size: 28px;
            margin-top: 5px;
        `;

        contenedor.appendChild(etiqueta);
        contenedor.appendChild(valor);

        panelRacha.appendChild(contenedor);

        return valor;
    };

    rachaActualElemento = crearContador(
        "🔥 RACHA ACTUAL",
        "rachaActual"
    );

    mejorRachaElemento = crearContador(
        "🏆 MEJOR RACHA",
        "mejorRacha"
    );

    tiempoElemento.insertAdjacentElement(
        "afterend",
        panelRacha
    );
}

function actualizarRacha() {

    if (rachaActualElemento) {
        rachaActualElemento.textContent = rachaActual;
    }

    if (mejorRachaElemento) {
        mejorRachaElemento.textContent = mejorRacha;
    }

}

const correctasElemento = document.getElementById("correctas");
const incorrectasElemento = document.getElementById("incorrectas");
const pasadasElemento = document.getElementById("pasadas");
const restantesElemento = document.getElementById("restantes");

const porcentajeElemento = document.getElementById("porcentaje");
const barraProgreso = document.getElementById("barraProgreso");

const dificultadElemento = document.getElementById("dificultad");

const tituloElemento = document.getElementById("tituloModo");
const subtituloElemento = document.getElementById("subtituloModo");

const pantallaFinal = document.getElementById("resultadoFinal");
const resumenFinal = document.getElementById("resumenFinal");

const mensajeElemento = document.getElementById("mensaje");
const tipoPreguntaElemento = document.getElementById("tipoPregunta");

// ==========================================
// ESTADO
// ==========================================

let indiceActual = 0;

let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

let tiempoRestante = 200;
let duracionPartida = 200;

let intervalo = null;

let pausado = false;
let juegoTerminado = false;

let letrasRespondidas = new Set();
let letrasPasadas = new Set();

let preguntasElegidas = {};

// ==========================================
// NORMALIZAR RESPUESTAS
// ==========================================

function normalizar(texto) {
    return texto
        .toString()
        .toLowerCase()
        .replace(/ñ/g, "\u0001")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\u0001/g, "ñ")
        .trim()
        .replace(/\s+/g, " ");
}

// ==========================================
// VALIDAR QUE LA RESPUESTA COINCIDA
// CON LA LETRA DEL ROSCO
// ==========================================

function preguntaCoincide(letra, dato) {
    if (!dato || !dato[0] || !dato[1]) return false;

    const respuesta = normalizar(dato[1]);
    const pista = normalizar(dato[0]);
    const letraNormalizada = normalizar(letra);

    const esContiene = pista.startsWith("contiene");

    if (letra === "Ñ") {
        return esContiene
            ? respuesta.includes("ñ")
            : respuesta.startsWith("ñ");
    }

    if (esContiene) {
        return respuesta.includes(letraNormalizada);
    }

    return respuesta.startsWith(letraNormalizada);
} 


// ==========================================
// OBTENER PREGUNTA
// ==========================================

function obtenerPregunta(letra) {
    if (preguntasElegidas[letra]) {
        return preguntasElegidas[letra];
    }

    const opciones = preguntas[letra] || [];

    const opcionesValidas = opciones.filter(dato =>
        preguntaCoincide(letra, dato)
    );

    if (opcionesValidas.length === 0) {
        console.error(
            `ERROR: No hay preguntas válidas para la letra ${letra} en el modo ${modo}.`
        );

        return null;
    }

    const indice = Math.floor(Math.random() * opcionesValidas.length);
    const elegida = opcionesValidas[indice];

    preguntasElegidas[letra] = elegida;

    return elegida;
}
// ==========================================
// TÍTULO DEL MODO
// ==========================================

if (tituloElemento) {
    tituloElemento.textContent =
        nombresModos[modo] || "Modo Clásico";
}

if (subtituloElemento) {
    subtituloElemento.textContent = "Completá las 27 letras";
}

// ==========================================
// CREAR ROSCO
// ==========================================

function crearRosco() {

    if (!rosco) return;

    rosco.innerHTML = "";

    letras.forEach((letra, indice) => {

        const boton = document.createElement("button");

        boton.type = "button";
        boton.id = "letra-" + letra;
        boton.className = "letra";
        boton.textContent = letra;

        const centroX = rosco.clientWidth / 2;
        const centroY = rosco.clientHeight / 2;

        const radio = Math.max(centroX - 22, 0);

        const angulo =
            (indice / letras.length) * Math.PI * 2 -
            Math.PI / 2;

        const x = centroX + Math.cos(angulo) * radio;
        const y = centroY + Math.sin(angulo) * radio;

        boton.style.left = x + "px";
        boton.style.top = y + "px";

        boton.addEventListener("click", () => {

            if (juegoTerminado || pausado) return;

            if (letrasRespondidas.has(letra)) return;

            indiceActual = indice;

            mostrarPregunta();
            actualizarEstadoLetras();

        });

        rosco.appendChild(boton);

    });

    actualizarEstadoLetras();
}

// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function mostrarPregunta() {
    if (juegoTerminado) return;

    const letra = letras[indiceActual];
    const dato = obtenerPregunta(letra);

    if (!dato) {
        if (preguntaElemento) {
            preguntaElemento.textContent =
                `Error: falta una pregunta válida para la letra ${letra} en ${nombresModos[modo] || modo}.`;
        }

        if (letraActualElemento) {
            letraActualElemento.textContent = "ERROR DE CONFIGURACIÓN";
        }

        if (respuestaInput) {
            respuestaInput.disabled = true;
        }

        if (botonResponder) botonResponder.disabled = true;
        if (botonPasapalabra) botonPasapalabra.disabled = true;

        return;
    }

    if (respuestaInput) {
        respuestaInput.disabled = pausado;
    }

    if (botonResponder) botonResponder.disabled = pausado;
    if (botonPasapalabra) botonPasapalabra.disabled = pausado;

    if (letraActualElemento) {
        letraActualElemento.textContent = "LETRA " + letra;
    }

    if (preguntaElemento) {
        preguntaElemento.textContent = dato[0];
    }

    if (tipoPreguntaElemento) {
        const contiene = normalizar(dato[0]).startsWith("contiene");

        tipoPreguntaElemento.textContent = contiene
            ? `La respuesta contiene la letra ${letra}.`
            : `La respuesta empieza con la letra ${letra}.`;
    }

    if (respuestaInput) {
        respuestaInput.value = "";

        if (!pausado) {
            respuestaInput.focus();
        }
    }

    actualizarEstadoLetras();
}

// ==========================================
// ACTUALIZAR ESTADO DE LAS LETRAS
// ==========================================

function actualizarEstadoLetras() {

    letras.forEach((letra, indice) => {

        const elemento = document.getElementById("letra-" + letra);

        if (!elemento) return;

        elemento.classList.toggle(
            "actual",
            indice === indiceActual &&
            !letrasRespondidas.has(letra)
        );

    });

}

// ==========================================
// ACTUALIZAR MARCADOR Y PROGRESO
// ==========================================

function actualizarMarcador() {

    const totalRespondidas = letrasRespondidas.size;

    const restantes = letras.length - totalRespondidas;

    const porcentaje = Math.round(
        (totalRespondidas / letras.length) * 100
    );

    if (correctasElemento) {
        correctasElemento.textContent = respuestasCorrectas;
    }

    if (incorrectasElemento) {
        incorrectasElemento.textContent = respuestasIncorrectas;
    }

    if (pasadasElemento) {
        pasadasElemento.textContent = letrasPasadas.size;
    }

    if (restantesElemento) {
        restantesElemento.textContent = restantes;
    }

    if (porcentajeElemento) {
        porcentajeElemento.textContent = porcentaje + "%";
    }

    if (barraProgreso) {
        barraProgreso.style.width = porcentaje + "%";
    }

}

// ==========================================
// CAMBIAR COLOR DE UNA LETRA
// ==========================================

function actualizarLetra(letra, resultado) {

    const elemento = document.getElementById("letra-" + letra);

    if (!elemento) return;

    elemento.classList.remove(
        "correcta",
        "incorrecta",
        "pasada"
    );

    elemento.classList.add(resultado);

}

// ==========================================
// BUSCAR SIGUIENTE LETRA PENDIENTE
// ==========================================

function avanzarLetra() {

    if (letrasRespondidas.size === letras.length) {
        finalizarJuego();
        return;
    }

    for (let i = 1; i <= letras.length; i++) {

        const siguiente =
            (indiceActual + i) % letras.length;

        const letra = letras[siguiente];

        if (!letrasRespondidas.has(letra)) {

            indiceActual = siguiente;

            mostrarPregunta();

            return;
        }

    }

}

// ==========================================
// RESPONDER
// ==========================================



function responder() {

    if (juegoTerminado || pausado) return;

    const letra = letras[indiceActual];

    if (letrasRespondidas.has(letra)) return;

    const dato = obtenerPregunta(letra);

    const respuestaUsuario = normalizar(
        respuestaInput.value
    );

    const respuestaCorrecta = normalizar(dato[1]);

    if (!respuestaUsuario) {
        if (mensajeElemento) {
            mensajeElemento.textContent =
                "Escribí una respuesta antes de continuar.";
            mensajeElemento.className = "mensaje mal";
        }
        return;
    }

    letrasPasadas.delete(letra);

    if (respuestaUsuario === respuestaCorrecta) {

        respuestasCorrectas++;

        // Sumar racha en Contrarreloj.
        if (modo === "contrarreloj") {
            rachaActual++;

            if (rachaActual > mejorRacha) {
                mejorRacha = rachaActual;
            }

            actualizarRacha();
        }

        actualizarLetra(letra, "correcta");

        if (mensajeElemento) {
            mensajeElemento.textContent = "¡Respuesta correcta!";
            mensajeElemento.className = "mensaje bien";
        }

    } else {

        respuestasIncorrectas++;

        // Penalización por respuesta incorrecta.
        if (modo === "contrarreloj") {

            rachaActual = 0;

            tiempoRestante = Math.max(0, tiempoRestante - 10);

            actualizarRacha();
            actualizarTiempo();
        }

        actualizarLetra(letra, "incorrecta");

        if (mensajeElemento) {
            mensajeElemento.textContent =
                modo === "contrarreloj"
                    ? "¡Incorrecto! -10 segundos. Respuesta: " + dato[1]
                    : "Incorrecto. La respuesta era: " + dato[1];

            mensajeElemento.className = "mensaje mal";
        }

        // Si la penalización agotó el tiempo, terminar.
        if (modo === "contrarreloj" && tiempoRestante <= 0) {
            finalizarJuego();
            return;
        }
    }

    letrasRespondidas.add(letra);

    actualizarMarcador();

    if (letrasRespondidas.size === letras.length) {
        finalizarJuego();
    } else {
        avanzarLetra();
    }
}


// ==========================================
// PASAPALABRA
// ==========================================

function pasarPalabra() {

    if (juegoTerminado || pausado) return;

    const letra = letras[indiceActual];

    if (letrasRespondidas.has(letra)) return;

    if (!letrasPasadas.has(letra)) {

        letrasPasadas.add(letra);

        actualizarLetra(letra, "pasada");

    }

    if (mensajeElemento) {
        mensajeElemento.textContent =
            "Pasaste la letra " + letra;

        mensajeElemento.className = "mensaje";
    }

    actualizarMarcador();

    avanzarLetra();

}

// ==========================================
// CRONÓMETRO
// ==========================================

function actualizarTiempo() {

    if (!tiempoElemento) return;

    const minutos = Math.floor(tiempoRestante / 60);

    const segundos = tiempoRestante % 60;

    tiempoElemento.textContent =
        String(minutos).padStart(2, "0") +
        ":" +
        String(segundos).padStart(2, "0");

}

function iniciarCronometro() {

    clearInterval(intervalo);

    intervalo = setInterval(() => {

        if (pausado || juegoTerminado) return;

        tiempoRestante--;

        actualizarTiempo();

        if (tiempoRestante <= 0) {
            finalizarJuego();
        }

    }, 1000);

}

// ==========================================
// PAUSAR Y REANUDAR
// ==========================================

function pausarJuego() {

    if (juegoTerminado) return;

    pausado = !pausado;

    if (botonPausar) {

        botonPausar.textContent =
            pausado ? "▶ Reanudar" : "⏸ Pausar";

    }

    if (respuestaInput) {
        respuestaInput.disabled = pausado;
    }

    if (botonResponder) {
        botonResponder.disabled = pausado;
    }

    if (botonPasapalabra) {
        botonPasapalabra.disabled = pausado;
    }

    if (mensajeElemento && pausado) {
        mensajeElemento.textContent = "Partida pausada";
        mensajeElemento.className = "mensaje";
    }

    if (!pausado && respuestaInput) {
        respuestaInput.focus();
    }

}

// ==========================================
// FINALIZAR PARTIDA
// ==========================================

function finalizarJuego() {

    if (juegoTerminado) return;

    juegoTerminado = true;
    pausado = false;

    clearInterval(intervalo);

    const sinResolver =
        letras.length - letrasRespondidas.size;

    let mensaje =
    `Correctas: ${respuestasCorrectas}\n` +
    `Incorrectas: ${respuestasIncorrectas}\n` +
    `Pasadas: ${letrasPasadas.size}\n` +
    `Sin resolver: ${sinResolver}`;

if (modo === "contrarreloj") {

    mensaje +=
        `\n\n🔥 Racha actual: ${rachaActual}` +
        `\n🏆 Mejor racha: ${mejorRacha}`;

}

    if (resumenFinal) {
        resumenFinal.textContent = mensaje;
    }

    if (pantallaFinal) {

        pantallaFinal.classList.remove("oculto");
        pantallaFinal.style.display = "block";

    }

    if (respuestaInput) {
        respuestaInput.disabled = true;
    }

    if (botonResponder) {
        botonResponder.disabled = true;
    }

    if (botonPasapalabra) {
        botonPasapalabra.disabled = true;
    }

    if (botonPausar) {
        botonPausar.disabled = true;
    }

    if (dificultadElemento) {
        dificultadElemento.disabled = true;
    }

    actualizarMarcador();

}

// ==========================================
// INICIAR O REINICIAR PARTIDA
// ==========================================

function iniciarJuego() {

    clearInterval(intervalo);

    indiceActual = 0;

    respuestasCorrectas = 0;
respuestasIncorrectas = 0;

// Reiniciar estadísticas de racha.
rachaActual = 0;
mejorRacha = 0;

crearPanelRacha();
actualizarRacha();

    duracionPartida =
        Number(dificultadElemento?.value) || 200;

    tiempoRestante = duracionPartida;

    pausado = false;
    juegoTerminado = false;

    letrasRespondidas = new Set();
    letrasPasadas = new Set();

    preguntasElegidas = {};

    if (pantallaFinal) {

        pantallaFinal.classList.add("oculto");
        pantallaFinal.style.display = "none";

    }

    if (botonPausar) {
        botonPausar.disabled = false;
        botonPausar.textContent = "⏸ Pausar";
    }

    if (botonResponder) {
        botonResponder.disabled = false;
    }

    if (botonPasapalabra) {
        botonPasapalabra.disabled = false;
    }

    if (respuestaInput) {
        respuestaInput.disabled = false;
    }

    if (dificultadElemento) {
        dificultadElemento.disabled = false;
    }

    if (mensajeElemento) {
        mensajeElemento.textContent = "";
        mensajeElemento.className = "mensaje";
    }

    // Restablecer colores de todas las letras.
    if (rosco) {

        rosco.querySelectorAll(".letra").forEach(boton => {

            boton.classList.remove(
                "correcta",
                "incorrecta",
                "pasada",
                "actual"
            );

        });

    }

    crearRosco();

    actualizarMarcador();

    actualizarTiempo();

    mostrarPregunta();

    iniciarCronometro();

}

// ==========================================
// EVENTOS
// ==========================================

// RESPONDER: utilizar submit del formulario.
// Evita que se recargue la página.

if (formularioRespuesta) {

    formularioRespuesta.addEventListener("submit", evento => {

        evento.preventDefault();

        responder();

    });

}

// PASAPALABRA

if (botonPasapalabra) {

    botonPasapalabra.addEventListener(
        "click",
        pasarPalabra
    );

}

// PAUSAR

if (botonPausar) {

    botonPausar.addEventListener(
        "click",
        pausarJuego
    );

}

// REINICIAR

if (botonReiniciar) {

    botonReiniciar.addEventListener("click", () => {

        if (confirm("¿Querés reiniciar la partida?")) {
            iniciarJuego();
        }

    });

}

// JUGAR OTRA VEZ

if (botonJugarOtra) {

    botonJugarOtra.addEventListener(
        "click",
        iniciarJuego
    );

}

// CAMBIAR DIFICULTAD

if (dificultadElemento) {

    dificultadElemento.addEventListener("change", () => {

        if (juegoTerminado) return;

        if (
            confirm(
                "Cambiar la dificultad reiniciará el tiempo y la partida. ¿Continuar?"
            )
        ) {

            iniciarJuego();

        } else {

            dificultadElemento.value =
                String(duracionPartida);

        }

    });

}

// ==========================================
// INICIAR AUTOMÁTICAMENTE
// ==========================================

iniciarJuego();
