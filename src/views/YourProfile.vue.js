import { MessageCircle, CheckCircle2 } from 'lucide-vue-next';
export default (await import('vue')).defineComponent({
    name: 'ProfileSection',
    components: {
        MessageCircleIcon: MessageCircle,
        CheckCircle2Icon: CheckCircle2
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            MessageCircleIcon: MessageCircle,
            CheckCircle2Icon: CheckCircle2
        },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-xl shadow-sm p-6 w-[300px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center space-y-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-right w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-20 h-20 rounded-full border-4 border-orange-500 overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://placehold.co/80"), alt: ("Profile picture"), ...{ class: ("w-full h-full object-cover") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center gap-8 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.MessageCircleIcon;
    /** @type { [typeof __VLS_components.MessageCircleIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-5 h-5 mx-auto mb-1 text-orange-500") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-5 h-5 mx-auto mb-1 text-orange-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.CheckCircle2Icon;
    /** @type { [typeof __VLS_components.CheckCircle2Icon, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-5 h-5 mx-auto mb-1 text-orange-500") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("w-5 h-5 mx-auto mb-1 text-orange-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-orange-500 font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-2 bg-gray-200 rounded-full overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("h-full w-3/4 bg-orange-500 rounded-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-2 bg-gray-200 rounded-full overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("h-full w-1/2 bg-orange-500 rounded-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-2 bg-gray-200 rounded-full overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("h-full w-1/4 bg-blue-500 rounded-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("font-medium mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2 text-sm text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['w-[300px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['w-20'];
    __VLS_styleScopedClasses['h-20'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['border-4'];
    __VLS_styleScopedClasses['border-orange-500'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-3/4'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-1/2'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-1/4'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
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
