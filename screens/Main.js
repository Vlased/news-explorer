import React, { useEffect } from 'react'
import { fetchArticles } from '../redux/thunks/fetchArticles';
import { useDispatch, useSelector } from 'react-redux';
import ArticlesList from '../components/main/ArticlesList';
import Search from '../components/main/Search';
import { View, StyleSheet } from 'react-native';
import SortByCategory from '../components/main/SortByCategory';
import SelectTime from '../components/main/SelectTime';

const Main = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filtersReducers.filters);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [filters])

  return (
    <View style={styles.container}>
      <Search />
      <SortByCategory />
      <SelectTime />
      <ArticlesList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1
  }
})

export default Main