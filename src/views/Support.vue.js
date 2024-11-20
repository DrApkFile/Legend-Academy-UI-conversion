import { ref } from 'vue';
import { Search as SearchIcon, Plus as PlusIcon, Check as CheckIcon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentTab = ref('faq');
const activeFaq = ref('password');
const isSubmitted = ref(false);
const tabs = [
    { id: 'faq', name: 'FAQ' },
    { id: 'report', name: 'Report A Problem' },
    { id: 'contact', name: 'Contact Us' }
];
const faqs = [
    {
        id: 'password',
        question: 'How do I change my password?',
        answer: 'To reset your password, go to the "Settings" page. Click on "Change Password" and follow the instructions.'
    },
    {
        id: 'support',
        question: 'How can I contact support?',
        answer: 'You can contact our support team through the "Contact Us" form or by sending an email to support@example.com'
    },
    {
        id: 'email',
        question: 'Can I change my email address?',
        answer: 'Yes, you can change your email address in your account settings. Please ensure you verify your new email address.'
    },
    {
        id: 'report',
        question: 'How do I report a problem?',
        answer: 'Use the "Report A Problem" form to submit any issues you encounter. Our team will respond within 24 hours.'
    },
    {
        id: 'profile',
        question: 'How do I edit my profile?',
        answer: 'You can edit your profile information by going to your profile page and clicking the "Edit Profile" button.'
    }
];
const reportForm = ref({
    subject: '',
    message: ''
});
const toggleFaq = (id) => {
    activeFaq.value = activeFaq.value === id ? null : id;
};
const submitReport = () => {
    // Here you would typically make an API call to submit the report
    isSubmitted.value = true;
};
const resetForm = () => {
    isSubmitted.value = false;
    reportForm.value = {
        subject: '',
        message: ''
    };
    currentTab.value = 'faq';
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen bg-gray-50 p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SearchIcon;
    /** @type { [typeof __VLS_components.SearchIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Search your course here..."), ...{ class: ("w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-xl p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xl font-semibold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-500 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4 mb-6") }, });
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.currentTab = tab.id;
                } }, key: ((tab.id)), ...{ class: (([
                    'text-sm font-medium px-4 py-2 rounded-lg',
                    __VLS_ctx.currentTab === tab.id
                        ? 'bg-orange-100 text-orange-500'
                        : 'text-gray-500 hover:bg-gray-50'
                ])) }, });
        (tab.name);
    }
    if (__VLS_ctx.currentTab === 'faq') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
        for (const [faq] of __VLS_getVForSourceType((__VLS_ctx.faqs))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((faq.id)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.currentTab === 'faq')))
                            return;
                        __VLS_ctx.toggleFaq(faq.id);
                    } }, ...{ class: ("w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50") }, ...{ class: ((__VLS_ctx.activeFaq === faq.id ? 'bg-gray-50' : '')) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-orange-500") }, });
            (faq.question);
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.PlusIcon;
            /** @type { [typeof __VLS_components.PlusIcon, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-5 h-5 text-gray-400") }, ...{ class: ((__VLS_ctx.activeFaq === faq.id ? 'rotate-45' : '')) }, }));
            const __VLS_8 = __VLS_7({ ...{ class: ("w-5 h-5 text-gray-400") }, ...{ class: ((__VLS_ctx.activeFaq === faq.id ? 'rotate-45' : '')) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            if (__VLS_ctx.activeFaq === faq.id) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 text-gray-600 text-sm bg-gray-50 rounded-lg mt-2") }, });
                (faq.answer);
            }
        }
    }
    if (__VLS_ctx.currentTab === 'report' && !__VLS_ctx.isSubmitted) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-2xl") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitReport) }, ...{ class: ("space-y-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("subject"), ...{ class: ("block text-sm font-medium text-gray-700 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("subject"), value: ((__VLS_ctx.reportForm.subject)), type: ("text"), placeholder: ("Enter subject"), ...{ class: ("w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("message"), ...{ class: ("block text-sm font-medium text-gray-700 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("message"), value: ((__VLS_ctx.reportForm.message)), rows: ("4"), placeholder: ("Send us a message..."), ...{ class: ("w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors") }, });
    }
    if (__VLS_ctx.isSubmitted) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center py-12") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4") }, });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.CheckIcon;
        /** @type { [typeof __VLS_components.CheckIcon, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-6 h-6 text-green-500") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("w-6 h-6 text-green-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-medium mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-500 mb-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.resetForm) }, ...{ class: ("bg-orange-500 text-white px-8 py-2 rounded-lg hover:bg-orange-600 transition-colors") }, });
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-3'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['pl-10'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-orange-600'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['py-12'];
    __VLS_styleScopedClasses['w-12'];
    __VLS_styleScopedClasses['h-12'];
    __VLS_styleScopedClasses['bg-green-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['text-green-500'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-8'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-orange-600'];
    __VLS_styleScopedClasses['transition-colors'];
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
            SearchIcon: SearchIcon,
            PlusIcon: PlusIcon,
            CheckIcon: CheckIcon,
            currentTab: currentTab,
            activeFaq: activeFaq,
            isSubmitted: isSubmitted,
            tabs: tabs,
            faqs: faqs,
            reportForm: reportForm,
            toggleFaq: toggleFaq,
            submitReport: submitReport,
            resetForm: resetForm,
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
