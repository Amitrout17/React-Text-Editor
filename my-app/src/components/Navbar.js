export default function Navbar(props) {

  return (
   <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid" >
    <a className={`navbar-brand center text-${props.mode==='dark'?'light':'dark'}`} href>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    </div>
  </div>
  <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Change to {props.mode==='dark'?'light':'dark'} Mode</label>
</div>
</nav>
  )
}
