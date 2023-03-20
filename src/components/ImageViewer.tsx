import { Image, type ImageSourcePropType } from "react-native";

type Props = {
  placeholderImageSource: ImageSourcePropType;
};

export default function ImageViewer({ placeholderImageSource }: Props) {
  return <Image source={placeholderImageSource} className="w-80 h-[440px] rounded-2xl" />;
}
