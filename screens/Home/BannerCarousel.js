import { View, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
//import Carousel from "react-native-reanimated-carousel";
import BannerCarouselItem from "../../components/BannerCarouselItem";
import bannerCarouselData from "../../enums/banner-carousel-data";
import BannerPaginationDots from "../../components/BannerPaginationDots";

export default function BannerCarousel() {
  const carouselRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const updateSelectedIndex = () => {
    setSelectedIndex(carouselRef.current.getCurrentIndex());
  };

  const scrollTo = (index) => {
    carouselRef?.current.scrollTo({ index });
    setSelectedIndex(index);
  };

  const [dimensions, setDimensions] = useState(null);
  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setDimensions({ width, height });
      }}
    >
      {/* {dimensions && (
        <Carousel
          ref={carouselRef}
          loop
          pagingEnabled={true}
          autoPlay={true}
          autoPlayInterval={3000}
          width={dimensions.width}
          height={dimensions.height}
          data={bannerCarouselData}
          onScrollEnd={updateSelectedIndex}
          renderItem={({ item }) => <BannerCarouselItem item={item} />}
        ></Carousel>
      )} */}
      <BannerPaginationDots
        length={bannerCarouselData.length}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "25%",
    maxHeight: 190,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
