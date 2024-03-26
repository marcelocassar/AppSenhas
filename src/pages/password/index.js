import { useState, useEffect } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { PasswordsItem } from "./components/passwordsitem";

export function Password() {
  const [listPasswords, setListPasswords] = useState([]);

  const foccused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");
      setListPasswords(passwords);
    }

    loadPasswords();
  }, [foccused]);

  //1:23:39

  async function handleDeletePassword(item) {
    const passwords = removeItem("@pass", item);
    setListPasswords(passwords);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          //1:24:27
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordsItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },

  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
