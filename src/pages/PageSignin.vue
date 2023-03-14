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
      <form action="" class="flex flex-col text-xs space-y-8">
        <base-input
          label="Email address"
          type="email"
          placeholder="jane@mail.com"
        />
        <base-input label="password" type="password" />
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
        <base-button>Continue</base-button>
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
  </div>
</template>

<script setup>
import GoogleLogo from '../assets/images/google-logo.png';
import AppleLogo from '../assets/images/apple-log.png';
import BaseButton from '../components/common/BaseButton.vue';
import Icon from '../components/common/Icon.vue';
import BaseInput from '../components/common/BaseInput.vue';
</script>

<style lang="scss" scoped></style>
