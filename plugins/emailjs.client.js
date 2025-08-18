import emailjs from "@emailjs/browser";

export default defineNuxtPlugin(() => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init(
        // import.meta.env.public.NUXT_PUBLIC_PUBLIC_KEY
    );

    return {
        provide: {
            emailjs,
        },
    };
});
