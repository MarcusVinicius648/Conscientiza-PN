import React  from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import imageSacoLixo from '../../assets/garbage.png';
import imageEletro from '../../assets/eletrodomesticos.png';
import imageVolumoso from '../../assets/volumoso.png';
import imageCalendario from '../../assets/schedule.png';
import { StatusBarTop } from '../../components/StatusBarTop';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Volumosos() {

    return (
        <SafeAreaView style={styles.container}>   
            <StatusBarTop 
                title={'Coleta de Volumosos'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />

            <ScrollView>
                <View style={styles.description}>            
                    <Text style={styles.textDescription}>  
                        A coleta seletiva de volumoso consiste na atividade regular
                        de recolhimento e transporte do lixo de grande porte/volumoso 
                        gerado nas resisdências, no comércio e nos prédios públicos. 
                    </Text>                
                </View>

                <View style={styles.viewImg}>
                    <Image source={imageVolumoso} style={styles.image} />
                </View>  

                <View>
                    <Text style={styles.textDescription}>  
                        Para manter o correto descarte de lixo, siga algumas dicas:
                    </Text>

                    <Text style={styles.textDescription}>  
                        1. Separe seu lixo.
                    </Text>

                    <Text style={styles.textDescription}>  
                        Separe seu lixo, pois alguns resíduos como móveis, 
                        eletrodomésticos, latas, pneus, entre outros, podem ser
                        reaproveitados ou doados.
                    </Text>   

                    <View style={styles.viewImg}>
                        <Image source={imageEletro} style={styles.image} />
                    </View>                    

                    <Text style={styles.textDescription}>  
                        2. Recicle.
                    </Text>

                    <Text style={styles.textDescription}>  
                        Separados os recicláveis, também é aconselhável que os materiais
                        recicláveis estejam sempre limpos e secos, para facilitar o processos
                        de reciclagem.
                    </Text>   

                    <View style={styles.viewImg}>
                        <Image source={imageSacoLixo} style={styles.image} />
                    </View>  

                    <Text style={styles.textDescription}>  
                        3. Se atente ao cronograma.                   
                    </Text>

                    <Text style={styles.textDescription}>  
                        Verifique o dia e o horário de coleta de volumosos em 
                        seu bairro, para poder descartar seus resíduos. Caso
                        tenha dúvida, procure o orgão responsável por essa coleta.
                    </Text>  

                    <View style={styles.viewImg}>
                        <Image source={imageCalendario} style={styles.image} />
                    </View> 
                    
                </View>

                <View>
                    
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    /*Global -------------------------------------------- */
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background
    },
    description: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,        
    }, 
    textDescription: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 17,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        color: colors.heading,
    },

    /*Image -------------------------------------------- */
    img: {
        height: Dimensions.get('window').width * 0.7,
    },
    viewImg: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'        
    },
    image: {
        height: 65,
        width: 65,
        marginLeft: 5
    },

    /* Buttom -------------------------------------------- */
    buttom: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
        borderRadius: 16,
        marginBottom: 6
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 23,
        fontWeight: 'bold'
    },    
    bar: {
        flex: 1,
        position: 'absolute',
        textAlign: 'left',
        justifyContent: 'center',
        width: '100%',
        height: 56,
        marginTop: 24,
        backgroundColor: colors.green,
        paddingLeft: 19,
        paddingBottom: 24
    },
    nameBar: {
        position: 'absolute',
        marginLeft: 72,

        fontFamily: fonts.text,
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 55,
        color: colors.white
    },

})