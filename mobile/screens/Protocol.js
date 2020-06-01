import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Protocol() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Protocol COVID-19</Text>
      <View style={styles.protocol_box}>
        <ScrollView
          contentContainerStyle={{
            flexWrap: "wrap",
            alignItems: "center",
            width: 290,
          }}
        >
          <Text style={styles.title}>Template Title</Text>
          <Text style={styles.info}>
            Hello
            {"\n"}
            {"\n"}
            1. This is like ul li in hmtl{"\n"}
            2. but its build manually{"\n"}
            3. its quite nice tho
            {"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            hendrerit placerat dolor non dapibus. Pellentesque non ipsum quis
            massa fermentum vulputate id nec est. Etiam cursus vitae ex eget
            malesuada. Suspendisse eget efficitur nulla. Pellentesque sit amet
            blandit nisl, eu pharetra felis. Aliquam erat volutpat. Sed
            efficitur molestie pellentesque. Etiam in consequat sapien,
            hendrerit tempor lorem.
            {"\n"}
            {"\n"}
            Vestibulum tortor elit, congue non mauris eu, iaculis interdum quam.
            Nullam rhoncus egestas dictum. Nam blandit fringilla tortor eget
            rutrum. Donec augue arcu, congue in turpis at, lobortis tristique
            purus. Donec maximus tellus a urna dignissim pulvinar. Mauris a
            gravida massa. Donec sit amet dignissim magna. In dui orci, rutrum
            quis lorem et, venenatis cursus libero. Maecenas ut mi odio. Nullam
            scelerisque, nisi ac eleifend tincidunt, ipsum justo auctor nulla,
            ut sodales lacus nulla a massa. Maecenas feugiat augue eget
            fermentum imperdiet.
            {"\n"}
            {"\n"}
            Praesent eget turpis id diam convallis gravida. Suspendisse nec dui
            sit amet dui vestibulum feugiat. Sed id lacus et sapien feugiat
            interdum. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; In viverra enim sed nisi ultricies
            ultricies. Praesent eget nisi nec tortor suscipit pellentesque. Nunc
            ac nunc auctor, varius neque et, fermentum dui. Nulla pulvinar nulla
            nec molestie accumsan. Vestibulum vulputate turpis vel nulla aliquam
            consectetur. Vivamus condimentum sodales nibh quis egestas.
            {"\n"}
            {"\n"}
            Mauris tristique quis tortor non egestas. Nullam sit amet diam
            ligula. In nunc lorem, feugiat id tortor in, faucibus lacinia leo.
            Suspendisse lorem erat, iaculis sit amet enim non, pretium elementum
            ipsum. Proin tincidunt, metus bibendum hendrerit pellentesque, diam
            eros pretium elit, vitae posuere magna neque vel mauris. Nulla
            facilisi. Praesent sollicitudin nisi iaculis tellus tristique, id
            commodo libero volutpat. Nullam sagittis blandit ligula id feugiat.
            Nulla efficitur ultricies nisi, quis molestie diam cursus vel. Donec
            gravida, quam ornare consequat efficitur, justo risus faucibus nibh,
            eget ultrices nulla arcu in ex.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#65DCB8",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00B979",
    marginTop: 60,
  },
  protocol_box: {
    backgroundColor: "#B3EFDD",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 340,
    height: 480,
    borderRadius: 5,
    marginVertical: 25,
  },
  title: {
    color: "#566573",
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    color: "#566573",
  },
  btn: {
    alignItems: "center",
    width: 320,
    padding: 10,
    marginBottom: 45,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#00B979",
  },
  btn_text: {
    color: "#B3EFDD",
  },
});
