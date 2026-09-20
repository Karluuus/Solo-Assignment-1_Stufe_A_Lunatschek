import { ref, computed } from 'vue'

export function counterLogic() {
  const count = ref(0)

  const doubled = computed(() => count.value * 2)

  function increase() {
    count.value++
  }

  function decrease() {
    count.value--
  }

  return {
    count,
    doubled,
    increase,
    decrease
  }
}