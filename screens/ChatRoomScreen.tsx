import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ChatRoomScreen =()=>{

    const route = useRoute();
    console.log(route.params);
    return(
        
            <Text style={{color:'white'}}>Chat Room Screen</Text>
       
    )
}

export default ChatRoomScreen;