import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {getListData} from '../utils/ajax';
export default class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.getListData();
  }

  getListData = () => {
    getListData().then((result) => {
      const listData = result.data.data;
      // console.log('result', listData);
      this.setState({
        listData: listData,
      });
    });
  };
  render() {
    const {listData} = this.state;
    return (
      <View style={styles.main}>
        <FlatList
          data={listData}
          renderItem={({item}) => (
            <View style={styles.cell}>
              {item.author && (
                <Image
                  style={styles.cellImage}
                  source={{url: item.author.avatar}}
                />
              )}
              <View style={styles.cellRight}>
                <Text style={styles.cellTitle}>{item.title}</Text>
                <View style={styles.author}>
                  <Text style={styles.authorInfo}>{item.author.name}</Text>
                  <Text style={styles.authorInfo2} numberOfLines={1}>
                    {item.author.intro}
                  </Text>
                </View>
                <Text style={styles.unit}>{item.unit}</Text>
                <View style={styles.price}>
                  <Text style={styles.marketPrice}>
                    ￥{(item.price.market / 100.0).toFixed(1)}
                  </Text>
                  <Text style={styles.order}>订阅</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {},
  cell: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  cellImage: {
    height: 108,
    width: 82,
    // borderWidth: 1,
    // borderColor: 'blue',
    borderRadius: 4,
  },
  cellRight: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  cellTitle: {
    fontSize: 20,
  },
  author: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  authorInfo: {
    backgroundColor: '#f1f1f1',
    lineHeight: 20,
    height: 20,
    fontSize: 16,
    color: '#6e6e6e',
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  authorInfo2: {
    backgroundColor: '#f1f1f1',
    lineHeight: 20,
    height: 20,
    fontSize: 16,
    color: '#6e6e6e',
    marginLeft: 12,
    // flex: 1,
    maxWidth: 400,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  unit: {
    color: '#9e9e9e',
    fontSize: 16,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marketPrice: {
    color: '#fa8919',
    fontSize: 18,
    lineHeight: 32,
  },
  order: {
    color: 'white',
    backgroundColor: '#fa8919',
    fontSize: 14,
    borderRadius: 4,
    height: 32,
    width: 90,
    lineHeight: 32,
    textAlign: 'center',
    overflow: 'hidden',
  },
});
