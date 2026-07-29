 import React from 'react'

const NewLetter = () => {
  return (
    <section className="w-full px-4 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl rounded-[30px] bg-white/90 px-5 py-10 shadow-lg shadow-slate-200/70 sm:px-8 sm:py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Never Miss a Deal!
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Subscribe to get the latest offers, new arrivals, and exclusive discounts
          </p>
        </div>

        <form className="mt-10 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <input
            type="email"
            placeholder="Enter your email id"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-100 sm:flex-1"
          />
          <button
            type="submit"
            className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-500 px-6 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:px-8"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewLetter