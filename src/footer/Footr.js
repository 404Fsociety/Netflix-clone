import React from 'react'
import'./Footr.css'
import { FacebookLoginButton,InstagramLoginButton,LinkedInLoginButton,GithubLoginButton } from "react-social-login-buttons";

const Footr = () => {
  return (
         <>
            <div className="foot_main">
                <div className="foot_div1">
                    <ul className ="foot_ul1">
                        <li className ="content_li"><a className="links" href="https://help.netflix.com/en/node/412">FAQ</a></li>
                        <li className ="content_li"><a  className="links" href="http://ir.netflix.com/">
                            Investor Relations</a></li>
                        <li className ="content_li"><a className="links"  href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li className ="content_li"><a  className="links"  href="https://fast.com/">Speed Test</a></li>
                    </ul>
                </div>

                <div className="foot_div2">
                    <ul className ="foot_ul2">
                        <li  className ="content_li"><a  className="links" href="https://help.netflix.com/">Help Centre</a></li>
                        <li className ="content_li"><a   className="links" href="https://jobs.netflix.com/jobs">Jobs</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/privacy#cookies">Cookie Preferences</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    </ul>
                </div>

                <div className="foot_div3">
                    <ul className ="foot_ul3">
                        <li className ="content_li"><a  className="links" href="https://www.netflix.com/youraccount">Account</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.netflix.com/watch">Ways to Watch </a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.netflix.com/in/browse/genre/839338">Netflix Originals</a></li>
                    </ul>
                </div>

                <div className="foot_div4">
                    <ul className ="foot_ul4">
                        <li className ="content_li"><a  className="links" href="https://media.netflix.com/">Media Centre</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/contactus">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className='clone'>
                <div style={{display:"flex",height:"100%"}}>
                <div style={{color:"white",fontSize:"22px"}}>Netflix Site cloned by :</div>
                <p style={{color:"red",fontSize:"22px",marginLeft:"10px"}}>ELMAY Nizar</p>
                </div>
                <div className='icons'>
                <a href='https://www.facebook.com/nizar.may98'>
                <FacebookLoginButton style={{width:"45px",height:"35px"}}>
                    <span></span>
                </FacebookLoginButton>
                </a>
                <a href='https://www.instagram.com/nizar_may/'>
                <InstagramLoginButton style={{width:"45px",height:"35px"}}>
                    <span></span>
                </InstagramLoginButton>
                </a>
                <a href='https://www.linkedin.com/in/nizar-may-258a32199'>
                <LinkedInLoginButton style={{width:"45px",height:"35px"}}>
                    <span></span>
                </LinkedInLoginButton>
                </a>
                <a href='https://github.com/404Fsociety'>
                <GithubLoginButton style={{width:"45px",height:"35px"}}>
                    <span></span>
                </GithubLoginButton>
                </a>
                </div>
                </div>
        </>

  )
}

export default Footr