import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import AppStyles from '../styles/AppStyles'

const TextInputDefault = ({ placeholder, style, textCallback, type }) => {
	const checkIfPasswordType = (type) => {
		if (type === 'password') {
			return true
		}
	}

	return (
		<View
			style={[
				styles.textInputView,
				AppStyles.border,
				AppStyles.shadow,
				{ ...style },
			]}
		>
			<TextInput
				onChangeText={(newText) => textCallback(newText)}
				placeholder={placeholder}
				placeholderTextColor={AppStyles.gold.color}
				selectionColor={AppStyles.gold.color}
				color={AppStyles.gold.color}
				style={[styles.textInput, AppStyles.textInput]}
				secureTextEntry={checkIfPasswordType(type)}
			/>
		</View>
	)
}
export default TextInputDefault

const styles = StyleSheet.create({
	textInputView: {
		backgroundColor: 'white',
		width: '85%',
		height: 50,
		marginBottom: 20,
		alignItems: 'flex-start',
		alignSelf: 'center',
	},
	textInput: {
		height: 63,
		flex: 1,
		padding: 10,
		marginLeft: 5,
	},
})
