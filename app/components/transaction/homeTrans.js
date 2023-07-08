import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import { transactions } from "../../constants/doc";
import { Ionicons } from "@expo/vector-icons";

export const HomeTransactionList = () => {
  // Group transactions by date
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    if (acc[date]) {
      acc[date].push(transaction);
    } else {
      acc[date] = [transaction];
    }
    return acc;
  }, {});

 const renderItem = ({ item }) => (
   <View style={styles.container}>
     <View style={styles.hTContainer}>
       <View>
         <Text style={styles.transDate}>{item.date}</Text>
       </View>
       {item.transactions.map((transaction, index) => (
         <View style={styles.transC} key={index}>
           <View style={styles.left}>
             {typeof transaction.img === "string" ? (
               <Image source={{ uri: transaction.img }} style={styles.img} />
             ) : (
               <View style={[styles.img, transaction.img.style]}>
                 <Ionicons
                   name={transaction.img.name}
                   size={transaction.img.size}
                   color={transaction.img.color}
                 />
               </View>
             )}
             <View style={styles.recipe}>
               <Text style={styles.rec}>{transaction.recipient}</Text>
               <Text style={styles.transTime}>{transaction.time}</Text>
             </View>
           </View>
           <View>
             <Text
               style={
                 transaction.formattedAmount >= 0
                   ? styles.positiveAmount
                   : styles.amount
               }
             >
               {transaction.formattedAmount}
             </Text>
           </View>
         </View>
       ))}
     </View>
   </View>
 );


  return (
    <FlatList
      data={Object.keys(groupedTransactions).map((date) => ({
        date,
        transactions: groupedTransactions[date],
      }))}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hTContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    gap: 15,
  },
  transC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  left: {
    flexDirection: "row",
    gap: 12,
  },
  recipe: {
    gap: 5,
  },
  rec: {
    fontWeight: "500",
  },
  transTime: {
    color: "#bfbfbf",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  positiveAmount: {
    color: "green",
  },
  amount: {
    color: "black",
  },
});
