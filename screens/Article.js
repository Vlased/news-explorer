import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import convertTimeString from '../helpers/convertTimeString';

const Article = ({ route }) => {
    const { article } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{article.title}</Text>
            <Image
                style={styles.image}
                source={{ uri: article.urlToImage }}
                resizeMode="contain"
            />
            <Text style={styles.description}>{article.description}</Text>
            <View style={styles.authorContainer}>
                <Text style={styles.author}>{article.author}</Text>
            </View>
            <View style={styles.sourceContainer}>
                <Text style={styles.source}>{article.source.name}</Text>
                <Text style={styles.source}>
                    {convertTimeString(article.publishedAt)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 15,
        flex: 1,
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 20,
        color: "#1A1A1A",
        marginBottom: 5,
    },
    image: {
        height: 225,
        width: "100%",
    },
    description: {
        textAlign: "left",
        fontWeight: "400",
        fontSize: 16, 
        color: "#797979",
        marginTop: 5,
    },
    authorContainer: {
        width: "100%",
    },
    author: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15, 
        color: "#797979",
        marginTop: 5,
        textDecorationLine: "underline"
    },
    sourceContainer: {
        marginTop: 5,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    source: {
        color: "#1A1A1A",
        fontSize: 16, 
    }
})

export default Article