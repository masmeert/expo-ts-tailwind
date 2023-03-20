import FontAwesome from "@expo/vector-icons/FontAwesome";
import clsx from "clsx";
import { View, Pressable, Text } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
};

export default function Button({ label, theme }: Props) {
  if (theme === "primary") {
    return (
      <View className={clsx(styles.buttonContainer, "border-4 border-yellow-400 rounded-2xl")}>
        <Pressable className={clsx(styles.button, "bg-white")} onPress={() => alert("You pressed a button.")}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={{ paddingRight: 8 }} />
          <Text className={clsx(styles.buttonLabel, "text-[#25292e] font-bold")}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className={styles.buttonContainer}>
      <Pressable className={styles.button} onPress={() => alert("You pressed a button.")}>
        <Text className={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  buttonContainer: "w-80 h-16 mx-20 p-[3px]",
  button: "rounded-xl w-full h-full items-center justify-center flex-row",
  buttonLabel: "text-white text-[16px]",
};
