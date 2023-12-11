import * as UUID from 'expo-crypto';

export const uniqueID = () => {
  return(UUID.randomUUID())
}