import { ref, computed } from "vue";

export function usePassword() {
    const password = ref("");
    const confirmPassword = ref("");
    const error = ref("");

    const minPasswordLength = 2;
    const maxPasswordLength = 20;

    const matches = computed(() => password.value === confirmPassword.value);

    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers = "0123456789".split("");
    const allCharacters = [
        ...letters,
        ...numbers,
    ];

    function generatePassword(length = 12) {
        if (length < minPasswordLength || length > maxPasswordLength) {
            error.value = `Le mot de passe doit contenir entre ${minPasswordLength} et ${maxPasswordLength} caractères.`;
            return;
        }
        error.value = "";
        let pass = "";
        for (let i = 0; i < length; i++) {
            pass +=
                allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        password.value = pass;
        confirmPassword.value = pass;
    }

    function validate() {
      if (
        password.value.length < minPasswordLength ||
        password.value.length > maxPasswordLength
      ) {
        error.value = `Le mot de passe doit contenir entre ${minPasswordLength} et ${maxPasswordLength} caractères.`;
        return false;
      }
      if (password.value !== confirmPassword.value) {
        error.value = "Les mots de passe ne correspondent pas.";
        return false;
      }  
  
      // Vérifier si le mot de passe contient au moins un chiffre
      if (!/\d/.test(password.value)) {
        error.value = "Le mot de passe doit contenir au moins un chiffre";
        return false;
      }
  
      // Vérifier si le mot de passe contient au moins une majuscule
      if (!/[A-Z]/.test(password.value)) {
        error.value = "Le mot de passe doit contenir au moins une majuscule";
        return false;
      }
  
      // Vérifier si le mot de passe contient au moins un symbole
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        error.value = "Le mot de passe doit contenir au moins un symbole";
        return false;
      }
     
      error.value = ""; // Effacer les erreurs si tout est valide
      return true;
    }

    return {
        password,
        confirmPassword,
        error,
        matches,
        generatePassword,
        validate,
        minPasswordLength,
        maxPasswordLength,
    };
}
