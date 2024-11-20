import { ref, computed } from 'vue';
import { ClockIcon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tabs = [
    { id: 'all', name: 'All Courses', count: 11 },
    { id: 'ongoing', name: 'Ongoing', count: 6 },
    { id: 'not-started', name: 'Not Started', count: 2 },
    { id: 'completed', name: 'Completed', count: 3 },
];
const activeTab = ref('all');
// Dummy data - replace with actual API call
const courses = ref([
    {
        id: '1',
        title: "Beginner's Guide to becoming a professional UI/UX Designer",
        thumbnail: "https://placehold.co/284x192",
        instructor: {
            id: '1',
            name: 'Joseph Brandon',
            title: 'Senior UI/UX Designer',
            avatar: "https://placehold.co/24"
        },
        duration: '24+ Hours',
        tag: 'UI/UX',
        description: '',
        progress: 45,
        modules: []
    },
    {
        id: '2',
        title: "Mastering React: From Beginner to Pro",
        thumbnail: "https://placehold.co/284x192",
        instructor: {
            id: '2',
            name: 'Jane Doe',
            title: 'React Developer',
            avatar: "https://placehold.co/24"
        },
        duration: '30+ Hours',
        tag: 'Frontend Development',
        description: '',
        progress: 0,
        modules: []
    },
    {
        id: '3',
        title: "The Complete JavaScript Course: From Zero to Hero",
        thumbnail: "https://placehold.co/284x192",
        instructor: {
            id: '3',
            name: 'John Smith',
            title: 'JavaScript Developer',
            avatar: "https://placehold.co/24"
        },
        duration: '50+ Hours',
        tag: 'Programming Fundamentals',
        description: '',
        progress: 10,
        modules: []
    },
    {
        id: '4',
        title: "Building Responsive Websites with Bootstrap 5",
        thumbnail: "https://placehold.co/284x192",
        instructor: {
            id: '4',
            name: 'Sarah Lee',
            title: 'Front-End Developer',
            avatar: "https://placehold.co/24"
        },
        duration: '15+ Hours',
        tag: 'Front-End Development',
        description: '',
        progress: 75,
        modules: []
    },
    {
        id: '5',
        title: "The Art of Web Design: Principles and Practices",
        thumbnail: "https://placehold.co/284x192",
        instructor: {
            id: '5',
            name: 'David Miller',
            title: 'Web Designer',
            avatar: "https://placehold.co/24"
        },
        duration: '20+ Hours',
        tag: 'Web Design',
        description: '',
        progress: 20,
        modules: []
    },
    {
        id: '6',
        title: "Backend Developer Full Course",
        thumbnail: "https://placehold.co/284x192",
        instructor: {
            id: '1',
            name: 'Sarah Cornrow',
            title: 'Senior Backend Developer',
            avatar: "https://placehold.co/24"
        },
        duration: '19+ Hours',
        tag: 'Backend',
        description: '',
        progress: 88,
        modules: []
    },
    // Add more courses...
]);
const filteredCourses = computed(() => {
    switch (activeTab.value) {
        case 'ongoing':
            return courses.value.filter(course => course.progress > 0 && course.progress < 100);
        case 'not-started':
            return courses.value.filter(course => course.progress === 0);
        case 'completed':
            return courses.value.filter(course => course.progress === 100);
        default:
            return courses.value;
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4 mb-6") }, });
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.activeTab = tab.id;
                } }, key: ((tab.id)), ...{ class: (([
                    'px-4 py-2 rounded-lg text-sm transition-colors',
                    __VLS_ctx.activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                ])) }, });
        (tab.name);
        (tab.count);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6") }, });
    for (const [course] of __VLS_getVForSourceType((__VLS_ctx.filteredCourses))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((course.id)), to: (({ name: 'CourseDetail', params: { id: course.id } })), ...{ class: ("bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow") }, }));
        const __VLS_2 = __VLS_1({ key: ((course.id)), to: (({ name: 'CourseDetail', params: { id: course.id } })), ...{ class: ("bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((course.thumbnail)), alt: ((course.title)), ...{ class: ("w-full h-48 object-cover") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded") }, });
        (course.tag);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mb-2 line-clamp-2") }, });
        (course.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center mb-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((course.instructor.avatar)), alt: ((course.instructor.name)), ...{ class: ("w-6 h-6 rounded-full mr-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-600") }, });
        (course.instructor.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center text-sm text-gray-500") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ClockIcon;
        /** @type { [typeof __VLS_components.ClockIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-4 h-4 mr-1") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("w-4 h-4 mr-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        (course.duration);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-24 h-1 rounded-full bg-gray-200 mr-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("h-full rounded-full bg-blue-600") }, ...{ style: (({ width: `${course.progress}%` })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-600") }, });
        (course.progress);
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['lg:grid-cols-3'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-48'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-3'];
    __VLS_styleScopedClasses['left-3'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['bg-blue-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['line-clamp-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-24'];
    __VLS_styleScopedClasses['h-1'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-blue-600'];
    __VLS_styleScopedClasses['text-sm'];
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
            ClockIcon: ClockIcon,
            tabs: tabs,
            activeTab: activeTab,
            filteredCourses: filteredCourses,
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
