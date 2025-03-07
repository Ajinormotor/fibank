import React from 'react'
import SmoothScroll from '../constants/utils/SmoothScroll'
import AuthIndex from '../components/pages/auth'
import Meta from '../components/common/Meta'
import AdminIndex from '../components/pages/admin'


export default function AdminDashboard() {
    return (
        <div>
    
    
            <SmoothScroll>
                <Meta />
<AdminIndex  />
            </SmoothScroll>
         
    
        </div>
      )
}