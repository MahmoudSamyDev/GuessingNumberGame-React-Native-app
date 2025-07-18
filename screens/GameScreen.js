/**
 * @fileoverview Game Screen component for the Number Guessing Game.
 * This is the main gameplay screen where the computer tries to guess the user's number.
 * Includes responsive layout, guess history, and interactive feedback buttons.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import {
    Alert,
    FlatList,
    StyleSheet,
    useWindowDimensions,
    View,
} from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

/** @type {number} Minimum boundary for random number generation */
let minBoundary = 1;

/** @type {number} Maximum boundary for random number generation */
let maxBoundary = 100;

/**
 * Generates a random number between min and max, excluding a specific number.
 * Uses recursion to ensure the excluded number is never returned.
 * 
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (exclusive)
 * @param {number} exclude - Number to exclude from generation
 * @returns {number} Random number between min and max, excluding the exclude value
 */
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

/**
 * GameScreen component - Main gameplay interface.
 * 
 * Features:
 * - Computer generates guesses based on user feedback
 * - Validates user feedback to prevent cheating
 * - Maintains guess history with round numbers
 * - Responsive layout for different screen sizes
 * - Automatic game over detection
 * 
 * @component
 * @param {Object} props - Component props
 * @param {number} props.userNumber - The number the user chose (1-99)
 * @param {Function} props.onGameOver - Callback when game ends with number of rounds
 * @returns {React.ReactElement} The game screen component
 */
function GameScreen({ userNumber, onGameOver }) {
    /** Initial computer guess, avoiding the user's number */
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    
    /** @type {[number, Function]} Current computer guess */
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    /** @type {[number[], Function]} Array of all computer guesses */
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    
    /** Device dimensions for responsive layout */
    const { width, height } = useWindowDimensions();

    /**
     * Effect to check if the game is over (computer guessed correctly).
     * Triggers onGameOver callback with the number of rounds taken.
     */
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    /**
     * Effect to reset boundaries when component mounts.
     * Ensures clean state for each new game.
     */
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);
    
    /**
     * Handles user feedback on computer's guess.
     * Updates boundaries for next guess and validates user honesty.
     * 
     * @param {string} direction - Either "lower" or "greater" indicating user feedback
     */
    function nextGuessHandler(direction) {
        // Validate user feedback to prevent cheating
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        
        // Update boundaries based on feedback
        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        
        // Generate next guess within updated boundaries
        const newRandomNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        
        setCurrentGuess(newRandomNumber);
        setGuessRounds((prevRounds) => [newRandomNumber, ...prevRounds]);
    }

    const guessRoundsLength = guessRounds.length;

    // Content layout - responsive design for different screen sizes
    let content = (
        <>
            {/* Current computer guess display */}
            <NumberContainer>{currentGuess}</NumberContainer>
            
            {/* User feedback card */}
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or Lower?
                </InstructionText>
                
                {/* Feedback buttons for narrow screens */}
                <View style={styles.buttonsCotainer}>
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton
                            pressHandler={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons name="remove" size={24} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton
                            pressHandler={nextGuessHandler.bind(
                                this,
                                "greater"
                            )}
                        >
                            <Ionicons name="add-sharp" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    // Wide screen layout - horizontal arrangement
    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonsCotainerWide}>
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton
                            pressHandler={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons name="remove" size={24} />
                        </PrimaryButton>
                    </View>
                    
                    {/* Number container in the middle for wide screens */}
                    <NumberContainer>{currentGuess}</NumberContainer>
                    
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton
                            pressHandler={nextGuessHandler.bind(
                                this,
                                "greater"
                            )}
                        >
                            <Ionicons name="add-sharp" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }
    return (
        <View style={styles.screen}>
            {/* Game title */}
            <Title title="Opponent's Guess" />
            
            {/* Dynamic content based on screen size */}
            {content}
            
            {/* Guess history list */}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

/**
 * StyleSheet for the GameScreen component.
 * Includes responsive styles for different screen sizes.
 * 
 * @type {Object}
 */
const styles = StyleSheet.create({
    /** Main screen container */
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 36,
        alignItems: "center",
    },
    /** Instruction text styling */
    instructionText: {
        marginBottom: 12,
    },
    /** Button container for narrow screens */
    buttonsCotainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    /** Button container for wide screens */
    buttonsCotainerWide: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    /** Individual button container */
    singleButtonContainer: {
        flex: 1,
    },
    /** Container for the guess history list */
    listContainer: {
        flex: 1,
        padding: 16,
    },
});

export default GameScreen;
