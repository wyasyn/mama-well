import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import * as Notifications from "expo-notifications";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { imageMap } from "../data/imageMap";
import { ugandanMeals } from "../data/mealsData";
import { styles } from "../data/styles";
import { translations } from "../data/translations";

export default function MealsPage() {
  const [language, setLanguage] = useState<"en" | "lg">("en");
  const [completedMeals, setCompletedMeals] = useState<string[]>([]);

  const t = translations[language];

  const markMealComplete = async (mealId: string, mealName: string) => {
    try {
      const today = new Date().toDateString();
      const newCompleted = [...completedMeals, mealId];
      setCompletedMeals(newCompleted);

      await AsyncStorage.setItem(
        `meals_${today}`,
        JSON.stringify(newCompleted)
      );

      Alert.alert(t.success, `${mealName} ${t.markedComplete}`);
    } catch (error) {
      console.error("Error saving meal completion:", error);
    }
  };

  const scheduleCustomNotification = async (mealName: string) => {
    const now = new Date();
    const triggerTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now

    await Notifications.scheduleNotificationAsync({
      content: {
        title: t.mealReminder,
        body: `${t.timeFor} ${mealName}`,
        sound: true,
      },
      trigger: {
        type: "date",
        date: triggerTime,
      } as Notifications.DateTriggerInput,
    });

    Alert.alert(t.reminderSet, `${t.reminderSetFor} ${mealName}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>{t.healthyMeals}</Text>
        <TouchableOpacity
          onPress={() => setLanguage(language === "en" ? "lg" : "en")}
          style={styles.languageButton}
        >
          <Text style={styles.languageButtonText}>
            {language === "en" ? "LG" : "EN"}
          </Text>
        </TouchableOpacity>
      </View>

      {Object.entries(ugandanMeals).map(([category, meals]) => (
        <View key={category} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>
            {category === "breakfast"
              ? t.breakfast
              : category === "lunch"
              ? t.lunch
              : category === "dinner"
              ? t.dinner
              : t.snacks}
          </Text>

          {meals.map((meal) => (
            <View key={meal.id} style={styles.mealCard}>
              <Image
                source={
                  imageMap[meal.image as keyof typeof imageMap] || {
                    uri: meal.image,
                  }
                }
                contentFit="cover"
                style={styles.mealImage}
              />
              <View style={styles.mealContent}>
                <Text style={styles.mealName}>
                  {language === "en" ? meal.name : meal.lugandaName}
                </Text>
                <Text style={styles.mealDescription}>
                  {language === "en"
                    ? meal.description
                    : meal.lugandaDescription}
                </Text>
                <Text style={styles.mealBenefits}>
                  {t.benefits}:{" "}
                  {language === "en" ? meal.benefits : meal.lugandaBenefits}
                </Text>

                <View style={styles.mealActions}>
                  <TouchableOpacity
                    style={[
                      styles.actionButton,
                      completedMeals.includes(meal.id) &&
                        styles.completedButton,
                    ]}
                    onPress={() => markMealComplete(meal.id, meal.name)}
                    disabled={completedMeals.includes(meal.id)}
                  >
                    <Ionicons
                      name={
                        completedMeals.includes(meal.id) ? "checkmark" : "add"
                      }
                      size={16}
                      color="white"
                    />
                    <Text style={styles.actionButtonText}>
                      {completedMeals.includes(meal.id)
                        ? t.completed
                        : t.markComplete}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.reminderButton}
                    onPress={() => scheduleCustomNotification(meal.name)}
                  >
                    <Ionicons name="notifications" size={16} color="#2196F3" />
                    <Text style={styles.reminderButtonText}>
                      {t.setReminder}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
