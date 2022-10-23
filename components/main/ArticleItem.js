import React, { useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ArticleItem = ({ article }) => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate("Article", { article })
  }, [article])

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={styles.container}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    padding: 15,
    flex: 1,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
  },
  title: {
    textAlign: "left",
    fontWeight: "500",
    fontSize: 18,  
    color: "#1A1A1A",
    marginBottom: 5,
  },
  description: {
    textAlign: "left",
    fontWeight: "400",
    color: "#797979",
    marginTop: 5,
  }
})

export default ArticleItem