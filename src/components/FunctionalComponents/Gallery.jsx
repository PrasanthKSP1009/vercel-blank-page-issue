//Props
const Gallery=(props)=>{
    return (<div>
        <h3>Welcome to {props.page} page!!</h3>
        <img src="data:image/png;base64,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" alt="SECE logo"/>
        <p>The image is {props.image}</p>
    </div>)
};
export default Gallery;