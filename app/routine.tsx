import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { dailyRoutine } from "../data/routineData";
import { styles } from "../data/styles";
import { translations } from "../data/translations";

export default function RoutinePage() {
  const [language, setLanguage] = useState<"en" | "lg">("en");
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  const t = translations[language];

  useEffect(() => {
    loadTodayRoutine();
  }, []);

  const loadTodayRoutine = async () => {
    try {
      const today = new Date().toDateString();
      const routine = await AsyncStorage.getItem(`routine_${today}`);
      if (routine) {
        setCompletedItems(JSON.parse(routine));
      }
    } catch (error) {
      console.error("Error loading routine:", error);
    }
  };

  const toggleRoutineItem = async (itemId: string) => {
    try {
      const today = new Date().toDateString();
      let newCompleted;

      if (completedItems.includes(itemId)) {
        newCompleted = completedItems.filter((id) => id !== itemId);
      } else {
        newCompleted = [...completedItems, itemId];
      }

      setCompletedItems(newCompleted);
      await AsyncStorage.setItem(
        `routine_${today}`,
        JSON.stringify(newCompleted)
      );
    } catch (error) {
      console.error("Error saving routine:", error);
    }
  };

  const resetDay = () => {
    Alert.alert(t.resetDay, t.resetDayConfirm, [
      { text: t.cancel, style: "cancel" },
      {
        text: t.reset,
        onPress: async () => {
          setCompletedItems([]);
          const today = new Date().toDateString();
          await AsyncStorage.removeItem(`routine_${today}`);
        },
      },
    ]);
  };

  const completionPercentage = Math.round(
    (completedItems.length / dailyRoutine.length) * 100
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>{t.dailyRoutine}</Text>
        <TouchableOpacity
          onPress={() => setLanguage(language === "en" ? "lg" : "en")}
          style={styles.languageButton}
        >
          <Text style={styles.languageButtonText}>
            {language === "en" ? "LG" : "EN"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressSummary}>
        <Text style={styles.progressTitle}>{t.todayProgress}</Text>
        <Text style={styles.progressPercentage}>{completionPercentage}%</Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${completionPercentage}%` }]}
          />
        </View>
        <Text style={styles.progressText}>
          {completedItems.length} {t.of} {dailyRoutine.length} {t.completed}
        </Text>
      </View>

      {dailyRoutine.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.routineItem,
            completedItems.includes(item.id) && styles.completedRoutineItem,
          ]}
          onPress={() => toggleRoutineItem(item.id)}
        >
          <View style={styles.routineItemLeft}>
            <Ionicons
              name={
                completedItems.includes(item.id)
                  ? "checkmark-circle"
                  : "ellipse-outline"
              }
              size={24}
              color={completedItems.includes(item.id) ? "#4CAF50" : "#ccc"}
            />
            <View style={styles.routineItemContent}>
              <Text
                style={[
                  styles.routineItemTitle,
                  completedItems.includes(item.id) && styles.completedText,
                ]}
              >
                {language === "en" ? item.title : item.lugandaTitle}
              </Text>
              <Text style={styles.routineItemTime}>{item.time}</Text>
              <Text style={styles.routineItemDescription}>
                {language === "en" ? item.description : item.lugandaDescription}
              </Text>
            </View>
          </View>
          <Ionicons name={item.icon as any} size={20} color={item.color} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.resetButton} onPress={resetDay}>
        <Ionicons name="refresh" size={16} color="white" />
        <Text style={styles.resetButtonText}>{t.resetDay}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
