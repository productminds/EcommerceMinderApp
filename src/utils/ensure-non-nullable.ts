import {InternalException} from './exceptions/internal.exception';

export function ensureNonNullable<T>(data?: T): T {
  if (!data || data === undefined || data === null) {
    const [varName] = Object.keys({data});

    throw new InternalException(
      `The value null or undefined for ${varName} is not acceptable`,
    );
  }

  return data;
}
