import {useState, useEffect, useRef} from 'react';


export const useFech = (url) => {
    
    const isMounted = useRef(true);
    
    const [state, setstate] = useState({data:null, loading:true, error:null});
    ///Para que el fetch se maneje de manera segura  se hace esta funcion.. asi se evita que cuando se desmote el componente se lanse un error
    useEffect(() => {
        return ()=>{
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setstate({data:null, loading:true, error:null});

        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            if (isMounted){
                setstate({
                    loading:false,
                    error:null,
                    data
                })
            }
        })
    }, [url])
    return state;
}
