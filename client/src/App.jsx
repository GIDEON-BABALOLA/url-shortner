import { useState } from 'react';
import { url as api } from "./api/fetchUrl"
import './App.css';
function App() {
  const [url, setUrl] = useState("")
  const [shorturl, setShortUrl] = useState("")
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
const shortenUrl = async () => {
  setIsLoading(true)
  try{
const response = await api.post("/api/url/shorten", {
  longUrl : url
})
if(response && response.data){
  setIsLoading(false)
setShortUrl(response.data.shorturl)
}
  }catch(err){
    setError(true)
    setIsLoading(false)
    console.log(err.name)
    setShortUrl("Unable To Shorten Url")
    console.log(err)
  }
}
const submitForm = async (e) => {
  e.preventDefault()
shortenUrl()
}
    return (
    <div>
      <div className="login-root">
        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
                <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
                <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
              </div>
            </div>
          </div>
          <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>YouShorten</h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15 coloriot">Enter Your Url:</span>
                  <form id="stripe-login" onSubmit={submitForm}>
                    <div className="field padding-bottom--24">
                  
                      <input type="text" name="text" value={url} onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="">
                        <label htmlFor="password"  style={{textAlign : "center", fontWeight : 600, color : "#212d63"}} className='coloriot'>ShortUrl</label>
                        <div className="reset-pass">
                       
                        </div>
                      </div>
                      <input type="text" name="password" value={shorturl} readOnly  className={ error && "colored"}/>
                    </div>
                    <div className="field padding-bottom--24">
                    
                      <input type="submit" name="submit" value="Shorten"/>
                    </div>
                    <div className="field">
                      <a className="ssolink" href="#">YouShorten always got you</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
