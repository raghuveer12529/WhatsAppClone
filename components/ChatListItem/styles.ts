import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    avatar: {
        width : 60,
        height: 60, 
        marginRight:10,
        borderRadius: 50   
    },
    container :{
        flexDirection : 'row',
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
        
    },
    leftContainer:{
        flexDirection : 'row',
        
    },
    midContainer:{
        justifyContent: 'space-around'
    },
    username:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    lastMessage:{
        fontSize:16,
        color: 'grey',
        marginRight : 10
        
    },
    time:{
        fontSize:14,
        color: 'grey'
    }
})

export default styles;