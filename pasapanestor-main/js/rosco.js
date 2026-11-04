// ==========================================
// PASAPALABRA - BANCO DE PREGUNTAS POR MODO
// ==========================================

const letras = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const bancos = {
  deporte: {
    A: [["Disciplina de carreras, saltos y lanzamientos.", "Atletismo"], ["Deporte de estrategia que se juega sobre un tablero.", "Ajedrez"]],
    B: [["Deporte de equipo que se juega con un aro y una pelota.", "Basquet"], ["Deporte de combate en el que se usan guantes.", "Boxeo"]],
    C: [["Deporte de carreras con bicicletas.", "Ciclismo"], ["Deporte de equipo que se juega con un bate y bases.", "Cricket"]],
    D: [["Prueba atlética que combina diez disciplinas.", "Decatlon"], ["Deporte de equipo que se juega con disco volador.", "Disco"]],
    E: [["Deporte que se practica sobre un caballo.", "Equitacion"], ["Prueba de resistencia que incluye natación, ciclismo y carrera.", "Ironman"]],
    F: [["Deporte en el que dos equipos buscan hacer goles.", "Futbol"], ["Combate deportivo de origen japonés.", "Full contact"]],
    G: [["Deporte de combate de origen japonés.", " karate"], ["Prueba de gimnasia con movimientos y acrobacias.", "Gimnasia"]],
    H: [["Deporte de equipo que se juega con las manos y una pelota.", "Handball"], ["Prueba de atletismo que consiste en lanzar un objeto pesado.", "H lanzamiento de martillo"]],
    I: [["Deporte de combate de origen coreano, conocido como taekwondo.", "Taekwondo"], ["Modalidad de patinaje sobre hielo con música y figuras.", "Patinaje artistico"]],
    J: [["Deporte de combate japonés que utiliza proyecciones.", "Judo"], ["Deporte de pelota que se juega con una cesta curva en una cancha.", "Jai alai"]],
    K: [["Arte marcial de golpes con manos y pies.", "Karate"], ["Deporte de combate que utiliza patadas y puñetazos.", "Kickboxing"]],
    L: [["Prueba de atletismo que consiste en correr largas distancias.", "Larga distancia"], ["Deporte de combate practicado con espada.", "Lucha"]],
    M: [["Deporte de combate que combina técnicas de distintas artes marciales.", "MMA"], ["Prueba atlética de 42,195 kilómetros.", "Maraton"]],
    N: [["Deporte acuático que consiste en desplazarse por el agua.", "Natacion"], ["Competencia automovilística de larga duración.", "Nascar"]],
    Ñ: [["Contiene Ñ: deporte de combate que se practica sobre un cuadrilátero.", "Boxeo"], ["Contiene Ñ: acción de hacer una anotación en fútbol o básquet.", "Punto"]],
    O: [["Deporte de equipo que se juega en una pileta.", "Waterpolo"], ["Deporte de invierno que utiliza una tabla sobre la nieve.", "Snowboard"]],
    P: [["Deporte ecuestre en el que se golpea una pelota con un taco.", "Polo"], ["Deporte de equipo que se juega con una pelota y una red.", "Paddle"]],
    Q: [["Contiene Q: prueba de atletismo de 42 kilómetros.", "Maraton"], ["Contiene Q: deporte que se practica sobre una tabla y olas.", "Surf"]],
    R: [["Deporte de carreras con autos.", "Rally"], ["Deporte de combate con rounds y guantes.", "Boxeo"]],
    S: [["Deporte acuático que consiste en deslizarse sobre olas.", "Surf"], ["Deporte de raqueta que se juega en una cancha cerrada.", "Squash"]],
    T: [["Deporte de raqueta que se juega individualmente o en parejas.", "Tenis"], ["Deporte de equipo que se juega con las manos y una pelota.", "Tenis de mesa"]],
    U: [["Contiene U: deporte de equipo que se juega con un disco volador.", "Ultimate"], ["Contiene U: carrera de larga distancia por senderos.", "Trail running"]],
    V: [["Deporte de equipo que se juega pasando la pelota por encima de una red.", "Voley"], ["Deporte de motor con motos.", "Velocidad"]],
    W: [["Deporte acuático que combina una tabla y una vela.", "Windsurf"], ["Deporte acuático que se practica sobre una tabla arrastrada por una lancha.", "Wakeboard"]],
    X: [["Contiene X: ejercicio físico que alterna actividades de alta intensidad.", "Crossfit"], ["Contiene X: deporte de motor que se corre por caminos.", "Motocross"]],
    Y: [["Disciplina que combina posturas, respiración y concentración.", "Yoga"], ["Contiene Y: deporte de equipo que se juega con bate y pelota.", "Hockey"]],
    Z: [["Deporte de combate olímpico de origen coreano.", "Taekwondo"], ["Contiene Z: carrera atlética de velocidad.", "Velocidad"]]
  },
  historia: {
    A: [["Civilización antigua que construyó las pirámides de Giza.", "Antiguo Egipto"], ["Emperador francés derrotado en Waterloo.", "Napoleon"]],
    B: [["Ciudad donde se encuentra la Puerta de Brandeburgo.", "Berlin"], ["Revolución que comenzó en 1917 en Rusia.", "Revolucion bolchevique"]],
    C: [["Civilización que construyó Chichén Itzá.", "Maya"], ["Conflicto mundial ocurrido entre 1939 y 1945.", "Segunda Guerra Mundial"]],
    D: [["Movimiento político y social que puso fin a la monarquía francesa en 1792.", "Revolucion francesa"], ["Pueblo originario que habitó gran parte de la península ibérica.", "Iberos"]],
    E: [["Rey macedonio conocido como el Grande.", "Alejandro"], ["Período histórico que siguió a la Edad Media.", "Edad Moderna"]],
    F: [["País europeo donde comenzó la Revolución de 1789.", "Francia"], ["Dinastía china que gobernó entre 1368 y 1644.", "Ming"]],
    G: [["Civilización antigua cuya capital fue Atenas.", "Grecia"], ["Conflicto entre griegos y troyanos narrado en la Ilíada.", "Guerra de Troya"]],
    H: [["Disciplina que estudia los hechos del pasado.", "Historia"], ["Pueblo germánico que saqueó Roma en el año 410.", "Visigodos"]],
    I: [["Imperio cuya capital fue Roma.", "Imperio romano"], ["Proceso de llegada europea a América iniciado en 1492.", "Colonizacion"]],
    J: [["País asiático cuyo ataque a Pearl Harbor llevó a EE. UU. a la Segunda Guerra Mundial.", "Japon"], ["Río donde se desarrolló una antigua civilización mesopotámica junto al Tigris.", "Eufrates"]],
    K: [["Apellido del líder soviético que impulsó la perestroika.", "Gorbachov"], ["Contiene K: ciudad japonesa donde se firmó un protocolo climático en 1997.", "Kyoto"]],
    L: [["Documento inglés de 1215 que limitó el poder del rey.", "Carta Magna"], ["Líder sudafricano que luchó contra el apartheid.", "Nelson Mandela"]],
    M: [["Movimiento cultural europeo de los siglos XV y XVI.", "Renacimiento"], ["Imperio americano con capital en Tenochtitlán.", "Mexica"]],
    N: [["Emperador francés coronado en 1804.", "Napoleon"], ["Pueblo escandinavo navegante de la Edad Media.", "Normandos"]],
    Ñ: [["Contiene Ñ: enfrentamiento armado entre bandos de un mismo país.", "Guerra civil española"], ["Contiene Ñ: período de gobierno de un monarca.", "Reinado"]],
    O: [["Organización fundada en 1945 para promover la paz mundial.", "ONU"], ["Ciudad alemana donde se celebraron juicios contra jerarcas nazis.", "Nuremberg"]],
    P: [["Ciudad donde se firmó la declaración de independencia argentina.", "Tucuman"], ["Sistema político en el que gobierna el pueblo.", "Republica"]],
    Q: [["Contiene Q: antigua civilización de Mesopotamia que desarrolló la escritura cuneiforme.", "Sumeria"], ["Contiene Q: conflicto armado entre dos o más países.", "Guerra"]],
    R: [["Revolución que comenzó en Rusia en 1917.", "Revolucion rusa"], ["Ciudad italiana centro del Imperio romano.", "Roma"]],
    S: [["Pueblo de la Antigüedad que construyó una gran civilización en el sur de Mesopotamia.", "Sumerios"], ["Conflicto entre el norte y el sur de Estados Unidos.", "Guerra de Secesion"]],
    T: [["Ciudad donde se firmó el tratado que puso fin a la Primera Guerra Mundial.", "Versalles"], ["Imperio con capital en Constantinopla.", "Bizantino"]],
    U: [["Organización internacional creada tras la Segunda Guerra Mundial.", "ONU"], ["Contiene U: levantamiento popular contra un gobierno.", "Sublevacion"]],
    V: [["Pueblo germánico que saqueó Roma en 455.", "Vandalos"], ["Batalla de 1815 que marcó la derrota final de Napoleón.", "Waterloo"]],
    W: [["Batalla de 1815 en la que fue derrotado Napoleón.", "Waterloo"], ["Apellido del presidente estadounidense durante gran parte de la Guerra Civil.", "Washington"]],
    X: [["Contiene X: salida forzada de una población de su territorio.", "Exilio"], ["Contiene X: período de expansión territorial de un imperio.", "Expansion"]],
    Y: [["Contiene Y: civilización precolombina de Mesoamérica.", "Maya"], ["Contiene Y: barco usado por vikingos para navegar.", "Drakkar vikingo"]],
    Z: [["Contiene Z: antiguo gobernante ruso.", "Zar"], ["Contiene Z: sistema de segregación racial sudafricano.", "Apartheid"]]
  },
  "cultura-argentina": {
    A: [["Provincia argentina cuya capital es la ciudad homónima.", "Acat? no"], ["Danza tradicional argentina, emblema del país.", "Chacarera"]],
    B: [["Infusión tradicional argentina preparada con hojas.", "Mate"], ["Barrio porteño famoso por sus casas de colores.", "La Boca"]],
    C: [["Danza folklórica argentina muy popular en Santiago del Estero.", "Chacarera"], ["Comida argentina hecha con carne dentro de un pan.", "Choripan"]],
    D: [["Dulce tradicional argentino hecho con leche.", "Dulce de leche"], ["Provincia argentina cuya capital es Resistencia.", "Chaco"]],
    E: [["Escritor argentino autor de El Aleph.", "Borges"], ["Deporte nacional argentino declarado en 2018.", "Pato"]],
    F: [["Comida argentina hecha con masa y relleno, horneada o frita.", "Empanada"], ["Género musical nacido en Buenos Aires.", "Tango"]],
    G: [["Bebida de hierbas muy popular en Argentina.", "Mate"], ["Personaje gauchesco creado por José Hernández.", "Martin Fierro"]],
    H: [["Prócer argentino conocido como el Padre de la Patria.", "San Martin"], ["Provincia argentina cuya capital es Neuquén.", "Neuquen"]],
    I: [["Conjunto de islas del Atlántico Sur cuya soberanía reclama Argentina.", "Islas Malvinas"], ["Escritor argentino autor de La invención de Morel.", "Bioy Casares"]],
    J: [["Provincia argentina cuya capital es San Salvador.", "Jujuy"], ["Fiesta popular con música y baile tradicional.", "Carnaval"]],
    K: [["Apellido del expresidente argentino Néstor y de la expresidenta Cristina.", "Kirchner"], ["Contiene K: ciudad patagónica conocida por el glaciar Perito Moreno.", "El Calafate"]],
    L: [["Provincia argentina cuya capital es La Rioja.", "La Rioja"], ["Equipo nacional de fútbol apodado la Albiceleste.", "Seleccion"]],
    M: [["Infusión nacional que se comparte en ronda.", "Mate"], ["Músico argentino conocido como el Flaco, líder de Almendra.", "Spinetta"]],
    N: [["Provincia argentina cuya capital es la ciudad homónima patagónica.", "Neuquen"], ["Región argentina famosa por sus cataratas.", "Misiones"]],
    Ñ: [["Contiene Ñ: plato argentino de masa rellena, típico de varias regiones.", "Empanada salteña"], ["Contiene Ñ: ave de la llanura pampeana, símbolo de la fauna local.", "Ñandu"]],
    O: [["Provincia argentina cuya capital es la ciudad homónima.", "Formosa"], ["Cantante argentino de rock conocido como el Indio.", "Solari"]],
    P: [["Provincia argentina cuya capital es Santa Rosa.", "La Pampa"], ["Deporte ecuestre argentino declarado nacional.", "Pato"]],
    Q: [["Contiene Q: comida argentina de carne asada a las brasas.", "Asado"], ["Contiene Q: bebida de hierbas que se toma en mate.", "Yerba"]],
    R: [["Provincia argentina cuya capital es la ciudad homónima.", "Rio Negro"], ["Ritmo musical del litoral argentino.", "Chamame"]],
    S: [["Provincia argentina donde se declaró la independencia en 1816.", "Tucuman"], ["Danza folklórica del norte argentino.", "Zamba"]],
    T: [["Provincia donde se declaró la independencia argentina.", "Tucuman"], ["Danza y música ciudadana nacida en Buenos Aires.", "Tango"]],
    U: [["Contiene U: famoso estadio de fútbol de Buenos Aires, apodado la Bombonera.", "Boca Juniors"], ["Contiene U: bebida tradicional de yerba mate.", "Mate"]],
    V: [["Provincia argentina cuya capital es la ciudad de Viedma.", "Rio Negro"], ["Cantante argentino de rock autor de De música ligera.", "Cerati"]],
    W: [["Contiene W: deporte ecuestre tradicional argentino.", "Pato"], ["Contiene W: famoso club de fútbol de Rosario.", "Newells"]],
    X: [["Contiene X: instrumento de percusión usado en música folklórica.", "Bombo leguero"], ["Contiene X: género musical argentino de Buenos Aires.", "Tango"]],
    Y: [["Contiene Y: planta cuyas hojas se usan para preparar mate.", "Yerba mate"], ["Contiene Y: localidad bonaerense donde se encuentra la basílica de Luján.", "Lujan"]],
    Z: [["Danza folklórica argentina de pareja suelta.", "Zamba"], ["Contiene Z: ciudad argentina famosa por su Fiesta Nacional de la Vendimia.", "Mendoza"]]
  },
    "cultura-general": {
    A: [["Instrumento de cuerda que suele tener seis cuerdas.", "Guitarra"], ["Capital de Grecia.", "Atenas"]],
    B: [["Ciencia que estudia los seres vivos.", "Biologia"], ["Mamífero marino de gran tamaño.", "Ballena"]],
    C: [["Ciencia que estudia la materia y sus cambios.", "Quimica"], ["País cuya capital es Ottawa.", "Canada"]],
    D: [["Planeta más cercano al Sol.", "Mercurio"], ["Animal doméstico conocido por su lealtad.", "Perro"]],
    E: [["Ciencia que estudia los seres vivos y su ambiente.", "Ecologia"], ["País europeo cuya capital es Madrid.", "España"]],
    F: [["País europeo cuya capital es París.", "Francia"], ["Instrumento musical de viento.", "Flauta"]],
    G: [["Ciencia que estudia la Tierra.", "Geologia"], ["Animal doméstico que suele maullar.", "Gato"]],
    H: [["Disciplina que estudia los hechos del pasado.", "Historia"], ["Parte del cuerpo que bombea la sangre.", "Corazon"]],
    I: [["Porción de tierra rodeada de agua.", "Isla"], ["País cuya capital es Roma.", "Italia"]],
    J: [["Animal de cuello muy largo.", "Jirafa"], ["Deporte de combate japonés.", "Judo"]],
    K: [["Ave no voladora originaria de Nueva Zelanda.", "Kiwi"], ["Unidad equivalente a mil gramos.", "Kilo"]],
    L: [["Satélite natural de la Tierra.", "Luna"], ["Animal conocido como rey de la selva.", "Leon"]],
    M: [["Planeta conocido como el planeta rojo.", "Marte"], ["Fruta tropical de pulpa amarilla.", "Mango"]],
    N: [["País escandinavo cuya capital es Oslo.", "Noruega"], ["Ciencia que estudia el sistema nervioso.", "Neurologia"]],
    Ñ: [["Ave corredora sudamericana.", "Ñandu"], ["Contiene Ñ: estación del año más fría.", "Invierno"]],
    O: [["Gran masa de agua salada.", "Oceano"], ["Metal precioso de color amarillo.", "Oro"]],
    P: [["Animal doméstico que ladra.", "Perro"], ["Ciencia que estudia los seres vivos.", "Biologia"]],
    Q: [["Alimento elaborado con leche.", "Queso"], ["Ciencia que estudia la composición de la materia.", "Quimica"]],
    R: [["Corriente natural de agua.", "Rio"], ["Planeta famoso por sus anillos.", "Saturno"]],
    S: [["Estrella que ilumina nuestro sistema planetario.", "Sol"], ["Animal que se desplaza reptando.", "Serpiente"]],
    T: [["Instrumento que sirve para medir la temperatura.", "Termometro"], ["Felino de pelaje rayado.", "Tigre"]],
    U: [["País sudamericano cuya capital es Montevideo.", "Uruguay"], ["Fruta pequeña que crece en racimos.", "Uva"]],
    V: [["Medio de transporte que navega por el agua.", "Velero"], ["Deporte de equipo que se juega sobre una red.", "Voley"]],
    W: [["Deporte acuático que se practica con tabla y vela.", "Windsurf"], ["Red informática mundial.", "Web"]],
    X: [["Instrumento musical de percusión con láminas.", "Xilofono"], ["Contiene X: prueba escrita para evaluar conocimientos.", "Examen"]],
    Y: [["Disciplina que combina posturas y respiración.", "Yoga"], ["Alimento lácteo fermentado.", "Yogur"]],
    Z: [["Animal parecido al perro, de cola tupida.", "Zorro"], ["Calzado que cubre el pie.", "Zapato"]]
  },
  clasico: {
    A: [["País sudamericano cuya capital es Buenos Aires.", "Argentina"], ["Animal que produce miel.", "Abeja"]],
    B: [["Instrumento musical de percusión.", "Bombo"], ["Animal marino de gran tamaño.", "Ballena"]],
    C: [["Metal cuyo símbolo químico es Cu.", "Cobre"], ["País cuya capital es Ottawa.", "Canada"]],
    D: [["Animal marino que utiliza ecolocalización.", "Delfin"], ["Instrumento para dibujar círculos.", "Compas"]],
    E: [["Animal de gran tamaño con trompa.", "Elefante"], ["Ciencia que estudia el ambiente.", "Ecologia"]],
    F: [["Deporte de equipo que se juega con una pelota.", "Futbol"], ["País europeo cuya capital es París.", "Francia"]],
    G: [["Animal doméstico que maúlla.", "Gato"], ["Ciencia que estudia la Tierra.", "Geologia"]],
    H: [["Disciplina que estudia el pasado.", "Historia"], ["Deporte de equipo que se juega con las manos.", "Handball"]],
    I: [["Porción de tierra rodeada de agua.", "Isla"], ["País europeo cuya capital es Roma.", "Italia"]],
    J: [["Animal de cuello largo.", "Jirafa"], ["Deporte de combate japonés.", "Judo"]],
    K: [["Ave originaria de Nueva Zelanda.", "Kiwi"], ["Unidad equivalente a mil gramos.", "Kilo"]],
    L: [["Satélite natural de la Tierra.", "Luna"], ["Animal conocido como rey de la selva.", "Leon"]],
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
    V: [["Deporte de equipo que se juega con una red.", "Voley"], ["Medio de transporte aéreo.", "Avion"]],
    W: [["Deporte acuático con tabla y vela.", "Windsurf"], ["Red informática mundial.", "Web"]],
    X: [["Instrumento musical de láminas.", "Xilofono"], ["Contiene X: prueba de conocimientos.", "Examen"]],
    Y: [["Disciplina de posturas y respiración.", "Yoga"], ["Contiene Y: alimento lácteo fermentado.", "Yogur"]],
    Z: [["Animal parecido al perro.", "Zorro"], ["Calzado que cubre el pie.", "Zapato"]]
  },
  cine: {
    A: [["Actor que interpretó a Iron Man en el cine.", "Robert Downey Jr"], ["Película de Pixar sobre emociones personificadas.", "Intensamente"]],
    B: [["Película de Steven Spielberg sobre un tiburón.", "Tiburon"], ["Actor protagonista de John Wick.", "Keanu Reeves"]],
    C: [["Película sobre un barco que se hunde en el Atlántico.", "Titanic"], ["Director de cine de El padrino.", "Coppola"]],
    D: [["Película animada de Disney sobre una familia de superhéroes.", "Los Increibles"], ["Actor que interpretó al Guasón en Joker (2019).", "Joaquin Phoenix"]],
    E: [["Película de ciencia ficción protagonizada por un extraterrestre amistoso.", "ET"], ["Actor que interpretó a Jack Sparrow.", "Johnny Depp"]],
    F: [["Saga cinematográfica de un joven mago.", "Harry Potter"], ["Película de animación sobre juguetes que cobran vida.", "Toy Story"]],
    G: [["Película de mafiosos dirigida por Francis Ford Coppola.", "El Padrino"], ["Actor que interpretó a Wolverine.", "Hugh Jackman"]],
    H: [["Película sobre un hotel dirigido por un excéntrico conserje.", "El Gran Hotel Budapest"], ["Actor que interpretó a Harry Potter.", "Daniel Radcliffe"]],
    I: [["Película de Christopher Nolan sobre sueños dentro de sueños.", "Origen"], ["Película animada de Pixar sobre emociones.", "Intensamente"]],
    J: [["Actor que interpretó al Joker en la película de 2019.", "Joaquin Phoenix"], ["Saga de películas de dinosaurios creada por Spielberg.", "Jurassic Park"]],
    K: [["Director de cine de Kill Bill.", "Tarantino"], ["Película de Disney sobre una princesa de hielo.", "Frozen"]],
    L: [["Película de Disney sobre un cachorro de león.", "El Rey Leon"], ["Actor que interpretó a Neo en Matrix.", "Keanu Reeves"]],
    M: [["Película de ciencia ficción protagonizada por Neo.", "Matrix"], ["Director de cine de Pulp Fiction.", "Tarantino"]],
    N: [["Película de Christopher Nolan sobre un payaso criminal.", "Batman"], ["Actor que interpretó a Neo.", "Keanu Reeves"]],
    Ñ: [["Contiene Ñ: película animada de Pixar sobre emociones.", "Intensamente"], ["Contiene Ñ: película argentina ganadora del Oscar en 2010.", "El secreto de sus ojos"]],
    O: [["Película de animación sobre un ogro verde.", "Shrek"], ["Película de ciencia ficción dirigida por James Cameron.", "Avatar"]],
    P: [["Película de Francis Ford Coppola sobre la mafia.", "El Padrino"], ["Película de Quentin Tarantino con Uma Thurman.", "Kill Bill"]],
    Q: [["Contiene Q: película sobre un tiburón gigante.", "Tiburon"], ["Contiene Q: saga de películas sobre un agente secreto británico.", "James Bond"]],
    R: [["Película animada de Disney sobre una rata que cocina.", "Ratatouille"], ["Actor que interpretó a Rocky Balboa.", "Sylvester Stallone"]],
    S: [["Película de ciencia ficción sobre un robot que viaja en el tiempo.", "Terminator"], ["Película de Disney sobre un rey león.", "El Rey Leon"]],
    T: [["Película sobre un barco que naufraga en su viaje inaugural.", "Titanic"], ["Saga de películas de juguetes animados.", "Toy Story"]],
    U: [["Contiene U: película animada sobre un ogro verde.", "Shrek"], ["Contiene U: saga de ciencia ficción creada por George Lucas.", "Star Wars"]],
    V: [["Película de ciencia ficción sobre un planeta de Pandora.", "Avatar"], ["Actor que interpretó a Jack Sparrow.", "Johnny Depp"]],
    W: [["Actor que interpretó a Willy Wonka en Charlie y la fábrica de chocolate (2005).", "Johnny Depp"], ["Contiene W: saga de fantasía sobre un joven mago.", "Harry Potter"]],
    X: [["Contiene X: saga de películas de superhéroes mutantes.", "X-Men"], ["Contiene X: película de acción protagonizada por Vin Diesel.", "XXX"]],
    Y: [["Contiene Y: película animada de juguetes de Pixar.", "Toy Story"], ["Contiene Y: película de ciencia ficción con un extraterrestre.", "ET"]],
    Z: [["Película animada de DreamWorks sobre un panda experto en kung fu.", "Kung Fu Panda"], ["Contiene Z: película de Disney sobre un zorro y un conejo policías.", "Zootopia"]]
  },
    famosos: {
    A: [["Futbolista argentino campeón del mundo en 2022.", "Angel Di Maria"], ["Actriz argentina protagonista de Esperando la carroza.", "China Zorrilla"]],
    B: [["Cantante británico conocido como el Duque Blanco.", "David Bowie"], ["Actor estadounidense protagonista de El padrino.", "Marlon Brando"]],
    C: [["Cantante argentina conocida como la reina del rock nacional.", "Fabiana Cantilo"], ["Actor estadounidense protagonista de Misión imposible.", "Tom Cruise"]],
    D: [["Actor argentino protagonista de El secreto de sus ojos.", "Ricardo Darin"], ["Cantante estadounidense conocida como la Reina del Pop.", "Madonna"]],
    E: [["Futbolista brasileño apodado O Rei.", "Pele"], ["Cantante británico de Queen.", "Freddie Mercury"]],
    F: [["Cantante estadounidense conocida como la Reina del Soul.", "Aretha Franklin"], ["Actor estadounidense protagonista de Náufrago.", "Tom Hanks"]],
    G: [["Cantante estadounidense conocida por Like a Prayer.", "Madonna"], ["Actor argentino protagonista de Nueve reinas.", "Ricardo Darin"]],
    H: [["Actor australiano que interpretó a Wolverine.", "Hugh Jackman"], ["Cantante colombiana de Hips Don't Lie.", "Shakira"]],
    I: [["Cantante española conocida como la voz de La Oreja de Van Gogh.", "Amaia Montero"], ["Actor estadounidense de El renacido.", "Leonardo DiCaprio"]],
    J: [["Cantante estadounidense conocida como la Princesa del Pop.", "Britney Spears"], ["Actor que interpretó a Jack Sparrow.", "Johnny Depp"]],
    K: [["Actor canadiense protagonista de Matrix.", "Keanu Reeves"], ["Cantante estadounidense de country y pop.", "Kacey Musgraves"]],
    L: [["Futbolista argentino campeón del mundo en 2022.", "Lionel Messi"], ["Cantante estadounidense de pop.", "Lady Gaga"]],
    M: [["Cantante británico líder de Queen.", "Freddie Mercury"], ["Actor estadounidense protagonista de Rocky.", "Sylvester Stallone"]],
    N: [["Cantante estadounidense conocida como la Reina del Pop.", "Madonna"], ["Actor argentino protagonista de El hijo de la novia.", "Ricardo Darin"]],
    Ñ: [["Contiene Ñ: futbolista argentino apodado la Pulga.", "Messi"], ["Contiene Ñ: cantante española de flamenco y pop.", "Rosalia"]],
    O: [["Cantante argentino conocido como el Negro, referente del tango.", "Oscar Alemán"], ["Actor estadounidense protagonista de El silencio de los inocentes.", "Anthony Hopkins"]],
    P: [["Futbolista brasileño conocido como O Rei.", "Pele"], ["Cantante estadounidense de Purple Rain.", "Prince"]],
    Q: [["Contiene Q: cantante británica conocida por Rolling in the Deep.", "Adele"], ["Contiene Q: actor protagonista de Gladiador.", "Russell Crowe"]],
    R: [["Actor argentino protagonista de El secreto de sus ojos.", "Ricardo Darin"], ["Cantante estadounidense de Umbrella.", "Rihanna"]],
    S: [["Cantante colombiana conocida por Waka Waka.", "Shakira"], ["Actor estadounidense protagonista de Hombres de negro.", "Will Smith"]],
    T: [["Actor estadounidense protagonista de Forrest Gump.", "Tom Hanks"], ["Cantante canadiense conocida por My Heart Will Go On.", "Celine Dion"]],
    U: [["Contiene U: cantante británica conocida por Hello.", "Adele"], ["Contiene U: actor australiano de Wolverine.", "Hugh Jackman"]],
    V: [["Cantante argentina conocida como la Mona.", "Jimena Baron"], ["Actor estadounidense protagonista de Top Gun.", "Tom Cruise"]],
    W: [["Actor estadounidense protagonista de Hombres de negro.", "Will Smith"], ["Cantante estadounidense de country.", "Taylor Swift"]],
    X: [["Contiene X: actor estadounidense de Rápidos y furiosos.", "Vin Diesel"], ["Contiene X: cantante estadounidense de música pop.", "Madonna"]],
    Y: [["Contiene Y: cantante estadounidense de pop y country.", "Taylor Swift"], ["Contiene Y: actor estadounidense de Piratas del Caribe.", "Johnny Depp"]],
    Z: [["Actor estadounidense protagonista de El gran showman.", "Hugh Jackman"], ["Contiene Z: cantante argentina de pop.", "Lali"]]
  },
  contrarreloj: {
    A: [["Capital de Grecia.", "Atenas"], ["Animal que produce miel.", "Abeja"]],
    B: [["País europeo cuya capital es Bruselas.", "Belgica"], ["Instrumento musical de percusión.", "Bombo"]],
    C: [["País cuya capital es Ottawa.", "Canada"], ["Ciencia que estudia los seres vivos.", "Biologia"]],
    D: [["Animal marino inteligente.", "Delfin"], ["Planeta enano más famoso del cinturón de Kuiper.", "Pluton"]],
    E: [["Animal con trompa.", "Elefante"], ["Ciencia que estudia el ambiente.", "Ecologia"]],
    F: [["País cuya capital es París.", "Francia"], ["Deporte más popular en Argentina.", "Futbol"]],
    G: [["Animal doméstico que maúlla.", "Gato"], ["Ciencia que estudia la Tierra.", "Geologia"]],
    H: [["Disciplina que estudia el pasado.", "Historia"], ["Deporte de equipo con pelota y arcos.", "Handball"]],
    I: [["Porción de tierra rodeada de agua.", "Isla"], ["País cuya capital es Roma.", "Italia"]],
    J: [["Animal de cuello largo.", "Jirafa"], ["Deporte de combate japonés.", "Judo"]],
    K: [["Ave de Nueva Zelanda.", "Kiwi"], ["Unidad equivalente a mil gramos.", "Kilo"]],
    L: [["Satélite natural de la Tierra.", "Luna"], ["Animal conocido como rey de la selva.", "Leon"]],
    M: [["Planeta rojo.", "Marte"], ["Fruta tropical amarilla.", "Mango"]],
    N: [["País cuya capital es Oslo.", "Noruega"], ["Deporte acuático.", "Natacion"]],
    Ñ: [["Ave corredora sudamericana.", "Ñandu"], ["Contiene Ñ: estación fría.", "Invierno"]],
    O: [["Masa de agua salada.", "Oceano"], ["Metal precioso amarillo.", "Oro"]],
    P: [["Animal doméstico que ladra.", "Perro"], ["Deporte ecuestre.", "Polo"]],
    Q: [["Alimento hecho con leche.", "Queso"], ["Ciencia que estudia la materia.", "Quimica"]],
    R: [["Corriente natural de agua.", "Rio"], ["Color de la sangre.", "Rojo"]],
    S: [["Estrella central del sistema solar.", "Sol"], ["Animal que repta.", "Serpiente"]],
    T: [["Deporte de raqueta.", "Tenis"], ["Felino rayado.", "Tigre"]],
    U: [["País cuya capital es Montevideo.", "Uruguay"], ["Fruta que crece en racimos.", "Uva"]],
    V: [["Deporte de equipo con red.", "Voley"], ["Medio de transporte aéreo.", "Avion"]],
    W: [["Deporte acuático con tabla y vela.", "Windsurf"], ["Red informática mundial.", "Web"]],
    X: [["Instrumento musical de láminas.", "Xilofono"], ["Contiene X: evaluación escrita.", "Examen"]],
    Y: [["Disciplina de posturas y respiración.", "Yoga"], ["Alimento lácteo fermentado.", "Yogur"]],
    Z: [["Animal parecido al perro.", "Zorro"], ["Calzado que cubre el pie.", "Zapato"]]
  }
};

// ==========================================
// CONFIGURACIÓN Y ESTADO DEL JUEGO
// ==========================================

const modo = new URLSearchParams(window.location.search).get("modo") || "clasico";

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

let indiceActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let tiempoRestante = 300;
let intervalo = null;
let pausado = false;
let juegoTerminado = false;
let letrasRespondidas = new Set();
let letrasPasadas = new Set();
let preguntasElegidas = {};

const normalizar = (texto) =>
  texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ");

const obtenerPregunta = (letra) => {
  if (!preguntasElegidas[letra]) {
    const opciones = preguntas[letra] || [];
    preguntasElegidas[letra] =
      opciones[Math.floor(Math.random() * opciones.length)];
  }
  return preguntasElegidas[letra];
};

// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

const rosco = document.getElementById("rosco");
const preguntaElemento = document.getElementById("pregunta");
const letraActualElemento = document.getElementById("letra-actual");
const respuestaInput = document.getElementById("respuesta");
const botonResponder = document.getElementById("responder");
const botonPasapalabra = document.getElementById("pasapalabra");
const botonPausar = document.getElementById("pausar");
const botonReiniciar = document.getElementById("reiniciar");
const botonJugarOtra = document.getElementById("jugar-otra");
const tiempoElemento = document.getElementById("tiempo");
const correctasElemento = document.getElementById("correctas");
const incorrectasElemento = document.getElementById("incorrectas");
const tituloElemento = document.getElementById("titulo-modo");
const pantallaFinal = document.getElementById("pantalla-final");
const resultadoFinal = document.getElementById("resultado-final");

if (tituloElemento) {
  tituloElemento.textContent = nombresModos[modo] || "Modo Clásico";
}
// ==========================================
// FUNCIONES DEL ROSCO
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

    // Distribuir las letras en círculo
    const angulo = (indice / letras.length) * Math.PI * 2 - Math.PI / 2;
    const radio = 140;
    const x = 150 + Math.cos(angulo) * radio;
    const y = 150 + Math.sin(angulo) * radio;

    boton.style.position = "absolute";
    boton.style.left = x + "px";
    boton.style.top = y + "px";
    boton.style.transform = "translate(-50%, -50%)";

    boton.addEventListener("click", () => {
      const posicion = letras.indexOf(letra);
      if (posicion >= 0) {
        indiceActual = posicion;
        mostrarPregunta();
      }
    });

    rosco.appendChild(boton);
  });
}

function mostrarPregunta() {
  if (juegoTerminado) return;

  const letra = letras[indiceActual];
  const dato = obtenerPregunta(letra);

  if (!dato) return;

  if (letraActualElemento) {
    letraActualElemento.textContent = letra;
  }

  if (preguntaElemento) {
    preguntaElemento.textContent = dato[0];
  }

  if (respuestaInput) {
    respuestaInput.value = "";
    respuestaInput.disabled = pausado;
    respuestaInput.focus();
  }
}

function actualizarMarcador() {
  if (correctasElemento) {
    correctasElemento.textContent = respuestasCorrectas;
  }

  if (incorrectasElemento) {
    incorrectasElemento.textContent = respuestasIncorrectas;
  }
}

function actualizarLetra(letra, resultado) {
  const elemento = document.getElementById("letra-" + letra);
  if (!elemento) return;

  elemento.classList.remove("correcta", "incorrecta", "pasada");
  elemento.classList.add(resultado);
}

function avanzarLetra() {
  let vueltas = 0;

  do {
    indiceActual = (indiceActual + 1) % letras.length;
    vueltas++;
  } while (
    letrasRespondidas.has(letras[indiceActual]) &&
    vueltas <= letras.length
  );

  if (letrasRespondidas.size === letras.length) {
    finalizarJuego();
    return;
  }

  mostrarPregunta();
}

function responder() {
  if (juegoTerminado || pausado) return;

  const letra = letras[indiceActual];

  if (letrasRespondidas.has(letra)) {
    avanzarLetra();
    return;
  }

  const dato = obtenerPregunta(letra);
  const respuestaUsuario = normalizar(respuestaInput.value);
  const respuestaCorrecta = normalizar(dato[1]);

  if (!respuestaUsuario) {
    alert("Escribí una respuesta antes de continuar.");
    return;
  }

  if (respuestaUsuario === respuestaCorrecta) {
    respuestasCorrectas++;
    actualizarLetra(letra, "correcta");
  } else {
    respuestasIncorrectas++;
    actualizarLetra(letra, "incorrecta");
  }

  letrasRespondidas.add(letra);
  actualizarMarcador();

  if (letrasRespondidas.size === letras.length) {
    finalizarJuego();
  } else {
    avanzarLetra();
  }
}

function pasarPalabra() {
  if (juegoTerminado || pausado) return;

  const letra = letras[indiceActual];

  if (letrasRespondidas.has(letra)) {
    avanzarLetra();
    return;
  }

  if (!letrasPasadas.has(letra)) {
    letrasPasadas.add(letra);
    actualizarLetra(letra, "pasada");
  }

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
    String(minutos).padStart(2, "0") + ":" +
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
// PAUSAR Y FINALIZAR
// ==========================================

function pausarJuego() {
  if (juegoTerminado) return;

  pausado = !pausado;

  if (botonPausar) {
    botonPausar.textContent = pausado ? "Reanudar" : "Pausar";
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
}

function finalizarJuego() {
  if (juegoTerminado) return;

  juegoTerminado = true;
  pausado = false;
  clearInterval(intervalo);

  const total = respuestasCorrectas + respuestasIncorrectas;
  const mensaje =
    "Correctas: " + respuestasCorrectas +
    " | Incorrectas: " + respuestasIncorrectas +
    " | Sin resolver: " + (letras.length - total);

  if (resultadoFinal) {
    resultadoFinal.textContent = mensaje;
  }

  if (pantallaFinal) {
    pantallaFinal.classList.remove("oculto");
    pantallaFinal.style.display = "block";
  }

  if (respuestaInput) respuestaInput.disabled = true;
  if (botonResponder) botonResponder.disabled = true;
  if (botonPasapalabra) botonPasapalabra.disabled = true;
  if (botonPausar) botonPausar.disabled = true;
}

// ==========================================
// REINICIAR
// ==========================================

function iniciarJuego() {
  clearInterval(intervalo);

  indiceActual = 0;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  tiempoRestante = 300;
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
    botonPausar.textContent = "Pausar";
  }

  if (botonResponder) botonResponder.disabled = false;
  if (botonPasapalabra) botonPasapalabra.disabled = false;
  if (respuestaInput) respuestaInput.disabled = false;

  crearRosco();
  actualizarMarcador();
  actualizarTiempo();
  mostrarPregunta();
  iniciarCronometro();
}

// ==========================================
// EVENTOS DE LOS BOTONES
// ==========================================

if (botonResponder) {
  botonResponder.addEventListener("click", responder);
}

if (respuestaInput) {
  respuestaInput.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      responder();
    }
  });
}

if (botonPasapalabra) {
  botonPasapalabra.addEventListener("click", pasarPalabra);
}

if (botonPausar) {
  botonPausar.addEventListener("click", pausarJuego);
}

if (botonReiniciar) {
  botonReiniciar.addEventListener("click", () => {
    if (confirm("¿Querés reiniciar la partida?")) {
      iniciarJuego();
    }
  });
}

if (botonJugarOtra) {
  botonJugarOtra.addEventListener("click", iniciarJuego);
}

// ==========================================
// INICIAR EL JUEGO
// ==========================================

iniciarJuego();