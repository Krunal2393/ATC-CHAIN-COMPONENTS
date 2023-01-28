import React from 'react'
import SubProducts from './SubProduct'

import { useStateContext } from './api/auth/Context/ContextProvider'

const SubProd = props => {
  // const { showHeader } = useStateContext()
  return (
    <div>
      <SubProducts showHeader={true} name='hii' bgColor='red' />
    </div>
  )
}

export default SubProd
