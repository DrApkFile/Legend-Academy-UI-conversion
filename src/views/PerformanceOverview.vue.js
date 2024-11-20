import { ref } from 'vue';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const stats = ref({
    "totalTests": 16,
    totalPoints: 1000,
    testAwards: 1000
});
const modulePerformance = ref([
    { name: 'UI/UX', module1Score: 75, module2Score: 85 },
    { name: 'UI/UI', module1Score: 65, module2Score: 70 },
    { name: 'Front-End', module1Score: 20, module2Score: 30 },
    { name: 'Web', module1Score: 90, module2Score: 95 },
    { name: 'AI', module1Score: 60, module2Score: 80 }
]);
const performanceMetrics = ref([
    { label: 'Weekly tests', percentage: 90, trend: 'up' },
    { label: 'Questionnaires', percentage: 65, trend: 'up' },
    { label: 'Monthly tests', percentage: 28, trend: 'down' },
    { label: 'Quizzes', percentage: 29, trend: 'down' },
    { label: 'Exams', percentage: 29, trend: 'down' }
]);
const testResults = ref([
    {
        id: '1',
        test: 'Introduction to UI/UX',
        mark: '92/100',
        questionsAttempted: 100,
        correct: 92,
        wrong: 8,
        result: 'pass'
    },
    {
        id: '2',
        test: 'Color Psychology',
        mark: '72/100',
        questionsAttempted: 80,
        correct: 72,
        wrong: 8,
        result: 'pass'
    },
    {
        id: '3',
        test: 'Color Psychology',
        mark: '72/100',
        questionsAttempted: 100,
        correct: 72,
        wrong: 28,
        result: 'failed'
    }
]); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-3 gap-6 mb-8") }, });
    for (const [stat, key] of __VLS_getVForSourceType((__VLS_ctx.stats))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((key)), ...{ class: ("bg-white rounded-xl p-6 shadow-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-gray-500 text-sm mb-2") }, });
        (key);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-3xl font-bold") }, });
        (stat);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 lg:grid-cols-3 gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:col-span-2 space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-xl p-6 shadow-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-semibold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
    for (const [module] of __VLS_getVForSourceType((__VLS_ctx.modulePerformance))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((module.name)), ...{ class: ("space-y-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (module.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 h-2 bg-gray-100 rounded-full overflow-hidden") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("h-full bg-orange-500 rounded-full") }, ...{ style: (({ width: `${module.module1Score}%` })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 h-2 bg-gray-100 rounded-full overflow-hidden") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("h-full bg-green-500 rounded-full") }, ...{ style: (({ width: `${module.module2Score}%` })) }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between text-xs text-gray-500 mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-xl p-6 shadow-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-semibold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
    for (const [metric] of __VLS_getVForSourceType((__VLS_ctx.performanceMetrics))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((metric.label)), ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
        (metric.label);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
        if (metric.trend === 'up') {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.TrendingUpIcon;
            /** @type { [typeof __VLS_components.TrendingUpIcon, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-4 h-4 text-green-500 mr-2") }, }));
            const __VLS_2 = __VLS_1({ ...{ class: ("w-4 h-4 text-green-500 mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        }
        if (metric.trend === 'down') {
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.TrendingDownIcon;
            /** @type { [typeof __VLS_components.TrendingDownIcon, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-4 h-4 text-red-500 mr-2") }, }));
            const __VLS_8 = __VLS_7({ ...{ class: ("w-4 h-4 text-red-500 mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm font-medium") }, });
        (metric.percentage);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-xl shadow-sm overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-6 border-b border-gray-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("search"), placeholder: ("Search tests..."), ...{ class: ("px-3 py-1 text-sm border rounded-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("px-3 py-1 text-sm border rounded-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-x-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({ ...{ class: ("bg-gray-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ ...{ class: ("bg-white divide-y divide-gray-200") }, });
    for (const [result] of __VLS_getVForSourceType((__VLS_ctx.testResults))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((result.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900") }, });
        (result.test);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap text-sm text-gray-500") }, });
        (result.mark);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap text-sm text-gray-500") }, });
        (result.questionsAttempted);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap text-sm text-gray-500") }, });
        (result.correct);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap text-sm text-gray-500") }, });
        (result.wrong);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: (([
                    'px-2 py-1 text-xs font-medium rounded-full',
                    result.result === 'pass'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                ])) }, });
        (result.result);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-6 py-4 border-t border-gray-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("px-3 py-1 text-sm border rounded-md hover:bg-gray-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("px-3 py-1 text-sm border rounded-md hover:bg-gray-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-xl p-6 shadow-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://placehold.co/64"), alt: ("Profile"), ...{ class: ("w-16 h-16 rounded-full mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-3 gap-4 mt-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xl font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xl font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xl font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-600") }, });
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['lg:grid-cols-3'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['lg:col-span-2'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['bg-green-500'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['text-green-500'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-orange-600'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['tracking-wider'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['tracking-wider'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['tracking-wider'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['tracking-wider'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['tracking-wider'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['tracking-wider'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['divide-y'];
    __VLS_styleScopedClasses['divide-gray-200'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['border-t'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-16'];
    __VLS_styleScopedClasses['h-16'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-3'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-600'];
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
            TrendingUpIcon: TrendingUpIcon,
            TrendingDownIcon: TrendingDownIcon,
            stats: stats,
            modulePerformance: modulePerformance,
            performanceMetrics: performanceMetrics,
            testResults: testResults,
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
