import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function TodoList({ item, clickHandler }) {
    return (
        <Pressable onPress={() => clickHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'pink',
        marginTop: 12,
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 14,
        borderStyle: 'solid',

    },
})