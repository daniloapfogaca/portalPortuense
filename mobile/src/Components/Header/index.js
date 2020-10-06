import React from 'react';
import { View, Text, Image } from 'react-native';

import Logo from '../../assets/img/logo_branco.png';

import styles from './styles';


const Header = () => {
  return(
    <View style={styles.container}>
      <View style={styles.header} >
        <View style={styles.logoContainer} >
          <Image style={styles.logo} source={Logo} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.portuense}>Padaria Nova Portuense</Text>
        <Text style={styles.address}>R. Amazonas, 1352 - Oswaldo Cruz, São Caetano do Sul - SP</Text>
      </View>
    </View>
  )
}

export default Header;
