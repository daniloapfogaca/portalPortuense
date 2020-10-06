import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Lanche from '../../assets/img/lanche.jpg';

import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.productNameContainer} onPress={navigateBack} activeOpacity={0.8}>
        <AntDesign style={styles.goBackIcon} name="left" size={20} color="white" />
        <Text style={styles.productTitle}>Americano</Text>
      </TouchableOpacity>
      <View>
        <Image style={styles.detailImg} source={Lanche}/>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productCategory}>Lanches</Text>
        <Text style={styles.productName}>Americano</Text>
        <Text>Pão Francês, Ovos, Presunto, Queijo tipo mussarela, Alface, Tomate, Maionese, Catchup, Mostarda</Text>
      </View>
      <View style={styles.productPurchaseInfo}>
        <View style={styles.productValue}>
          <Text>Valor unitário: </Text>
          <Text style={styles.productBold}>R$ 16,00</Text>
        </View>
        <View style={styles.productQuantity}>
          <FontAwesome name="minus-circle" size={24} color="red" />
          <Text>1</Text>
          <FontAwesome name="plus-circle" size={24} color="green" />
        </View>
      </View>
      <View style={styles.productTotal}>
        <Text>Total:</Text>
        <Text style={styles.productBold}>R$ 16,00</Text>
      </View>
      <View>
        <Text>Observações:</Text>
      </View>
    </View>
  )
}

export default Detail;