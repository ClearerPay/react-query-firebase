/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import {
  ActionCodeInfo,
  ActionCodeSettings,
  ApplicationVerifier,
  Auth,
  AuthCredential,
  AuthError,
  AuthProvider,
  ConfirmationResult,
  PhoneAuthCredential,
  PopupRedirectResolver,
  User,
  UserCredential,
  applyActionCode,
  checkActionCode,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  deleteUser,
  linkWithCredential,
  linkWithPhoneNumber,
  linkWithPopup,
  linkWithRedirect,
  reauthenticateWithCredential,
  reauthenticateWithPhoneNumber,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInAnonymously,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  unlink,
  updateCurrentUser,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode,
} from "@firebase/auth";
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";

export function useAuthApplyActionCode(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<void, AuthError, string>
): UseMutationResult<void, AuthError, string> {
  return useMutation<void, AuthError, string>({
    ...useMutationOptions,
    mutationFn: (oobCode) => {
      return applyActionCode(auth, oobCode);
    },
  });
}

export function useAuthCheckActionCode(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<ActionCodeInfo, AuthError, string>
): UseMutationResult<ActionCodeInfo, AuthError, string> {
  return useMutation<ActionCodeInfo, AuthError, string>({
    ...useMutationOptions,
    mutationFn: (oobCode) => {
      return checkActionCode(auth, oobCode);
    },
  });
}

export function useAuthConfirmPasswordReset(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { oobCode: string; newPassword: string }
  >
): UseMutationResult<
  void,
  AuthError,
  { oobCode: string; newPassword: string }
> {
  return useMutation<void, AuthError, { oobCode: string; newPassword: string }>(
    {
      ...useMutationOptions,
      mutationFn: ({ oobCode, newPassword }) => {
        return confirmPasswordReset(auth, oobCode, newPassword);
      },
    }
  );
}

export function useAuthCreateUserWithEmailAndPassword(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { email: string; password: string }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { email: string; password: string }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { email: string; password: string }
  >({
    ...useMutationOptions,
    mutationFn: ({ email, password }) => {
      return createUserWithEmailAndPassword(auth, email, password);
    },
  });
}

export function useAuthDeleteUser(
  useMutationOptions?: UseMutationOptions<void, AuthError, User>
): UseMutationResult<void, AuthError, User> {
  return useMutation<void, AuthError, User>({
    ...useMutationOptions,
    mutationFn: (user) => {
      return deleteUser(user);
    },
  });
}

export function useAuthLinkWithCredential(
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { user: User; credential: AuthCredential }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { user: User; credential: AuthCredential }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { user: User; credential: AuthCredential }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, credential }) => {
      return linkWithCredential(user, credential);
    },
  });
}

export function useAuthLinkWithPhoneNumber(
  useMutationOptions?: UseMutationOptions<
    ConfirmationResult,
    AuthError,
    { user: User; phoneNumber: string; appVerifier: ApplicationVerifier }
  >
): UseMutationResult<
  ConfirmationResult,
  AuthError,
  { user: User; phoneNumber: string; appVerifier: ApplicationVerifier }
> {
  return useMutation<
    ConfirmationResult,
    AuthError,
    { user: User; phoneNumber: string; appVerifier: ApplicationVerifier }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, phoneNumber, appVerifier }) => {
      return linkWithPhoneNumber(user, phoneNumber, appVerifier);
    },
  });
}

export function useAuthLinkWithPopup(
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, provider, resolver }) => {
      return linkWithPopup(user, provider, resolver);
    },
  });
}

export function useAuthLinkWithRedirect(
  useMutationOptions?: UseMutationOptions<
    never,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >
): UseMutationResult<
  never,
  AuthError,
  { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
> {
  return useMutation<
    never,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, provider, resolver }) => {
      return linkWithRedirect(user, provider, resolver);
    },
  });
}

export function useAuthReauthenticateWithCredential(
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { user: User; credential: AuthCredential }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { user: User; credential: AuthCredential }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { user: User; credential: AuthCredential }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, credential }) => {
      return reauthenticateWithCredential(user, credential);
    },
  });
}

export function useAuthReauthenticateWithPhoneNumber(
  useMutationOptions?: UseMutationOptions<
    ConfirmationResult,
    AuthError,
    { user: User; phoneNumber: string; appVerifier: ApplicationVerifier }
  >
): UseMutationResult<
  ConfirmationResult,
  AuthError,
  { user: User; phoneNumber: string; appVerifier: ApplicationVerifier }
> {
  return useMutation<
    ConfirmationResult,
    AuthError,
    { user: User; phoneNumber: string; appVerifier: ApplicationVerifier }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, phoneNumber, appVerifier }) => {
      return reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier);
    },
  });
}

export function useAuthReauthenticateWithPopup(
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, provider, resolver }) => {
      return reauthenticateWithPopup(user, provider, resolver);
    },
  });
}

export function useAuthReauthenticateWithRedirect(
  useMutationOptions?: UseMutationOptions<
    never,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >
): UseMutationResult<
  never,
  AuthError,
  { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
> {
  return useMutation<
    never,
    AuthError,
    { user: User; provider: AuthProvider; resolver?: PopupRedirectResolver }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, provider, resolver }) => {
      return reauthenticateWithRedirect(user, provider, resolver);
    },
  });
}

export function useAuthReload(
  useMutationOptions?: UseMutationOptions<void, AuthError, User>
): UseMutationResult<void, AuthError, User> {
  return useMutation<void, AuthError, User>({
    ...useMutationOptions,
    mutationFn: (user) => {
      return reload(user);
    },
  });
}

export function useAuthSendEmailVerification(
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { user: User; actionCodeSettings?: ActionCodeSettings | null }
  >
): UseMutationResult<
  void,
  AuthError,
  { user: User; actionCodeSettings?: ActionCodeSettings | null }
> {
  return useMutation<
    void,
    AuthError,
    { user: User; actionCodeSettings?: ActionCodeSettings | null }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, actionCodeSettings }) => {
      return sendEmailVerification(user, actionCodeSettings);
    },
  });
}

export function useAuthSendPasswordResetEmail(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { email: string; actionCodeSettings?: ActionCodeSettings }
  >
): UseMutationResult<
  void,
  AuthError,
  { email: string; actionCodeSettings?: ActionCodeSettings }
> {
  return useMutation<
    void,
    AuthError,
    { email: string; actionCodeSettings?: ActionCodeSettings }
  >({
    ...useMutationOptions,
    mutationFn: ({ email, actionCodeSettings }) => {
      return sendPasswordResetEmail(auth, email, actionCodeSettings);
    },
  });
}

export function useAuthSendSignInLinkToEmail(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { email: string; actionCodeSettings: ActionCodeSettings }
  >
): UseMutationResult<
  void,
  AuthError,
  { email: string; actionCodeSettings: ActionCodeSettings }
> {
  return useMutation<
    void,
    AuthError,
    { email: string; actionCodeSettings: ActionCodeSettings }
  >({
    ...useMutationOptions,
    mutationFn: ({ email, actionCodeSettings }) => {
      return sendSignInLinkToEmail(auth, email, actionCodeSettings);
    },
  });
}

export function useAuthSignInAnonymously(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { email: string; password: string }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { email: string; password: string }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { email: string; password: string }
  >({
    ...useMutationOptions,
    mutationFn: () => {
      return signInAnonymously(auth);
    },
  });
}

export function useAuthSignInWithCredential(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    AuthCredential
  >
): UseMutationResult<UserCredential, AuthError, AuthCredential> {
  return useMutation<UserCredential, AuthError, AuthCredential>({
    ...useMutationOptions,
    mutationFn: (credential) => {
      return signInWithCredential(auth, credential);
    },
  });
}

export function useAuthSignInWithCustomToken(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<UserCredential, AuthError, string>
): UseMutationResult<UserCredential, AuthError, string> {
  return useMutation<UserCredential, AuthError, string>({
    ...useMutationOptions,
    mutationFn: (customToken) => {
      return signInWithCustomToken(auth, customToken);
    },
  });
}

export function useAuthSignInWithEmailAndPassword(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { email: string; password: string }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { email: string; password: string }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { email: string; password: string }
  >({
    ...useMutationOptions,
    mutationFn: ({ email, password }) => {
      return signInWithEmailAndPassword(auth, email, password);
    },
  });
}

export function useAuthSignInWithEmailLink(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { email: string; emailLink?: string }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { email: string; emailLink?: string }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { email: string; emailLink?: string }
  >({
    ...useMutationOptions,
    mutationFn: ({ email, emailLink }) => {
      return signInWithEmailLink(auth, email, emailLink);
    },
  });
}

export function useAuthSignInWithPhoneNumber(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    ConfirmationResult,
    AuthError,
    { phoneNumber: string; appVerifier: ApplicationVerifier }
  >
): UseMutationResult<
  ConfirmationResult,
  AuthError,
  { phoneNumber: string; appVerifier: ApplicationVerifier }
> {
  return useMutation<
    ConfirmationResult,
    AuthError,
    { phoneNumber: string; appVerifier: ApplicationVerifier }
  >({
    ...useMutationOptions,
    mutationFn: ({ phoneNumber, appVerifier }) => {
      return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    },
  });
}

export function useAuthSignInWithPopup(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    UserCredential,
    AuthError,
    { provider: AuthProvider; resolver?: PopupRedirectResolver }
  >
): UseMutationResult<
  UserCredential,
  AuthError,
  { provider: AuthProvider; resolver?: PopupRedirectResolver }
> {
  return useMutation<
    UserCredential,
    AuthError,
    { provider: AuthProvider; resolver?: PopupRedirectResolver }
  >({
    ...useMutationOptions,
    mutationFn: ({ provider, resolver }) => {
      return signInWithPopup(auth, provider, resolver);
    },
  });
}

export function useAuthSignInWithRedirect(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<
    never,
    AuthError,
    { provider: AuthProvider; resolver?: PopupRedirectResolver }
  >
): UseMutationResult<
  never,
  AuthError,
  { provider: AuthProvider; resolver?: PopupRedirectResolver }
> {
  return useMutation<
    never,
    AuthError,
    { provider: AuthProvider; resolver?: PopupRedirectResolver }
  >({
    ...useMutationOptions,
    mutationFn: ({ provider, resolver }) => {
      return signInWithRedirect(auth, provider, resolver);
    },
  });
}

export function useAuthSignOut(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<void, AuthError, void>
): UseMutationResult<void, AuthError, void> {
  return useMutation<void, AuthError, void>({
    ...useMutationOptions,
    mutationFn: () => {
      return signOut(auth);
    },
  });
}

export function useAuthUnlink(
  useMutationOptions?: UseMutationOptions<
    User,
    AuthError,
    { user: User; providerId: string }
  >
): UseMutationResult<User, AuthError, { user: User; providerId: string }> {
  return useMutation<User, AuthError, { user: User; providerId: string }>({
    ...useMutationOptions,
    mutationFn: ({ user, providerId }) => {
      return unlink(user, providerId);
    },
  });
}

export function useAuthUpdateCurrentUser(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<void, AuthError, User | null>
): UseMutationResult<void, AuthError, User | null> {
  return useMutation<void, AuthError, User | null>({
    ...useMutationOptions,
    mutationFn: (user) => {
      return updateCurrentUser(auth, user);
    },
  });
}

export function useAuthUpdateEmail(
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { user: User; newEmail: string }
  >
): UseMutationResult<void, AuthError, { user: User; newEmail: string }> {
  return useMutation<void, AuthError, { user: User; newEmail: string }>({
    ...useMutationOptions,
    mutationFn: ({ user, newEmail }) => {
      return updateEmail(user, newEmail);
    },
  });
}

export function useAuthUpdatePassword(
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { user: User; newPassword: string }
  >
): UseMutationResult<void, AuthError, { user: User; newPassword: string }> {
  return useMutation<void, AuthError, { user: User; newPassword: string }>({
    ...useMutationOptions,
    mutationFn: ({ user, newPassword }) => {
      return updatePassword(user, newPassword);
    },
  });
}

export function useAuthUpdatePhoneNumber(
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { user: User; credential: PhoneAuthCredential }
  >
): UseMutationResult<
  void,
  AuthError,
  { user: User; credential: PhoneAuthCredential }
> {
  return useMutation<
    void,
    AuthError,
    { user: User; credential: PhoneAuthCredential }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, credential }) => {
      return updatePhoneNumber(user, credential);
    },
  });
}

export function useAuthUpdateProfile(
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { user: User; displayName?: string | null; photoURL?: string | null }
  >
): UseMutationResult<
  void,
  AuthError,
  { user: User; displayName?: string | null; photoURL?: string | null }
> {
  return useMutation<
    void,
    AuthError,
    { user: User; displayName?: string | null; photoURL?: string | null }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, ...update }) => {
      return updateProfile(user, update);
    },
  });
}

export function useAuthVerifyBeforeUpdateEmail(
  useMutationOptions?: UseMutationOptions<
    void,
    AuthError,
    { user: User; newEmail: string; actionCodeSettings?: ActionCodeSettings }
  >
): UseMutationResult<
  void,
  AuthError,
  { user: User; newEmail: string; actionCodeSettings?: ActionCodeSettings }
> {
  return useMutation<
    void,
    AuthError,
    { user: User; newEmail: string; actionCodeSettings?: ActionCodeSettings }
  >({
    ...useMutationOptions,
    mutationFn: ({ user, newEmail, actionCodeSettings }) => {
      return verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings);
    },
  });
}

export function useAuthVerifyPasswordResetCode(
  auth: Auth,
  useMutationOptions?: UseMutationOptions<string, AuthError, string>
): UseMutationResult<string, AuthError, string> {
  return useMutation<string, AuthError, string>({
    ...useMutationOptions,
    mutationFn: (code) => {
      return verifyPasswordResetCode(auth, code);
    },
  });
}
