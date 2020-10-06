import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Lanche from '../../assets/img/lanche.jpg';

import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToCart() {
    navigation.navigate('Cart');
  }

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView>
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
            <Text style={styles.productDescription}>Pão Francês, Ovos, Presunto, Queijo tipo mussarela, Alface, Tomate, Maionese, Catchup, Mostarda</Text>
          </View>
          <View style={styles.productPurchaseInfo}>
            <View style={styles.productValue}>
              <Text style={styles.productValueText}>Valor unitário: </Text>
              <Text style={styles.productBold}>R$ 16,00</Text>
            </View>
            <View style={styles.productQuantity}>
              <FontAwesome name="minus-circle" size={24} color="red" />
              <Text style={styles.productQuantityValue}>1</Text>
              <FontAwesome name="plus-circle" size={24} color="green" />
            </View>
          </View>
          <View style={styles.productTotal}>
            <Text style={styles.productBold}>Total:</Text>
            <Text style={styles.productTotalValue}>R$ 16,00</Text>
          </View>
          <KeyboardAvoidingView
            style={styles.productObs}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          >
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.productObsText}
              placeholder="Observações"
            />
          </KeyboardAvoidingView>
          <View style={styles.addCartContainer}>
            <TouchableOpacity style={styles.addCart} onPress={navigateToCart} activeOpacity={0.8}>
              <Text style={styles.addCartText}>ADICIONAR AO CARRINHO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

export default Detail;