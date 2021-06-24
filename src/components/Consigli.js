import React from 'react';
import { View, Text, Dimensions} from 'react-native';

const dimension = Dimensions.get('window');
import { styles } from '../../Styles';


export default function Consigli({ id, fat, prot, carb }){
    //CONSIGLI FIT
    if(id==1){
    return(
        (carb>65 || fat>35 || prot>35) &&
        <View style={styles.tabellaNutrizionale_paginaRicetta}>
            <Text style={{
                   marginTop: dimension.height/150,
                   marginBottom: dimension.height/30,
                   marginLeft: dimension.width/20,
                   fontWeight: '600',
                   fontSize: dimension.width/20,
                   color: '#003809'}
            }>Consigli nutrizionali:</Text>
           {fat>35 && 
           <View style={{marginBottom:'7%', marginLeft: '4%', marginRight: '1%'}}>
               <Text>
                   Questo cibo eccede i 35% di grassi.
                </Text>
                <Text>
                    INRAN consiglia di non assumere mai oltre il 35% delle calorie 
                   giornaliere da fonti lipidiche
                </Text>
            </View>
               }
            {carb>65 && 
            <View style={{marginBottom:'7%', marginLeft: '4%'}}>
            <Text>
                Questo cibo eccede il 65% di carboidrati.
            </Text>
            <Text>
                Assumere oltre il 65% delle calorie giornaliere da carboidrati
                implica una bassa assunzione degli altri macronutrienti
            </Text>
            </View>
            }
            {prot>35 &&
            <View style={{marginBottom:'7%', marginLeft: '4%'}}>
                <Text>
                    Questo cibo è una buona fonte di proteine.
                    Cerca di non eccedere mai il 50-60% di proteine al giorno.
                </Text>
            </View>}
        </View>
    )}
    else{ return(
        <View/>)
    }
}