<template>
  <div class="px-4 py-4">
    <icon name="ChevronLeft" size="32" class="-ml-4 mb-4" />
    <div class="space-y-2">
      <h1 class="text-lg tracking-tight font-bold">Welcome back!</h1>
      <p class="mb-2 text-sm text-left text-slate-600 tracking-tight">
        Enter your email address and passsword to login into your account
      </p>
    </div>
    <div class="py-6 divide-y space-y-8">
      <form @submit.prevent="login" class="flex flex-col text-xs space-y-8">
        <base-input
          label="User Email"
          type="email"
          placeholder="JeffBezzos@amazon.com"
          v-model="userEmail"
        />
        <div
          v-if="error"
          class="flex justify-between items-center rounded-lg border border-red-500 bg-red-100 text-red-500 text-sm px-6 py-4"
        >
          <icon name="AlertCircle" color="red" />
          <p class="font-bold">Invalid username or password</p>
          <icon name="X" color="red" size="16" />
        </div>
        <p class="font-light tracking-tight">
          By contnuing, you accept our
          <a href="#" target="_blank"
            ><span
              class="font-semibold text-slate-400 hover:underline hover:text-slate-900"
              >Terms of use</span
            ></a
          >
          and
          <a href="#" target="_blank"
            ><span
              class="font-semibold text-slate-400 hover:underline hover:text-slate-900"
              >Privacy policy</span
            ></a
          >
        </p>
        <base-button button-type="submit">
          <icon
            v-if="sendingMagicLink === true"
            name="Loader"
            class="animate-spin"
            size="32"
          />
          <span v-else>Continue</span>
        </base-button>
      </form>
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="-mt-3 bg-white px-2 text-xs font-light">or</div>
        <base-button variant="secondary" class="w-full">
          <img :src="GoogleLogo" class="w-4 h-4 mr-2" />
          Continue with Google
        </base-button>
        <base-button variant="secondary" class="w-full">
          <img :src="AppleLogo" class="w-4 h-4 mr-2" />
          Continue with Apple
        </base-button>
      </div>
    </div>
    <footer class="py-8">
      <p class="font-light tracking-tight text-xs text-center">
        Don't have an account?
        <a href="#" target="_blank"
          ><span
            class="font-semibold text-slate-400 hover:underline hover:text-slate-900"
            >Sign Up</span
          ></a
        >
      </p>
    </footer>
    <!-- <loading-overlay
      v-if="isFetching"
      label="Loging in"
      tagline="Rolling your red carpet"
    /> -->
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Magic } from 'magic-sdk';
import { createFetch } from '@vueuse/core';
import GoogleLogo from '../assets/images/google-logo.png';
import AppleLogo from '../assets/images/apple-log.png';
import BaseButton from '../components/common/BaseButton.vue';
import Icon from '../components/common/Icon.vue';
import BaseInput from '../components/common/BaseInput.vue';
// import LoadingOverlay from '../components/common/LoadingOverlay.vue';

const userEmail = ref('');
const didToken = ref('');
const sendingMagicLink = ref(false);
const magic = new Magic(import.meta.env.VITE_MAGIC_PUBLISHABLE_KEY);

const useMyFetch = createFetch({
  baseUrl: 'http://localhost:3005',
  options: {
    async beforeFetch({ options }) {
      sendingMagicLink.value = true;
      didToken.value = await magic.auth.loginWithMagicLink({
        email: userEmail.value,
        // showUI: false,
      });
      sendingMagicLink.value = false;
      // eslint-disable-next-line no-param-reassign
      options.headers.Authorization = `Bearer ${didToken.value}`;
      return { options };
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
});

const { error, data, execute } = useMyFetch('/login', {
  immediate: false,
}).post();

const login = () => execute();
</script>

<style lang="scss" scoped></style>
