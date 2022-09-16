import React from "react";
function Footer(){
    return(
        <>
         <section class="foot">
            <div class="footer">
                <div class="travelBug">
                    <div class="quicklink">
                
                        <h4>Quick Links</h4>
                        <p>Home</p>
                        <p>Things To Do</p>
                        <p>Tourist Attraction</p>
                        <p>Favorite</p>
                    </div>
                    <div class="address">
                        <h4>Address</h4>
                        <p>14, 1 Ellis bridge ST,</p>
                        <p>auckland 3500, Ethiopia</p>
                        <p>+15 9900 990 009</p>
                        <p>Contact us @ethiopia.com</p>
                    </div>
                </div>
                <div class="sub-field">
                    <p>Subscribe to our newsletter</p><br/>
                    <input type="text" name="" placeholder="Your email" class="text-input" id=""/><select></select>
                </div>
                <br/>
                
            </div>
            <div class="lowerText">
                <h4>TRAVEL BUG © All Rights Reserved</h4><br/>
            </div>
        </section>
        </>
    
    )
}
export default Footer;