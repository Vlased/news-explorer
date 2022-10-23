import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import { useSelector } from 'react-redux';
import ArticleItem from './ArticleItem';

const ArticlesList = () => {
    const articles = useSelector(state => state.articlesReducers.articles);

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                style={styles.list}
                renderItem={({ item }) => (
                    <ArticleItem article={item}/>
                )}
                keyExtractor={() => uuid.v4()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    list: {
        flex: 1,
    }
});


export default ArticlesList