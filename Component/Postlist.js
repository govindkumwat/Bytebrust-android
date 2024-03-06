import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Dividers } from 'react-native-ui-lib';

export const Postlist = () => {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png';

    const styles = StyleSheet.create({
        postListContainer: {
            color: 'black',
            marginTop: 20,
            fontSize: 22,

          
        },
        postlist: {
            display: 'flex',
            marginTop: 10,
            flexDirection: 'row',
            gap: 10,
           
        },
        image: {
            width: 75,
            height: 75,
            borderRadius: 10
        },
        postContent: {
            color: 'black',
            maxWidth: '80%'
        },
        postTitle: {
            fontSize: 20,
            color: 'black'
           
        },
        postDescription: {
            color:'black'
        },
        hairline: {
            backgroundColor: '#A2A2A2',
            height: 2,
            width: 165
          },
        })
  return (
    <View>
        <Text style={styles.postListContainer}>Recent Posts</Text>
        {
            [1,2,3,4,5,6,7,8,9,0].map((data, key) => (
                <View style={styles.postlist} key={key}>
                <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"  // You can adjust resizeMode as needed
              />
              <View style={styles.postContent}>
              <Text style={styles.postTitle} >Hello World!</Text>
              <Text style={styles.postDescription}>This is the first testing post from user, user is create template for the post list.</Text>
              </View>
             

                </View>
               
            ))
        }

       
    </View>
  )
}
