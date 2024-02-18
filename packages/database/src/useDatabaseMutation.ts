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
  DatabaseReference,
  remove,
  runTransaction,
  set,
  setWithPriority,
  TransactionOptions,
  TransactionResult,
  update,
} from "@firebase/database";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

export type UseDatabaseSetMutationOptions = {
  priority?: string | number | null;
};

export function useDatabaseSetMutation<T = unknown>(
  ref: DatabaseReference,
  options?: UseDatabaseSetMutationOptions,
  useMutationOptions?: UseMutationOptions<void, Error, T>
): UseMutationResult<void, Error, T> {
  return useMutation<void, Error, T>({
    ...useMutationOptions,
    mutationFn: (value) => {
      if (options?.priority !== undefined) {
        return setWithPriority(ref, value, options.priority);
      }

      return set(ref, value);
    },
  });
}

type UpdateValues = Record<string, unknown>;

export function useDatabaseUpdateMutation<
  T extends UpdateValues = UpdateValues
>(
  ref: DatabaseReference,
  useMutationOptions?: UseMutationOptions<void, Error, T>
): UseMutationResult<void, Error, T> {
  return useMutation<void, Error, T>({
    ...useMutationOptions,
    mutationFn: (values) => {
      return update(ref, values);
    },
  });
}

export function useDatabaseRemoveMutation(
  ref: DatabaseReference,
  useMutationOptions?: UseMutationOptions<void, Error, void>
): UseMutationResult<void, Error, void> {
  return useMutation<void, Error, void>({
    ...useMutationOptions,
    mutationFn: () => {
      return remove(ref);
    },
  });
}

export function useDatabaseTransaction<T = any>(
  ref: DatabaseReference,
  transactionUpdate: (currentData: T | null) => unknown,
  options?: TransactionOptions,
  useMutationOptions?: UseMutationOptions<TransactionResult, Error, void>
): UseMutationResult<TransactionResult, Error, void> {
  return useMutation<TransactionResult, Error, void>({
    ...useMutationOptions,
    mutationFn: () => {
      return runTransaction(ref, transactionUpdate, options);
    },
  });
}
