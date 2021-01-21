<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-800 overflow-hidden">
    <div class="relative pt-6 pb-12 sm:pb-20">
      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            <span class="">The</span>
            <span class="css-gnissy">rm -rf</span
            ><span class=""> chronicles</span>
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            <span class="block"
              >Friday night outages, elusive bugs, deleted backups, cluster
              failures...</span
            >Get <b>crazy dev stories</b> in your inbox twice a month 😱
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0">
              <form class="sm:flex">
                <label for="emailAddress" class="sr-only">Email address</label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  autocomplete="email"
                  required
                  class="w-full border-gray-200 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p class="mt-2 text-xs text-gray-400">
                If in doubt, check the
                <nuxt-link class="underline" to="/no-spam"
                  >absolutely-no-spam</nuxt-link
                >
                policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  policy: 'https://www.fbamonthly.com/nospam/',
}
</script>

<style></style>
