import {
  Text,
  ListView
} from 'react-native';

const ds = new  ListView.DataSource({
  rowHasChanged: (r1, r2)=> r1 !== r2
});

const array = ['Row1','Row2','Row3','Row4','Row5','Row5','Row7','Row8','Row9'];

export default() => {
  return (
    <ListView dataSource={ds.cloneWithRows(array)} renderRow={(rowData)=> <Text>{rowData}</Text>} />
  );
};

// export default ListItens;
