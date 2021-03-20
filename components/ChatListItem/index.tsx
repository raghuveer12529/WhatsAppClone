import Moment from 'moment';
import React from 'react'
import { View, Text, Image } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './styles';


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    // const image = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

    const user = chatRoom.users[1];
    // console.log(user);
    return (

        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri  }} style={styles.avatar} />

                <View style={styles.midContainer}>
                    <Text style={styles.username }>
                        {user.name}
                    </Text>
                    <Text style={styles.lastMessage}>
                        {chatRoom.lastMessage.content}
                    </Text>
                </View>
            </View>
            <Text style={styles.time}>
               {Moment(chatRoom.lastMessage.createdAt).format('d MMM YYYY')}
               </Text>
        </View>
    )


}

export default ChatListItem;