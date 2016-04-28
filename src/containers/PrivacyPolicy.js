// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { default as Header } from "../components/Header";
import { default as NavBar } from "../components/NavBar";

import { default as Footer } from "../components/Footer";
import { default as NavBarFooter } from "../components/NavBarFooter";
import { default as Copyright } from "../components/Copyright";


class PrivacyPolicy extends React.Component{

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <div className='ui one column grid container'>
          <div className="row">        
            <h1 className="ui header red">Privacy Policy</h1>
            <p>
              At Japan Bus Charter, we are committed to protecting your privacy. We use the information you provide to secure your Japan Bus Charter reservation.<br />
At some point in the future, we may use the information we collect to occasionally notify you about important functionality changes to the Web site, new Japan Bus Charter services, and special offers we think you'll find valuable. If we do so, you'll be provided an opportunity to unsubscribe from this mailing list.<br />
Japan Bus Charter does not sell, trade, or rent your personal information to others. We may choose to do so in the future with trustworthy third parties, but you can tell us not to by sending a blank e-mail message to never@Japan Bus Charter.com from the email you'd like removed. In addition, we also may market certain third party services through our site. If you accept the offer, we will pass your relevant personal information, including name to that third party. If you have previously requested that your personal information not be shared with third parties, but then later consent by accepting a third party marketing offer available through our site, we will share your contact and billing information with that specific third party.<br />
Also, Japan Bus Charter may provide aggregate statistics about our customers, sales, traffic patterns, and related site information to reputable third-party vendors, but these statistics will include no personally identifying information. Japan Bus Charter may release account information when we believe, in good faith, that such release is reasonably necessary to (i) comply with law, (ii) enforce or apply the terms of any of our user agreements or (iii) protect the rights, property or safety of japanbuscharter.com, our users, or others
            </p>
          </div>
          <div className="row"></div>
        </div>
        <NavBarFooter />
        <Copyright />
      </div>
    );
  }
}

PrivacyPolicy.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(PrivacyPolicy);
