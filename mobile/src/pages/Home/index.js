import React from 'react';
import { View, Text, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import PaoFrances from '../../assets/img/pao-frances.jpeg';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Collapse>
        <CollapseHeader style={styles.menuHeader}>
          <View style={styles.menuHeaderView}>
            <Text styles={styles.menuHeaderText}>Click here</Text>
          </View>
        </CollapseHeader>
        <CollapseBody styles={styles.menuBody}>
          <View style={styles.menuBodyView}>
            <View styles={styles.itemImg}>
              <Image source={PaoFrances} />
            </View>
            <View styles={styles.itemInfo}>
              <Text styles={styles.itemTitle}>Pão Francês (01 unid)</Text>
              <Text styles={styles.itemValue}>R$ 0,99</Text>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseHeader style={styles.menuHeader}>
          <View style={styles.menuHeaderView}>
            <Text>Click here</Text>
          </View>
        </CollapseHeader>
        <CollapseBody styles={styles.menuBody}>
          <Text>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
    </View>
  );  
};

export default Home;