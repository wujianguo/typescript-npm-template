export function add(a: number, b: number): number {
  return a + b;
}

export async function asyncAdd(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}
