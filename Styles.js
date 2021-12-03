//import
import { StyleSheet, Dimensions } from 'react-native';

const dimension = Dimensions.get('window');
const imageHeight = Math.round(dimension.width *(9/16));
const imageWidth = dimension.width;
const height = dimension.height;

//style

export const styles = StyleSheet.create({

	background:{
		resizeMode: 'cover',
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute'
	},
	background2:{
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
		opacity: 0.6,
	},
    //APP
    headerStyle_app:{
      backgroundColor: 'green',
    },
    headerTitleStyle_app:{
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    //FINE APP

    //HOMESCREEN
    option_homeScreen: {
      width: imageWidth/8,
      height: imageHeight/6,
      resizeMode: 'contain',
    },
    containerHome:{
      backgroundColor: "#eeeeee",
      flexDirection: 'column',
    },
    categoriaFit_homeScreen: {
      fontWeight: 'bold',
      letterSpacing: 2.5,
      fontSize: imageWidth/18,
      
      color: 'rgba(0, 56,9,0.85)',
      marginBottom: imageHeight/40,
	  marginTop: imageHeight/30
    },
    categoriaFit2_homeScreen:{
      fontWeight: 'bold',
      letterSpacing: 2.5,
      fontSize: imageWidth/18,
      marginLeft: imageWidth/20,
      color: '#820050',
	  marginTop: imageHeight/30
    },
    categoria_homeScreen: {
      fontWeight: 'bold',
      fontSize: imageWidth/18,
      
      color: 'rgba(0, 56,9,0.9)',
      letterSpacing: 3,
      marginBottom: imageHeight/35,
    },
    categoria2_homeScreen: {
      fontWeight: 'bold',
      fontSize: imageWidth/18,
      marginLeft: imageWidth/20,
      color: '#820050',
      letterSpacing: imageWidth/300,
    },
    container: {
      height: height,
      width: imageWidth,
      backgroundColor: "#ffffff",
    },
    containerFoto_homeScreen:{
      width: imageWidth,
      height: height/11,
	  marginTop:'5%',
      flexDirection: 'row',
      borderBottomColor: '#9e9e9e',
      borderBottomWidth: 1
    },
    gruppoRicette_homeScreen:{
      marginTop: imageHeight/12
    },
    barraRicerca_homeScreen:{
      width:'50%',
      alignSelf: 'center'
    },
    containerCliccabile_homeScreen:{
      left: imageWidth*0.3,
      height: imageHeight/8,
      width: imageWidth/8,
      marginTop: '3%',
    },
    logo_homeScreen:{
      width: imageWidth/6,
      height: '100%',
      resizeMode: 'contain',
      marginLeft: '40%'
    },
    //FINE HOMESCREEN

    //GRUPPO RICETTE HOME SCREEN
    container_GruppoRicetteHomeScreen:{
      flex: 1,
      marginTop: imageHeight/20,
      marginBottom: imageHeight/5
    },
    //FINE GRUPPO RICETTE HOME SCREEN

    //RICETTA HOME SCREEN
    container_ricettaHomeScreen: {
      backgroundColor: "white",
      marginRight: imageWidth/15,
      width: imageWidth/(3/2),
      height: imageHeight*1.1,
      borderRadius: 15,
      marginLeft: imageWidth/20,
      borderWidth: 1,
      borderColor: "#cccccc"
    },
    immagineRicetta_ricettaHomeScreen: {
      width: "100%",
      height: "60%",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      resizeMode: 'cover'
    },
    titoloRicetta_homeScreen: {
      fontSize: 25,
      color: '#003809',
      fontWeight: "bold",
      marginTop: '3%',
      marginBottom: '7%'
    },
    bloccoInferiore_ricettaHomeScreen:{
	  height: '15%'
    },
    bloccoSuperiore_ricettaHomeScreen:{
		flex: 1
    },
    title_ricettaHomeScreen:{
      marginLeft: imageWidth/20,
      marginRight: imageWidth/60,
      marginTop: 2
    },
    decorazioni_ricettaHomeScreen:{
      flexDirection: 'row',
      flex: 1,
      marginTop: '10%',
      justifyContent: 'space-around',
    },
    elements_ricettaHomeScreen:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    elements2_ricettaHomeScreen:{
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: '3%'
    },
    testoDecorazione_ricettaHomeScreen:{
      fontWeight: "700",
      fontSize: 16,
      marginLeft: imageWidth/120
    },
    //FINE RICETTA HOMESCREEN

    //PAGINA RICETTA 
    container_paginaRicetta: {
      backgroundColor: 'white',
    },
    bloccoSuperiore_paginaRicetta:{
      marginBottom: imageHeight/10,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#9e9e9e',
    },
    immagineRicetta_paginaRicetta:{
      resizeMode: 'cover',
      height: imageHeight*(13/9),
      width: '100%',
    },
    bloccoInferiore_paginaRicetta:{
    },
    titoloRicetta_paginaRicetta:{
      fontSize: imageWidth/12,
      fontWeight: 'bold',
      color: '#003809',
      marginLeft: '2%'
    },
    containerTitolo_paginaRicetta:{
    },
    tabellaNutrizionale_paginaRicetta:{
      flex: 1,
      marginLeft: imageWidth/10,
      marginRight: imageWidth/10,
      borderColor: '#b5b5b5',
      borderWidth: 1,
      marginTop: imageHeight/4,
      backgroundColor: '#f5f5f5',
	  borderRadius: 15
    },
    calories_paginaRicetta:{
      alignSelf: 'center',
      marginLeft: imageWidth/60,
      marginBottom: imageHeight/110,
	  fontSize: 17
    },
    ingredienti_paginaRicetta:{
      fontSize: 18,
      marginTop: imageHeight/3,
      backgroundColor: '#eeeeee',
      borderTopWidth: 1,
      borderTopColor: '#d6d6d6',
      borderBottomWidth: 1,
      borderBottomColor: '#d6d6d6',
    },
    titoloIngredienti_paginaRicetta:{
      marginBottom: imageHeight/10,
      fontWeight: '600',
      fontSize: imageWidth/16,
      marginLeft: 57,
      color: '#003809',
      marginBottom: imageHeight/5
    },
    lineaIngredienti_paginaRicetta:{
      fontSize: imageWidth/25,
      fontWeight: '700',
      marginLeft: imageWidth/20,
      marginBottom: imageHeight/50,
      color: '#002406',
    },
    linkRicetta_paginaRicetta:{
      flex: 1,
      marginTop: imageHeight/6,
	  marginBottom: imageHeight/8
    },
    testoLink_paginaRicetta:{
      marginBottom: imageHeight/12,
      marginLeft: imageWidth/60,
      fontWeight: '600',
      color: '#003809',
      fontSize: imageWidth/20
    },
    testoBottone_paginaRicetta:{
      color: '#002406',
      fontWeight: 'bold',
      letterSpacing: 2,
	  fontSize: 22,
	  marginLeft: 28,
	  marginTop: 8
    },
    logo_paginaRicetta:{
      width: imageWidth/10,
      height: '100%',
      resizeMode: 'contain',
      marginLeft: imageWidth/40
    },
    ingredienti1_paginaRicetta:{
      marginTop: dimension.height/200,
      marginBottom: dimension.height/100,
      borderBottomWidth: 1,
      borderColor: '#cccccc',
      marginRight: '7%',
      marginLeft: '7%'
    },
    ingredienti2_paginaRicetta:{
      marginTop: dimension.height/200,
      marginRight: '7%',
      marginLeft: '7%'
    },
    //FINE PAGINA RICETTA

    //PAGINA RICETTA CATEGORIA
    immagineRicetta_ricettaCategoria:{
      width: imageWidth/2.6,
      height: height/5.6,
      resizeMode: 'cover',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10
    },
    containerTesto_ricettaCategoria:{
      marginLeft: imageWidth/300,
      marginTop: imageHeight/20,
      marginBottom: '19%',
    },
    container_ricettaCategoria:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flex: 1,
      marginTop: '5%',
    },
    titoloRicetta_ricettaCategoria:{
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: '4%',
      color: '#003809'
    },
    bloccoSuperiore_ricettaCategoria:{
	  marginLeft: '7%',
      marginTop: '6%',
      width: imageWidth/2.6,
      height: height/5.5,
      borderBottomColor: '#a6a6a6',
      borderTopColor: '#a6a6a6',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftColor: '#a6a6a6',
      borderLeftWidth: 1,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10
    },
    bloccoInferiore_ricettaCategoria:{
      backgroundColor: 'white',
      width: imageWidth/2,
      height: height/5.5,
      marginTop: '6%',
      borderRightColor: '#a6a6a6',
      borderRightWidth: 0.9,
      borderBottomColor: '#a6a6a6',
      borderTopColor: '#a6a6a6',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10
    },
    calorie_ricettaCategoria:{
      fontWeight: 'bold',
	  fontSize: 16,
	  top: 16
    },
    //FINE PAGINA RICETTA CATEGORIA

    //PAGINA CATEGORIE
      container_paginaCategoria: {
        flex: 1,
        backgroundColor: "white",
        height: height,
        width: imageWidth
      },
      barraSuperiore_paginaCategoria:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '6%',
        width: imageWidth,
        height: height/12,
        borderBottomWidth: 1,
        borderBottomColor: '#9e9e9e'
      },
      option_paginaCategoria:{
        height: '100%',
        width: imageWidth/10,
        resizeMode: 'contain'
      },
      container2_paginaCategoria:{
        backgroundColor: '#eeeeee',
        flex:1
      },
    //FINE PAGINA CATEGORIE

    //SCHERMATA UTENTE
    item: {   
      backgroundColor: "rgba(242,34,34,0.75)",
      width: 117,
      height: 105,
      marginBottom: imageHeight/8,
      borderRadius: 15,
      marginLeft: 23,
	  borderWidth: 1,
	  borderColor: "#8c8c8c",
	  marginTop: imageHeight/8
    },
    itemSelected: {   
      backgroundColor: "rgba(0,110,7,0.75)",
      width: 120,
      height: 105,
      marginBottom: imageHeight/8,
      borderRadius: 15,
	  borderWidth: 1,
	  borderColor: "#8c8c8c",
	  marginTop: imageHeight/8,
	  marginLeft: 20,
    },
    containerUtente: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "row",
    },
    testo_schermataUtente:{
      fontWeight: 'bold',
      fontSize: imageWidth/21,
      marginLeft: imageWidth/10,
      marginBottom: imageHeight/6,
	  color: "black"
    },
    blocchi_schermataUtente:{
	  width: '100%',
    },
    testoBlocco_schermataUtente:{
    alignSelf: 'center',
      fontWeight: 'bold',
      marginTop: '9%',
      color: '#380000',
	  fontSize: 17
    },
    selectedTestoBlocco_schermataUtente:{
      alignSelf: 'center',
      fontWeight: 'bold',
      marginTop: '9%',
      color: '#002b00',
	  fontSize: 17
    },
    grasso:{
      color: 'red',
	  fontSize: 17
    },
    magro: {
      color: 'black',
	  fontSize: 17
    },
    proteico:{
      color: 'green',
	  fontSize: 17
    }, 
    nonProteico:{
      color: 'black',
	  fontSize: 17
    },
    carboidratiAlti:{
      color:'red',
	  fontSize: 17
    },
    carboidratiBassi:{
      color:'black',
	  fontSize: 17
    },
	barraSup_schermataUtente:{
		marginTop: imageHeight/9
	},
	icona_schermataUtente:{
		marginLeft: 25,
		top: 15
	},
	modal_schermataUtente:{
		backgroundColor: "#000000aa",
		flex: 1
	},
	innerModal_schermataUtente:{
		backgroundColor: "white",
		top: 175,
		marginLeft: '9%',
		marginRight: '9%',
		height: 300,
		borderRadius: 15,
		borderColor: "#575757",
		borderWidth: 1
	},
	testoModal_schermataUtente:{
		fontSize: 23,
		marginLeft: 30,
		marginTop: 15,
		marginRight: 5
	},
	closing:{
		marginLeft: 350,
		marginTop: 10,
		color: 'black'
	},
	logoBlock_schermataUtente: {
		width: 45,
		height: 45,
		marginLeft: 34,
		marginTop: 14
	},
	innerModal2_schermataUtente:{
		backgroundColor: "white",
		top: 175,
		marginLeft: '9%',
		marginRight: '9%',
		height: 250,
		borderRadius: 15,
		borderColor: "#575757",
		borderWidth: 1
	},
	testoModal2_schermataUtente:{
		fontSize: 23,
		marginLeft: 20,
		marginTop: 30,
		marginRight: 5
	},
   
    //FINE SCHERMATA UTENTE
  });
