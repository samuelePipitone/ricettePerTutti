//import
import { StyleSheet, Dimensions } from 'react-native';

const dimension = Dimensions.get('window');
const imageHeight = Math.round(dimension.width *(9/16));
const imageWidth = dimension.width;
const height = dimension.height;

//stili

export const styles = StyleSheet.create({

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
      fontWeight: '600',
      letterSpacing: imageWidth/250,
      fontSize: imageWidth/18,
      marginLeft: imageWidth/15,
      color: '#003809',
      marginBottom: imageHeight/40
    },
    categoriaFit2_homeScreen:{
      fontWeight: '600',
      letterSpacing: imageWidth/250,
      fontSize: imageWidth/18,
      marginLeft: imageWidth/15,
      color: '#820050'
    },
    categoria_homeScreen: {
      fontWeight: '600',
      fontSize: imageWidth/18,
      marginLeft: imageWidth/15,
      color: '#003809',
      letterSpacing: imageWidth/300,
      marginBottom: imageHeight/40
    },
    categoria2_homeScreen: {
      fontWeight: '600',
      fontSize: imageWidth/18,
      marginLeft: imageWidth/15,
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
      height: height/12,
      marginTop: '7%',
      flexDirection: 'row',
      borderBottomColor: '#9e9e9e',
      borderBottomWidth: imageHeight/200
    },
    gruppoRicette_homeScreen:{
      marginTop: imageHeight/3
    },
    barraRicerca_homeScreen:{
      width:'50%',
      alignSelf: 'center'
    },
    containerCliccabile_homeScreen:{
      left: imageWidth*0.70,
      height: imageHeight/8,
      width: imageWidth/8,
      marginTop: '3%',
    },
    logo_homeScreen:{
      width: imageWidth/6,
      height: '100%',
      resizeMode: 'contain',
    },
    //FINE HOMESCREEN

    //GRUPPO RICETTE HOME SCREEN
    container_GruppoRicetteHomeScreen:{
      flex: 1,
      marginTop: imageHeight/20,
      marginBottom: imageHeight/10
    },
    //FINE GRUPPO RICETTE HOME SCREEN

    //RICETTA HOME SCREEN
    container_ricettaHomeScreen: {
      backgroundColor: "white",
      marginRight: imageWidth/10,
      width: imageWidth/(3/2),
      height: imageHeight*1.1,
      borderRadius: 15,
      marginLeft: imageWidth/20,
      borderWidth: 1,
      borderColor: '#d3ebd4',
    },
    immagineRicetta_ricettaHomeScreen: {
      width: "100%",
      height: "60%",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      resizeMode: 'cover'
    },
    titoloRicetta_homeScreen: {
      fontSize: imageWidth/25,
      color: '#003809',
      fontWeight: "bold",
      marginTop: '3%',
      marginBottom: '7%'
    },
    bloccoInferiore_ricettaHomeScreen:{
      flex: 0.5
    },
    bloccoSuperiore_ricettaHomeScreen:{
      flex: 1.5
    },
    title_ricettaHomeScreen:{
      marginLeft: imageWidth/20,
      marginRight: imageWidth/60,
      marginTop: 2
    },
    decorazioni_ricettaHomeScreen:{
      flexDirection: 'row',
      flex: 1,
      marginTop: '12%',
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
      fontSize: imageWidth/38,
      marginLeft: imageWidth/120
    },
    //FINE RICETTA HOMESCREEN

    //PAGINA RICETTA 
    container_paginaRicetta: {
      backgroundColor: 'white',
    },
    bloccoSuperiore_paginaRicetta:{
      marginBottom: imageHeight/5,
      backgroundColor: 'white',
    },
    immagineRicetta_paginaRicetta:{
      resizeMode: 'stretch',
      height: imageHeight*(13/9),
      width: '100%',
      marginTop: '6%'
    },
    bloccoInferiore_paginaRicetta:{
    },
    titoloRicetta_paginaRicetta:{
      fontSize: imageWidth/12,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginVertical: imageHeight/80,
      color: '#003809',
      marginLeft: '3%'
    },
    containerTitolo_paginaRicetta:{
      marginBottom: imageHeight/10
    },
    tabellaNutrizionale_paginaRicetta:{
      flex: 1,
      alignItems: 'center',
      marginTop: imageHeight/8
    },
    calories_paginaRicetta:{
      alignSelf: 'center',
      marginLeft: imageWidth/80
    },
    ingredienti_paginaRicetta:{
      fontSize: 18,
      marginTop: imageHeight/3,
      backgroundColor: '#eeeeee',
    },
    titoloIngredienti_paginaRicetta:{
      marginBottom: imageHeight/10,
      fontWeight: '600',
      fontSize: imageWidth/16,
      marginLeft: imageWidth/30,
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
      marginTop: imageHeight/4
    },
    testoLink_paginaRicetta:{
      marginBottom: imageHeight/8,
      marginLeft: imageWidth/60,
      fontWeight: '600',
      color: '#003809',
      fontSize: imageWidth/20
    },
    bottone_paginaRicetta:{
      backgroundColor: '#00520d',
      height: imageHeight/4,
      width: imageWidth/2,
      borderRadius: 17,
      alignSelf: 'center',
      marginBottom: imageHeight/3,
      marginTop: imageHeight/13
    },
    testoBottone_paginaRicetta:{
      color: 'white',
      alignSelf: 'center',
      marginTop: imageHeight/14,
      fontWeight: 'bold',
      letterSpacing: 1
    },
    //FINE PAGINA CATEGORIA

    //PAGINA RICETTA CATEGORIA
    immagineRicetta_ricettaCategoria:{
      width: imageWidth/4,
      height: imageHeight/2.05,
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
      fontSize: imageWidth/22,
      fontWeight: 'bold',
      marginLeft: '3%',
      color: '#003809'
    },
    bloccoSuperiore_ricettaCategoria:{
      marginLeft: '7%',
      marginTop: '6%',
      width: imageWidth/4,
      height: imageHeight/2,
      borderBottomColor: '#d3ebd4',
      borderTopColor: '#d3ebd4',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftColor: '#d3ebd4',
      borderLeftWidth: 1,
    },
    bloccoInferiore_ricettaCategoria:{
      backgroundColor: 'white',
      width: imageWidth/1.7,
      height: imageHeight/2,
      marginTop: '6%',
      borderRightColor: '#d3ebd4',
      borderRightWidth: 1,
      borderBottomColor: '#d3ebd4',
      borderTopColor: '#d3ebd4',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10
    },
    calorie_ricettaCategoria:{
      fontWeight: '600',
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
      backgroundColor: "red",
      width: imageWidth/3,
      height: imageHeight/4,
      marginRight: imageWidth/10,
      marginBottom: imageHeight/10,
      borderRadius: 10,
      marginLeft: imageWidth/12
    },
    itemSelected: {   
      backgroundColor: "green",
      width: imageWidth/3,
      height: imageHeight/4,
      marginRight: imageWidth/10,
      marginBottom: imageHeight/10,
      borderRadius: 10,
      marginLeft: imageWidth/12
    },
    containerUtente: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "row",
      marginTop: '6%',
    },
    testo_schermataUtente:{
      fontWeight: 'bold',
      fontSize: imageWidth/25,
      alignSelf: 'center',
      marginBottom: imageHeight/15,
      marginTop: imageHeight/20
    },
    blocchi_schermataUtente:{
      alignSelf: 'center'
    },
    testoBlocco_schermataUtente:{
      alignSelf: 'center',
      fontWeight: 'bold',
      marginTop: '10%'
    },
   
    //FINE SCHERMATA UTENTE
  });
