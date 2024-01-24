// index.js
import React from 'react';
import { Pressable, Text, TextInput, View, Alert } from 'react-native';
import { Link, useRouter} from 'expo-router';

import Styles from '../styles/page-styles';

export default function page() {
  const [name, onChangeName] = React.useState("");
  const [verb, onChangeVerb] = React.useState("");
  const [food, onChangeFood] = React.useState("");
  const router = useRouter();

  const clearFields = () => {
    onChangeName('');
    onChangeVerb('');
    onChangeFood('');
    Alert.alert('Warning', 'You Just cleared your fields');
  };

  const checkEmpty = () => {
    if (name.trim() === '' || verb.trim() === '' || food.trim() === '') {
      Alert.alert('Error', 'Some field may be missing');
    }  else {
        router.push({ pathname: "/story", params: { name, verb, food} });
    }
  };

  return (
    <View style={Styles.page}>
      <Text style={Styles.title}>
        <Link href='https://www.madlibs.com/'>Mad Libs</Link>
      </Text>
      <Text style={Styles.instructions}>
        Fill in the Blanks then create your hall pass!
      </Text>

      <TextInput
        style={Styles.input}
        onChangeText={onChangeName}
        value={name}
        maxLength={20}
        placeholder="Your Name"
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeVerb}
        value={verb}
        maxLength={8}
        placeholder="Past Tense Verb"
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeFood}
        value={food}
        maxLength={20}
        placeholder="Choose your favourite Food"
      />

       <Pressable 
            style={Styles.button}
            onPress={checkEmpty}>
          <Text>Make your Hall Pass</Text>
        </Pressable>


            <Pressable
                // clear the buttons
                style={Styles.button}

                onPress={clearFields}>

                <Text>Clear Text</Text>
            </Pressable>

    </View>
  );
}