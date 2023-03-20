import FontAwesome from "@expo/vector-icons/FontAwesome";
import clsx from "clsx";
import { View, Pressable, Text } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
};

const buttonContainerStyle = "w-80 h-16 mx-20 items-center justify-center p-[3px]";

export default function Button({ label, theme }: Props) {
  if (theme === "primary") {
    return (
      <View className={clsx(buttonContainerStyle, "border-4 border-yellow-400 rounded-2xl")}>
        <Pressable className={clsx(_styles.button, "bg-white")} onPress={() => alert("You pressed a button.")}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={{ paddingRight: 8 }} />
          <Text className={clsx(_styles.buttonLabel, "text-[#25292e] font-bold")}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className={_styles.buttonContainer}>
      <Pressable className={_styles.button} onPress={() => alert("You pressed a button.")}>
        <Text className={_styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const _styles = {
  buttonContainer: "w-80 h-16 mx-20 p-[3px]",
  button: "rounded-xl w-full h-full items-center justify-center flex-row",
  buttonLabel: "text-white text-[16px]",
};
