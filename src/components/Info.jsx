import { useGlobalContext } from "../context"
const Info=()=>{
    const {setUserInfo, userInfo} = useGlobalContext()
    return(
        <section className="section section__info">
            <h1>Personal Info</h1>
            <p className="light-gray-text">Please provide your name, email and phone number</p>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="name">Name <span className="error_input error_input__name"></span></label>
                    <input type="text" name="name" id="name" placeholder="e.g Stephen King" value={userInfo.hasOwnProperty("name")?userInfo.name?userInfo.name:"":""} onChange={(e)=>{
                            e.target.classList.remove('error_border');
                            setUserInfo({...userInfo, "name":e.target.value})
                        }}
                    />
                    {/* <p className="error_input error_input__name"></p> */}
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email <span className="error_input error_input__email"></span></label>
                    <input type="email" name="email" id="email" placeholder="e.g stephen@lorem.com" value={userInfo.hasOwnProperty("email")?userInfo.email?userInfo.email:"":""}  onChange={(e)=>{
                            e.target.classList.remove('error_border');
                            setUserInfo({...userInfo, "email":e.target.value})
                        }}/>
                    {/* <p className="error_input error_input__email"></p> */}
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number <span className="error_input error_input__phone"></span></label>
                    <input type="text" name="phone" id="phone" placeholder="e.g +123 456 7890"  value={userInfo.hasOwnProperty("phone")?userInfo.phone?userInfo.phone:"":""} onChange={(e)=>{
                            e.target.classList.remove('error_border');
                            setUserInfo({...userInfo, "phone":e.target.value})
                        }}/>
                    {/* <p className="error_input error_input__phone"></p> */}
                </div>
            </div>
            
        </section>
    )
}

export default Info