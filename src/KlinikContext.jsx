import React, {createContext, useState} from 'react';

export const klinikContext = createContext();

export const KlinikNama = ({children}) => {
    const [klinik, setKlinik] = useState('Klinik');

    return (
    <klinikContext.Provider value={{klinik, setKlinik}}>
        {children}
    </klinikContext.Provider>
    );
};