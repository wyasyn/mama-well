import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // Main container styles
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingBottom: 20,
  },

  scrollView: {
    flex: 1,
    padding: 16,
  },

  // Header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
  },

  languageButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },

  languageButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  // Page header styles
  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
  },

  // Progress card styles
  progressCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 16,
    textAlign: "center",
  },

  progressGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  progressItem: {
    alignItems: "center",
    minWidth: width * 0.2,
    marginVertical: 8,
  },

  progressNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 4,
  },

  progressLabel: {
    fontSize: 12,
    color: "#7f8c8d",
    marginTop: 2,
    textAlign: "center",
  },

  // Menu grid styles
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 16,
  },

  menuCard: {
    width: (width - 48) / 2,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  menuCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 12,
    textAlign: "center",
  },

  menuCardSubtitle: {
    fontSize: 12,
    color: "#7f8c8d",
    marginTop: 4,
    textAlign: "center",
  },

  // Reminder card styles
  reminderCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#e74c3c",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  reminderText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: "#2c3e50",
    lineHeight: 20,
  },

  // Meals page styles
  categorySection: {
    marginBottom: 24,
  },

  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
    paddingHorizontal: 4,
  },

  mealCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  mealImage: {
    width: "100%",
    height: 180,
  },

  mealContent: {
    padding: 16,
  },

  mealName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },

  mealDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 20,
    marginBottom: 8,
  },

  mealBenefits: {
    fontSize: 14,
    color: "#27ae60",
    lineHeight: 20,
    marginBottom: 12,
    fontStyle: "italic",
  },

  mealActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionButton: {
    backgroundColor: "#3498db",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 0.6,
  },

  completedButton: {
    backgroundColor: "#27ae60",
  },

  actionButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },

  reminderButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3498db",
    flex: 0.35,
  },

  reminderButtonText: {
    color: "#3498db",
    fontSize: 12,
    marginLeft: 4,
  },

  // Exercise page styles
  exerciseCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  exerciseVideo: {
    width: "100%",
    height: 200,
  },

  exerciseContent: {
    padding: 16,
  },

  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },

  exerciseDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 20,
    marginBottom: 8,
  },

  exerciseDuration: {
    fontSize: 14,
    color: "#e67e22",
    fontWeight: "600",
    marginBottom: 8,
  },

  exerciseBenefits: {
    fontSize: 14,
    color: "#27ae60",
    lineHeight: 20,
    marginBottom: 12,
    fontStyle: "italic",
  },

  exerciseInstructions: {
    marginBottom: 16,
  },

  instructionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },

  instructionStep: {
    fontSize: 14,
    color: "#34495e",
    lineHeight: 20,
    marginBottom: 4,
    paddingLeft: 8,
  },

  // Tips page styles
  tipCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  tipHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginLeft: 12,
    flex: 1,
  },

  tipDescription: {
    fontSize: 14,
    color: "#34495e",
    lineHeight: 22,
    marginBottom: 12,
  },

  actionItems: {
    marginTop: 8,
  },

  actionItemsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 8,
  },

  actionItem: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 20,
    marginBottom: 4,
    paddingLeft: 8,
  },

  // Routine page styles
  progressSummary: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  progressTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },

  progressPercentage: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 12,
  },

  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 4,
    marginBottom: 8,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#27ae60",
    borderRadius: 4,
  },

  progressText: {
    fontSize: 14,
    color: "#7f8c8d",
  },

  routineItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  completedRoutineItem: {
    backgroundColor: "#f8f9fa",
    opacity: 0.8,
  },

  routineItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  routineItemContent: {
    marginLeft: 12,
    flex: 1,
  },

  routineItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 4,
  },

  routineItemTime: {
    fontSize: 12,
    color: "#e67e22",
    fontWeight: "600",
    marginBottom: 4,
  },

  routineItemDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 18,
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#95a5a6",
  },

  resetButton: {
    backgroundColor: "#e74c3c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },

  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
