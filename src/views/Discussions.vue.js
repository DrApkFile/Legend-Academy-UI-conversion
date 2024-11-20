import { ref } from 'vue';
import { Search as SearchIcon, Star as StarIcon, MoreVertical as MoreVerticalIcon, Paperclip as PaperclipIcon, Send as SendIcon, LayoutDashboard, BookOpen, ClipboardList, Calendar, MessageSquare, Folder, Award, HelpCircle, Settings, Bell } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentTab = ref('Messages');
const tabs = [
    { name: 'Messages' },
    { name: 'Discussions' }
];
const navigationItems = [
    { name: 'Dashboard', href: '#', icon: LayoutDashboard, current: false },
    { name: 'Courses', href: '#', icon: BookOpen, current: false },
    { name: 'Assignments', href: '#', icon: ClipboardList, current: false },
    { name: 'Calendar', href: '#', icon: Calendar, current: false },
    { name: 'Discussions', href: '#', icon: MessageSquare, current: true },
    { name: 'Resources', href: '#', icon: Folder, current: false },
    { name: 'Achievements', href: '#', icon: Award, current: false },
    { name: 'Support', href: '#', icon: HelpCircle, current: false },
    { name: 'Settings', href: '#', icon: Settings, current: false },
    { name: 'Notification', href: '#', icon: Bell, current: false }
];
const messages = [
    {
        id: 1,
        name: 'Jennifer Amega',
        avatar: 'https://placehold.co/40',
        text: 'Hey! Did you check the UI/UX WordPress For Flora App Design?',
        time: '09:30 PM'
    },
    {
        id: 2,
        name: 'Judith Amakuliba',
        avatar: 'https://placehold.co/40',
        text: 'Hey! Did you check the UI/UX WordPress For Flora App Design?',
        time: '09:30 PM'
    }
];
const threads = [
    {
        id: 1,
        title: 'Introduction to UI/UX',
        time: '2h ago',
        participants: [
            { id: 1, name: 'User 1', avatar: 'https://placehold.co/24' },
            { id: 2, name: 'User 2', avatar: 'https://placehold.co/24' },
            { id: 3, name: 'User 3', avatar: 'https://placehold.co/24' },
            { id: 4, name: 'User 4', avatar: 'https://placehold.co/24' }
        ]
    },
    {
        id: 2,
        title: "Beginner's Guide to becoming professional UI/UX Designer",
        time: '3h ago',
        participants: [
            { id: 1, name: 'User 1', avatar: 'https://placehold.co/24' },
            { id: 2, name: 'User 2', avatar: 'https://placehold.co/24' },
            { id: 3, name: 'User 3', avatar: 'https://placehold.co/24' }
        ]
    }
];
const chatMessages = [
    {
        id: 1,
        message: 'Hey! Did you check the UI/UX WordPress For Flora App Design?',
        time: '09:30 PM',
        isSender: false
    },
    {
        id: 2,
        message: 'Oh, Hello! All Perfect, I Will Check It And Get Back To You Soon',
        time: '09:31 PM',
        isSender: true
    },
    {
        id: 3,
        message: `Thanks for checking this project, I hope you'll believe me a lot.`,
        time: '09:32 PM',
        isSender: false
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen bg-gray-50 flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex flex-col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 border-b border-gray-200 bg-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SearchIcon;
    /** @type { [typeof __VLS_components.SearchIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("absolute left-3 top-1/2 -mt-2.5 text-gray-400 h-5 w-5") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("absolute left-3 top-1/2 -mt-2.5 text-gray-400 h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Search your course here..."), ...{ class: ("w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full max-w-md border-r border-gray-200 bg-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 border-b border-gray-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border-b border-gray-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("flex px-4") }, });
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.currentTab = tab.name;
                } }, key: ((tab.name)), ...{ class: (([
                    __VLS_ctx.currentTab === tab.name
                        ? 'border-orange-500 text-orange-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'px-3 py-2 text-sm font-medium border-b-2'
                ])) }, });
        (tab.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SearchIcon;
    /** @type { [typeof __VLS_components.SearchIcon, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("absolute left-3 top-1/2 -mt-2.5 text-gray-400 h-5 w-5") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("absolute left-3 top-1/2 -mt-2.5 text-gray-400 h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Search or start a new chat"), ...{ class: ("w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-y-auto h-[calc(100vh-280px)]") }, });
    if (__VLS_ctx.currentTab === 'Messages') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-1") }, });
        for (const [message] of __VLS_getVForSourceType((__VLS_ctx.messages))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((message.id)), ...{ class: ("px-4 py-3 hover:bg-gray-50 cursor-pointer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start space-x-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((message.avatar)), alt: ((message.name)), ...{ class: ("w-10 h-10 rounded-full") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 min-w-0") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium text-gray-900") }, });
            (message.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-gray-500") }, });
            (message.time);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500 truncate") }, });
            (message.text);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-1") }, });
        for (const [thread] of __VLS_getVForSourceType((__VLS_ctx.threads))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((thread.id)), ...{ class: ("px-4 py-3 hover:bg-gray-50 cursor-pointer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between mb-1") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-sm font-medium") }, });
            (thread.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-gray-500") }, });
            (thread.time);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex -space-x-2") }, });
            for (const [participant] of __VLS_getVForSourceType((thread.participants.slice(0, 3)))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ key: ((participant.id)), src: ((participant.avatar)), alt: ((participant.name)), ...{ class: ("w-6 h-6 rounded-full border-2 border-white") }, });
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-gray-500") }, });
            (thread.participants.length);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex flex-col bg-gray-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 bg-white border-b border-gray-200 flex items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://placehold.co/40"), alt: (""), ...{ class: ("w-10 h-10 rounded-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-sm font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-gray-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("p-2 hover:bg-gray-100 rounded-full") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.StarIcon;
    /** @type { [typeof __VLS_components.StarIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-5 h-5 text-gray-400") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("w-5 h-5 text-gray-400") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("p-2 hover:bg-gray-100 rounded-full") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.SearchIcon;
    /** @type { [typeof __VLS_components.SearchIcon, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("w-5 h-5 text-gray-400") }, }));
    const __VLS_20 = __VLS_19({ ...{ class: ("w-5 h-5 text-gray-400") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("p-2 hover:bg-gray-100 rounded-full") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.MoreVerticalIcon;
    /** @type { [typeof __VLS_components.MoreVerticalIcon, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("w-5 h-5 text-gray-400") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("w-5 h-5 text-gray-400") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 overflow-y-auto p-4 space-y-4") }, });
    for (const [chat] of __VLS_getVForSourceType((__VLS_ctx.chatMessages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((chat.id)), ...{ class: (([
                    'flex',
                    chat.isSender ? 'justify-end' : 'justify-start'
                ])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (([
                    'max-w-[70%] rounded-lg p-3',
                    chat.isSender ? 'bg-orange-500 text-white' : 'bg-white'
                ])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
        (chat.message);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: (([
                    'text-xs mt-1',
                    chat.isSender ? 'text-orange-100' : 'text-gray-500'
                ])) }, });
        (chat.time);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 bg-white border-t border-gray-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("p-2 hover:bg-gray-100 rounded-full") }, });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.PaperclipIcon;
    /** @type { [typeof __VLS_components.PaperclipIcon, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("w-5 h-5 text-gray-400") }, }));
    const __VLS_32 = __VLS_31({ ...{ class: ("w-5 h-5 text-gray-400") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Type a message..."), ...{ class: ("flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.SendIcon;
    /** @type { [typeof __VLS_components.SendIcon, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("w-5 h-5") }, }));
    const __VLS_38 = __VLS_37({ ...{ class: ("w-5 h-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-3'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['-mt-2.5'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['pl-10'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-md'];
    __VLS_styleScopedClasses['border-r'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['border-b-2'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-3'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['-mt-2.5'];
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
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['h-[calc(100vh-280px)]'];
    __VLS_styleScopedClasses['space-y-1'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['space-x-3'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['truncate'];
    __VLS_styleScopedClasses['space-y-1'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['-space-x-2'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-white'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-3'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['max-w-[70%]'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['border-t'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-orange-500'];
    __VLS_styleScopedClasses['focus:border-orange-500'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['bg-orange-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['hover:bg-orange-600'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
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
            StarIcon: StarIcon,
            MoreVerticalIcon: MoreVerticalIcon,
            PaperclipIcon: PaperclipIcon,
            SendIcon: SendIcon,
            currentTab: currentTab,
            tabs: tabs,
            messages: messages,
            threads: threads,
            chatMessages: chatMessages,
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
