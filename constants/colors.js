/**
 * @fileoverview Color constants for the Number Guessing Game application.
 * Defines a consistent color palette used throughout the app for UI elements,
 * backgrounds, buttons, and text styling.
 * 
 * @author Your Name
 * @version 1.0.0
 */

/**
 * Color palette object containing all app colors.
 * Uses a systematic naming convention with base color names and numeric suffixes
 * indicating intensity (higher numbers = darker/more intense).
 * 
 * @type {Object}
 * @property {string} primary500 - Main brand color (medium intensity) - Deep magenta
 * @property {string} primary600 - Darker brand color - Used for button pressed states
 * @property {string} primary700 - Even darker brand color - Used for gradients and backgrounds
 * @property {string} primary800 - Darkest brand color - Used for borders and emphasis
 * @property {string} accent500 - Accent color (golden yellow) - Used for highlights and contrast
 */
const Colors = {
  /** Main brand color - Deep magenta (#72063c) */
  primary500: "#72063c",
  
  /** Darker brand color - Used for pressed states (#640233) */
  primary600: "#640233",
  
  /** Dark brand color - Used for gradients (#4e0329) */
  primary700: "#4e0329",
  
  /** Darkest brand color - Used for borders (#4e0329) */
  primary800: "#4e0329",
  
  /** Accent color - Golden yellow for highlights (#ddb52f) */
  accent500: "#ddb52f",
}

export default Colors;