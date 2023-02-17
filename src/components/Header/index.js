import React, {useState} from "react";
import {Pressable, Image, Text, View} from "react-native";
import Input from "../Input";
import {styles} from "./styles";

const Header = ({title, onBackPress, onLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword}) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearch = () => {
        setShowSearchInput(!showSearchInput);
    };

    return (
        <View>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image source={require("../../assets/back.png")} style={styles.icon}/>
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearch}>
                        <Image source={require("../../assets/search.png")} style={styles.icon}/>
                    </Pressable>
                ) : <View style={styles.space}/>
                }
                <Text style={styles.title}>{title}</Text>
                {
                    showLogout ? (
                        <Pressable hitSlop={20} onPress={onLogout}>
                            <Image source={require("../../assets/logout.png")} style={styles.icon}/>
                        </Pressable>
                    ) : <View style={styles.space}/>
                }
            </View>
            {
                showSearchInput ? (
                    <Input onChangeText={onSearchKeyword} value={keyword} placeholder="Type your keyword"/>
                ) : null
            }
        </View>
    );
};

export default React.memo(Header);