export const getKeyValue = <T extends object, K extends keyof T>(obj: T, key: K): T[K] => obj[key];
