import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SearhParamsCart } from "./Cart";
import moment from "moment";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, Polyline } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Order() {
  const orderParams = useLocalSearchParams<SearhParamsCart>();
  const [tip, setTip] = useState(0);

  moment.locale("tr");
  const time = moment().format("HH:mm");
  const mapView = useRef<any>(null);
  const [coordinates, setcoordinate] = useState([
    {
      latitude: 41.0262,
      longitude: 29.0147,
    },
    {
      latitude: 40.8981,
      longitude: 29.1944,
    },
  ]);

  useEffect(() => {
    mapView.current!.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    });
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
          backgroundColor: "#fd5c63",
          padding: 10,
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
            35 dakika içinde teslimat
          </Text>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
            Sipariş saati: {time}{" "}
          </Text>
        </View>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
          YARDIM
        </Text>
      </View>

      <MapView
        ref={mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: 400 }}
      >
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />

        <Polyline
          coordinates={coordinates}
          strokeColor="black"
          lineDashPattern={[4]}
          strokeWidth={2}
        />
      </MapView>

      <View
        style={{
          height: 320,
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View style={{ padding: 10 }}>
          <View>
            <Text
              style={{ fontWeight: "500", fontSize: 17, textAlign: "center" }}
            >
              {orderParams?.name} siparişini onayladı
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <FontAwesome5
                name="hand-holding-heart"
                size={28}
                color="#fc8019"
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 2,
                    marginBottom: 6,
                  }}
                >
                  Bahşiş ver
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#696969",
                    marginRight: 10,
                    paddingHorizontal: 2,
                  }}
                >
                  Evinizde güvende kalmanıza yardımcı olan teslimat ortağınıza
                  teşekkür edin. Zor zamanlarda onlara bahşiş vererek destek
                  olun
                </Text>

                <Pressable
                  style={{
                    paddingTop: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      backgroundColor: "#f5f5f5",
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      borderRadius: 7,
                    }}
                    onPress={() => setTip(30)}
                  >
                    <Text
                      style={{
                        padding: 10,
                        color: "#002d62",
                        fontWeight: "bold",
                      }}
                    >
                      30 TL
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      backgroundColor: "#f5f5f5",
                      marginHorizontal: 10,
                      alignItems: "center",
                      borderRadius: 7,
                    }}
                    onPress={() => setTip(50)}
                  >
                    <Text
                      style={{
                        padding: 4,
                        color: "#002d62",
                        fontWeight: "bold",
                      }}
                    >
                      50 TL
                    </Text>

                    <Text
                      style={{
                        backgroundColor: "orange",
                        paddingHorizontal: 10,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      En Yüksek Bahşiş
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      backgroundColor: "#f5f5f5",
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      borderRadius: 7,
                    }}
                    onPress={() => setTip(70)}
                  >
                    <Text
                      style={{
                        padding: 10,
                        color: "#002d62",
                        fontWeight: "bold",
                      }}
                    >
                      70 TL
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>

            {tip ? (
              <View>
                <Text
                  style={{
                    color: "#fc8019",
                    padding: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Lütfen teslimat sırasında kargo görevlisine {tip} TL ödeyin
                </Text>

                <TouchableOpacity
                  onPress={() => setTip(0)}
                  activeOpacity={0.7}
                  style={{
                    padding: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    position: "absolute",
                    top: 40,
                    paddingBottom: 40,
                  }}
                >
                  <Text
                    style={{ color: "red", fontSize: 14, fontWeight: "700" }}
                  >
                    (İptal)
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
