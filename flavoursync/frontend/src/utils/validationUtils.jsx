// src/utils/validationUtils.js

// Function to validate email format
export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

// Function to map Firebase error codes to user-friendly messages
export const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Invalid email address.';
        case 'auth/user-disabled':
            return 'This account has been disabled.';
        case 'auth/user-not-found':
            return 'No account found with this email.';
        case 'auth/wrong-password':
            return 'Incorrect password.';
        case 'auth/email-already-in-use':
            return 'Email is already in use. Please use a different email.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        default:
            return 'An error occurred. Please try again.';
    }
};