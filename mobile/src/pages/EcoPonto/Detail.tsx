import React,{useState,useEffect} from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image, Linking } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import api from '../../server/api';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

interface Params{
 point_id: number
}

interface Data{
    id:number;
    imagem:string;
    nome:string;
    email:string;
    whatsapp:string;
    endereco:string;
    descricao:string;
}

export function Detail() {

    const [data, setData] = useState<Data>({} as Data);
    const route = useRoute();
    const routeParams = route.params as Params;
    const navigation = useNavigation();

    useEffect(()=>{
        api.get(`points/${routeParams.point_id}`).then( (response) => {
            setData(response.data);
          });
    },[]);
    
    function handleWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${data.whatsapp}&text=Tenho interesse sobre a coleta de resíduos seletiva em seu estabelecimento! Necessito de algumas informações adicionais!`);
    }

    function handleComposeMail() {
        MailComposer.composeAsync({
          subject: 'Interesse na coleta de resíduos seletiva',
          recipients: [data.email],
        });
    }

    if (!data) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.detailBox}>
                <View style={styles.iconBack}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left"
                            size={20}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleRegion}>
                    <Text style={styles.text}>
                        Detalhes
                    </Text>
                </View>
            </View>

            <Image 
                style={styles.pointImage} 
                source={require('../../assets/atack.png')} 
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {data.nome}
                </Text>
            </View>
            
            <View style={styles.address}>
                <Text style={styles.titleAddress}>Matriz:</Text>
                <Text style={styles.textAddress}>
                   {data.endereco} {'\n'}
                   Ponte Nova - MG
                </Text>
                <Text style={styles.titleAddress}>Funcionamento:</Text>
                <Text style={styles.textAddress}>
                    {data.descricao}
                </Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleWhatsapp}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleComposeMail}>
                    <Icon name="mail" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginLeft: 0
    },
    detailBox: {
        width: '100%',
        backgroundColor: colors.green,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    iconBack: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 60
    },
    titleRegion: {
        height: 46,
        marginRight: 300
    },
    iconHelp: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 60
    },
    text: {
        position: 'absolute',
        paddingRight: 80,
        marginTop: 16,
        fontFamily: fonts.text,
        fontSize: 20,
        color: colors.white
    },
    pointImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 9,
        marginTop: 10,
    },
    titleContainer:{
        marginLeft:10,
        marginBottom: -10
    },
    title: {
        fontFamily: fonts.heading,
        color: colors.gray_dark,
        marginLeft: 7,
        fontSize: 24,
    },
    address: {
        marginTop: 15,
        marginLeft: 15,
        lineHeight: 10
    },
    titleAddress: {
        fontFamily: fonts.heading,
        color: colors.gray_dark,
        marginTop: 15,
        fontSize: 15
    },
    textAddress: {
        fontFamily: fonts.text,
        color: colors.gray_dark,
        marginTop:10,
        lineHeight:20
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: colors.gray,
        width:'100%',
        paddingVertical: 10,
        paddingHorizontal: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:55,
        paddingTop:40
    },
    button: {
        width: '48%',
        backgroundColor: '#34CB79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: fonts.text,
    },
});