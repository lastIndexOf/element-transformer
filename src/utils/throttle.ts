type throttleCallback = (...args: any[]) => void;

export const throttle = (
  fn: throttleCallback,
  millisecond: number
): throttleCallback => {
  let later = Date.now();

  return (...args) => {
    if (later + millisecond - Date.now() < 0) {
      fn(...args);
      later = Date.now();
    }
  };
};
