//import
import { StyleSheet, Dimensions } from 'react-native';

const dimension = Dimensions.get('window');
const imageHeight = Math.round(dimension.width *(9/16));
const imageWidth = dimension.width;

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
    stileLogo_homeScreen: {
      width: imageWidth/3,
      height: imageHeight/3,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
    option_homeScreen: {
      width: imageWidth/8,
      height: imageHeight/8,
      resizeMode: 'contain',
    },
    containerHome:{
      flex: 3,
      backgroundColor: "white",
      flexDirection: 'column',
    },
    categoriaFit_homeScreen: {
      fontWeight: 'bold',
      fontSize: imageWidth/18,
      marginLeft: imageWidth/15
    },
    categoria_homeScreen: {
      fontWeight: 'bold',
      fontSize: imageWidth/18,
      marginLeft: imageWidth/15
    },
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    containerFoto_homeScreen:{
      flex: 0
    },
    gruppoRicette_homeScreen:{
      marginTop: imageHeight/3
    },
    //FINE HOMESCREEN

    //GRUPPO RICETTE HOME SCREEN
    container_GruppoRicetteHomeScreen:{
      flex: 1,
      marginTop: imageHeight/20
    },
    //FINE GRUPPO RICETTE HOME SCREEN

    //RICETTA HOME SCREEN
    container_ricettaHomeScreen: {
      backgroundColor: "#a9a9a9",
      borderRightWidth: imageWidth/10,
      borderRightColor: "white",
      width: imageWidth/(3/2),
      height: imageHeight,
      borderTopLeftRadius: 20,
      marginLeft: imageWidth/40
    },
    immagineRicetta_ricettaHomeScreen: {
      width: "100%",
      height: "70%",
      borderTopLeftRadius: 20,
      resizeMode: 'cover'
    },
    titoloRicetta_homeScreen: {
      fontSize: imageWidth/30,
      color: '#000000',
      fontWeight: "bold"
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
      marginTop: imageHeight/30,
      justifyContent: 'space-evenly'
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
      fontWeight: "bold",
      fontSize: imageWidth/50
    },
    //FINE RICETTA HOMESCREEN

    //PAGINA RICETTA
    container_paginaRicetta: {
      backgroundColor: '#fff',
    },
    bloccoSuperiore_paginaRicetta:{
      alignSelf: 'center',
      flex: 1,
      marginBottom: imageHeight/5,
      backgroundColor: 'black'
    },
    immagineRicetta_paginaRicetta:{
      resizeMode: 'contain',
      height: imageHeight * (13/9),
      width: imageWidth,
      alignSelf: 'center',
    },
    bloccoInferiore_paginaRicetta:{
      flex: 1
    },
    titoloRicetta_paginaRicetta:{
      fontSize: imageWidth/12,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginVertical: imageHeight/80
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
      marginTop: imageHeight/3
    },
    titoloIngredienti_paginaRicetta:{
      marginBottom: imageHeight/10,
      fontWeight: 'bold',
      fontSize: imageWidth/20,
      marginLeft: imageWidth/30
    },
    lineaIngredienti_paginaRicetta:{
      fontSize: imageWidth/25,
      fontWeight: '300',
      marginLeft: imageWidth/60
    },
    linkRicetta_paginaRicetta:{
      flex: 1,
      marginTop: imageHeight/4
    },
    testoLink_paginaRicetta:{
      marginBottom: imageHeight/8,
      marginLeft: imageWidth/80,
      fontWeight: '800'
    },
    bottone_paginaRicetta:{
      backgroundColor: 'blue',
      height: imageHeight/4,
      width: imageWidth/2,
      borderRadius: 15,
      alignSelf: 'center'
    },
    testoBottone_paginaRicetta:{
      color: 'white',
      alignSelf: 'center',
      marginTop: imageHeight/14
    },
    //FINE PAGINE RICETTA

    //PAGINA CATEGORIA
    immagineRicetta_ricettaCategoria:{
      width: imageWidth/1.5,
      height: imageHeight,
      alignSelf: 'center'
    },
    containerTesto_ricettaCategoria:{
      marginLeft: imageWidth/300,
      marginTop: imageHeight/20,
      marginBottom: imageHeight/3,
    },
    titoloRicetta_ricettaCategoria:{
      fontSize: imageWidth/22,
      fontWeight: 'bold',
      backgroundColor: 'grey'
    },
    container_paginaCategoria: {
      flex: 1,
      backgroundColor: "#fff",
    },
    bloccoSuperiore_ricettaCategoria:{
      flex: 1,
    },
    bloccoInferiore_ricettaCategoria:{
      flex: 1,
      backgroundColor: 'grey',
      width: imageWidth/1.5,
      height: imageHeight/1.7,
      alignSelf: 'center',
      marginBottom: imageHeight/2
    },
    calorie_ricettaCategoria:{
      fontWeight: 'bold'
    },
    //FINE PAGINA CATEGORIA

    //CATEGORIE
    container_categorie:{
      flex: 1,
      },
    //FINE CATEGORIE

    //SCHERMATA UTENTE
    item: {   
      backgroundColor: "red",
      width: imageWidth/3,
      height: imageHeight/4,
      marginRight: imageWidth/10,
      marginBottom: imageHeight/10,
      borderRadius: 10,
    },
    itemSelected: {   
      backgroundColor: "green",
      width: imageWidth/3,
      height: imageHeight/4,
      marginRight: imageWidth/10,
      marginBottom: imageHeight/10,
      borderRadius: 10,
    },
    containerUtente: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "row",
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
