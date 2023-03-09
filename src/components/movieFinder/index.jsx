import "./styles.scss"

export const MovieFinder = () =>{

    const cleanInput = () =>{
        this.inputTitle.value = "";
    }

    return <div className="MovieFinder">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className="finder">
            <input />
            <button>Search</button>
            <button onClick={()=>cleanInput}>Reset</button>
        </div>
    </div>
}
