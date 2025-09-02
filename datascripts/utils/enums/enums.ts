export function getEnumKeysAndValues<T extends Record<string, any>>(e: T) {
  const keys: (keyof T)[] = [];
  const values: number[] = [];
  for (const curr of Object.values(e)) {
    if (typeof curr === "number") {
      values.push(curr);
    } else {
      keys.push(curr);
    }
  }
  return { keys, values };
}
