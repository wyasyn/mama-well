import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../data/styles";
import { healthTips } from "../data/tipsData";
import { translations } from "../data/translations";

export default function TipsPage() {
  const [language, setLanguage] = useState<"en" | "lg">("en");

  const t = translations[language];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>{t.healthTips}</Text>
        <TouchableOpacity
          onPress={() => setLanguage(language === "en" ? "lg" : "en")}
          style={styles.languageButton}
        >
          <Text style={styles.languageButtonText}>
            {language === "en" ? "LG" : "EN"}
          </Text>
        </TouchableOpacity>
      </View>

      {healthTips.map((tip) => (
        <View key={tip.id} style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Ionicons name={tip.icon as any} size={24} color={tip.color} />
            <Text style={styles.tipTitle}>
              {language === "en" ? tip.title : tip.lugandaTitle}
            </Text>
          </View>
          <Text style={styles.tipDescription}>
            {language === "en" ? tip.description : tip.lugandaDescription}
          </Text>
          {tip.actionItems && (
            <View style={styles.actionItems}>
              <Text style={styles.actionItemsTitle}>{t.whatYouCanDo}:</Text>
              {(language === "en"
                ? tip.actionItems
                : tip.lugandaActionItems || tip.actionItems
              ).map((item, index) => (
                <Text key={index} style={styles.actionItem}>
                  • {item}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
