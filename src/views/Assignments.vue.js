import { ref } from 'vue';
import { ClockIcon, ClipboardListIcon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tabs = [
    { id: 'pending', name: 'Pending' },
    { id: 'in_progress', name: 'In Progress' },
    { id: 'completed', name: 'Completed' }
];
const activeTab = ref('pending');
// Dummy data - replace with actual API call
const assignments = ref([
    {
        id: '1',
        courseId: '1',
        title: "Beginner's Guide to becoming a professional UI/UX Designer",
        thumbnail: "https://placehold.co/384x192",
        assignedDate: '2024-11-17',
        dueDate: '2024-11-24',
        status: 'pending',
        courseName: 'UI/UX Design Course',
        duration: '24+ Hours'
    },
    {
        id: '2',
        courseId: '2',
        title: "Front-End Web Developer Certificate Course",
        thumbnail: "https://placehold.co/384x192",
        assignedDate: '2024-11-15',
        dueDate: '2024-11-22',
        status: 'in_progress',
        courseName: 'Web Development',
        duration: '12+ Hours'
    },
    {
        id: '3',
        courseId: '3',
        title: "User Experience and User Interface Course",
        thumbnail: "https://placehold.co/384x192",
        assignedDate: '2024-11-10',
        dueDate: '2024-11-17',
        status: 'completed',
        courseName: 'UX/UI Advanced',
        duration: '8+ Hours'
    },
    {
        id: '4',
        courseId: '1',
        title: "Building Strong Foundations: Wireframing Techniques",
        thumbnail: "https://placehold.co/384x192",
        assignedDate: '2024-11-18',
        dueDate: '2024-11-21',
        status: 'pending',
        courseName: 'UI/UX Design Course',
        duration: '4+ Hours'
    },
    {
        id: '5',
        courseId: '2',
        title: "Building Responsive Layouts with CSS Grid",
        thumbnail: "https://placehold.co/384x192",
        assignedDate: '2024-11-16',
        dueDate: '2024-11-23',
        status: 'pending',
        courseName: 'Web Development',
        duration: '6+ Hours'
    },
    {
        id: '6',
        courseId: '3',
        title: "Optimizing User Experience: Testing Strategies",
        thumbnail: "https://placehold.co/384x192",
        assignedDate: '2024-11-14',
        dueDate: '2024-11-20',
        status: 'completed',
        courseName: 'UX/UI Advanced',
        duration: '3+ Hours'
    }
]);
const getAssignmentsByStatus = (status) => {
    return assignments.value.filter(assignment => assignment.status === status);
};
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};
const formatStatus = (status) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
const getStatusBadgeClass = (status) => {
    switch (status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-800';
        case 'in_progress':
            return 'bg-blue-100 text-blue-800';
        case 'completed':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};
const getEmptyStateMessage = (status) => {
    switch (status) {
        case 'pending':
            return 'You have no pending assignments';
        case 'in_progress':
            return 'You have no assignments in progress';
        case 'completed':
            return 'You have not completed any assignments yet';
        default:
            return 'No assignments found';
    }
};
const completeAssignment = (id) => {
    const assignment = assignments.value.find(a => a.id === id);
    if (assignment && assignment.status !== 'completed') {
        assignment.status = 'completed';
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4 mb-6 border-b") }, });
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.activeTab = tab.id;
                } }, key: ((tab.id)), ...{ class: ("px-4 py-2 -mb-px text-sm font-medium transition-colors relative") }, ...{ class: (([
                    __VLS_ctx.activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                ])) }, });
        (tab.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2 px-2 py-0.5 text-xs rounded-full") }, ...{ class: (([
                    __VLS_ctx.activeTab === tab.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                ])) }, });
        (__VLS_ctx.getAssignmentsByStatus(tab.id).length);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6") }, });
    for (const [assignment] of __VLS_getVForSourceType((__VLS_ctx.getAssignmentsByStatus(__VLS_ctx.activeTab)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((assignment.id)), ...{ class: ("bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((assignment.thumbnail)), alt: ((assignment.title)), ...{ class: ("w-full h-48 object-cover") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded") }, ...{ class: ((__VLS_ctx.getStatusBadgeClass(assignment.status))) }, });
        (__VLS_ctx.formatStatus(assignment.status));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mb-2") }, });
        (assignment.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-600 mb-4") }, });
        (assignment.courseName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between text-sm text-gray-500 mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ClockIcon;
        /** @type { [typeof __VLS_components.ClockIcon, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-4 h-4 mr-1") }, }));
        const __VLS_2 = __VLS_1({ ...{ class: ("w-4 h-4 mr-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        (assignment.duration);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (__VLS_ctx.formatDate(assignment.dueDate));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.completeAssignment(assignment.id);
                } }, ...{ class: ("w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors") }, ...{ class: (([
                    assignment.status === 'completed'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                ])) }, });
        (assignment.status === 'completed' ? 'Completed' : 'Complete →');
    }
    if (__VLS_ctx.getAssignmentsByStatus(__VLS_ctx.activeTab).length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center py-12") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ClipboardListIcon;
        /** @type { [typeof __VLS_components.ClipboardListIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-16 h-16 mx-auto mb-4 text-gray-400") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("w-16 h-16 mx-auto mb-4 text-gray-400") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-medium text-gray-900 mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600") }, });
        (__VLS_ctx.getEmptyStateMessage(__VLS_ctx.activeTab));
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
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['-mb-px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['rounded-full'];
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
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['mr-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['py-12'];
    __VLS_styleScopedClasses['w-16'];
    __VLS_styleScopedClasses['h-16'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['mb-2'];
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
            ClipboardListIcon: ClipboardListIcon,
            tabs: tabs,
            activeTab: activeTab,
            getAssignmentsByStatus: getAssignmentsByStatus,
            formatDate: formatDate,
            formatStatus: formatStatus,
            getStatusBadgeClass: getStatusBadgeClass,
            getEmptyStateMessage: getEmptyStateMessage,
            completeAssignment: completeAssignment,
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
