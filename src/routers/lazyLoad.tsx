import { LazyExoticComponent, Suspense } from 'react'
import Spinner from '@/compoments/spinner/index'

const lazyLoad = (Comp: LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Comp />
    </Suspense>
  )
}

export default lazyLoad
