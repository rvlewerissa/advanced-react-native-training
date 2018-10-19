// @flow

import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED} from '../../constants/colors';

const TRANSACTIONS_DATA = [
  {
    id: 'isuyfsd876',
    type: 'EXPENSE',
    transactionDetail: 'Fine Dining at Jakarta',
    amount: '$30.00',
    category: 'food',
    date: new Date().toISOString(),
  },
  {
    id: '8sd9fsfasd',
    type: 'EXPENSE',
    transactionDetail: 'Bape Exclusive Cloth',
    amount: '$530.00',
    category: 'clothes',
    date: new Date().toISOString(),
  },
  {
    id: '89asdy98ah',
    type: 'INCOME',
    transactionDetail: 'Salary Month 1',
    amount: '$3000.00',
    category: 'salary',
    date: new Date().toISOString(),
  },
  {
    id: '18271h1nf',
    type: 'EXPENSE',
    transactionDetail: 'Uber from Fatmawati to Gading Serpong',
    amount: '$23.00',
    category: 'transportation',
    date: new Date().toISOString(),
  },
];

class Dashboard extends Component<*, *> {
  render() {
    return (
      <View style={{padding: 10, flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <BalanceCard title="Income" amount="$13,500.00" color={BLUE_SEA} />
          <BalanceCard title="Expense" amount="$49,000.00" color={RED} />
        </View>
        <View style={{marginTop: 15, flex: 1}}>
          <Text style={{marginBottom: 5, fontSize: 16}}>History</Text>
          <FlatList
            data={TRANSACTIONS_DATA}
            renderItem={({item}) => <TransactionCard {...item} />}
            keyExtractor={({id}) => id}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

export default Dashboard;
