import React from 'react'
import SmoothScroll from '../constants/utils/SmoothScroll'
import AuthIndex from '../components/auth'
import Meta from '../components/common/Meta'

const Auth = () => {
  return (
    <div>


        <SmoothScroll>
            <Meta />
<AuthIndex  />
        </SmoothScroll>
     

    </div>
  )
}

export default Auth