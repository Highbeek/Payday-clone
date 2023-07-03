import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#242424",
    paddingHorizontal: 20,
    height: 350,
    width: "100%",
    position:'relative'
  },
  userHeader: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    backgroundColor: "#4029E0",
  },
  user: {
    fontSize: 24,
    fontWeight: "600",
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
    backgroundColor: "#403d39",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 30,
    gap: 5
  },
  currencyText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ccc",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  cuIcon: {
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#403d39",
  },
  symbol: {
    fontSize: 20,
    marginRight: 5,
    marginTop: 8,
    fontWeight: "500",
    color: "gray",
  },
  amount: {
    fontSize: 46,
    fontWeight: "500",
    color: "#fff",
  },
  amountRem: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: "500",
    color: "gray",
  },
  headerOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 15,
  },
  option: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontWeight: 500,
    color: "#fff",
    padding: 10,
  },
});
