import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('kmtm6cx4ezxd');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZnJvc3R5LWJyZWV6ZS04In0.7RW0V8OcOB0dSg2yDPQMo8rHbzbVr7wbkC9msrX6kus';

chatClient.connectUser(
  {
    id: 'frosty-breeze-8',
    name: 'frosty-breeze-8',
    image: 'https://getstream.io/random_png/?id=frosty-breeze-8&name=frosty-breeze-8',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'spacex', {
  image: 'https://goo.gl/Zefkbx',
  name: 'SpaceX launch discussion',
});

const App = () => (
  <Chat client={chatClient} theme='livestream dark'>
    <Channel channel={channel} Message={MessageLivestream}>
      <Window hideOnThread>
        <ChannelHeader live />
        <MessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
      <Thread fullWidth />
    </Channel>
  </Chat>
);

export default App;