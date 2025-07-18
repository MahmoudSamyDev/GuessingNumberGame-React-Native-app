/**
 * @fileoverview Primary Button component for the Number Guessing Game.
 * A reusable button component with consistent styling, press effects,
 * and platform-specific ripple animations.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

/**
 * PrimaryButton component - Main button used throughout the app.
 * 
 * Features:
 * - Consistent brand styling with rounded corners
 * - Platform-specific press effects (ripple on Android, opacity on iOS)
 * - Supports text and icon children
 * - Accessible and responsive design
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content (text, icons, etc.)
 * @param {Function} props.pressHandler - Function to call when button is pressed
 * @returns {React.ReactElement} The primary button component
 * 
 * @example
 * <PrimaryButton pressHandler={() => console.log('Pressed!')}>
 *   Click Me
 * </PrimaryButton>
 * 
 * @example
 * <PrimaryButton pressHandler={handlePress}>
 *   <Ionicons name="add" size={24} />
 * </PrimaryButton>
 */
function PrimaryButton({ children, pressHandler }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => 
                    pressed 
                        ? [styles.pressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                onPress={pressHandler}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

/**
 * StyleSheet for the PrimaryButton component.
 * Includes platform-specific styling for press effects.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
    /** Outer container for button with border radius and overflow handling */
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    
    /** Inner container with background color and padding */
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // Android shadow
    },
    
    /** Button text styling */
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    
    /** Style for iOS press effect (opacity change) */
    pressed: {
        opacity: 0.75,
    }
});

export default PrimaryButton;
