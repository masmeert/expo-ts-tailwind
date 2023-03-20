import { View } from "react-native";

import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
const PlaceholderImage = require("../../assets/images/bg.png");

export default function HomeScreen() {
  return (
    <View className="items-center flex-1 bg-gray-900">
      <View className="mt-16">
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View className="mt-16">
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
