/**
 * @fileoverview Number Container component for the Number Guessing Game.
 * A specialized container for displaying prominent numbers (guesses, user input)
 * with distinctive styling and responsive design.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

/**
 * NumberContainer component - Displays numbers with prominent styling.
 * 
 * Features:
 * - Distinctive border with accent color
 * - Large, bold typography for visibility
 * - Responsive sizing based on device width
 * - Centered content alignment
 * - Consistent spacing and margins
 * 
 * Used for:
 * - Displaying computer guesses during gameplay
 * - Showing user's selected number
 * - Any prominent numerical display
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The number content to display (typically a number)
 * @returns {React.ReactElement} The number container component
 * 
 * @example
 * <NumberContainer>{42}</NumberContainer>
 * 
 * @example
 * <NumberContainer>{currentGuess}</NumberContainer>
 */
function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

/** Device width for responsive design calculations */
const deviceWidth = Dimensions.get('window').width;

/**
 * StyleSheet for the NumberContainer component.
 * Includes responsive sizing for different device widths.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
    /** Container with responsive border and padding */
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500, // Golden yellow border
        padding: deviceWidth < 380 ? 12 : 24, // Responsive padding
        borderRadius: deviceWidth < 380 ? 12 : 24, // Responsive border radius
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    
    /** Large, bold number text styling */
    numberText: {
        color: Colors.accent500, // Golden yellow text
        fontSize: 36,
        fontFamily: "open-sans-bold",
    },
});

export default NumberContainer;
