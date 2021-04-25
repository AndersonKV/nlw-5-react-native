import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import colors from "../styles/colors";

import { Header } from "../components/Header";
import { EnviromentButton } from "../components/EnviromentButton";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Load } from "../components/Load";

import api from "../services/api";
import { useState } from "react";

interface EnviromentsProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}
export function PlantSection() {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [enviromentSelecteed, setEnviromentSelected] = useState("all");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingmore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  function handleEnviromentSelected(enviroment: string) {
    setEnviromentSelected(enviroment);

    if (enviroment === "all") {
      return setFilteredPlants(plants);
    } else {
      const filtered = plants.filter((plant) =>
        plant.environments.includes(enviroment)
      );
      setFilteredPlants(filtered);
    }
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return;
    }

    setLoadingmore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  async function fetchPlants() {
    const resp = await api.get(
      `/plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    const { data } = resp;

    if (!data) {
      return setLoading(true);
    }

    if (page > 1) {
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
      setPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoadingmore(false);
    setLoading(false);
  }

  useEffect(() => {
    async function fetchEnviroment() {
      console.log("INICIANDO================================");

      try {
        const resp = await api.get("/plants_environments");

        const { data } = resp;
        console.log("data");
        setEnviroments([
          {
            key: "all",
            title: "Todos",
          },
          ...data,
        ]);

        setEnviroments(data);
        //setLoading(true);
      } catch (err) {
        console.log(err);
        //setLoading(true);
        console.log("bug== ===================");
      }

      setLoading(false);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
    fetchPlants();
    //setLoading(false);
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={enviroments}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          // keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <EnviromentButton
              key={index.toString()}
              title={item.title}
              active={item.key === enviromentSelecteed}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyler}
          // keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore === true ? (
              <ActivityIndicator color={colors.green} />
            ) : (
              <></>
            )
          }
          renderItem={({ item, index }) => (
            <PlantCardPrimary data={item} key={index.toString()} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
  contentContainerStyler: {},
});
