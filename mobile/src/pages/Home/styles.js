import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 10,
  },

  search: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#a4a3a3',
    borderBottomWidth: 1,
  },

  searchContainer: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
  },


  searchInputContainer: {
    backgroundColor: '#FFF',
    width: 360,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
  },

  searchInput: {
    backgroundColor: '#FFF',
    height: 45,    
  },

  menuContainer: {
    flex: 1
  },

  cardContainer: {
  },

  card: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    backgroundColor: '#d4d2d2',
    borderBottomColor: '#a4a3a3',
    borderBottomWidth: 1,
  },

  category: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 4,
  },

  categoryIcon: {
    marginTop: 6,
  },

  product: {
    flexGrow: 1,
    flexDirection: 'row',
    borderBottomColor: '#a4a3a3',
    borderBottomWidth: 0.5,
    marginTop: 2,
    paddingVertical: 10,
  },

  productImage: {
    margin: 5,
    borderRadius: 10,
    height: 60,
    width: 60,
  },

  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    width: Dimensions.get('window').width - 90
  },

  productInfoNoImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    paddingLeft: 2, 
    width: Dimensions.get('window').width - 20,
  },

  productName: {
    fontWeight: 'bold',
    marginLeft: 10,
  },

  productValue: {
    fontWeight: 'bold',
    color: '#A06D51',
  },

  productDescription: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 5,
    marginLeft: 10,
    width: Dimensions.get('window').width - 90,
  },

  productDescriptionText: {
    flex: 1,
    flexWrap: 'wrap',
  },

  heading: {
    fontSize: 38,
    fontWeight: 'bold'
  }

});