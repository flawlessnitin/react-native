import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
  ActivityIndicator,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// function DisplayInsets() {
//   const insets = useSafeAreaInsets();
//   return (
//     <View>
//       <Text>
//         Insets: {insets.bottom} - {insets.top}
//       </Text>
//     </View>
//   );
// }

function ProjectCard() {
  return (
    <View>
      <Image
        source={require("./assets/image.png")}
        style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 10 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "dimgray",
          marginTop: 10,
        }}
      >
        My Github
      </Text>
    </View>
  );
}

export default function App() {
  const name = "Nitin Sahu";
  const links = {
    github: "https://github.com/flawnessnitin",
    twitter: "https://twitter.com/flawlessnitin",
    linkedin: "https://www.linkedin.com/in/flawlessnitin/",
  };

  function socialIcons() {
    return (
      <View style={{ flexDirection: "row", gap: 10, padding: 10 }}>
        {links.github && <AntDesign name="github" size={24} color="black" />}
        {links.twitter && <AntDesign name="twitter" size={24} color="black" />}
        {links.linkedin && <Entypo name="linkedin" size={24} color="black" />}
      </View>
    );
  }
  const onContactMe = () => {
    console.warn("Contact me");
    Linking.openURL("mailto:webdeveloping91@gmail.com");
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView edges={["bottom"]}>
          <ScrollView>
            <View style={styles.container}>
              <Image
                source={{
                  uri: "https://media.licdn.com/dms/image/v2/D5616AQGrZxA6lQ_RJQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1728977491001?e=1747267200&v=beta&t=5t4N0y2ZCoTjiZtP8iOtNN2lTWVZeZAiZaAY1RkkiBw",
                }}
                style={{ width: "100%", aspectRatio: 16 / 9 }}
              />
              <Image
                source={require("./assets/profile.jpg")}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 150,
                  borderWidth: 5,
                  borderColor: "white",
                  marginTop: -75,
                }}
              />
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  fontFamily: "san-serif",
                }}
              >
                {name}
              </Text>
              <Text style={{}}>Software Engineer</Text>
              {socialIcons()}
              <Button title="Contact me" onPress={onContactMe} />
              <Text
                style={{ margin: 20, textAlign: "justify", lineHeight: 20 }}
              >
                My self Dev. I'm a Software Developer Based in India.
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
                Github
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10, padding: 10 }}
              >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </ScrollView>
              <StatusBar style="light" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView
  //       edges={["top", "bottom"]}
  //       style={{ backgroundColor: "red" }}
  //     >
  //       <View
  //         style={{
  //           backgroundColor: "palegreen",
  //           height: "100%",
  //           borderRadius: 20,
  //           alignItems: "center",
  //         }}
  //       >
  //         <Text style={{ fontSize: 100 }}>Title</Text>
  //         <DisplayInsets />
  //         <Text style={{ marginTop: "auto" }}>Footer</Text>
  //       </View>
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
