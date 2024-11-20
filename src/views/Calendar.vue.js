import { ref, computed } from 'vue';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Plus as PlusIcon } from 'lucide-vue-next';
export default (await import('vue')).defineComponent({
    name: 'Calendar',
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
        PlusIcon
    },
    setup() {
        const views = ['Monthly', 'Weekly', 'Daily'];
        const currentView = ref('Monthly');
        const currentDate = ref(new Date());
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        // Sample events data
        const events = [
            {
                id: 1,
                title: 'Design Review',
                type: 'meeting',
                date: new Date(2024, 0, 15)
            },
            {
                id: 2,
                title: 'UI/UX Workshop',
                type: 'workshop',
                date: new Date(2024, 0, 8)
            },
            {
                id: 3,
                title: 'Project Deadline',
                type: 'deadline',
                date: new Date(2024, 0, 22)
            }
        ];
        const currentMonthYear = computed(() => {
            return new Intl.DateTimeFormat('en-US', {
                month: 'long',
                year: 'numeric'
            }).format(currentDate.value);
        });
        const calendarDays = computed(() => {
            const year = currentDate.value.getFullYear();
            const month = currentDate.value.getMonth();
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const daysInMonth = lastDay.getDate();
            const startingDay = firstDay.getDay();
            const days = [];
            // Previous month's days
            const prevMonthLastDay = new Date(year, month, 0).getDate();
            for (let i = startingDay - 1; i >= 0; i--) {
                days.push({
                    date: prevMonthLastDay - i,
                    isCurrentMonth: false,
                    isToday: false,
                    events: []
                });
            }
            // Current month's days
            const today = new Date();
            for (let i = 1; i <= daysInMonth; i++) {
                const date = new Date(year, month, i);
                days.push({
                    date: i,
                    isCurrentMonth: true,
                    isToday: date.toDateString() === today.toDateString(),
                    events: events.filter(event => event.date.toDateString() === date.toDateString())
                });
            }
            // Next month's days
            const remainingDays = 42 - days.length;
            for (let i = 1; i <= remainingDays; i++) {
                days.push({
                    date: i,
                    isCurrentMonth: false,
                    isToday: false,
                    events: []
                });
            }
            return days;
        });
        const previousMonth = () => {
            currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
        };
        const nextMonth = () => {
            currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
        };
        const goToToday = () => {
            currentDate.value = new Date();
        };
        const getEventClass = (type) => {
            switch (type) {
                case 'meeting':
                    return 'bg-blue-100 text-blue-800';
                case 'workshop':
                    return 'bg-green-100 text-green-800';
                case 'deadline':
                    return 'bg-red-100 text-red-800';
                default:
                    return 'bg-gray-100 text-gray-800';
            }
        };
        return {
            views,
            currentView,
            daysOfWeek,
            currentMonthYear,
            calendarDays,
            previousMonth,
            nextMonth,
            goToToday,
            getEventClass
        };
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            ChevronLeftIcon,
            ChevronRightIcon,
            PlusIcon
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen bg-gray-50 p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6 flex justify-between items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex rounded-lg border bg-white") }, });
    for (const [view] of __VLS_getVForSourceType((__VLS_ctx.views))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.currentView = view;
                } }, key: ((view)), ...{ class: ("px-4 py-2 text-sm") }, ...{ class: ((__VLS_ctx.currentView === view ? 'bg-orange-500 text-white' : 'text-gray-600')) }, });
        (view);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.PlusIcon;
    /** @type { [typeof __VLS_components.PlusIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-4 h-4") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-4 h-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-xl shadow-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 border-b flex justify-between items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-semibold") }, });
    (__VLS_ctx.currentMonthYear);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.previousMonth) }, ...{ class: ("p-1 hover:bg-gray-100 rounded") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ChevronLeftIcon;
    /** @type { [typeof __VLS_components.ChevronLeftIcon, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-5 h-5") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("w-5 h-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.nextMonth) }, ...{ class: ("p-1 hover:bg-gray-100 rounded") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ChevronRightIcon;
    /** @type { [typeof __VLS_components.ChevronRightIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-5 h-5") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("w-5 h-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goToToday) }, ...{ class: ("text-sm text-blue-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-7 mb-2") }, });
    for (const [day] of __VLS_getVForSourceType((__VLS_ctx.daysOfWeek))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((day)), ...{ class: ("text-sm font-medium text-gray-500 text-center py-2") }, });
        (day);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-7 gap-px bg-gray-200") }, });
    for (const [day, index] of __VLS_getVForSourceType((__VLS_ctx.calendarDays))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("min-h-[120px] bg-white p-2") }, ...{ class: (({
                    'bg-gray-50': !day.isCurrentMonth,
                    'bg-blue-50': day.isToday
                })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm") }, ...{ class: (({ 'text-gray-400': !day.isCurrentMonth })) }, });
        (day.date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-1 space-y-1") }, });
        for (const [event] of __VLS_getVForSourceType((day.events))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((event.id)), ...{ class: ("text-xs p-1 rounded truncate") }, ...{ class: ((__VLS_ctx.getEventClass(event.type))) }, });
            (event.title);
        }
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-blue-600'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-7'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-7'];
    __VLS_styleScopedClasses['gap-px'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['min-h-[120px]'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['bg-blue-50'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['space-y-1'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['truncate'];
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
