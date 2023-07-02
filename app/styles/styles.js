import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  header: {
    backgroundColor: "#242424",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },

  userCover: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "gray",
  },
  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "purple",
  },
  user: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
  flag: {
    height: 20,
    aspectRatio: 1,
    borderRadius: 20,
  },
  headerIcon: {
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#ccc",
  },
  currency: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
  },
  currencyText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#ccc",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cuIcon: {
    width:20,
    height:20,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  symbol: {
    fontSize: 20,
    marginRight: 5,
    marginTop: 8,
    fontWeight: "500",
  },
  amount: {
    fontSize: 46,
    fontWeight: "500",
  },
  amountRem: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: "500",
  },
  headerOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
   
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  option:{
    width:25,
    height:25,
    borderRadius:100,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  optionText:{
    fontWeight:500
  }
});

export default styles;
