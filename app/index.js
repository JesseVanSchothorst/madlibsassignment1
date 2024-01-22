//index.js
import React from 'react';
import { Pressable, Text, TextInput, View, Button, Alert } from 'react-native';
import { Link } from 'expo-router';

import Styles from '../styles/page-styles';

export default function page() {

    const [name, onChangeName] = React.useState("");
    const [verb, onChangeVerb] = React.useState("");
    const [food, onChangeFood] = React.useState("");

    const clearFields = () => {
        // sets the field to blank
        onChangeName('');
        onChangeVerb('');
        onChangeFood('');

        // let user know just in case
        Alert.alert('Deleting the Text')
    };
	const checkEmpty = () => {
	 if (name === '' || verb === '' || food === '') {
		 Alert.alert('Some fields may be empty');
	 }
	};
	
    return (
        <View style={Styles.page}>
		
            <Text style={ Styles.title }><Link href='https://www.madlibs.com/'>
                    Mad Libs
            </Link></Text>
			
            <Text style={ Styles.instructions }>
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


            <Link href={{
                // Make my hall pass
                pathname: "/story",
                params: { name, verb, food },

            }}
                style={Styles.button}
                asChild
            >
                <Pressable onPress={checkEmpty}>
                    <Text>Make your Hall Pass</Text>
                </Pressable>
            </Link>

            <Pressable
                // clear the buttons
                style={Styles.button}

                onPress={clearFields}>

                <Text>Clear Text</Text>
            </Pressable>

        </View>
    );
}