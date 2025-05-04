import { useRef, useCallback, useEffect } from 'react';

type Timeout = ReturnType<typeof setTimeout>;
/**
 * A custom hook that returns a debounced version of the provided function
 * @param callback The function to debounce
 * @param delay The delay in milliseconds
 * @returns A debounced version of the callback
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const timerRef = useRef<Timeout | null>(null);

  // Clear the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Return the debounced function
  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
     const timeout = setTimeout(() => {},200)
      timerRef.current = setTimeout(() => {
        try {
          callback(...args);
        } catch (error) {
          console.error("Error in debounced function:", error);
        }
      }, delay);
    },
    [callback, delay]
  );
}
