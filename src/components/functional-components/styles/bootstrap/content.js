import ImageComponent from "../../image/image-component";

const Content=()=>{
    return (
      <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <h3>Column 1</h3>
           <Card></Card>
          </div>
          <div className="col-sm-4">
            <h3>Column 2</h3>
           <Card></Card>
          </div>
          <div className="col-sm-4">
            <h3>Column 3</h3>
           <Card></Card>
          </div>
        </div>
      </div>
    </>
    
    )
}

export default Content;

export const Card=()=>{
return(
  <div className="card" style={{ width: 350, height:380 }}>
  {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
  <ImageComponent/>
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div>
)
}