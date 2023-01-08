import iconThanks from '../assets/images/icon-thank-you.svg'
const Thanks=()=>{
    return(
        <section className="section section__thanks">
            <img src={iconThanks} alt="" />
            <h1>Thank you!</h1>
            <p className="light-gray-text">  Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>         
        </section>
    )

}

export default Thanks