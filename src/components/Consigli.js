import React from 'react';
import { View, Text, Dimensions} from 'react-native';

const dimension = Dimensions.get('window');
import { styles } from '../../Styles';


export default function Consigli({ id, fat, prot, carb }){

	const min = 1;
    const max = 4;
    const random = min + Math.floor(Math.random() * (max - min));

    //CONSIGLI FIT
    if(id==1){
    return(
        (carb>65 || fat>35 || prot>35) &&
        <View style={styles.tabellaNutrizionale_paginaRicetta}>
            <Text style={{
                   marginTop: dimension.height/150,
                   marginBottom: dimension.height/30,
                   marginLeft: dimension.width/30,
                   fontWeight: '600',
                   fontSize: dimension.width/20,
                   color: '#003809'}
            }>Consigli nutrizionali:</Text>
           {fat>35 && 
           <View style={{marginBottom:'7%', marginLeft: dimension.width/20, marginRight: '1%'}}>
               <Text style={{fontSize: 17, right: 8}}>
                   Questo cibo eccede i 35% di grassi.
                </Text>
                <Text style={{fontSize: 17, right: 8}}>
                    INRAN consiglia di non assumere mai oltre il 35% delle calorie 
                   giornaliere da fonti lipidiche
                </Text>
            </View>
               }
            {carb>65 && 
            <View style={{marginBottom:'7%', marginLeft: dimension.width/20}}>
            <Text style={{fontSize: 17, right: 8}}>
                Questo cibo eccede il 65% di carboidrati.
            </Text>
            <Text style={{fontSize: 17, right: 8}}>
                Assumere oltre il 65% delle calorie giornaliere da carboidrati
                implica una bassa assunzione degli altri macronutrienti
            </Text>
            </View>
            }
            {prot>35 &&
            <View style={{marginBottom:'7%', marginLeft: dimension.width/20}}>
                <Text style={{fontSize: 17, right: 8}}>
                    Questo cibo è una buona fonte di proteine.
                    Cerca di non eccedere mai il 50-60% di proteine al giorno.
                </Text>
            </View>}
        </View>
    )}
	//TODO TITOLO
	else if(id==2 && random==0){
		return(
		<View style={styles.tabellaNutrizionale_paginaRicetta}>
			<Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/100,
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Consigli utili:</Text>   
           <Text style={{fontSize: 17, margin: 20}}>Organizza sempre in modo preventivo il lavoro, 
			   iniziando le operazioni più lunghe per prime (come 
			   per esempio il brodo).
		   </Text>
        </View>
		)
	}
	else if(id==2 && random==1){
		return(
		<View style={styles.tabellaNutrizionale_paginaRicetta}>
			<Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/100,
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Consigli utili:</Text> 
           <Text style={{fontSize: 17, margin: 20}}>
			   Tieni la postazione di lavoro pulita ed ordinata in modo
			   da avere più controllo sull'ambiente circostante, questo
			   ti permetterà di velocizzare alcune operazione come
			   spostare pentole e appoggiare utensili.
		   </Text>
        </View>
		)
	}
	else if(id==2 && random==2){
		return(
		<View style={styles.tabellaNutrizionale_paginaRicetta}>
			<Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/100,
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Consigli utili:</Text> 
           <Text style={{fontSize: 17, margin: 20}}>
			   Usa sempre gli utensili adatti! Per esempio il materiale
			   di una padella potrebbe fare la differenza tra una cottura
			   immediata e 10 minuti di cottura..
		   </Text>
        </View>
		)
	}
	else if(id==2 && random==3){
		return(
		<View style={styles.tabellaNutrizionale_paginaRicetta}>
			<Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/100,
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Consigli utili:</Text> 
           <Text style={{fontSize: 17, margin: 20}}>
			   Fai molta pratica, come in ogni cosa è il "segreto"
			   per capire come usare al meglio gli utensili, come gestire
			   i propri tempi e ad imparare ad evitare errori che ci 
			   farebbero perdere ulteriore tempo.
		   </Text>
        </View>
		)
	}
	else if(id==2 && random==4){
		return(
		<View style={styles.tabellaNutrizionale_paginaRicetta}>
			<Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/100,
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Consigli utili:</Text> 
           <Text style={{fontSize: 17, margin: 20}}>Organizza sempre in modo preventivo il lavoro, 
			   iniziando le operazioni più lunghe per prime (come 
			   per esempio il brodo).
		   </Text>
        </View>
		)
	}
    else{
		return(<View><Text>Errore</Text></View>)
    }
}