import { ref } from "vue";
import emailjs from "@emailjs/browser";

export const useEmailJS = () => {
    const isLoading = ref(false);
    const error = ref(null);
    const success = ref(false);

    const sendEmail = async (templateParams) => {
        const config = useRuntimeConfig();

        try {
            isLoading.value = true;
            error.value = null;
            success.value = false;

            const result = await emailjs.send(
                config.public.emailjsServiceId,
                config.public.emailjsTemplateId,
                templateParams,
                config.public.emailjsPublicKey
            );

            if (result.status === 200) {
                success.value = true;
                return { success: true, message: "Email envoyé avec succès !" };
            } else {
                throw new Error("Erreur lors de l'envoi de l'email");
            }
        } catch (err) {
            error.value = err.message || "Une erreur est survenue";
            return { success: false, message: error.value };
        } finally {
            isLoading.value = false;
        }
    };

    const resetState = () => {
        isLoading.value = false;
        error.value = null;
        success.value = false;
    };

    return {
        isLoading,
        error,
        success,
        sendEmail,
        resetState,
    };
};
