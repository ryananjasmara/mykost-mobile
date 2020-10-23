import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {rupiahFormat, thousandSeparator} from '../../helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY, PRIMARY} from '../../config/colors';
import {useStoreState} from 'easy-peasy';

const BalanceInfo = () => {
  const user = useStoreState((state) => state.user);
  return (
    <View style={styles.balanceInfoContainer}>
      <View style={styles.balanceSectionContainer}>
        <View style={styles.balanceSubContainer}>
          <Text style={styles.balanceText}>Saldo</Text>
          <Ionicons name="wallet-outline" size={21} color={PRIMARY} />
        </View>
        <Text style={styles.balanceValueText}>
          {rupiahFormat(parseInt(user.data.saldo))}
        </Text>
      </View>
      <View style={styles.balanceSectionContainer}>
        <View style={styles.balanceSubContainer}>
          <Text style={styles.balanceText}>Poin</Text>
          <Ionicons name="card-outline" size={21} color={PRIMARY} />
        </View>
        <Text style={styles.balanceValueText}>
          {thousandSeparator(parseInt(user.data.poin))}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceInfoContainer: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    color: PRIMARY,
  },
  balanceSectionContainer: {
    alignItems: 'center',
  },
  balanceSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  balanceValueText: {
    fontSize: 15,
    color: GRAY,
  },
});

export default BalanceInfo;
