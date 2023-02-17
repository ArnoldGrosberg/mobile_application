import React from "react";
import {Pressable, Image, Text} from "react-native";
import {styles} from "./styles";

const ProductHomeItem = ({title, image, price, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    );
}

export default React.memo(ProductHomeItem);