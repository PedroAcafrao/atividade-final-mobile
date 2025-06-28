import AsyncStorage from '@react-native-async-storage/async-storage'
import { Users } from '../models/users'
import uuid from 'react-native-uuid';

class UsersRepository {

    private static readonly KEY = 'APP_User@user_document'

    private async persist(list: Users[]) {
        await AsyncStorage.setItem(UsersRepository.KEY, JSON.stringify(list))
    }

    private equals(p1: Users, p2: Users) {
        return p1.userName === p2.userName
    }

    public async getUsers() {
        const json = await AsyncStorage.getItem(UsersRepository.KEY)
        if (json) return JSON.parse(json) as Users[]
        return []
    }

    public async save(user: Users) {
        const list = await this.getUsers()
        const finded = list.find(p => this.equals(p, user))
        const idNew = uuid.v4();;
        if (finded) {
            finded.name = user.name
            finded.userName = user.userName
            finded.pass = user.pass
            finded.passConfirm = user.passConfirm

        } else {
            user.id = idNew;
            console.log("user  " + user);
            list.push(user);
        }

        this.persist(list)
    }

    public async getLogin(user: Users) {
        const list = await this.getUsers()
        const finded = list.find(p => this.equals(p, user))
        return finded
    }

    public async remove(user: Users) {
        let list = await this.getUsers()
        list = list.filter(p => !this.equals(p, user))

        this.persist(list)
    }

}

export const userRepo = new UsersRepository()