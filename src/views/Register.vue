<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />
          <h2 class="brand-text text-primary ml-1">
            YouCode
          </h2>
        </b-link>

        <b-card-title class="mb-1">
        </b-card-title>
        <b-card-text class="mb-2">
          Welcome to YouCode Event! 👋
        </b-card-text>

        <!-- form -->
        <validation-observer ref="registerForm">
          <b-form
              class="auth-register-form mt-2"
              @submit.prevent="validationForm"
          >
            <b-form-group
                label="Firstname"
                label-for="firstname"
            >
              <validation-provider
                  #default="{ errors }"
                  name="Username"
                  rules="required"
              >
                <b-form-input
                    id="firstname"
                    v-model="firstname"
                    :state="errors.length > 0 ? false:null"
                    name="register-firstname"
                    placeholder="firstname"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
            <b-form-group
                label="Lastname"
                label-for="lastname"
            >
              <validation-provider
                  #default="{ errors }"
                  name="Username"
                  rules="required"
              >
                <b-form-input
                    id="lastname"
                    v-model="lastname"
                    :state="errors.length > 0 ? false:null"
                    name="register-lastname"
                    placeholder="lastname"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- email -->
            <b-form-group
                label="Email"
                label-for="email"
            >
              <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
              >
                <b-form-input
                    id="email"
                    v-model="regEmail"
                    :state="errors.length > 0 ? false:null"
                    name="register-email"
                    placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <b-form-group
                label="Phone"
                label-for="phone"
            >
              <validation-provider
                  #default="{ errors }"
                  name="Username"
                  rules="required"
              >
                <b-form-input
                    id="phone"
                    v-model="phone"
                    :state="errors.length > 0 ? false:null"
                    name="register-phone"
                    placeholder="phone"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group
                label="Password"
                label-for="password"
            >
              <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
              >
                <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                      id="password"
                      v-model="password"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      name="register-password"
                      placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                  id="register-privacy-policy"
                  v-model="status"
                  name="checkbox-1"
              >
                I agree to
                <b-link>privacy policy & terms</b-link>
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
                @click="signup"
                variant="primary"
                block
                type="submit"
            >
              Sign up
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>Already have an account? </span>
          <b-link :to="{name:'auth-login-v1'}">
            <span>Sign in instead</span>
          </b-link>
        </b-card-text>

        <div class="divider my-2">
          <div class="divider-text">
            or
          </div>
        </div>

        <!-- social buttons -->
        <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
              variant="facebook"
              href="javascript:void(0)"
          >
            <feather-icon icon="FacebookIcon" />
          </b-button>
          <b-button
              variant="twitter"
              href="javascript:void(0)"
          >
            <feather-icon icon="TwitterIcon" />
          </b-button>
          <b-button
              variant="google"
              href="javascript:void(0)"
          >
            <feather-icon icon="MailIcon" />
          </b-button>
          <b-button
              variant="github"
              href="javascript:void(0)"
          >
            <feather-icon icon="GithubIcon" />
          </b-button>
        </div>
      </b-card>
      <!-- /Register v1 -->
    </div>
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BCard, BLink, BCardTitle, BCardText, BForm,
  BButton, BFormInput, BFormGroup, BInputGroup, BInputGroupAppend, BFormCheckbox,
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { register } from '@/services/AuthService'


export default {
  name: 'Register',
  components: {
    VuexyLogo,
    // BSV
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      regEmail: '',
      firstname: '',
      lastname: '',
      phone: '',
      password: '',
      status: '',

      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    validationForm() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
        this.signup()
      })
    },
    signup() {
      const payload = {
        email: this.regEmail,
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        password: this.password,
        status: this.status,
      }
      register(payload)
        .then(res => {
          this.$router.push({ name: 'login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
