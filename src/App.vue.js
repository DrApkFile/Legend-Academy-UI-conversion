import { LayoutDashboard, GraduationCap, ClipboardList, Calendar, MessageSquare, FileText, Trophy, HelpCircle, Settings, Bell, Gauge } from 'lucide-vue-next';
export default (await import('vue')).defineComponent({
    name: 'App',
    data() {
        return {
            navigationItems: [
                { name: 'Dashboard', icon: LayoutDashboard },
                { name: 'Courses', icon: GraduationCap },
                { name: 'Assignments', icon: ClipboardList },
                { name: 'Performance', icon: Gauge },
                { name: 'Calendar', icon: Calendar },
                { name: 'Discussions', icon: MessageSquare },
                { name: 'Resources', icon: FileText },
                { name: 'Achievements', icon: Trophy },
                { name: 'Support', icon: HelpCircle },
                { name: 'Settings', icon: Settings },
                { name: 'Notification', icon: Bell },
            ]
        };
    }
}); /* PartiallyEnd: #3632/script.vue */
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({ ...{ class: ("fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("space-y-2") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navigationItems))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((item.name)), to: (({ name: item.name })), ...{ class: ("flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100") }, ...{ class: (({ 'bg-red-50 text-red-600': __VLS_ctx.$route.name === item.name })) }, }));
        const __VLS_2 = __VLS_1({ key: ((item.name)), to: (({ name: item.name })), ...{ class: ("flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100") }, ...{ class: (({ 'bg-red-50 text-red-600': __VLS_ctx.$route.name === item.name })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = ((item.icon));
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-5 h-5 mr-3") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("w-5 h-5 mr-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        (item.name);
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("ml-64 p-8") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-64'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['border-r'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['bg-red-50'];
    __VLS_styleScopedClasses['text-red-600'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['mr-3'];
    __VLS_styleScopedClasses['ml-64'];
    __VLS_styleScopedClasses['p-8'];
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
let __VLS_self;
