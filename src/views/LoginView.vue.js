import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const router = useRouter();
const handleLogin = () => {
    // Placeholder for actual login logic
    console.log('Login attempted', {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value
    });
    // Redirect to Dashboard on successful login
    router.push({ name: 'dashboard' });
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['login-button'];
    __VLS_styleScopedClasses['welcome-content'];
    __VLS_styleScopedClasses['welcome-content'];
    __VLS_styleScopedClasses['read-more'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-form-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-form-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logo-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/la.png"), alt: ("Legend Academy"), ...{ class: ("logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleLogin) }, ...{ class: ("login-form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), placeholder: ("Email"), ...{ class: ("form-input") }, });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("password"), placeholder: ("Password"), ...{ class: ("form-input") }, });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("remember-me") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), id: ("remember"), });
    (__VLS_ctx.rememberMe);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("remember"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("login-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("read-more") }, });
    __VLS_styleScopedClasses['login-container'];
    __VLS_styleScopedClasses['login-form-section'];
    __VLS_styleScopedClasses['login-form-container'];
    __VLS_styleScopedClasses['logo-container'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['login-form'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-input'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-input'];
    __VLS_styleScopedClasses['remember-me'];
    __VLS_styleScopedClasses['login-button'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['welcome-section'];
    __VLS_styleScopedClasses['welcome-content'];
    __VLS_styleScopedClasses['read-more'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            email: email,
            password: password,
            rememberMe: rememberMe,
            handleLogin: handleLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
