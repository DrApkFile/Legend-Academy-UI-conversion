import { ref, onMounted, onUnmounted } from 'vue';
import { Bell as BellIcon, BellOff as BellOffIcon, Trophy as TrophyIcon, BookOpen as BookOpenIcon, Calendar as CalendarIcon } from 'lucide-vue-next';
export default (await import('vue')).defineComponent({
    name: 'Dashboard',
    components: {
        BellIcon,
        BellOffIcon,
        TrophyIcon,
        BookOpenIcon,
        CalendarIcon
    },
    setup() {
        const showNotifications = ref(false);
        const unreadNotifications = ref(2);
        const recentCourses = ref([
            {
                id: '1',
                title: "Beginner's Guide to becoming a professional UI/UX Designer",
                instructor: "Joseph Brandon",
                duration: "24+ Hours",
                tag: "UI/UX",
                thumbnail: "https://placehold.co/320x160",
                instructorImage: "https://placehold.co/24"
            },
            {
                id: '2',
                title: "Advance your career, become a Senior UI/UX Designer",
                instructor: "Joseph Brandon",
                duration: "24+ Hours",
                tag: "UI/UX",
                thumbnail: "https://placehold.co/320x160",
                instructorImage: "https://placehold.co/24"
            },
            {
                id: '3',
                title: "Front-End Web Developer Certificate Course",
                instructor: "Joseph Brandon",
                duration: "24+ Hours",
                tag: "CODING",
                thumbnail: "https://placehold.co/320x160",
                instructorImage: "https://placehold.co/24"
            }
        ]);
        const notifications = ref([
            {
                id: '1',
                type: 'achievement',
                message: 'Congratulations! You have earned 100 Points',
                timestamp: new Date(Date.now() - 20 * 60000),
                read: false
            },
            {
                id: '2',
                type: 'assignment',
                message: 'You have been assigned a new assignment',
                timestamp: new Date(Date.now() - 45 * 60000),
                read: false
            },
            {
                id: '3',
                type: 'course',
                message: 'New course "Advanced UI Patterns" is available',
                timestamp: new Date(Date.now() - 120 * 60000),
                read: true
            }
        ]);
        const toggleNotifications = () => {
            showNotifications.value = !showNotifications.value;
        };
        const markAllAsRead = () => {
            notifications.value = notifications.value.map(notification => ({
                ...notification,
                read: true
            }));
            unreadNotifications.value = 0;
        };
        const getNotificationIcon = (type) => {
            switch (type) {
                case 'achievement':
                    return TrophyIcon;
                case 'course':
                    return BookOpenIcon;
                case 'assignment':
                    return CalendarIcon;
                default:
                    return BellIcon;
            }
        };
        const getNotificationIconColor = (type) => {
            switch (type) {
                case 'achievement':
                    return 'text-yellow-500';
                case 'course':
                    return 'text-blue-500';
                case 'assignment':
                    return 'text-green-500';
                default:
                    return 'text-gray-500';
            }
        };
        const formatTime = (date) => {
            const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
            if (minutes < 60)
                return `${minutes}m ago`;
            if (minutes < 1440)
                return `${Math.floor(minutes / 60)}h ago`;
            return date.toLocaleDateString();
        };
        // Close notifications when clicking outside
        const handleClickOutside = (event) => {
            const target = event.target;
            if (!target.closest('.notification-dropdown')) {
                showNotifications.value = false;
            }
        };
        onMounted(() => {
            document.addEventListener('click', handleClickOutside);
        });
        onUnmounted(() => {
            document.removeEventListener('click', handleClickOutside);
        });
        return {
            showNotifications,
            unreadNotifications,
            recentCourses,
            notifications,
            toggleNotifications,
            markAllAsRead,
            getNotificationIcon,
            getNotificationIconColor,
            formatTime
        };
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            BellIcon,
            BellOffIcon,
            TrophyIcon,
            BookOpenIcon,
            CalendarIcon
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-orange-500 text-white rounded-xl p-6 relative overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative z-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute right-0 bottom-0 opacity-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-32 h-32 bg-white rounded-full -mb-16 -mr-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8") }, });
    for (const [course] of __VLS_getVForSourceType((__VLS_ctx.recentCourses))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((course.id)), ...{ class: ("bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((course.thumbnail)), alt: ((course.title)), ...{ class: ("w-full h-40 object-cover") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs font-medium text-blue-600 mb-2 block") }, });
        (course.tag);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mb-2") }, });
        (course.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center mb-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((course.instructorImage)), alt: ((course.instructor)), ...{ class: ("w-6 h-6 rounded-full mr-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-600") }, });
        (course.instructor);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-gray-500") }, });
        (course.duration);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-blue-600 hover:text-blue-700") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed top-4 right-4 z-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleNotifications) }, ...{ class: ("relative p-2 rounded-lg hover:bg-gray-100 transition-colors") }, ...{ class: (({ 'bg-gray-100': __VLS_ctx.showNotifications })) }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BellIcon;
    /** @type { [typeof __VLS_components.BellIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-6 h-6") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-6 h-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.unreadNotifications > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full") }, });
        (__VLS_ctx.unreadNotifications);
    }
    if (__VLS_ctx.showNotifications) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 border-b border-gray-200 flex justify-between items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.markAllAsRead) }, ...{ class: ("text-sm text-blue-600 hover:text-blue-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-h-96 overflow-y-auto") }, });
        if (__VLS_ctx.notifications.length === 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 text-center text-gray-500") }, });
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.BellOffIcon;
            /** @type { [typeof __VLS_components.BellOffIcon, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-12 h-12 mx-auto mb-2 opacity-50") }, }));
            const __VLS_8 = __VLS_7({ ...{ class: ("w-12 h-12 mx-auto mb-2 opacity-50") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
        }
        else {
            for (const [notification] of __VLS_getVForSourceType((__VLS_ctx.notifications))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((notification.id)), ...{ class: ("p-4 border-b border-gray-100 hover:bg-gray-50") }, ...{ class: (({ 'bg-blue-50': !notification.read })) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-3") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-shrink-0") }, });
                const __VLS_12 = ((__VLS_ctx.getNotificationIcon(notification.type)));
                // @ts-ignore
                const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-5 h-5") }, ...{ class: ((__VLS_ctx.getNotificationIconColor(notification.type))) }, }));
                const __VLS_14 = __VLS_13({ ...{ class: ("w-5 h-5") }, ...{ class: ((__VLS_ctx.getNotificationIconColor(notification.type))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
                (notification.message);
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-gray-500 mt-1") }, });
                (__VLS_ctx.formatTime(notification.timestamp));
            }
        }
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['hover:bg-orange-50'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['opacity-10'];
    __VLS_styleScopedClasses['w-32'];
    __VLS_styleScopedClasses['h-32'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['-mb-16'];
    __VLS_styleScopedClasses['-mr-16'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['lg:grid-cols-3'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-40'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-blue-600'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-2'];
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
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-blue-600'];
    __VLS_styleScopedClasses['hover:text-blue-700'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top-4'];
    __VLS_styleScopedClasses['right-4'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['bg-red-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['w-80'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-blue-600'];
    __VLS_styleScopedClasses['hover:text-blue-700'];
    __VLS_styleScopedClasses['max-h-96'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['w-12'];
    __VLS_styleScopedClasses['h-12'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['opacity-50'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['bg-blue-50'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mt-1'];
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
