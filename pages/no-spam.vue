<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
-->
  <div class="relative py-16 bg-gray-800 overflow-hidden min-h-screen">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span
            class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl"
            >No spam policy</span
          >
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">
          The rm -rf Chronicles has no interest in the spam or unsolicited
          commercial emails to their subscribers. All email addresses of
          subscribers are stored by a certified third-party service provider.
          Subscribers’ information has not and will not be sold or rented to
          other third parties. Unsubscribe links are noticeable and displayed in
          the footer of every newsletter issue.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <nuxt-link to="/">
            <button
              type="button"
              class="flex px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-700 focus:ring-white sm:w-auto sm:flex-shrink-0"
            >
              Back
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
