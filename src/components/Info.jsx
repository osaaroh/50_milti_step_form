import { useGlobalContext } from "../context"
const Info=()=>{
    const {setUserInfo, userInfo} = useGlobalContext()
    return(
        <section className="section section__info">
            <h1>Personal Info</h1>
            <p className="light-gray-text">Please provide your name, email and phone number</p>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="name">Name <p className="error_input error_input__name"></p></label>
                    <input type="text" name="" id="name" placeholder="e.g Stephen King" value={userInfo.hasOwnProperty("name")?userInfo.name?userInfo.name:"":""} onChange={(e)=>{
                            e.target.classList.remove('error_border');
                            setUserInfo({...userInfo, "name":e.target.value})
                        }}
                    />
                    {/* <p className="error_input error_input__name"></p> */}
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email <p className="error_input error_input__email"></p></label>
                    <input type="email" name="" id="email" placeholder="e.g stephen@lorem.com" value={userInfo.hasOwnProperty("email")?userInfo.email?userInfo.email:"":""}  onChange={(e)=>{
                            e.target.classList.remove('error_border');
                            setUserInfo({...userInfo, "email":e.target.value})
                        }}/>
                    {/* <p className="error_input error_input__email"></p> */}
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number <p className="error_input error_input__phone"></p></label>
                    <input type="text" name="" id="phone" placeholder="e.g +123 456 7890"  value={userInfo.hasOwnProperty("phone")?userInfo.phone?userInfo.phone:"":""} onChange={(e)=>{
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