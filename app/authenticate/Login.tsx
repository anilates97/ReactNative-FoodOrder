import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { supabase } from "../../supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.navigate("home", { replace: true });
        }
      } catch (error: any) {}
    };
    checkLogin();
  }, []);

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data) {
      const token = data?.session?.access_token;
      AsyncStorage.setItem("authToken", token || "");
      navigation.navigate("home", { replace: true });
    }

    if (error) {
      Alert.alert("Kayıt olurken hata oluştu", "Lütfen tekrar deneyiniz");
    }
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          Yemek Sipariş Uygulaması
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              marginTop: 12,
              color: "red",
              fontWeight: "bold",
            }}
          >
            Hesabınıza giriş yapın
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#e0e0e0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Mail adresinizi girin"
              style={{ color: "gray", marginVertical: 10, width: 300 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#e0e0e0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              secureTextEntry
              onChangeText={(pass) => setPassword(pass)}
              value={password}
              placeholder="Şifrenizi adresinizi girin"
              style={{ color: "gray", marginVertical: 10, width: 300 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text>Oturumumu açık tut</Text>
          <Text>Şifrenizi mi unuttunuz?</Text>
        </View>

        <Pressable
          onPress={signInWithEmail}
          style={{
            width: 200,
            backgroundColor: "#fd5c63",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Giriş yap
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",

              fontSize: 16,
              color: "gray",
            }}
          >
            Hesabın yok mu? Kayıt ol
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
