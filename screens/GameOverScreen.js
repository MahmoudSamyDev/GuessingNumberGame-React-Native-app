/**
 * @fileoverview Game Over Screen component for the Number Guessing Game.
 * This screen displays the game results, including the number of rounds taken
 * and the user's original number, with an option to start a new game.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import {
    StyleSheet,
    View,
    Image,
    Text,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

/**
 * GameOverScreen component - Displays game completion results.
 * 
 * Features:
 * - Shows game completion message
 * - Displays success image with responsive sizing
 * - Shows number of rounds taken and the user's number
 * - Provides option to start a new game
 * - Responsive design for different screen sizes
 * 
 * @component
 * @param {Object} props - Component props
 * @param {number} props.roundsNumber - Number of rounds it took to guess the number
 * @param {number} props.userNumber - The original number chosen by the user
 * @param {Function} props.onStartNewGame - Callback function to start a new game
 * @returns {React.ReactElement} The game over screen component
 */
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    /** Device dimensions for responsive layout */
    const { width, height } = useWindowDimensions();

    // Responsive image sizing based on device dimensions
    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }

    /** Dynamic image style with responsive dimensions */
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                {/* Game over title */}
                <Title title="Game Over!" />
                
                {/* Success image with responsive sizing */}
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/success.png")}
                    />
                </View>
                
                {/* Game summary and new game button */}
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needs{" "}
                        <Text style={styles.hightlight}>{roundsNumber}</Text>{" "}
                        rounds to guess the number{" "}
                        <Text style={styles.hightlight}>{userNumber}</Text>
                    </Text>
                    
                    {/* Start new game button */}
                    <PrimaryButton pressHandler={onStartNewGame}>
                        Start New Game
                    </PrimaryButton>
                </View>
            </View>
        </ScrollView>
    );
}

/**
 * StyleSheet for the GameOverScreen component.
 * Includes responsive image sizing and text styling.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
    /** Main screen container */
    screen: { flex: 1 },
    
    /** Root container with centered content */
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    
    /** Container for the success image */
    imageContainer: {
        overflow: "hidden",
        borderColor: Colors.primary800,
        margin: 36,
    },
    
    /** Success image styling */
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    
    /** Main summary text styling */
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        color: Colors.primary800,
        marginBottom: 24,
    },
    
    /** Highlighted text (numbers) styling */
    hightlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500,
    },
});

export default GameOverScreen;
