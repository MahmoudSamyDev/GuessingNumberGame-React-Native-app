/**
 * @fileoverview Card component for the Number Guessing Game.
 * A reusable container component that provides consistent card-like styling
 * with shadows, rounded corners, and responsive design.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

/**
 * Card component - Reusable container with card-like appearance.
 * 
 * Features:
 * - Consistent shadow and elevation effects
 * - Rounded corners with brand color background
 * - Responsive margins based on device width
 * - Centers content both horizontally and vertically
 * - Cross-platform shadow support (elevation for Android, shadow for iOS)
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be displayed inside the card
 * @returns {React.ReactElement} The card component
 * 
 * @example
 * <Card>
 *   <Text>Card content goes here</Text>
 *   <Button title="Action" />
 * </Card>
 */
function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

/** Device width for responsive design calculations */
const deviceWidth = Dimensions.get('window').width;

/**
 * StyleSheet for the Card component.
 * Includes responsive design and cross-platform shadow effects.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
  /** Main card container with shadows and responsive margins */
  card: {
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 24, // Responsive top margin
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        
        // Android shadow
        elevation: 4,
        
        // iOS shadow
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        
        // Content alignment
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Card;
