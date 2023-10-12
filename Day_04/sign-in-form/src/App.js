import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mx-auto px-2 py-2">
      <div className="mx-auto" style={{width:"300px"}}>
        <form className="w-full">
          <img className="mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
          <h1 className="text-3xl text-center font-bold py-2">Please sign in</h1>
          <div className="relative border">
            <input type="email" className="w-full py-2 px-1 outline-none peer" id="floatingInput" placeholder="Email address" />
            <label className="absolute top-2 left-1 hidden peer-placeholder-shown:block peer-focus:hidden">Email address</label>
          </div>
          <div className="relative border">
            <input type="password" className="w-full py-2 px-1 outline-none peer" id="floatingPassword" placeholder="Password" />
            <label className="absolute top-2 left-1 hidden peer-placeholder-shown:block peer-focus:hidden">Password</label>
          </div>
          <div className="text-center py-2">
            <label className="">
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button className="w-full text-center bg-sky-500 py-2 my-2 rounded" type="submit">Sign in</button>
          <p className="text-center">© 2017–2021</p>
        </form>
      </div>
    </div>
  );
}

export default App;
