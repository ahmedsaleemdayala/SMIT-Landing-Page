import React from 'react'

const StatsSection = () => {
  return (
    <section className='bg-linear-to-r from-[#1F7FA3] via-[#4FA69A] to-[#8BC34A] py-12'>
      <div className='mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-3xl  p-6 text-center'>
          <h2 className='text-4xl font-bold text-white sm:text-5xl'>200,000+</h2>
          <p className='mt-2 text-sm font-semibold uppercase tracking-wide text-white'>Student Trained</p>
        </div>
        <div className='rounded-3xl  p-6 text-center'>
          <h2 className='text-4xl font-bold text-white sm:text-5xl'>400+</h2>
          <p className='mt-2 text-sm font-semibold uppercase tracking-wide text-white'>Trainer</p>
        </div>
        <div className='rounded-3xl  p-6 text-center'>
          <h2 className='text-4xl font-bold text-white sm:text-5xl'>70%</h2>
          <p className='mt-2 text-sm font-semibold uppercase tracking-wide text-white'>Employment Success</p>
        </div>
        <div className='rounded-3xl  p-6 text-center'>
          <h2 className='text-4xl font-bold text-white sm:text-5xl'>150+</h2>
          <p className='mt-2 text-sm font-semibold uppercase tracking-wide text-white'>Startup Launched</p>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
