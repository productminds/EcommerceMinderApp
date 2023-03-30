export function deduplicate<T>(array: T[], key: keyof T): T[] {
  const temporary = array.reduce((acc, cur) => {
    const value = cur[key] as keyof T;

    if (!acc[value]) {
      acc[value] = cur;
    }

    return acc;
  }, {} as Record<keyof T, T>);

  const ar = Object.keys(temporary).reduce((acc, obj) => {
    if (acc.indexOf(JSON.stringify(obj)) < 0) {
      acc.push(obj);
    }

    return acc;
  }, [] as string[]);

  return ar.map(val => temporary[val as keyof T]);
}
