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
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Firestore,
  FirestoreError,
  SetOptions,
  Transaction,
  WithFieldValue,
  WriteBatch,
  addDoc,
  deleteDoc,
  runTransaction,
  setDoc,
} from "firebase/firestore";

export function useFirestoreCollectionMutation<T = DocumentData>(
  ref: CollectionReference<T>,
  useMutationOptions?: UseMutationOptions<
    DocumentReference<T>,
    FirestoreError,
    WithFieldValue<T>
  >
): UseMutationResult<DocumentReference<T>, FirestoreError, WithFieldValue<T>> {
  return useMutation<DocumentReference<T>, FirestoreError, WithFieldValue<T>>({
    ...useMutationOptions,
    mutationFn: (data) => {
      return addDoc<T>(ref, data);
    },
  });
}

export function useFirestoreDocumentMutation<T = DocumentData>(
  ref: DocumentReference<T>,
  options?: SetOptions,
  useMutationOptions?: UseMutationOptions<
    void,
    FirestoreError,
    WithFieldValue<T>
  >
): UseMutationResult<void, FirestoreError, WithFieldValue<T>> {
  return useMutation<void, FirestoreError, WithFieldValue<T>>({
    ...useMutationOptions,
    mutationFn: (data) => {
      if (options) {
        return setDoc<T>(ref, data, options);
      }

      return setDoc<T>(ref, data);
    },
  });
}

export function useFirestoreDocumentDeletion(
  ref: DocumentReference,
  useMutationOptions?: UseMutationOptions<void, FirestoreError, void>
): UseMutationResult<void, FirestoreError, void> {
  return useMutation<void, FirestoreError, void>({
    ...useMutationOptions,
    mutationFn: () => {
      return deleteDoc(ref);
    },
  });
}

export function useFirestoreTransaction<T = void>(
  firestore: Firestore,
  updateFunction: (tsx: Transaction) => Promise<T>,
  useMutationOptions?: UseMutationOptions<T, FirestoreError, void>
): UseMutationResult<T, FirestoreError, void> {
  return useMutation<T, FirestoreError, void>({
    ...useMutationOptions,
    mutationFn: () => {
      return runTransaction<T>(firestore, updateFunction);
    },
  });
}

export function useFirestoreWriteBatch(
  batch: WriteBatch,
  useMutationOptions?: UseMutationOptions<void, FirestoreError, void>
): UseMutationResult<void, FirestoreError, void> {
  return useMutation<void, FirestoreError, void>({
    ...useMutationOptions,
    mutationFn: () => {
      return batch.commit();
    },
  });
}
