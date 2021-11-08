import { useState, ReactNode, useRef, useContext, createContext } from 'react';


type AuthContextData = {
  isOpen: boolean;
  openModal(): Promise<void>;
  closeModal(): Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const cancelRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  
  async function openModal() {
    setIsOpen(true)
  }

  async function closeModal() {
    setIsOpen(false)
  }

  return(
    <AuthContext.Provider value={{ openModal, isOpen, closeModal }}>
      {children}
    </AuthContext.Provider>
  )
} 


export const useAuth = () => {
  return useContext(AuthContext);
}