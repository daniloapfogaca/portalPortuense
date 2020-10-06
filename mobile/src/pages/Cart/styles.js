import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 10,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  cartBold: {
    fontWeight: 'bold',
    fontSize: 14
  },

  cartText: {
    fontSize: 14,
    color: '#707070',
  },

  myCart: {
    flexDirection: 'row',
    backgroundColor: '#A06D51',
  },

  goBackIcon: {
    marginTop: 17,
    marginRight: 10,
    marginLeft: 4,
  },

  cartTitle: {
    fontWeight: 'bold',
    color: '#FFF',
    paddingVertical: 15,
    fontSize: 22,
  },

  cartItemContainer: {
    borderBottomColor: '#a4a3a3',
    borderBottomWidth: 1,
    marginBottom: 8,
  },  

  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginLeft: 8,
    paddingHorizontal: 15,
  },

  cartItemCategory: {
    fontWeight: 'bold',
    color: '#A06D51',
    fontSize: 16,
  },

  cartItemName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 6,
  },

  cartItemQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    fontSize: 16,
  },

  cartQuantityValue: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    borderRadius: 3,
  },

  cartItemTotal: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 8,
    marginBottom: 10,
    marginTop: 4,
  },

  cartItemTotalValue: {
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 8,
    fontSize: 14,
  },

  addMore: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 20,

  },

  addMoreText: {
    color: '#A06D51',
    fontWeight: 'bold',
  },

  addCartContainer: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    minHeight: 50,
  },

  addCart: {
    backgroundColor: '#A06D51',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addCartText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  pedidoInfoContainer: {
    borderTopColor: '#a4a3a3',
    borderTopWidth: 1,
    paddingVertical: 10,
    marginTop: 30,
  },

  pedidoInfoTextsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 4,
  },

  pedidoTotal: {
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 8,
    fontSize: 16,
  },

  orderNow: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    minHeight: 50,
    backgroundColor: '#A06D51',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderNowText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  }

});

