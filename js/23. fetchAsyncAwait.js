// Fetch API con Async Await

const url = "https://jsonplaceholder.typicode.com/comments";

    const consultarAPI = async() => {
        try{
            const response = await fetch(url) //espera hasta que haya una respuesta
            if(!response.ok){
                throw Error ("hubo un error...")
            }
            const data = await response.json(); //va a retornarla como json, y esperamos hasta tener esa informacion
            console.log(data);
        }
        catch (error){
            console.log(error);
        }
    }
    consultarAPI();


//ejemplo con useEffect

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url1);
            if (!response.ok) {
                throw new Error("primero");
            }
            const data = await response.json();
            console.log(data.fact);
            setInfo(data.fact);
            
            const palabrasUnidas = data.fact.split(' ').slice(0, 3).join("-");
            console.log("tres: ", palabrasUnidas);
            
            
            const url2 = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${palabrasUnidas}`;
            console.log(url2)
            const responseGif = await fetch(url2);
            
            if (!responseGif.ok) {
                throw new Error("segundo");
            }
            const dataGif = await responseGif.json();
            console.log(dataGif.data);
            setGif(dataGif.data[0].embed_url);
        } catch (error) {
            console.log("ultimo", error);
        }
    };

    fetchData();
}, []);