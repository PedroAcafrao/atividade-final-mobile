import React from 'react'
import { FlatList, View, Text } from "react-native"

import { Users } from '../models/users'
import { userRepo } from '../services/users.repo'
import { useFocusEffect } from '@react-navigation/native'
import ListItem from '../components/ListItem'

export default function ListPage() {

    const [users, setUsers] = React.useState<Users[]>([])

    useFocusEffect(() => {
        userRepo.getUsers().then(list => setUsers(list))
    })

    return (
        <View style={{ marginTop: 40 }}>
            <FlatList
                data={users}
               // keyExtractor={place => `${place.latitude}-${place.longitude}`}
                renderItem={({ item }) => <ListItem title={item.name!} description={item.userName} />}
            />
        </View>
    )
}