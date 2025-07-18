/**
 * @fileoverview Start Game Screen component for the Number Guessing Game.
 * This screen allows users to input a number between 1-99 for the computer to guess.
 * Includes input validation and responsive design for different screen sizes.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import {
    StyleSheet,
    Alert,
    View,
    TextInput,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import { useState } from "react";

/**
 * StartGameScreen component - Initial screen where users enter their number.
 * 
 * Features:
 * - Number input validation (1-99 range)
 * - Responsive layout for different screen sizes
 * - Keyboard avoidance for better UX
 * - Error handling with alerts
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onPickNumber - Callback function when valid number is confirmed
 * @returns {React.ReactElement} The start game screen component
 */
function StartGameScreen({ onPickNumber }) {
    /** @type {[string, Function]} Current value in the number input field */
    const [enteredNumber, setEnteredNumber] = useState("");
    
    /** Device dimensions for responsive layout */
    const { width, height } = useWindowDimensions();
    
    /**
     * Handles text input changes for the number field.
     * 
     * @param {string} enteredText - The text entered by the user
     */
    function handleInputChange(enteredText) {
        setEnteredNumber(enteredText);
    }
    
    /**
     * Resets the input field to empty state.
     */
    function handleResetInput() {
        setEnteredNumber("");
    }
    
    /**
     * Validates and confirms the entered number.
     * Shows an alert if the number is invalid (not between 1-99).
     * Calls onPickNumber callback if valid.
     */
    function handleConfirmation() {
        const EnteredNumber = parseInt(enteredNumber);
        
        // Validate number range (1-99)
        if (isNaN(EnteredNumber) || EnteredNumber <= 0 || EnteredNumber > 99) {
            Alert.alert(
                `Invalid number`,
                `The number must be between 1 and 99`,
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: handleResetInput,
                    },
                ]
            );
            return;
        } else {
            onPickNumber(EnteredNumber);
        }
    }

    // Responsive top margin based on screen height
    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View
                    style={[
                        styles.rootContainer,
                        { marginTop: marginTopDistance },
                    ]}
                >
                    <Title title="Guess My Number" />
                    <Card>
                        <InstructionText>Enter A Number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleInputChange}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsCotainer}>
                            <View style={styles.singleButtonContainer}>
                                <PrimaryButton pressHandler={handleResetInput}>
                                    Reset
                                </PrimaryButton>
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <PrimaryButton
                                    pressHandler={handleConfirmation}
                                >
                                    Confirm
                                </PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

/**
 * StyleSheet for the StartGameScreen component.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
    /** Main screen container */
    screen: {
        flex: 1,
    },
    /** Root container with centered content */
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    /** Styling for the number input field */
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    /** Container for action buttons */
    buttonsCotainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    /** Individual button container */
    singleButtonContainer: {
        flex: 1,
    },
});

export default StartGameScreen;
