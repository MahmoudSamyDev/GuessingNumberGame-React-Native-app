/**
 * @fileoverview Instruction Text component for the Number Guessing Game.
 * A specialized text component for displaying instructions and prompts
 * with consistent styling throughout the application.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

/**
 * InstructionText component - Displays styled instruction text.
 * 
 * Features:
 * - Consistent accent color (golden yellow) for visibility
 * - Custom font family for better readability
 * - Supports style overrides for flexibility
 * - Bold weight for emphasis
 * - Standard bottom margin for spacing
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The instruction text content
 * @param {Object} [props.style] - Additional styles to merge with default styling
 * @returns {React.ReactElement} The instruction text component
 * 
 * @example
 * <InstructionText>Enter A Number</InstructionText>
 * 
 * @example
 * <InstructionText style={{ fontSize: 20 }}>
 *   Higher or Lower?
 * </InstructionText>
 */
function InstructionText({ children, style }) {
  return (
      <Text style={[styles.instructionText, style]}>{children}</Text>
  );
};

/**
 * StyleSheet for the InstructionText component.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
      /** Main instruction text styling with accent color and bold weight */
      instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500, // Golden yellow for contrast
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
});