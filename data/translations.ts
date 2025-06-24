export const translations = {
  en: {
    // App basics
    appName: "Health Companion",
    todayProgress: "Today's Progress",
    bloodPressureReminder:
      "Remember: Take your medication as prescribed and monitor your blood pressure regularly",

    // Navigation
    meals: "Meals",
    exercises: "Exercises",
    healthyMeals: "Healthy Meals",
    gentleExercises: "Gentle Exercises",
    healthTips: "Health Tips",
    dailyRoutine: "Daily Routine",

    // Progress tracking
    waterGlasses: "Water",
    medication: "Medication",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snacks: "Snacks",

    // Actions
    markComplete: "Mark Complete",
    completed: "Completed",
    markedComplete: "marked as complete!",
    setReminder: "Set Reminder",
    success: "Success!",

    // Descriptions
    ugandanFoods: "Traditional & modern",
    ageAppropriate: "Safe for 50+",
    dailyAdvice: "Expert recommendations",
    trackProgress: "Monitor daily habits",

    // Details
    benefits: "Benefits",
    duration: "Duration",
    instructions: "Instructions",
    whatYouCanDo: "What you can do",

    // Notifications
    notifications: {
      breakfast: "Time for a healthy breakfast!",
      lunch: "Don't forget your nutritious lunch",
      dinner: "Prepare a heart-healthy dinner",
      exercise: "Time for gentle exercise",
      medication: "Take your blood pressure medication",
    },

    mealReminder: "Meal Reminder",
    timeFor: "Time for",
    reminderSet: "Reminder Set!",
    reminderSetFor: "Reminder set for",

    // Routine
    of: "of",
    resetDay: "Reset Day",
    resetDayConfirm: "Are you sure you want to reset today's progress?",
    cancel: "Cancel",
    reset: "Reset",
  },

  lg: {
    // App basics
    appName: "Omubukuusi",
    todayProgress: "Enkola ya Leero",
    bloodPressureReminder:
      "Jjukira: Nywa eddagala lyo nga bwe lagiddwa era weekenneenya omusaayi gwo buli kiseera",

    // Navigation
    meals: "Emmere",
    exercises: "Okwenyigiriza",
    healthyMeals: "Emmere Ennungi",
    gentleExercises: "Okwenyigiriza Okutewu",
    healthTips: "Amagezi ku Bulamu",
    dailyRoutine: "Enkola ya Buli Lunaku",

    // Progress tracking
    waterGlasses: "Amazzi",
    medication: "Eddagala",
    breakfast: "Emmere y'enkya",
    lunch: "Emmere ya ttuntu",
    dinner: "Emmere y'akawungeezi",
    snacks: "Okulya okutono",

    // Actions
    markComplete: "Teeka Akabonero",
    completed: "Kimaliriziddwa",
    markedComplete: "kiteekeddwako akabonero!",
    setReminder: "Teeka Ekijjukizo",
    success: "Kikulaakulaanye!",

    // Descriptions
    ugandanFoods: "Eza kika n'ez'omulembe",
    ageAppropriate: "Nnungi ab'emyaka 50+",
    dailyAdvice: "Amagezi ag'abakugu",
    trackProgress: "Goberera empisa za buli lunaku",

    // Details
    benefits: "Emiganyulo",
    duration: "Obudde",
    instructions: "Ebiragiro",
    whatYouCanDo: "Kye osobola okukola",

    // Notifications
    notifications: {
      breakfast: "Kiseera ky'emmere y'enkya ennungi!",
      lunch: "Teweerabira mmere ya ttuntu ey'amaanyi",
      dinner: "Tegeka emmere y'akawungeezi ennungi ey'omutima",
      exercise: "Kiseera ky'okwenyigiriza okutewu",
      medication: "Nywa eddagala ly'omusaayi",
    },

    mealReminder: "Ekijjukizo ky'Emmere",
    timeFor: "Kiseera kya",
    reminderSet: "Ekijjukizo Kiteekeddwa!",
    reminderSetFor: "Ekijjukizo kiteekeddwa",

    // Routine
    of: "ku",
    resetDay: "Ddamu Lunaku",
    resetDayConfirm: "Ddala oyagala okuddamu enkola ya leero?",
    cancel: "Sazaamu",
    reset: "Ddamu",
  },
} as const;

// Type for translation keys
export type TranslationKey = keyof typeof translations.en;
export type Language = keyof typeof translations;
