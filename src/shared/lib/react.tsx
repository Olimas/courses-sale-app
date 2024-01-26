import {
  Context,
  createContext,
  useContext,
  startTransition,
  useEffect,
  useState,
  ReactNode,
  Children,
  isValidElement,
  createElement,
  useMemo,
  useRef,
} from 'react'

/* To create convenient contexts without a default value */
export function useStrictContext<T>(context: Context<T | null>) {
  const value = useContext(context)
  if (value === null) throw new Error('Strict context not passed')
  return value as T
}

export function createStrictContext<T>() {
  return createContext<T | null>(null)
}

/* To display the loader only after 500 ms */
export function useAppearanceDelay(
  show?: boolean,
  options = {} as {
    defaultValue?: boolean
    appearenceDelay?: number
    minDisplay?: number
  },
) {
  const {
    minDisplay = 500,
    defaultValue = false,
    appearenceDelay = 500,
  } = options

  const [delayedShow, setDelayedShow] = useState(defaultValue)

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(true))
      }, appearenceDelay)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(false))
      }, minDisplay)
      return () => clearTimeout(timer)
    }
  }, [appearenceDelay, show, minDisplay])

  return delayedShow
}

/* Makes a flat structure (to beautifully display a lot of context) */
export function ComposeChildren({ children }: { children: ReactNode }) {
  const array = Children.toArray(children)
  const last = array.pop()
  return (
    <>
      {array.reduceRight(
        (child, element) =>
          isValidElement(element)
            ? createElement(element.type, element.props, child)
            : child,
        last,
      )}
    </>
  )
}

type Fn<ARGS extends any[], R> = (...args: ARGS) => R

/*
  To avoid the need to pass the function as a dependency in the useEffect, to call the rerender
  (fewer unnecessary useСallbacks)
 */
export function useEventCallback<A extends any[], R>(fn: Fn<A, R>): Fn<A, R> {
  const ref = useRef<Fn<A, R>>(fn)
  useEffect(() => {
    ref.current = fn
  })
  return useMemo(
    () =>
      (...args: A): R => {
        const { current } = ref
        return current(...args)
      },
    [],
  )
}
