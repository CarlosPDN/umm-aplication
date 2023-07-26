import { StatusBar } from "expo-status-bar";
import { Linking } from "react-native";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ummLogo from "../assets/images/logo1.png";
import profile from "../assets/icons/profile.png";
// Tab ICons...
import home from "../assets/icons/home.png";
import search from "../assets/icons/search.png";
import notifications from "../assets/icons/bell.png";
import settings from "../assets/icons/settings.png";
import logout from "../assets/icons/logout.png";
// Menu
import menu from "../assets/icons/menu.png";
import close from "../assets/icons/close.png";

// Photo
//import photo from "../assets/icons/profile.png";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const ummLinks = {
    miEspacio: "https://miespacio.umm.edu.mx/",
    brightspace: "https://umm.brightspace.com/d2l/home",
    oficial: "https://www.umm.edu.mx/",
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const TabButton = (currentTab, setCurrentTab, title, image, link) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (title == "LogOut") {
            // Do your Stuff...
          } else {
            setCurrentTab(title);
          }
        }}
      >
        <View style={styles.leftHeaderButton} onPress={handleLinkPress(link)}>
          <Image source={image} style={styles.leftHeaderImage}></Image>
          <Text style={styles.leftHeaderText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "flex-start",
          padding: 15,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Image
          source={ummLogo}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        ></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          UMM
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(
            currentTab,
            setCurrentTab,
            "BRIGHSPACE",
            "",
            ummLinks.brightspace
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "MI ESPACIO",
            "",
            ummLinks.miEspacio
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "PAGINA OFICIAL",
            "",
            ummLinks.oficial
          )}
        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginTop: 40,
              }}
            ></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              paddingTop: 20,
            }}
          >
            {currentTab}
          </Text>

          <Image
            source={"photo"}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              marginTop: 25,
            }}
          ></Image>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 15,
              paddingBottom: 5,
            }}
          >
            La metro
          </Text>

          <Text style={{}}>Universidad Metropolitana de Monterrey</Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  leftHeaderButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "red",
    paddingLeft: 13,
    paddingRight: 35,
    borderRadius: 8,
    marginTop: 15,
  },
  leftHeaderImage: {
    width: 25,
    height: 25,
    tintColor: "black",
  },
  leftHeaderText: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 15,
    color: "black",
  },
});
