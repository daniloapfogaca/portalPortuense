import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

import PaoFrances from '../../assets/img/pao-frances.jpeg';
import Logo from '../../assets/img/logo_bg.jpg';

import menuData from '../../assets/menuData';
import styles from './styles';

import Header from '../../Components/Header';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
      <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
)

const Home = () => {

  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();
  const navigation = useNavigation();

  function tooggleMenu(index) {
    ref.current.animateNextTransition();
    setCurrentIndex(currentIndex === index ? null : index);
  }

  function navigateToDetail() {
    navigation.navigate('Detail');
    setCurrentIndex(null);
  }

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.search}>
        <SearchBar
          placeholder="Pesquisar produto..."
          lightTheme={true}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          // onChangeText={this.updateSearch}
          // value={search}
        />
      </View>
      
      <Transitioning.View style={styles.menuContainer} transition={transition} ref={ref}>
        {menuData.map(menuItem => {
          return(
            <TouchableOpacity key={menuItem.index} onPress={() => tooggleMenu(menuItem.index)} style={styles.cardContainer} activeOpacity={0.8}>
              <View style={styles.card}>
                <Text style={styles.category}>{menuItem.category}</Text>
                <AntDesign style={styles.categoryIcon} name={currentIndex === menuItem.index ? "down" : "right"} size={14} color="black" />
              </View>
              {currentIndex === menuItem.index && (
                <View style={styles.products}>
                  {menuItem.products.map(product => {
                    return (
                      <TouchableOpacity key={product.productName} onPress={() => navigateToDetail()} activeOpacity={0.8}>
                        <View style={styles.product}>
                          {!!product.productImg && (
                          <Image style={styles.productImage} source={PaoFrances} />
                          )}
                          <View>
                            <View style={!!product.productImg ? styles.productInfo : styles.productInfoNoImg}>
                                <Text style={styles.productName}>{product.productName}</Text>
                                <Text style={styles.productValue}>{product.productValue}</Text>
                            </View>
                            {!!product.productDescription && (
                              <View style={styles.productDescription} >
                                <Text style={styles.productDescriptionText}>{product.productDescription}</Text>
                              </View>
                            )}
                          </View>
                        </View>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              )}
            </TouchableOpacity>
          )
        })}
      </Transitioning.View>

    </View>
  )
};

export default Home;