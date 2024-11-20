import { ref, computed } from 'vue';
import { PlayCircleIcon, ClipboardListIcon, CheckCircle2Icon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Dummy data - replace with API call using route params
const course = ref({
    id: '1',
    title: "Beginner's Guide to becoming a professional UI/UX Designer",
    thumbnail: "https://placehold.co/384x192",
    instructor: {
        id: '1',
        name: 'Joseph Brandon',
        title: 'Senior UI/UX Designer',
        avatar: "https://placehold.co/24"
    },
    duration: '24+ Hours',
    tag: 'UI/UX',
    description: 'Learn the fundamentals of UI/UX design...',
    progress: 45,
    modules: [
        {
            id: '1',
            title: 'Introduction to UI/UX',
            duration: '15 mins',
            type: 'video',
            completed: true,
            content: {
                videoUrl: 'https://example.com/video.mp4',
                description: 'An introduction to the fundamentals of UI/UX design...'
            }
        },
        {
            id: '2',
            title: 'Module 1 Quiz',
            duration: '10 mins',
            type: 'quiz',
            completed: false,
            content: {
                questions: [
                    {
                        id: '1',
                        text: 'What is the role of a User Interface and User Experience Designer (UI/UX)?',
                        points: 3,
                        options: [
                            { id: 'a', text: 'To design the visual only', isCorrect: false },
                            { id: 'b', text: 'To design the experience only', isCorrect: false },
                            { id: 'c', text: 'To design both the interface and the experience', isCorrect: true },
                            { id: 'd', text: 'None of the above', isCorrect: false }
                        ]
                    }
                    // Add more questions...
                ],
                timeLimit: 600,
                totalPoints: 10
            }
        }
    ]
});
const activeModule = ref(course.value.modules[0]);
const timeRemaining = ref(600); // 10 minutes in seconds
const currentQuestionIndex = ref(0);
const selectedAnswer = ref('');
const setActiveModule = (module) => {
    activeModule.value = module;
    if (module.type === 'quiz') {
        currentQuestionIndex.value = 0;
        selectedAnswer.value = '';
        timeRemaining.value = module.content.timeLimit;
    }
};
const currentQuestion = computed(() => {
    if (activeModule.value?.type === 'quiz') {
        const questions = activeModule.value.content.questions;
        return questions[currentQuestionIndex.value];
    }
    return null;
});
const totalQuestions = computed(() => {
    if (activeModule.value?.type === 'quiz') {
        return activeModule.value.content.questions.length;
    }
    return 0;
});
const isLastQuestion = computed(() => {
    return currentQuestionIndex.value === totalQuestions.value - 1;
});
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
const nextQuestion = () => {
    if (isLastQuestion.value) {
        // Handle quiz submission
        console.log('Quiz completed!');
    }
    else {
        currentQuestionIndex.value++;
        selectedAnswer.value = '';
    }
};
const previousQuestion = () => {
    if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--;
        selectedAnswer.value = '';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen bg-gray-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-7xl mx-auto px-4 py-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-2") }, });
    (__VLS_ctx.course.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.course.instructor.avatar)), alt: ((__VLS_ctx.course.instructor.name)), ...{ class: ("w-8 h-8 rounded-full mr-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-medium") }, });
    (__VLS_ctx.course.instructor.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm text-gray-600") }, });
    (__VLS_ctx.course.instructor.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 lg:grid-cols-3 gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:col-span-2") }, });
    if (__VLS_ctx.activeModule?.type === 'video') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-black rounded-lg overflow-hidden mb-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.video)({ ...{ class: ("w-full aspect-video") }, controls: (true), src: ((__VLS_ctx.activeModule.content.videoUrl)), });
    }
    else if (__VLS_ctx.activeModule?.type === 'quiz') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-lg p-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center mb-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-semibold") }, });
        (__VLS_ctx.activeModule.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm text-gray-600") }, });
        (__VLS_ctx.formatTime(__VLS_ctx.timeRemaining));
        if (__VLS_ctx.currentQuestion) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-lg font-medium") }, });
            (__VLS_ctx.currentQuestionIndex + 1);
            (__VLS_ctx.totalQuestions);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-gray-800") }, });
            (__VLS_ctx.currentQuestion.text);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-3") }, });
            for (const [option] of __VLS_getVForSourceType((__VLS_ctx.currentQuestion.options))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ key: ((option.id)), ...{ class: ("flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("radio"), name: (('question-' + __VLS_ctx.currentQuestion.id)), value: ((option.id)), ...{ class: ("mr-3") }, });
                (__VLS_ctx.selectedAnswer);
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (option.text);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between pt-6") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.previousQuestion) }, ...{ class: ("px-4 py-2 text-gray-600 hover:text-gray-800") }, disabled: ((__VLS_ctx.currentQuestionIndex === 0)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.nextQuestion) }, ...{ class: ("px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700") }, });
            (__VLS_ctx.isLastQuestion ? 'Submit' : 'Next');
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-lg p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-semibold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600") }, });
    (__VLS_ctx.activeModule?.type === 'video'
        ? __VLS_ctx.activeModule.content.description
        : 'Complete the quiz to test your knowledge.');
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:col-span-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-lg p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    for (const [module] of __VLS_getVForSourceType((__VLS_ctx.course.modules))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.setActiveModule(module);
                } }, key: ((module.id)), ...{ class: ("w-full flex items-center p-3 rounded-lg hover:bg-gray-50") }, ...{ class: ((module.id === __VLS_ctx.activeModule?.id ? 'bg-blue-50' : '')) }, });
        const __VLS_0 = ((module.type === 'video' ? __VLS_ctx.PlayCircleIcon : __VLS_ctx.ClipboardListIcon));
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-5 h-5 mr-3") }, ...{ class: ((module.completed ? 'text-green-500' : 'text-gray-400')) }, }));
        const __VLS_2 = __VLS_1({ ...{ class: ("w-5 h-5 mr-3") }, ...{ class: ((module.completed ? 'text-green-500' : 'text-gray-400')) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 text-left") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-medium") }, });
        (module.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm text-gray-600") }, });
        (module.duration);
        if (module.completed) {
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.CheckCircle2Icon;
            /** @type { [typeof __VLS_components.CheckCircle2Icon, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-5 h-5 text-green-500 ml-2") }, }));
            const __VLS_8 = __VLS_7({ ...{ class: ("w-5 h-5 text-green-500 ml-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        }
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-6'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['lg:grid-cols-3'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['lg:col-span-2'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['aspect-video'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['space-y-3'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['mr-3'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['pt-6'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['hover:text-gray-800'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-blue-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['lg:col-span-1'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-50'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['mr-3'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-green-500'];
    __VLS_styleScopedClasses['ml-2'];
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
            PlayCircleIcon: PlayCircleIcon,
            ClipboardListIcon: ClipboardListIcon,
            CheckCircle2Icon: CheckCircle2Icon,
            course: course,
            activeModule: activeModule,
            timeRemaining: timeRemaining,
            currentQuestionIndex: currentQuestionIndex,
            selectedAnswer: selectedAnswer,
            setActiveModule: setActiveModule,
            currentQuestion: currentQuestion,
            totalQuestions: totalQuestions,
            isLastQuestion: isLastQuestion,
            formatTime: formatTime,
            nextQuestion: nextQuestion,
            previousQuestion: previousQuestion,
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
