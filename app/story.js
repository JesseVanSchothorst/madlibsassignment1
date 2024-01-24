// story.js
import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

import Styles from '../styles/page-styles';

export default function Page() {
	// to get the date and turn it into the string
  const date = new Date().toLocaleDateString();

	// to get the other values
  const params = useLocalSearchParams();
  const { name, verb, food } = params;
  


  return (
    <View style={ Styles.page }>
	
		{/* Comment: Back Button */}
      <Link href="/" style={ Styles.backButton }>
        Back
      </Link>	
	  
		<View style={Styles.madlibTitle}>
				{/* Comment: Title */}
			  <Text style={ Styles.title }>Mad Libs</Text>
			  
				{/* Comment: The Date */}
			  <Text style={ Styles.dateText }>Today's date: { date }</Text>
			<Image
			  source={require('./mad.png')}
			  style={Styles.logoimage}
			  resizeMode="cover"
			/>
		</View>	
		
		<View style={Styles.madlibStory}>			  
				{/* Comment: Story Text */}
			  <Text style={ Styles.storyText }>
				Your Name is { name }!
			  </Text>
			  <Text style={ Styles.storyText }>
			  You { verb } to the store to get
			  </Text>
			  <Text style={ Styles.storyText }>
			  your favorite food { food }
			  </Text> 
		</View>	
  
	  <Text  style={ Styles.madLibsText }>
        Hall Pass	
      </Text>
	  <View style={ Styles.signBox }>
		<Text> Sign Here </Text>
	  </View>
    </View>
  );
}
