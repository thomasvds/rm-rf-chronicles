<template>
  <div>
    <AppHeader />
    <Database />
  </div>
</template>

<script>
import AppHeader from './index/app-header.vue'
import Database from './index/database.vue'

export default {
  components: { AppHeader, Database },
}
</script>

<style></style>
