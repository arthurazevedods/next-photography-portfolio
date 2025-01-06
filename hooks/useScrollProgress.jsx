import { useState, useEffect } from "react";

export default function useScrollProgress() {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                const progress = (currProgress / scrollHeight) * 100;
                setCompletion(Number(progress.toFixed(2)));
            }
        };

        // Adiciona o evento de scroll
        window.addEventListener("scroll", updateScrollCompletion);

        // Garante a limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []); // Certifique-se de que este array vazio está correto

    return completion;
}
