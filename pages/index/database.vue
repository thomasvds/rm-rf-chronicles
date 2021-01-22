<template>
  <div class="bg-gray-800 pt-10 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <form class="flex lg:ml-0 bg-gray-800" action="#" method="GET">
        <label for="search_field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400">
          <div
            class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
          >
            <svg
              class="h-6 w-6 md:h-8 md:w-8"
              x-description="Heroicon name: search"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            id="search_field"
            class="bg-gray-800 block w-full h-full md:pl-12 pl-8 pr-3 py-2 border-transparent text-gray-400 placeholder-gray-400 focus:outline-none focus:placeholder-gray-600 focus:ring-0 focus:border-transparent sm:text-sm lg:text-xl"
            placeholder="Search through 100+ dev stories..."
            type="search"
            name="search"
          />
        </div>
      </form>
      <div class="mt-6 grid gap-y-5 gap-5 pt-12 lg:grid-cols-3 lg:gap-10">
        <Story
          v-for="(story, idx) in stories"
          :key="idx"
          :story="story.fields"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Story from '@/components/story'

export default {
  components: {
    Story,
  },
  props: {
    stories: {
      type: Array,
      required: true,
    },
  },
}
</script>
