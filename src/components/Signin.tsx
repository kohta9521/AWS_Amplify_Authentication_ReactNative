import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { Auth } from 'aws-amplify';

interface SignInState {
    username: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [signInState, setSignInState] = useState<SignInState>({ username: '', password: '' });

    const handleSignIn = async () => {
    try {
    const user = await Auth.signIn(signInState.username, signInState.password);
    console.log('ログイン成功:', user);
    // ユーザー情報を取得して次の画面に遷移するロジックをここに追加
    } catch (error) {
    console.log('ログインエラー:', error);
    Alert.alert('エラー', 'ログインに失敗しました。');
    }
};

return (
    <View>
    <TextInput
        value={signInState.username}
        onChangeText={(text) => setSignInState(prevState => ({ ...prevState, username: text }))}
        placeholder="ユーザーネーム"
    />
    <TextInput
        value={signInState.password}
        onChangeText={(text) => setSignInState(prevState => ({ ...prevState, password: text }))}
        placeholder="パスワード"
        secureTextEntry
    />
    <Button title="ログイン" onPress={handleSignIn} />
    </View>
);
};

export default SignIn;