import VideoScreen from "@/components/vide";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { gentleExercises } from "../data/exercisesData";
import { styles } from "../data/styles";
import { translations } from "../data/translations";

export default function ExercisesPage() {
  const [language, setLanguage] = useState<"en" | "lg">("en");
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const t = translations[language];

  const markExerciseComplete = async (
    exerciseId: string,
    exerciseName: string
  ) => {
    try {
      const today = new Date().toDateString();
      const newCompleted = [...completedExercises, exerciseId];
      setCompletedExercises(newCompleted);

      await AsyncStorage.setItem(
        `exercises_${today}`,
        JSON.stringify(newCompleted)
      );

      Alert.alert(t.success, `${exerciseName} ${t.markedComplete}`);
    } catch (error) {
      console.error("Error saving exercise completion:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>{t.gentleExercises}</Text>
        <TouchableOpacity
          onPress={() => setLanguage(language === "en" ? "lg" : "en")}
          style={styles.languageButton}
        >
          <Text style={styles.languageButtonText}>
            {language === "en" ? "LG" : "EN"}
          </Text>
        </TouchableOpacity>
      </View>

      {gentleExercises.map((exercise) => (
        <View key={exercise.id} style={styles.exerciseCard}>
          <VideoScreen videoSource={exercise.videoUrl} />

          <View style={styles.exerciseContent}>
            <Text style={styles.exerciseName}>
              {language === "en" ? exercise.name : exercise.lugandaName}
            </Text>
            <Text style={styles.exerciseDescription}>
              {language === "en"
                ? exercise.description
                : exercise.lugandaDescription}
            </Text>
            <Text style={styles.exerciseDuration}>
              {t.duration}: {exercise.duration}
            </Text>
            <Text style={styles.exerciseBenefits}>
              {t.benefits}:{" "}
              {language === "en" ? exercise.benefits : exercise.lugandaBenefits}
            </Text>

            <View style={styles.exerciseInstructions}>
              <Text style={styles.instructionsTitle}>{t.instructions}:</Text>
              {(language === "en"
                ? exercise.instructions
                : exercise.lugandaInstructions
              ).map((instruction, index) => (
                <Text key={index} style={styles.instructionStep}>
                  {index + 1}. {instruction}
                </Text>
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.actionButton,
                completedExercises.includes(exercise.id) &&
                  styles.completedButton,
              ]}
              onPress={() => markExerciseComplete(exercise.id, exercise.name)}
              disabled={completedExercises.includes(exercise.id)}
            >
              <Ionicons
                name={
                  completedExercises.includes(exercise.id) ? "checkmark" : "add"
                }
                size={16}
                color="white"
              />
              <Text style={styles.actionButtonText}>
                {completedExercises.includes(exercise.id)
                  ? t.completed
                  : t.markComplete}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
