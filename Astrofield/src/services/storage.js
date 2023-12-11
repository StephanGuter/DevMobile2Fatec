import AsyncStorage from '@react-native-async-storage/async-storage'

export const storage = {
  clearData: async () => {
    try {
      await AsyncStorage.setItem('users', JSON.stringify([]))
      console.log("Usuários: " + await AsyncStorage.getItem('users'))
      await AsyncStorage.setItem('lastUser', JSON.stringify({}))
      console.log("Último usuário: " + await AsyncStorage.getItem('lastUser'))

      alert("Dados deletados com sucesso.")
    } catch (e) {
      alert('Erro ao limpar todos os dados: ' + e)
    }
  },

  getUsers: async () => {
    try {
      const value = await AsyncStorage.getItem('users')
      if (value !== null) {
        console.log("Usuários carregados com sucesso: " + value)
        return(JSON.parse(value))
      }
    } catch (e) {
      alert('Erro ao carregar usuários:' + e)
    }
  },

  setUsers: async (users) => {
    try {
      await AsyncStorage.setItem('users', JSON.stringify(users))
      console.log("Usuários salvos com sucesso: " + JSON.stringify(users))
    } catch (e) {
      alert('Erro ao salvar usuários:' + e)
    }
  },

  getLastUser: async () => {
    try {
      const value = await AsyncStorage.getItem('lastUser')
      if (value !== null) {
        console.log("Último usuário carregado com sucesso: " + value)
        return(JSON.parse(value))
      }
    } catch (e) {
      alert('Erro ao carregar último usuário:' + e)
    }
  },

  setLastUser: async (user) => {
    try {
      await AsyncStorage.setItem('lastUser', JSON.stringify(user))
      console.log("Último usuário salvo com sucesso: " + JSON.stringify(user))
    } catch (e) {
      alert('Erro ao salvar último usuário:' + e)
    }
  }
}