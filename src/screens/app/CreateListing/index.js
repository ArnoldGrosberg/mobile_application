import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {styles} from './styles';
import {categories} from '../../../data/categories';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateListing = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  console.log('values => ', values)

  const goBack = () => {
    navigation.goBack();
  };

  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary();
    if (result?.assets?.length) {
      setImages(list => ([...list, ...result?.assets]));
      setLoading(false);
    }
  };

  const onDeleteImage = image => {
    setImages(list => {
      const filteredImages = list.filter(
        img => img?.fileName !== image?.fileName,
      );
      return filteredImages;
    });
  };

  const onChange = (value, key) => {
    setValues(val => ({...val, [key]: value}));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView behavior="position">
        <Header
          showBack={true}
          onBackPress={goBack}
          title="Create a new listing"
        />
        <ScrollView style={styles.container}>
          <Text style={styles.sectionTitle}>Upload photos</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={uploadNewImage}>
              <View style={styles.uploadCircle}>
                <Text style={styles.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>
            {images?.map(image => (
              <View key={image?.fileName} style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image?.uri}} />
                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                  <Image
                    style={styles.delete}
                    source={require('../../../assets/close.png')}
                  />
                </Pressable>
              </View>
            ))}
            {loading ? <ActivityIndicator /> : null}
          </View>
          <Input
            label="Title"
            placeholder="Listing Title"
            value={values.title}
            onChangeText={v => onChange(v, 'title')}
          />
          <Input
            label="Category"
            placeholder="Select the category"
            value={values.category}
            onChangeText={v => onChange(v, 'category')}
            type="picker"
            options={categories}
          />
          <Input
            label="Price"
            placeholder="Enter price in USD"
            value={values.price}
            onChangeText={v => onChange(v, 'price')}
            keyboardType="numeric"
          />
          <Input
            style={styles.textarea}
            label="Description"
            placeholder="Tell us more..."
            value={values.description}
            onChangeText={v => onChange(v, 'description')}
            multiline
          />
          <Button title="Submit" style={styles.button} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default React.memo(CreateListing);
