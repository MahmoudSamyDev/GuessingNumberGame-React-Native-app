/**
 * @fileoverview Title component for the Number Guessing Game.
 * A reusable title component with consistent styling and platform-specific
 * design variations for headers and section titles.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { StyleSheet, Text, Platform } from 'react-native';

/**
 * Title component - Displays styled headings throughout the app.
 * 
 * Features:
 * - Consistent typography using custom fonts
 * - Platform-specific styling (border on Android only)
 * - Responsive width with maximum constraints
 * - Centered text alignment
 * - White color for contrast against dark backgrounds
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text to display
 * @returns {React.ReactElement} The title component
 * 
 * @example
 * <Title title="Game Over!" />
 * 
 * @example
 * <Title title="Guess My Number" />
 */
function Title({title}) {
  return (
    <Text style={styles.title}>{title}</Text>
  );
};

/**
 * StyleSheet for the Title component.
 * Includes platform-specific styling for Android borders.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
  /** Main title text styling with platform-specific border */
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: "white",
    textAlign: "center",
    
    // Platform-specific border (Android only)
    borderWidth: Platform.select({android: 2, ios: 0}),
    borderColor: "white",
    
    padding: 12,
    maxWidth: '80%',
    width: 300,
  }
});




export default Title;