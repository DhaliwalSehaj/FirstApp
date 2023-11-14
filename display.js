import { View, Text, StyleSheet } from 'react-native';


const Display = ({ name }) => {
    //destructuring  prop option A
    //const { name } = props;
    return (
        <View>
            <Text> {name}</Text>
        </View>
    )
};

export default Display;