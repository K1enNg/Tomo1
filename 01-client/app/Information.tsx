import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export interface InformationProps {
  source: ImageSourcePropType;
  title: string;
  description: string;
  buttonLabels: string[];
  extraText?: string;
}

const Information: React.FC<InformationProps> = ({
  source,
  title,
  description,
  buttonLabels,
  extraText,
}) => {
  const { width, height } = useWindowDimensions(); // 👈 dynamically get screen size

  // Determine if it's tablet or phone
  const isTablet = width >= 768;

  // Responsive sizes
  const imageSize = isTablet ? 350 : 220;
  const titleFont = isTablet ? 34 : 26;
  const descFont = isTablet ? 20 : 16;
  const buttonFont = isTablet ? 22 : 18;

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingTop: isTablet ? 120 : 100 }]}>
      {/* CONTENT SECTION */}
      <View style={styles.contentSection}>
        <Image
          source={source}
          style={[styles.image, { width: imageSize, height: imageSize }]}
          resizeMode="cover"
        />

        <Text style={[styles.title, { fontSize: titleFont }]}>{title}</Text>

        <Text style={[styles.description, { fontSize: descFont, width: isTablet ? "55%" : "65%" }]}>
          {description}
        </Text>
      </View>

      {/* BUTTONS */}
      <View style={[styles.buttonsContainer, { marginTop: isTablet ? 180 : 140 }]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.primaryButton}>
          <Text style={[styles.primaryButtonText, { fontSize: buttonFont }]}>
            {buttonLabels[0]}
          </Text>
        </TouchableOpacity>

        <View style={styles.inlineContainer}>
          {extraText && (
            <Text style={[styles.extraText, { fontSize: buttonFont * 0.9 }]}>{extraText}</Text>
          )}
          <TouchableOpacity>
            <Text style={[styles.secondaryButtonText, { fontSize: buttonFont * 0.9 }]}>
              {buttonLabels[1]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentSection: {
    width: "100%",
    alignItems: "center",
    gap: 20,
    marginTop:80,
  },
  image: {
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "#333",
  },
  description: {
    textAlign: "center",
    color: "#666",
    lineHeight: 24,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  primaryButton: {
    width: "90%",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD54F",
    shadowColor: "#FFA000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  extraText: {
    color: "#444",
  },
  secondaryButtonText: {
    color: "#000",
    fontWeight: "600",
  },
});
