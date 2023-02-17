import React from "react";
import {View, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./styles";
import {products} from "../../../data/products"
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header"

const Favorites = ({navigation}) => {
    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product: item})
        }
        return (
            <FavoriteItem onPress={onProductPress}
                          {...item}
            />)
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites"/>
                <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)}/>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Favorites);
