import React from 'react'
import DashboardLayout from './DashboardLayout'
import Dashboard from './Dashboard'

export default function AdminIndex ()  {
  return (
<section className=''>
    <DashboardLayout>
        <Dashboard  />
    </DashboardLayout>
</section>
  )
}

