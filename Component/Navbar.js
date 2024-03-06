import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Navbar = () => {
    const styles = StyleSheet.create({
        NavContainer: {
            backgroundColor: 'white',
            padding: 20,
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#d9d9d9',
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            },
           
            backgroundColor: '#76ccc1',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
           
            },
            logo: {
                fontWeight: '600',
                fontSize: 16,
                color: 'white',
                fontFamily: 'monospace'
            },
            loginIcon : {
                backgroundColor: 'white',
            }
        })
    return (
        <View style={styles.NavContainer}>
            <Text style={styles.logo}>Trash Post</Text>
                <Text style={styles.logo}>Login</Text>
        </View>
    )
}

export default Navbar