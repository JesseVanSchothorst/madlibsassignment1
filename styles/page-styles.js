import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Both
	page: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 50,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	
	// Index
    input: {
        width: '80%',
		margin: 2,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 5,
		padding: 10,
		fontSize: 16,
    },
	instructions: {
		fontSize: 20,
		marginBottom: 50,
    },
	button: {
		backgroundColor: '#3498db',
		padding: 10,
		borderRadius: 5,
		marginVertical: 10,
	},

	
	// Story
	backButton: {
		position: 'absolute',
		top: 10,
		left: 20,
		fontSize: 26,
		color: 'blue',
	},
	
	madlibTitle: {
		position: 'absolute',
		top: 80,
		right: 50,
		alignItems: 'center'
	},
	logoimage: {
		width: 100,
		height: 100,
		right: 230,
		position: 'absolute',
	},
	dateText: {
		fontSize: 16,
		marginBottom: 300,
	},
	
	madlibStory: {
		position: 'absolute',
		right: 50,
		width: '50%',
	},
	storyText: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
	},

	madLibsText: {
		marginLeft: -280,
		marginTop: 200,
		fontSize: 150,
		transform: [{ rotate: '-90deg' }], // Rotate vertically
	},
	madlibStuff: {
		alignSelf: 'flex-end',
		marginRight: 40,
	},
	signBox: {
		position: 'absolute',
		right: 25,
		bottom: 40,
		paddingBottom: 50,
		width: '60%',
		borderWidth: 2,
	},
});

export default styles;