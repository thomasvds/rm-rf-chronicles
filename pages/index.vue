<template>
  <div>
    <AppHeader />
    <Database :stories="stories" />
  </div>
</template>

<script>
import { createClient } from 'contentful'
import AppHeader from './index/app-header.vue'
import Database from './index/database.vue'

const config = {
  space: 'fe97ku72az5m',
  accessToken: 'ocur1S1aguNdUB8Ytw2lcYYlyNlw-UOVDQ_FrkubAfU',
}

async function getStories() {
  const client = createClient(config)
  const response = await client.getEntries({
    content_type: 'story',
    order: '-fields.date',
  })
  return response.items
}

export default {
  components: { AppHeader, Database },
  async asyncData() {
    const stories = await getStories()
    return { stories }
  },
}
</script>

<style></style>
