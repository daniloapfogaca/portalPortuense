import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Cart = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.myCart} onPress={navigateBack} activeOpacity={0.8}>
        <AntDesign style={styles.goBackIcon} name="left" size={20} color="white" />
        <Text style={styles.cartTitle}>Meu carrinho</Text>
      </TouchableOpacity>

      <View style={styles.cartItemContainer}>
        <View style={styles.cartItem}>
          <View style={styles.cartItemTexts}>
            <Text style={styles.cartItemCategory}>Lanches</Text>
            <Text style={styles.cartItemName}>Americano</Text>
          </View>
          <View style={styles.cartItemQuantity}>
            <FontAwesome name="minus-circle" size={24} color="red" />
            <Text style={styles.cartQuantityValue}>1</Text>
            <FontAwesome name="plus-circle" size={24} color="green" />
          </View>
        </View>
        <View style={styles.cartItemTotal}>
          <Text style={styles.cartItemTotalValue}>R$ 0,99</Text>
        </View>
      </View>

      <View style={styles.cartItemContainer}>
        <View style={styles.cartItem}>
          <View style={styles.cartItemTexts}>
            <Text style={styles.cartItemCategory}>Lanches</Text>
            <Text style={styles.cartItemName}>Americano</Text>
          </View>
          <View style={styles.cartItemQuantity}>
            <FontAwesome name="minus-circle" size={24} color="red" />
            <Text style={styles.cartQuantityValue}>1</Text>
            <FontAwesome name="plus-circle" size={24} color="green" />
          </View>
        </View>
        <View style={styles.cartItemTotal}>
          <Text style={styles.cartItemTotalValue}>R$ 0,99</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addMore} onPress={navigateToHome} activeOpacity={0.8}>
        <Text style={styles.addMoreText}>ADICIONAR MAIS ITENS</Text>
      </TouchableOpacity>

      <View style={styles.pedidoInfoContainer}>
        <View style={styles.pedidoInfo}>
          <View style={styles.pedidoInfoTextsContainer}>
            <Text style={styles.cartText}>Tempo de entrega estimado</Text>
            <Text style={styles.cartText}>40-55 min.</Text>
          </View>
          <View style={styles.pedidoInfoTextsContainer}>
            <Text style={styles.cartBold}>Total do pedido</Text>
            <Text style={styles.pedidoTotal}>R$ 32,00</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.orderNow} onPress={() => {}} activeOpacity={0.8}>
        <Text style={styles.orderNowText}>PEDIR</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart;