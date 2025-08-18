<template>
<div class="min-h-screen py-8 bg-white flex flex-col">
    <header class="bg-[#020C69] text-[#F5F5F5] text-center py-6">
      <h1 class="text-4xl font-bold">Contact</h1>
    </header>
    <section class="text-center py-12 px-4 flex-grow">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn"
      >
        <div
        class="p-4 shadow-lg hover:text-[#222222] text-[#F5F5F5] hover:border-b-1 bg-[#020C69] hover:bg-[#F5F5F5] transition-colors">
        <a href="phone: 0781969288">
        <h3 class="text-xl font-bold">Téléphone</h3>
          <p class="mt-2">
            07 81 96 92 88
          </p>
        </a>
        </div>
        <div
          class="p-4 shadow-lg hover:text-[#222222] text-[#F5F5F5] hover:border-b-1 bg-[#020C69] hover:bg-[#F5F5F5] transition-colors"
        >
          <a href="mailto:chafiaadssi42@gmail.com">
            <h3 class="text-xl font-bold">Email</h3>
            <p class="mt-2">chafiaadssi42@gmail.com</p>
          </a>
        </div>
        <div
          class="p-4 shadow-lg hover:text-[#222222] text-[#F5F5F5] hover:border-b-1 bg-[#020C69] hover:bg-[#F5F5F5] transition-colors">
        <p class="mt-2">
          <h3 class="text-xl font-bold">Adresse</h3>
            42100 Saint-Etienne, France
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-12 px-4 flex-grow">
      <h2 class="text-2xl font-bold text-center">Envoyer moi un message</h2>
      <form @submit.prevent="sendEmail" class="max-w-2xl mx-auto mt-8 space-y-8">
        <div>
          <label htmlFor="name"
          class="block text-gray-700 font-bold"
            >Nom</label
          >
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />
        </div>
        <div>
          <label htmlFor="email" class="block text-gray-700 font-bold"
            >Email</label
          >
          <input
      v-model="formData.email"

            type="email"
            id="email"
            class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />
        </div>
        <div>
          <label htmlFor="message" class="block text-gray-700 font-bold"
            >Message</label
          >
          <textarea
            required
            id="message"
            rows="5"
            class="w-full mt-2 p-3 border rounded-lg"
      v-model="formData.message"

          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-[#020C69] text-[#F5F5F5] py-3 rounded-lg shadow-lg transition-colors"
        >
          Envoyer le message
        </button>
      </form>
    </section>
  </div>
</template>
<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  mounted() {
    // Initialiser EmailJS avec votre clé publique (optionnel si vous la passez à .send, mais recommandé)
    try {
      emailjs.init('jasQm8hoWr2Q8PN83')
    } catch (e) {
      // ignore init errors silently
    }
  },
  methods: {
    sendEmail() {
      const params = {
        // Variables fréquentes dans EmailJS — on envoie plusieurs alias pour correspondre à votre template
        from_name: this.formData.name,
        user_name: this.formData.name,
        from_email: this.formData.email,
        user_email: this.formData.email,
        reply_to: this.formData.email,
        message: this.formData.message,
      }

      emailjs
        .send(
          'service_ltv056g',
          'template_ufc457k',
          params,
          'jasQm8hoWr2Q8PN83'
        )
        .then(
          (response) => {
            console.log('Succès', response.status, response.text)
            alert('Email envoyé avec succès !')
          },
          (error) => {
            console.error('Échec...', error)
            alert("Échec de l'envoi de l'email. Veuillez réessayer.")
          }
        )
    },
  },
}
</script>
