import { useState, ReactNode, useRef, useContext, createContext } from 'react';

type UserAuthData = {
  user: string;
  password: string;
}

type AuthContextData = {
  isOpen: boolean;
  openModal(): Promise<void>;
  closeModal(): Promise<void>;
  login(user: UserAuthData): Promise<Boolean>;
  isLogger: boolean;
  user: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const cancelRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogger, setIsLogger] = useState(false);
  const [user, setUser] = useState('');
  
  async function openModal() {
    setIsOpen(true)
  }

  async function closeModal() {
    setIsOpen(false)
  }

  async function login(user: UserAuthData) {

    const logged = localStorage.getItem('@poke:logged');
    const localUser = localStorage.getItem('@poke:user');
  
    if( logged && localUser ) {
      setIsLogger(true);
      setIsOpen(false);
      setUser(localUser);

      return;
    }

    setUser(localUser);

    const userData = {
      user: 'competi',
      password: '123456'
    }


    if(userData.user === user.user && userData.password === user.password) {
      setIsLogger(true);
      setIsOpen(false);
      setUser(userData.user);
 
      localStorage.setItem('@poke:logged', 'true');
      localStorage.setItem('@poke:user', userData.user);

      return true;
    }else {
      console.log('false')
    }
    
    return;
  }

  return(
    <AuthContext.Provider value={{ openModal, isOpen, closeModal, login, isLogger, user }}>
      {children}
    </AuthContext.Provider>
  )
} 


export const useAuth = () => {
  return useContext(AuthContext);
}