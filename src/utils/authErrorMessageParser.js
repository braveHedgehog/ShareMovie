/* eslint-disable prettier/prettier */
export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email';

    case 'auth/email-already-exists':
      return 'User already is exist';

    case 'auth/user-not-found':
      return 'User not found';

    case 'auth/weak-password':
      return 'Weak Password';

    case 'auth/wrong-password':
      return 'Wrong Password';

    case 'auth/unknown':
      return 'Unknown Error';

    case 'auth/user-disabled;':
      return 'User Disabled';
    case 'auth/email-already-in-use':
      return 'User already is exist';
    default:
      return errorCode;
  }
}
