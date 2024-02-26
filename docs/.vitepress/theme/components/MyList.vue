<script setup lang="ts">
const props = defineProps<{
  item1: string; 
  item2: string; 
}>();
</script>

<template>
  <n-list>
    <n-list-item> {{props.item1}} </n-list-item>
    <n-list-item> {{props.item2}} </n-list-item>
  </n-list>
</template>
