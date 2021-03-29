export function assertUnreachable(val: never): never {
  throw new Error(`Value ${val} should never exists!`);
}
