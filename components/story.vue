<template>
  <a
    :href="story.link"
    target="_blank"
    class="relative group bg-gray-700 sm:shadow-md lg:shadow-xl p-4 rounded-md border border-transparent hover:border-gray-500 transition duration-500 ease-in-out transform hover:scale-101"
  >
    <div
      class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gray-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <path
          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        ></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </div>

    <div class="block mt-4">
      <p class="text-xl font-semibold text-gray-300">
        {{ story.title }}
      </p>

      <p class="mt-3 text-base text-gray-400">
        {{ story.summary }}
      </p>
    </div>

    <div class="my-6 flex items-center">
      <div class="flex-shrink-0">
        <div href="#">
          <span class="sr-only">{{ story.author }}</span>
          <img
            class="h-10 w-10 rounded-full"
            :src="story.image.fields.file.url"
            alt=""
          />
        </div>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900"></p>
        {{ story.author }}

        <div class="flex space-x-1 text-sm text-gray-500">
          <time :datetime="story.date">
            {{
              new Date(story.date).toLocaleDateString('en', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </time>
        </div>
      </div>
    </div>
    <div>
      <span
        v-for="(tag, idx) in story.tags"
        :key="idx"
        class="inline-flex items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium bg-pink-200 text-pink-800"
      >
        {{ tag }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
}
</script>
