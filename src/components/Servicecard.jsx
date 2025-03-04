export default function ServiceCard({props}){
    return(
        <div style={{color: "black", textAlign:"center"}}>
            
            <h2>Title: {props.title}</h2>
            <p><strong>Desciption:</strong> {props.des}</p>
        </div>
    )
}