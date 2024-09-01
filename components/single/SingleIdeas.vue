<template>
  <div class="ideas">
    <div class="container">
      <div class="ideas_main">
        <h2>Идеи для дома</h2>
        <ul class="ideas_grid">
          <li class="ideas_item" v-for="(item, i) in gallery" :key="'gallery-item-' + i">
            <a :href="item">
              <img :src="item" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  gallery: any;
}>();
</script>

<style scoped lang="scss"></style>
