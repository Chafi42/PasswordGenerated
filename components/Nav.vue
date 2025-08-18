<template>
  <header
    class="z-30 mx-auto w-full max-w-screen-md bg-transparent py-3 lg:max-w-screen-lg relative inset-0"
  >
    <div class="px-4">
      <div class="flex items-center justify-between">
        <div class="flex shrink-0">
          <NuxtLink to="/" class="flex items-center" href="/">
            <img
              to="/"
              class="h-7 w-auto"
              src="../assets/images/chafi.png"
              alt=""
            />
            <p class="sr-only">Website Title</p>
          </NuxtLink>
        </div>
        <div class="md:flex md:items-center md:justify-center md:gap-5">
          <NuxtLink
            to="/"
            class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-[#222222] transition-all duration-200 hover:bg-gray-100 hover:text-[#222222]"
          >
            Accueil
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-[#222222] transition-all duration-200 hover:bg-gray-100 hover:text-[#222222]"
          >
            Contact
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2 justify-end">
          <NuxtLink
            to="https://www.linkedin.com/in/chafi-aad-5838431a6/"
            class="items-center justify-center bg-transparent px-1 sm:inline-flex hover:border-b-2 py-1 hover:border-[#020C69]"
          >
            <img
              class="h-5 w-auto"
              src="../assets/images/linkedin.png"
              alt="LinkedIn"
            />
          </NuxtLink>

          <NuxtLink
            to="https://portfolio-chafi.netlify.app/"
            class="items-center justify-center bg-transparent px-1 sm:inline-flex hover:border-b-2 py-1 hover:border-[#020C69]"
          >
            <img
              class="h-5 w-auto"
              src="../assets/images/dossier-portfolio.png"
              alt="LinkedIn"
            />
          </NuxtLink>

          <NuxtLink
            to="https://www.linkedin.com/in/chafi-aad-5838431a6/"
            class="items-center justify-center bg-transparent px-1 sm:inline-flex hover:border-b-2 py-1 hover:border-[#020C69]"
          >
            <img
              class="h-5 w-auto"
              src="../assets/images/github.png"
              alt="LinkedIn"
            />
          </NuxtLink>
        </div>
      
      </div>
    </div>
  </header>
  <div class="border-b-1 mt-4 w-full border-[#020C69]"></div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      // Add any reactive data here if needed
    }
  },
  methods: {
    // Add any methods here if needed
  },
}
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
