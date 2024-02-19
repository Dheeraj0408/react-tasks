const TextComponent=(props)=>{
    return(
       <div style={{border:"1px solid red", width:"250px",alignItems:"center",display:"flex",flexDirection:"column",padding:"20px",gap:"15px"}}>
        <img src={props.url} width={150} height={150}/>
        <h3>{props.text}</h3>
       </div>
    )
}

export default TextComponent;