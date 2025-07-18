/**
 * @fileoverview Main application component for the Number Guessing Game.
 * This component manages the overall game state and renders different screens
 * based on the current game phase (start, playing, game over).
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

/**
 * Main App component that manages the entire Number Guessing Game application.
 * 
 * This component handles:
 * - Loading custom fonts
 * - Managing game state (user number, game over status, guess rounds)
 * - Navigating between different screens
 * - Providing a consistent visual layout with gradient and background
 * 
 * @component
 * @returns {React.ReactElement} The main application component
 */
export default function App() {
    // Game state management
    /** @type {[number|null, Function]} User's chosen number (1-99) */
    const [userNumber, setUserNumber] = useState();
    
    /** @type {[number, Function]} Number of rounds it took to guess the number */
    const [guessRounds, setGuessRounds] = useState(0);
    
    /** @type {[boolean, Function]} Whether the game has ended */
    const [gameIsOver, setGameIsOver] = useState(false);

    // Font loading
    /** @type {[boolean, Function]} Whether custom fonts have loaded successfully */
    const [fontLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    /**
     * Handles the end of the game by setting game over state and recording rounds.
     * 
     * @param {number} numberOfRounds - The number of rounds it took to guess the number
     */
    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }
    
    /**
     * Handles when user picks a number to start the game.
     * 
     * @param {number} pickedNumber - The number chosen by the user (1-99)
     */
    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }
    
    /**
     * Resets the game state to start a new game.
     * Clears user number, resets rounds, and game over status.
     */
    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
        setGameIsOver(false);
    }

    // Show loading screen while fonts are loading
    if (!fontLoaded) {
        return null;
    }

    // Screen navigation logic
    let currentScreen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    // Show game screen if user has picked a number
    if (userNumber) {
        currentScreen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }
    
    // Show game over screen if game has ended
    if (gameIsOver && userNumber) {
        currentScreen = (
            <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
            />
        );
    }

    return (
        <>
            {/* Status bar configuration */}
            <StatusBar style="light" />
            
            {/* Main gradient background */}
            <LinearGradient
                colors={[Colors.primary700, Colors.accent500]}
                style={styles.rootScreen}
            >
                {/* Background image overlay */}
                <ImageBackground
                    source={require("./assets/images/background.png")}
                    resizeMode="cover"
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundStyle}
                >
                    {/* Safe area for device-specific spacing */}
                    <SafeAreaView style={styles.rootScreen}>
                        {currentScreen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

/**
 * StyleSheet for the main App component.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
    /** Main container that takes up the full screen */
    rootScreen: {
        flex: 1,
    },
    /** Styling for the background image to make it semi-transparent */
    backgroundStyle: {
        opacity: 0.15,
    },
});
