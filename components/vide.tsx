import { videoMap } from "@/data/videoMap";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function VideoScreen({ videoSource }: { videoSource: string }) {
  return (
    <View style={styles.contentContainer}>
      <Image
        source={
          videoMap[videoSource as keyof typeof videoMap] || {
            uri: videoSource,
          }
        }
        contentFit="cover"
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});
