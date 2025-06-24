import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../data/styles";
import { translations } from "../data/translations";

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "lg">("en");
  const [todayProgress, setTodayProgress] = useState({
    meals: 0,
    exercises: 0,
    water: 0,
    medication: false,
  });

  const t = translations[language];

  useEffect(() => {
    loadTodayProgress();
    scheduleDefaultNotifications();
  }, []);

  const loadTodayProgress = async () => {
    try {
      const today = new Date().toDateString();
      const progress = await AsyncStorage.getItem(`progress_${today}`);
      if (progress) {
        setTodayProgress(JSON.parse(progress));
      }
    } catch (error) {
      console.error("Error loading progress:", error);
    }
  };

  const scheduleDefaultNotifications = async () => {
    try {
      const alreadyScheduled = await AsyncStorage.getItem(
        "notifications_scheduled"
      );
      if (alreadyScheduled === "true") {
        console.log("Notifications already scheduled.");
        return;
      }

      // Request notification permissions
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") {
          console.warn("Notifications permission not granted.");
          return;
        }
      }

      // Cancel any previously scheduled notifications
      await Notifications.cancelAllScheduledNotificationsAsync();

      // Define notifications with hours, minutes, and localized messages
      const notifications = [
        { hour: 7, minute: 0, message: t.notifications.breakfast },
        { hour: 12, minute: 0, message: t.notifications.lunch },
        { hour: 18, minute: 0, message: t.notifications.dinner },
        { hour: 8, minute: 0, message: t.notifications.exercise },
        { hour: 9, minute: 0, message: t.notifications.medication },
      ];

      // Schedule each notification
      for (const notif of notifications) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: t.appName,
            body: notif.message,
            sound: true,
          },
          trigger: {
            type: "calendar",
            hour: notif.hour,
            minute: notif.minute,
            repeats: true,
          } as Notifications.CalendarTriggerInput,
        });
      }

      // Mark as scheduled to prevent re-scheduling
      await AsyncStorage.setItem("notifications_scheduled", "true");
      console.log("Notifications scheduled successfully.");
    } catch (error) {
      console.error("Failed to schedule notifications:", error);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "lg" : "en");
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t.appName}</Text>
        <TouchableOpacity
          onPress={toggleLanguage}
          style={styles.languageButton}
        >
          <Text style={styles.languageButtonText}>
            {language === "en" ? "LG" : "EN"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.progressCard}>
          <Text style={styles.cardTitle}>{t.todayProgress}</Text>
          <View style={styles.progressGrid}>
            <View style={styles.progressItem}>
              <Ionicons name="restaurant" size={24} color="#4CAF50" />
              <Text style={styles.progressNumber}>{todayProgress.meals}/3</Text>
              <Text style={styles.progressLabel}>{t.meals}</Text>
            </View>
            <View style={styles.progressItem}>
              <Ionicons name="fitness" size={24} color="#2196F3" />
              <Text style={styles.progressNumber}>
                {todayProgress.exercises}/2
              </Text>
              <Text style={styles.progressLabel}>{t.exercises}</Text>
            </View>
            <View style={styles.progressItem}>
              <Ionicons name="water" size={24} color="#00BCD4" />
              <Text style={styles.progressNumber}>{todayProgress.water}/8</Text>
              <Text style={styles.progressLabel}>{t.waterGlasses}</Text>
            </View>
            <View style={styles.progressItem}>
              <Ionicons
                name="medical"
                size={24}
                color={todayProgress.medication ? "#4CAF50" : "#FF9800"}
              />
              <Text style={styles.progressNumber}>
                {todayProgress.medication ? "✓" : "○"}
              </Text>
              <Text style={styles.progressLabel}>{t.medication}</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuGrid}>
          <Link href="/meals" asChild>
            <TouchableOpacity>
              <View style={[styles.menuCard, { backgroundColor: "#E8F5E8" }]}>
                <Ionicons name="restaurant" size={32} color="#4CAF50" />
                <Text style={styles.menuCardTitle}>{t.healthyMeals}</Text>
                <Text style={styles.menuCardSubtitle}>{t.ugandanFoods}</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/exercises" asChild>
            <TouchableOpacity>
              <View style={[styles.menuCard, { backgroundColor: "#E3F2FD" }]}>
                <Ionicons name="fitness" size={32} color="#2196F3" />
                <Text style={styles.menuCardTitle}>{t.gentleExercises}</Text>
                <Text style={styles.menuCardSubtitle}>{t.ageAppropriate}</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/tips" asChild>
            <TouchableOpacity>
              <View style={[styles.menuCard, { backgroundColor: "#FFF3E0" }]}>
                <Ionicons name="bulb" size={32} color="#FF9800" />
                <Text style={styles.menuCardTitle}>{t.healthTips}</Text>
                <Text style={styles.menuCardSubtitle}>{t.dailyAdvice}</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/routine" asChild>
            <TouchableOpacity>
              <View style={[styles.menuCard, { backgroundColor: "#F3E5F5" }]}>
                <Ionicons name="calendar" size={32} color="#9C27B0" />
                <Text style={styles.menuCardTitle}>{t.dailyRoutine}</Text>
                <Text style={styles.menuCardSubtitle}>{t.trackProgress}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.reminderCard}>
          <Ionicons name="heart" size={24} color="#E91E63" />
          <Text style={styles.reminderText}>{t.bloodPressureReminder}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
