import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 10,
  },

  productNameContainer: {
    flexDirection: 'row',
    backgroundColor: '#A06D51',
  },

  goBackIcon: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 4,
  },

  productTitle: {
    fontWeight: 'bold',
    color: '#FFF',
    paddingVertical: 15,
    fontSize: 22,
  },

  detailImg: {
    width: Dimensions.get('window').width,
    height: 200,
  },

  productInfo: {
    marginTop: 15,
    marginLeft: 8,
    paddingHorizontal: 2,
  },

  productCategory: {
    fontWeight: 'bold',
    color: '#A06D51',
    fontSize: 16,
  },

  productName: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },

  productPurchaseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    paddingHorizontal: 2,
    marginRight: 8,
  },

  productQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  productValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  productTotal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: 8,
    paddingHorizontal: 2,
    marginRight: 8,
  },

  productBold: {
    fontWeight: 'bold'
  },
  
});

