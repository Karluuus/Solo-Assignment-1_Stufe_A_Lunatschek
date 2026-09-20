<script setup lang="ts">
import { counterLogic } from '../composables/counterLogic'
import '../assets/counter.css'

const counter = counterLogic()
</script>

<template>
  <div class="counter">
    <h1>Counter</h1>

    <p>Zählerstand: {{ counter.count }}</p>
    <p>Doppelt: {{ counter.doubled }}</p>

    <button @click="counter.increase">+1</button>
    <button @click="counter.decrease">-1</button>
  </div>
</template>