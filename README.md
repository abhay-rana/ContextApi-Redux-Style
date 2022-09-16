## React ContextApi-> multiple store, prevent re-renderings, good code structure

View,Action,Reducers,
multiple context,
performance optimizations by the unnecessary re-rendeings by memoization


* created multiple context one is store_context and another one is theme_context
* so by making the multiple context it will help in performance by less re-renderings
* if there is no change in the theme_context store so its useContext(theme_context) will not fire same goes for the store_context store
* theme_context store is small so we make it by useState
* store_context store is big so i make it by the reducer
* main focus is to use it like the redux my means by it state-flows screen->dispatch a action -> change store -> fire useContext -> re-render the component
* we are memoize the jsx part also by the useMemo hook for the saving from unnecessary re-renderings
* no use of memoize the component as the props are not changing useContext fire and component re-renders it can be stop by the memo the return part of the component
* we have memoized the component because we are only changing the state by dispatch and not using the updated state in the component and we dont wanted the render part run for that component
* theme provider and a store provider