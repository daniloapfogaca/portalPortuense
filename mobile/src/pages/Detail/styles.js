import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 10,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  productBold: {
    fontWeight: 'bold',
    fontSize: 16
  },

  productNameContainer: {
    flexDirection: 'row',
    backgroundColor: '#A06D51',
  },

  goBackIcon: {
    marginTop: 17,
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
    marginTop: 10,
    marginLeft: 8,
    paddingHorizontal: 8,
  },

  productCategory: {
    fontWeight: 'bold',
    color: '#A06D51',
    fontSize: 16,
  },

  productName: {
    fontWeight: 'bold',
    paddingVertical: 4,
    fontSize: 16,
  },

  productDescription: {
    fontSize: 16,
  },

  productPurchaseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    borderBottomColor: '#a4a3a3',
    borderBottomWidth: 1,
    borderTopColor: '#a4a3a3',
    borderTopWidth: 1,
    marginVertical: 15,
  },

  productQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
  },

  productQuantityValue: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    backgroundColor: '#d4d2d2',
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    borderRadius: 3,
  },

  productValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  productValueText: {
    fontSize: 16
  },

  productTotal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 0,
    marginLeft: 8,
    paddingHorizontal: 8,
    marginRight: 8,
  },

  productTotalValue: {
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 8,
    fontSize: 18,
  },

  productObs: {
    paddingHorizontal: 8,
    marginTop: 5,
  },

  productObsText: {
    fontSize: 16,
    borderBottomColor: '#a4a3a3',
    borderBottomWidth: 1,
    height: 50,
    paddingVertical: 10,
  },

  addCartContainer: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    minHeight: 50,
  },

  addCart: {
    flex: 1,
    backgroundColor: '#A06D51',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addCartText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  }

});

