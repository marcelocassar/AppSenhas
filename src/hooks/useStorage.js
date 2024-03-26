import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = () => {
    //buscar itens salvos

    const getItem = async () => {

        try {
            
            const password = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];


        } catch (error) {
            console.log("Erro ao buscar", error)
        }




    }

    //salvar item no storage

    const saveItem = async (key, value) => {
        //key = o array de senhas que ja tiver
        //value = a proxima senha a ser colocada na lista

        try {

            let passwords = await getItem(key);
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
            
        } catch (error) {
            console.log("Erro ao salvar: " + error)
        }

    }

    //remover algo do storage

    const removeItem = async (key, item) => {

        try {
            
            let passwords = await getItem(key);
            let myPasswords = passwords.filter((password)=>{
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords;

        } catch (error) {
            console.log("Erro ao deletar: " + error)
        }

    }

    return {
        getItem,
        saveItem,
        removeItem,
    }

}

export default useStorage;