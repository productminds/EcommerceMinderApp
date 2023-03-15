import {BadParametersException} from './exceptions/bad-parameters.exception';
import {InternalException} from './exceptions/internal.exception';
interface RequestProps {
  method: 'GET' | 'POST';
  body?: Record<string, unknown>;
}

const errorMapper: Record<
  number,
  typeof InternalException | typeof BadParametersException
> = {
  400: BadParametersException,
  500: InternalException,
};

export async function request<T>(
  uri: string,
  {body: data, method}: RequestProps,
): Promise<T> {
  const response = await fetch(uri, {body: JSON.stringify(data), method});

  if (!response.ok) {
    const errorToThrow = errorMapper[response.status] ?? InternalException;

    throw new errorToThrow(await response.json(), {
      trace: request.caller,
      status: response.status,
    });
  }

  const result = await response.json();
  return result as T;
}
