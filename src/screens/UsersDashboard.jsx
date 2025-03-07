import React from 'react'
import SmoothScroll from '../constants/utils/SmoothScroll'
import AuthIndex from '../components/pages/auth'
import Meta from '../components/common/Meta'


export default function UsersDashboard() {
    return (
        <div>
            <SmoothScroll>
                <Meta />
    <AuthIndex  />
            </SmoothScroll>
         
    
        </div>
      )
}