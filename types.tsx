export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Chats: undefined;
  Calls: undefined;
  Camera: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Users = {
  id : String;
  name : String;
  imageUri : String;
}

export type Message = {
  id : String;
  content : String;
  createdAt : String;
}

export type ChatRoom ={
  id : String;
  users : [Users];
  lastMessage : Message;

}