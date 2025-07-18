/**
 * @fileoverview Entry point for the Number Guessing Game React Native application.
 * This file registers the main App component with Expo and ensures proper
 * environment setup for both Expo Go and native builds.
 * 
 * @author Your Name
 * @version 1.0.0
 */

import { registerRootComponent } from 'expo';
import App from './App';

/**
 * Register the main App component as the root component.
 * 
 * This function:
 * - Calls AppRegistry.registerComponent('main', () => App) internally
 * - Ensures the app works in both Expo Go and native builds
 * - Sets up the appropriate environment for the platform
 * 
 * @see {@link https://docs.expo.dev/versions/latest/sdk/register-root-component/}
 */
registerRootComponent(App);
