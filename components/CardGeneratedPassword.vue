<script setup>
import { usePassword } from '@/composables/usePassword' // ou "~/composables/  usePassword"

const {
  password,
  confirmPassword,
  error,
  matches,
  generatePassword,
  validate,
} = usePassword()

function onSubmit() {
  if (validate()) alert('Mot de passe validé ✅')
}
</script>

<template>
  <div class="login-box">
    <h2>Créer un mot de passe</h2>

    <form @submit.prevent="onSubmit">
      <div class="user-box">
        <input type="password" v-model="password" />
        <label>Mot de passe</label>
      </div>

      <div class="user-box">
        <input type="password" v-model="confirmPassword" />
        <label>Confirmer le mot de passe</label>
      </div>

      <p v-if="error" class="text-red-400 text-sm mb-2">{{ error }}</p>
      <button type="submit" class="w-full">Confirmation <span></span></button>
      <button type="button" class="w-full mt-2" @click="generatePassword()">
        Générer un mot de passe <span></span>
      </button>
    </form>
  </div>
</template>

<style>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #f5f5f5;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  font-weight: 700;
  font-size: 1.2 rem;
  color: #222222;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #222222;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #020c69;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #222222;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #020c69;
  font-size: 13px;
  font-weight: 600;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

button {
  border: none;
  display: block;
  position: relative;
  padding: 0.7em 2.4em;
  font-size: 18px;
  background: #f5f5f5;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: #222222;
  z-index: 1;
  font-family: inherit;
  font-weight: 500;
}

button span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 4px solid royalblue;
}

button span::before {
  content: '';
  display: block;
  position: absolute;
  width: 8%;
  height: 500%;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-60deg);
  transition: all 0.3s;
}

button:hover span::before {
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 100%;
  background: #222222;
}

button:hover {
  color: #f5f5f5;
  background: #222222;
}

button:active span::before {
  background: #f5f5f5;
}
</style>
