<script setup>
import { useCycleList } from './useCycleList';

const {next, current, prev} = useCycleList()
</script>
<template>
  <div>
    <button @click="prev">Prev</button>
    <div>{{ current }}</div>
    <button @click="next">Next</button>
  </div>
</template>
