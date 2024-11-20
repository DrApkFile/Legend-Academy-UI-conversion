import { ref, computed } from 'vue';
import { Search as SearchIcon, Pencil as PencilIcon, ArrowLeft as ArrowLeftIcon, MoreVertical as MoreVerticalIcon, Award as AwardIcon, Bell as BellIcon, MessageSquare as MessageSquareIcon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentView = ref('profile');
const form = ref({
    firstName: 'Favour',
    lastName: 'Chukwu',
    email: 'favourchukwu@gmail.com',
    phone: '8023498456'
});
const notifications = ref({
    email: true,
    sms: false,
    push: true,
    items: [
        {
            id: 1,
            message: 'Congratulations! You have earned a new certificate',
            time: '20m ago',
            icon: AwardIcon,
            iconColor: 'text-orange-500'
        },
        {
            id: 2,
            message: 'A new assignment has been assigned to you: Introduction to UI/UX Fundamentals',
            time: '1h ago',
            icon: BellIcon,
            iconColor: 'text-blue-500',
            action: 'View assignment'
        },
        {
            id: 3,
            message: 'Ikenna Olajide replied to your comment in the UI/UX Design post',
            time: '2h ago',
            icon: MessageSquareIcon,
            iconColor: 'text-green-500'
        }
    ]
});
const getSubtitle = computed(() => {
    switch (currentView.value) {
        case 'profile':
            return 'View and manage your profile';
        case 'settings':
            return 'View and manage your settings';
        case 'notifications':
            return 'View and manage your notifications and stay up-to-date';
        default:
            return '';
    }
});
const saveProfile = () => {
    // Here you would typically make an API call to save the profile
    currentView.value = 'profile';
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
    (__VLS_ctx.currentView === 'notifications' ? 'Notifications' : __VLS_ctx.currentView === 'settings' ? 'Settings' : 'Profile');
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-500 text-sm") }, });
    (__VLS_ctx.getSubtitle);
    if (__VLS_ctx.currentView === 'profile') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center mb-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-24 h-24 rounded-full border-4 border-orange-500 overflow-hidden mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://placehold.co/96"), alt: ("Profile picture"), ...{ class: ("w-full h-full object-cover") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-400") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border border-gray-100 rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-sm font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentView === 'profile')))
                        return;
                    __VLS_ctx.currentView = 'edit';
                } }, ...{ class: ("text-orange-500 text-sm hover:text-orange-600") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.PencilIcon;
        /** @type { [typeof __VLS_components.PencilIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-4 h-4") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("w-4 h-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border border-gray-100 rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-sm font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentView === 'profile')))
                        return;
                    __VLS_ctx.currentView = 'edit';
                } }, ...{ class: ("text-orange-500 text-sm hover:text-orange-600") }, });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.PencilIcon;
        /** @type { [typeof __VLS_components.PencilIcon, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-4 h-4") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("w-4 h-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
    }
    if (__VLS_ctx.currentView === 'edit') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-2xl") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentView === 'edit')))
                        return;
                    __VLS_ctx.currentView = 'profile';
                } }, ...{ class: ("text-sm text-gray-500 hover:text-gray-700") }, });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ArrowLeftIcon;
        /** @type { [typeof __VLS_components.ArrowLeftIcon, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("w-4 h-4 inline-block mr-1") }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("w-4 h-4 inline-block mr-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.saveProfile) }, ...{ class: ("space-y-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium text-gray-700 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.form.firstName)), type: ("text"), ...{ class: ("w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium text-gray-700 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.form.lastName)), type: ("text"), ...{ class: ("w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium text-gray-700 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), ...{ class: ("w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
        (__VLS_ctx.form.email);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium text-gray-700 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("p-2 border border-gray-200 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("NG"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("tel"), ...{ class: ("flex-1 p-2 border border-gray-200 rounded-r-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
        (__VLS_ctx.form.phone);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentView === 'edit')))
                        return;
                    __VLS_ctx.currentView = 'profile';
                } }, type: ("button"), ...{ class: ("px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600") }, });
    }
    if (__VLS_ctx.currentView === 'settings') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-2xl") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border border-gray-100 rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-sm font-medium mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm text-gray-500 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), value: ("chiomafavour@gmail.com"), disabled: (true), ...{ class: ("w-full p-2 bg-gray-50 border border-gray-200 rounded-lg") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm text-gray-500 mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), value: ("********"), disabled: (true), ...{ class: ("w-full p-2 bg-gray-50 border border-gray-200 rounded-lg mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("w-full p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border border-gray-100 rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-sm font-medium mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentView === 'settings')))
                        return;
                    __VLS_ctx.notifications.email = !__VLS_ctx.notifications.email;
                } }, ...{ class: ("relative inline-flex h-6 w-11 items-center rounded-full") }, ...{ class: ((__VLS_ctx.notifications.email ? 'bg-orange-500' : 'bg-gray-200')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("inline-block h-4 w-4 transform rounded-full bg-white transition") }, ...{ class: ((__VLS_ctx.notifications.email ? 'translate-x-6' : 'translate-x-1')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentView === 'settings')))
                        return;
                    __VLS_ctx.notifications.sms = !__VLS_ctx.notifications.sms;
                } }, ...{ class: ("relative inline-flex h-6 w-11 items-center rounded-full") }, ...{ class: ((__VLS_ctx.notifications.sms ? 'bg-orange-500' : 'bg-gray-200')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("inline-block h-4 w-4 transform rounded-full bg-white transition") }, ...{ class: ((__VLS_ctx.notifications.sms ? 'translate-x-6' : 'translate-x-1')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentView === 'settings')))
                        return;
                    __VLS_ctx.notifications.push = !__VLS_ctx.notifications.push;
                } }, ...{ class: ("relative inline-flex h-6 w-11 items-center rounded-full") }, ...{ class: ((__VLS_ctx.notifications.push ? 'bg-orange-500' : 'bg-gray-200')) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("inline-block h-4 w-4 transform rounded-full bg-white transition") }, ...{ class: ((__VLS_ctx.notifications.push ? 'translate-x-6' : 'translate-x-1')) }, });
    }
    if (__VLS_ctx.currentView === 'notifications') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center mb-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-orange-500 text-sm hover:text-orange-600") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
        for (const [notification] of __VLS_getVForSourceType((__VLS_ctx.notifications.items))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((notification.id)), ...{ class: ("flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-shrink-0") }, });
            const __VLS_24 = ((notification.icon));
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("w-5 h-5") }, ...{ class: ((notification.iconColor)) }, }));
            const __VLS_26 = __VLS_25({ ...{ class: ("w-5 h-5") }, ...{ class: ((notification.iconColor)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 min-w-0") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
            (notification.message);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-gray-500 mt-1") }, });
            (notification.time);
            if (notification.action) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-sm text-orange-500 mt-2 hover:text-orange-600") }, });
                (notification.action);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-gray-400 hover:text-gray-500") }, });
            const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.MoreVerticalIcon;
            /** @type { [typeof __VLS_components.MoreVerticalIcon, ] } */
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("w-4 h-4") }, }));
            const __VLS_32 = __VLS_31({ ...{ class: ("w-4 h-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        }
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
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['w-24'];
    __VLS_styleScopedClasses['h-24'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['border-4'];
    __VLS_styleScopedClasses['border-orange-500'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['hover:text-orange-600'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-2'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['hover:text-orange-600'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-2'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['col-span-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['hover:text-gray-700'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-2'];
    __VLS_styleScopedClasses['gap-4'];
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
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-l-lg'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-r-lg'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-orange-600'];
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-orange-600'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['inline-flex'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['w-11'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['inline-flex'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['w-11'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['inline-flex'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['w-11'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['hover:text-orange-600'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-0'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['hover:text-orange-600'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['hover:text-gray-500'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
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
            PencilIcon: PencilIcon,
            ArrowLeftIcon: ArrowLeftIcon,
            MoreVerticalIcon: MoreVerticalIcon,
            currentView: currentView,
            form: form,
            notifications: notifications,
            getSubtitle: getSubtitle,
            saveProfile: saveProfile,
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
