import React from 'react'
import Preloader from '../components/common/Preloader/Preloader'

export function withSuspense<WCP extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return <React.Suspense fallback={ <Preloader/> }>
      <WrappedComponent { ...props } />
    </React.Suspense>
  }
}

export default withSuspense
