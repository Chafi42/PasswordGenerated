<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Contactez-nous</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
          Nom complet *
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Votre nom complet"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
          Sujet *
        </label>
        <input
          id="subject"
          v-model="formData.subject"
          type="text"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Sujet de votre message"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Votre message..."
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span v-if="isLoading" class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Envoi en cours...
        </span>
        <span v-else>Envoyer le message</span>
      </button>
    </form>

    <!-- Messages de succès/erreur -->
    <div v-if="success" class="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
      {{ successMessage }}
    </div>

    <div v-if="error" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
const { $emailjs } = useNuxtApp();
const { isLoading, error, success, sendEmail, resetState } = useEmailJS();

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const successMessage = ref('');

const handleSubmit = async () => {
  // Préparer les paramètres pour EmailJS
  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    subject: formData.value.subject,
    message: formData.value.message,
    to_name: 'Chafi AADSSI' // Nom du destinataire
  };

  const result = await sendEmail(templateParams);
  
  if (result.success) {
    successMessage.value = result.message;
    // Réinitialiser le formulaire
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    // Réinitialiser l'état après 5 secondes
    setTimeout(() => {
      resetState();
    }, 5000);
  }
};

// Réinitialiser l'état au montage du composant
onMounted(() => {
  resetState();
});
</script>
