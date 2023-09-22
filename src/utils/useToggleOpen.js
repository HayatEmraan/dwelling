'use client'

import { useCallback, useState } from "react";

const useToggleOpen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    return [isOpen, toggleMenu]
};

export default useToggleOpen;