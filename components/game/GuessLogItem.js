/**
 * @fileoverview Guess Log Item component for the Number Guessing Game.
 * Displays individual entries in the guess history list, showing the round number
 * and the computer's guess for that round.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

/**
 * GuessLogItem component - Individual item in the guess history list.
 * 
 * Features:
 * - Displays round number and guess value
 * - Horizontal layout with space-between alignment
 * - Accent color background for visibility
 * - Shadow effects for depth
 * - Rounded corners for modern appearance
 * 
 * Used in:
 * - FlatList within GameScreen to show guess history
 * - Each item represents one computer guess attempt
 * 
 * @component
 * @param {Object} props - Component props
 * @param {number} props.roundNumber - The round number (1, 2, 3, etc.)
 * @param {number} props.guess - The computer's guess for this round
 * @returns {React.ReactElement} The guess log item component
 * 
 * @example
 * <GuessLogItem roundNumber={1} guess={50} />
 * 
 * @example
 * <GuessLogItem roundNumber={3} guess={75} />
 */
function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent Guess: {guess}</Text>
    </View>
  );
};

/**
 * StyleSheet for the GuessLogItem component.
 * Includes shadow effects for cross-platform depth appearance.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
  /** Main list item container with shadows and accent background */
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500, // Golden yellow background
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    
    // Android shadow
    elevation: 4,
    
    // iOS shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  
  /** Text styling for round number and guess value */
  itemText: {
    fontFamily: 'open-sans',
    fontWeight: 'bold',
  }
});




export default GuessLogItem;