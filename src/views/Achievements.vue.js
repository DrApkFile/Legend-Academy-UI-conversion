import { ref } from 'vue';
import { Search as SearchIcon, Download as DownloadIcon, Share as ShareIcon, Trophy as TrophyIcon, Star as StarIcon, Award as AwardIcon, Target as TargetIcon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentTab = ref('Certificate');
const tabs = ['Certificate', 'Medals'];
const certificates = [
    {
        id: 1,
        title: 'Certified UI/UX Developer',
        issuer: 'ABC Institute',
        completedDate: '14 October 2024',
        description: 'This certificate validates your expertise in UI/UX and Front-End Development Skills.'
    },
    {
        id: 2,
        title: 'Advanced Front-End Development',
        issuer: 'ABC Institute',
        completedDate: '25 September 2024',
        description: 'This certificate validates your expertise in HTML, CSS and JavaScript Skills.'
    },
    {
        id: 3,
        title: 'Certified UI/UX Developer',
        issuer: 'ABC Institute',
        completedDate: '20 September 2024',
        description: 'This certificate validates your expertise in UI/UX and Front-End Development Skills.'
    }
];
const medals = [
    {
        id: 1,
        title: 'First Course Completed',
        description: '1 Course',
        icon: TrophyIcon,
        bgColor: 'bg-orange-500'
    },
    {
        id: 2,
        title: 'XP Points',
        description: '100 Points',
        icon: StarIcon,
        bgColor: 'bg-yellow-500'
    },
    {
        id: 3,
        title: 'Weekly Top Scorer',
        description: 'Top Performer',
        icon: AwardIcon,
        bgColor: 'bg-orange-500'
    },
    {
        id: 4,
        title: 'Five Courses Completed',
        description: '5 Courses',
        icon: TargetIcon,
        bgColor: 'bg-blue-500'
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border-b border-gray-200 mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("flex space-x-8") }, });
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.currentTab = tab;
                } }, key: ((tab)), ...{ class: (([
                    'pb-4 px-1 text-sm font-medium border-b-2 transition-colors',
                    __VLS_ctx.currentTab === tab
                        ? 'border-orange-500 text-orange-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ])) }, });
        (tab);
    }
    if (__VLS_ctx.currentTab === 'Certificate') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-sm font-medium mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-gray-100 h-2 rounded-full overflow-hidden") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-orange-500 h-full rounded-full") }, ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 gap-4") }, });
        for (const [cert] of __VLS_getVForSourceType((__VLS_ctx.certificates))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((cert.id)), ...{ class: ("border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-medium mb-1") }, });
            (cert.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500 mb-2") }, });
            (cert.issuer);
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            (cert.completedDate);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-600 mb-4") }, });
            (cert.description);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("flex items-center px-3 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm") }, });
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.DownloadIcon;
            /** @type { [typeof __VLS_components.DownloadIcon, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-4 h-4 mr-1") }, }));
            const __VLS_8 = __VLS_7({ ...{ class: ("w-4 h-4 mr-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("flex items-center px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm") }, });
            const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ShareIcon;
            /** @type { [typeof __VLS_components.ShareIcon, ] } */
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-4 h-4 mr-1") }, }));
            const __VLS_14 = __VLS_13({ ...{ class: ("w-4 h-4 mr-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        }
    }
    if (__VLS_ctx.currentTab === 'Medals') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 md:grid-cols-4 gap-6") }, });
        for (const [medal] of __VLS_getVForSourceType((__VLS_ctx.medals))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((medal.id)), ...{ class: ("flex flex-col items-center text-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((`w-20 h-20 rounded-full flex items-center justify-center ${medal.bgColor}`)) }, });
            const __VLS_18 = ((medal.icon));
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("w-10 h-10 text-white") }, }));
            const __VLS_20 = __VLS_19({ ...{ class: ("w-10 h-10 text-white") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-medium mt-2") }, });
            (medal.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
            (medal.description);
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
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-8'];
    __VLS_styleScopedClasses['pb-4'];
    __VLS_styleScopedClasses['px-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['border-b-2'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1.5'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-orange-600'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1.5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-2'];
    __VLS_styleScopedClasses['md:grid-cols-4'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mt-2'];
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SearchIcon: SearchIcon,
            DownloadIcon: DownloadIcon,
            ShareIcon: ShareIcon,
            currentTab: currentTab,
            tabs: tabs,
            certificates: certificates,
            medals: medals,
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
