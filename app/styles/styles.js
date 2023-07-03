import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#242424",
    paddingHorizontal: 20,
    width: "100%",
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
    gap: 5,
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
  userHead: {
    backgroundColor: "#242424",
    height: 257,
    position: "relative",
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
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
    marginHorizontal: 35,
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
    fontWeight: 400,
    color: "#fff",
    padding: 10,
    fontSize: 13,
  },
  userAction: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: 175,
    position: "absolute",
    top: 167,
    width: "90%",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  actionIcon: {
    height: 35,
    width: 35,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4E4E4",
  },
  action: {
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 10,
  },
  userActionText: {
    lineHeight: 5,
    padding: 2,
  },
  actionTextTitle: {
    fontWeight: 500,
  },

  actionText: {
    fontSize: 14,
    color: "#bfbfbf",
  },
  userHero: {
    position: "absolute",
    top: 340,
    alignSelf: "flex-start",
  },
  userHeroText: {
    fontWeight: 400,
    fontSize: 14,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  heroContainer: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItem: "center",
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 105,
    backgroundColor: "#000",
    borderRadius: 20,
    width: "87%",
  },
  heroText: {
    color: "#fff",
    maxWidth: 150,
    paddingVertical: 25,
  },
  heroImg: {
    height: 110,
    width: 110,
    aspectRatio: 1,
  },
  userTransaction: {
    marginTop: 250,
    marginHorizontal: 20,
    marginBottom: 40,
    flex: 1,
  },
  transOption: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 25,
  },
  userTransact: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  transOptionTexta: {
    fontSize: 14,
    color: "#000",
  },
  transOptionTextb: {
    fontSize: 11,
    color: "gray",
  },
  
  
});
