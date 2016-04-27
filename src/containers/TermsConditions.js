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


class TermsConditions extends React.Component{

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <div className="ui one column grid container">
          <div className="column borderGrid">
            <h1 className="ui header red">Terms and Conditions</h1>
            <div className="ui inverted divider"></div>
            <p>This Terms and Conditions is a part of contract which is stated in 4 & 5 of Article 12 of the Travel Agency Law.</p>
            <p>Subscription Type：Agent-Organized Tour</p>
            <p>Chapter 1. – General Provision</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                Scope of Application
              </div>
              <div className="two wide column">
                Article 1
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Contract of our Company (hereinafter to be referred to as "We," "Us," or "Our" as the case may be) concerning the Agent-Organized Tour (hereinafter referred to as the "Agent-Organized Tour") to be concluded with the Traveler, shall be based on this Contract under the following terms and conditions. In the case that any matter not stipulated in this Contract arises, ordinance or generally established practice shall be applied.
                </div>
                <div>
                  02. In case where we conclude a special contract with the Traveler in written, neither in violation of the relevant law, nor harming the interests of the Traveler, such a special contract shall be given priority, notwithstanding the provision of the preceding Paragraph 01.01.
                </div>
              </div>
              <div className="sixteen wide column">
                Definition of Terminology
              </div>
              <div className="two wide column">
                Article 2
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The " Agent-Organized Tour" shall mean, in this Contract, such Tours as those for which we prepare beforehand, travel plans including itineraries, destinations, forms of transport and contents of accommodation service to be offered to Travelers, as well as the amount of the Tour Price payable to us by the Traveler, which shall be implemented as planned.
                </div>
                <div>
                  02. In this Contract, the "Inland Trip" shall refer to trips planned with travel within Japan only, and the "Overseas Trip" shall mean those trips other than inland trips.
                </div>
                <div>
                  03. In this Section, the "Communication Contract" shall refer to the Agent-Organized Tour Contract, concluded for our Organized Tour with the card member of our Company, or the credit card company (hereinafter referred to as the "Affiliated Company") affiliated with the company marketing the Agent-Organized Tour on our behalf, by subscription through telephone, e-mail, facsimile, or other means of communication. This is subject to receiving prior consent from the Traveler, regarding settlement of the credit obligation or liability held by us, such as the Tour Price, etc., under the Agent-Organized Tour Contract, on and after the due date of such obligation or liability according to card membership rules as provided separately by the Affiliated Company. This is also subject to payment of the Tour Price, etc. payable under the aforementioned Agent-Organized Tour Contract, as specified by the method in 12.02, the latter Paragraph of 16.01, and 19.02 hereunder.
                </div>
                <div>
                  04. In this Section, the "Electronically Consented Notice" shall refer to the notice issued in acceptance of the subscription for the Contract. The issuance is conducted by means of transmission, through methods utilizing information-communication technologies, via telecommunication lines connecting the computer, facsimile, telex or telephone (hereinafter referred to as the "Electronic Computer, etc."), as used by us, or the company marketing the Agent-Organized Tour on our behalf, with the Electronic Computer, etc. used by the Traveler.
                </div>
                <div>
                  05. In this Contract, the "Date Card Used" shall refer to the date when the Traveler or our Company becomes obligated to pay the Tour Price, etc. or when refundable liability is implemented under the Agent-Organized Tour Contract.
                </div>
              </div>
              <div className="sixteen wide column">
                Contents of Tour Contract
              </div>
              <div className="two wide column">
                Article 3
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We undertake the organization of arrangements and administration of itineraries under the Agent-Organized Tour Contract, such that the Traveler may be provided with transport, transport and accommodation as offered by accommodation facilities, and other services concerning the Tour (hereinafter referred to as the "Tour Service").
                </div>
              </div>
              <div className="sixteen wide column">
                  Business Agent
              </div>
              <div className="two wide column end">
                Article 4
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We reserve the right to engage other travel agents, professional organizers and arrangers, or other helpers in or outside Japan, in having them make arrangements in whole, or in part on our behalf, for the execution of the Agent-Organized Tour Contract.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 2 - Conclusion of Contract</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Subscription for the Tour Contract
              </div>
              <div className="two wide column">
                Article 5
              </div>
              <div className="fourteen wide column">
                <div>
                  01. A Traveler who wishes to subscribe for our Agent-Organized Tour Contract shall fill in the necessary information on the Application Form as designated by us (hereinafter referred to as the "Application Form"), and shall submit it to us together with the required Application Fee as specified separately by us.
                </div>
                <div>
                  02. Notwithstanding provision of preceding Paragraph 05.01, the Traveler who wishes to subscribe for our Communication Contract, shall notify us of the name of the desired Agent-Organized Tour, the start date of the Tour, the aforementioned Traveler's membership number and other information as required (hereinafter in the subsequent Articles referred to as the "Membership Number, etc.").
                </div>
                <div>
                  03. The Application Fee as specified in 05.01 above, shall be treated as part of the Tour Price, may be subject to forfeiture in the case of cancellation, or may be used as a penalty charge.
                </div>
                <div>
                  04. In cases where the Traveler participating in the Agent-Organized Tour requires special attention, the aforementioned Traveler shall mention such a request to us at the time of application for the Contract. We shall attempt to accommodate such requests as far as possible.
                </div>
                <div>
                  05. Expenses incurred as a result of special arrangements made at the request of the Traveler, under preceding Paragraph 05.04, shall be borne by the Traveler themselves.
                </div>
              </div>
              <div className="sixteen wide column">
                  Subscription by Telephone, etc.
              </div>
              <div className="two wide column">
                Article 6
              </div>
              <div className="fourteen wide column">
                <div>
                  01. Subscriptions for the Agent Organized Tour Contract are accepted by means of telephone, mail, facsimile and other means of communications. In such cases, the Contract is not concluded at the time of subscription, and the Traveler for the aforementioned Tour shall submit an Application Form and Application Fee, or notify us of his or her Membership Number, etc. within the period as designated by us, in accordance with the provision of 05.01 or 05.02 of preceding Article 5, after we have notified said Traveler of our acceptance of his or her subscription.
                </div>
                <div>
                  02. Upon the submission of the Application Form and Application Fee as specified in preceding Paragraph 06.01, or when we have been notified of the Traveler's Membership Number, etc., the order in which we conclude the Agent-Organized Tour Contract with the aforementioned Traveler shall be in the same order that we received said subscription, with regards to other similar subscriptions.
                </div>
                <div>
                  03. In cases where the Traveler fails to submit the Application Fee, or to notify us of his or her Membership Number, etc. within the period specified in 06.01 above, we shall consider such a subscription as not having been received and treat it accordingly.
                </div>
              </div>
              <div className="sixteen wide column">
                  Rejection of Contract Conclusion
              </div>
              <div className="two wide column">
                Article 7
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The following are cases upon which we reserve the right to decline the conclusion the Agent-Organized Tour Contract.
                      <br />(1) In cases where the age, sex, qualifications, skills and/or other conditions of the Traveler in question do not meet such conditions as specified by us in advance, as required of Travelers participating in the Tour.
                      <br />(2) In cases where the number of Travelers subscribing for the Tour has already reached the maximum number of participants as scheduled for the Tour.
                      <br />(3) In cases where the Traveler in question subscribing for the Tour is likely to create a nuisance for other Travelers or hinder smooth implementation of the Tour as a group.
                      <br />(4) In cases where there is any inconvenience experienced on our side related to our business, as stemming from the actions of the Traveler in question during the subscription process.
                      <br />(5) In cases where the Communication Contract is about to be concluded, and the Traveler is unable to settle in whole or in part, the liability related to his or her Tour Price, etc. as stipulated in the card membership rules of the Affiliated Company. Such reasons may be due to, but not limited to, the credit card as held by the Traveler in question, being found to be invalid.
                </div>
              </div>
              <div className="sixteen wide column">
                  Time that the Tour Contract is deemed Concluded
              </div>
              <div className="two wide column">
                Article 8
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Agent-Organized Tour Contract shall be deemed to be concluded, when we have accepted the conclusion of the Contract, and have received the Application Fee as specified in 05.01.
                </div>
                <div>
                  02. Notwithstanding the provision of preceding Paragraph 08.01, the Communication Contract shall be considered concluded when we send a notice to the effect of communicating our acceptance of the conclusion of the Contract. An electronic notice of acceptance as sent by us is exception to this, in which case the aforementioned Contract shall be deemed to be concluded when said electronic notice reaches the Traveler.
                </div>
              </div>
              <div className="sixteen wide column">
                  Delivery of Contract Document
              </div>
              <div className="two wide column">
                Article 9
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall promptly deliver to the Traveler, a document (hereinafter referred to as the "Contract Document") detailing the itinerary, contents of Tour Service, Tour Prices, and other conditions of the Tour, as well as matters concerning our responsibility with regards to the Tour, after the Tour Contract has been concluded as defined in preceding Article 8.
                </div>
                <div>
                  02. The scope of the Tour Service involving our responsibility in making arrangements and administering itineraries under the Agent-Organized Tour Contract, shall be based on details stated in the Contract Document, as specified in preceding Paragraph 09.01.
                </div>
              </div>
              <div className="sixteen wide column">
                  The Determinate Document
              </div>
              <div className="two wide column">
                Article 10
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In cases where it is not possible to state the determinate itinerary, or the names of transport and/or accommodation facilities in the Contract Document as specified in preceding Article 09.01., we shall list, on a limited basis, the names of facilities scheduled for accommodation and the name of intended transport facilities on the Contract Document. Further to delivering such a Contract Document, we shall also deliver a document with descriptions of determinate conditions (hereinafter referred to as the "Determinate Document") on or before the date as specified in said Contract Document, but no later than the day immediately preceding the starting date of the Tour (or the starting date of the Tour, in cases where subscriptions for the Agent-Organized Tour Contract are made during the 7-day period leading up to the start date of the tour) .
                </div>
                <div>
                  02. With respect to preceding Paragraph 10.01., in cases where an enquiry is received from a Traveler who wishes to confirm the condition of arrangements, we shall respond promptly and properly to such an enquiry, even prior to the delivery of the Determinate Document to said Traveler.
                </div>
                <div>
                  03. In cases where the Determinate Document has been delivered as specified in 10.01., the scope of the Tour Service involving our responsibility to arrange and administer the itinerary, shall be limited to the scope as described in said Determinate Document.
                </div>
              </div>
              <div className="sixteen wide column">
                  Method of Utilizing Telecommunication Technology
              </div>
              <div className="two wide column">
                Article 11
              </div>
              <div className="fourteen wide column">
                <div>
                  01. Assuming prior consent of the Traveler has been obtained; when said Traveler has been provided with details such as the itinerary, contents of the Tour Service, the Tour Price, other conditions of the Tour, and our responsibility (hereinafter referred to in this Article as the "Described Details"), to be stated in the document, the Contract Document, or the Determinate Document, at such a time when he or she is about to conclude the Agent-Organized Tour Contract, and said provision is by means of utilizing telecommunications technology, instead of physically delivering the aforementioned document(s) to said Traveler, we shall confirm that the Described Details have been recorded on a file as equipped in and as capable of communications equipment and as used by the Traveler (confined to the use of said Traveler) and have been viewed by said Traveler.
                </div>
                <div>
                  02. With respect to preceding Paragraph 11.01., when the communications equipment used by the aforementioned Traveler is not equipped with and/or not capable of the function of recording the Described Details, we shall record the Described Details on a file (for exclusive use of the said Traveler) as equipped in and as capable of communications equipment used by us, and confirm that said Traveler has viewed the Described Details.
                </div>
              </div>
              <div className="sixteen wide column">
                  Tour Price
              </div>
              <div className="two wide column end">
                Article 12
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Traveler shall pay to us, the amount of the Tour Price as specified in the Contract Document, on or before the date specified in the Contract Document, and prior to the starting date of the Tour.
                </div>
                <div>
                  02. Upon conclusion of the Communication Contract, we shall receive payment of the amount of the Tour Price as specified in the Contract Document by the credit card of our Affiliated Company, and without the need to obtain the Traveler's signature on the designated voucher. In this case, the date of card used shall be considered as the date that the Tour Contract is concluded.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 3 - Alteration of the Contract</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                Alteration of Contract Contents
              </div>
              <div className="two wide column">
                Article 13
              </div>
              <div className="fourteen wide column">
                <div>
                  13.01. In cases where unusual and unforeseen circumstances arise due to reasons beyond our control, including, but not limited to acts of God/providence, acts of war, civil commotion, suspension and/or closure of Tour Services such as transport and accommodation facilities, exercises and/or orders from government and other public agencies, the need to use transport services not based on our original transport plan, and such circumstances affect the safe and smooth implementation of the Tour, we may be required to change the itinerary contents of the Tour Service, and other contents of the Agent-Organized Tour Contract (hereinafter referred to as the "Contract Contents") by promptly informing and/or explaining to the Traveler beforehand, reasons for the nature of such circumstances being beyond our control, and the correlation between such circumstances and subsequent changes. This shall be the case except at the time of an emergency, where the Traveler is informed and/or receives an appropriate explanation after such changes have been made.
                </div>
              </div>
              <div className="sixteen wide column">
                  Alteration of Tour Price
              </div>
              <div className="two wide column">
                Article 14
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In cases where the transport fare and charge applicable to the transport facilities being used for the implementation of the Agent-Organized Tour (hereinafter in this Article referred to as the "Applicable Fare and Charge") are increased or reduced considerably beyond price levels as normally assumed, due to significant changes to economic and/or other conditions, compared with the Applicable Fare and Charge specified at the time when the Agent-Organized Tour was originally offered, we shall be permitted to increase or reduce the amount of the Tour Price within the range of the amount so increased or reduced.
                </div>
                <div>
                  02. In cases where we increase the Tour Price as provided for in preceding Paragraph 14.01., we shall inform the Traveler to that effect no later than the 15th day prior to the starting date of the Tour.
                </div>
                <div>
                  03. In cases where the Applicable Fare and Charge are reduced as provided for in 14.01., we shall lower the Tour Price by the amount so reduced in accordance with the provision of said Paragraph.
                </div>
                <div>
                  04. In cases where changes in the contents of the Tour Contract, according to the provision of preceding Article 13, result in any increase or decrease to accrue in the expenses required for the implementation of the Tour (including cancellation charges for the Tour Service not received due to changes in the contents of said Contract, penalties and/or other prepaid or payable expenses), we reserve the right to make changes to the amount of the Tour Price, within the range of the amount increased or reduced when such Contract Contents are changed (except when such a change is the result of a lack of vacancies in the transport and accommodation facilities, or rooms and other facilities, despite the relevant Tour Service and seats/places as provided by the transport and accommodation facilities) .
                </div>
                <div>
                  05. When the number of people participating in the Tour changes due to reasons not attributed to us after the conclusion of the Agent-Organized Tour Contract, in cases where we have stated in the Contract Document that the Tour Price varies with the number of people utilizing the transport and accommodation facilities, we reserve the right to change the amount of the Tour Price as described in the Contract Document.
                </div>
              </div>
              <div className="sixteen wide column">
                  Change of Traveler
              </div>
              <div className="two wide column end">
                Article 15
              </div>
              <div className="fourteen wide column">
                <div>
                  01. A Traveler who has concluded an Agent-Organized Tour Contract with us, may assign his/her status under said Contract to a third party, subject to our consent.
                </div>
                <div>
                  02. In cases where the Traveler wishes to obtain our consent as provided for in preceding paragraph 15.01, said Traveler shall fill in the necessary information on a form as designated by us, and submit it with the handling fee of a designated amount, to us.
                </div>
                <div>
                  03. The assignment of said status under the Contract, as provided for in 15.01., shall take effect when approved by us. After such approval, the third party who has acquired such status under the Tour Contract, shall inherit all rights and obligations concerning said Agent-Organized Tour Contract as originally concluded by the Traveler.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 4 - Cancellation of the Contract</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Our Right to Cancel the Contract - Cancellation before the Start of the Tour
              </div>
              <div className="two wide column">
                Article 17
              </div>
              <div className="fourteen wide column">
                <div>
                  01. There are cases as follows where we will cancel the Customized Tour Contract before the start of the Tour by explaining to the Traveler the reason for the cancellation:
                  <br />(1) In cases where the Traveler is considered unbearable to participate in the said Tour due to illness, absence of a necessary helper or other causes.
                  <br />(2) In cases where the Traveler is likely to cause trouble to other Travelers or interfere with the smooth implementation of the Tour as a group.
                  <br />(3) In cases where the Traveler has requested extra burden with regards to the contents of the Contract beyond a reasonable range.
                  <br />(4) In cases where it is extremely likely that the Tour conditions required for implementation of the Tour as described at the time of the conclusion of the Contract, such as the amount of snowfall necessary for a ski Tour, may disable the tour.
                  <br />(5) In cases where there arise such causes beyond our control as act of providence, maelstrom of war, civil commotion, suspension of Tour Services like transport and accommodation facilities, orders from government and public agencies, and other causes, which disable the safe and smooth implementation of the Tour as scheduled according to the itinerary described in the Contract Document, or which are extremely likely to disable the Tour.
                  <br />(6) When the Communication Contract is concluded, in the case that the Traveler becomes unable to settle in part or in whole his/her liability relating to the Tour Price, etc. as provided in the card membership rules of the Affiliated Company due to such causes as the credit card held by the Traveler becomes invalid.
                </div>
                <div>
                  02. In the case that the Traveler does not pay the Tour Price by the due date specified in the Contract Document as provided in 12.01, the Traveler will be considered to have cancelled the Customized Tour Contract on the day immediately following the said due date. In this case, the said Traveler will be required to pay a penalty of the amount equal to the cancellation charge specified in 16.01.
                </div>
              </div>
              <div className="sixteen wide column">
                  Our Right to Cancel - Cancellation after the Start of the Tour
              </div>
              <div className="two wide column">
                Article 18
              </div>
              <div className="fourteen wide column">
                <div>
                  01. There are cases as follows where we may cancel part of the Customized Tour Contract even after the start of the Tour by explaining to the Traveler about the reason for the cancellation:
                  <br />(1) In cases where the Traveler is unbearable to continue the Tour due to the absence of a necessary helper or other causes.
                  <br />(2) In cases where the Traveler interferes with the safe and smooth implementation of the said Tour by not following the instructions given by our Tour Escort or other staff to implement the Tour safely and smoothly or disrupting the disciplinary order of the group activity by physically assaulting or threatening the said staff or other Travelers.
                  <br />(3) In cases where there arise such causes beyond our control as act of providence, maelstrom of war, civil commotion, suspension of Tour Services like transport and accommodation facilities, orders from government and public agencies, and other causes, which have disabled the safe and smooth implementation of the Tour.
                </div>
                <div>
                  02. In the case that we have cancelled the Customized Tour Contract under the provision of the preceding Paragraph 18.01, the Contractual relationship between our Company and the Traveler ceases to exist only to the future. In this case, it will be considered that our liability related to the Tour Service already provided to the Traveler has been redeemed effectively.
                </div>
                <div>
                  03. In the case of the preceding Paragraph 18.02, we shall refund to the Traveler the amount remaining after deducting the cancellation charge, penalty charge and any other amount already paid or the amount related to the expenses payable from now for the said Tour Service from the amount covering the portion of the Tour Service which has not yet been offered to the Traveler out of the Tour Price.
                </div>
              </div>
              <div className="sixteen wide column">
                  Refund of the Tour Price
              </div>
              <div className="two wide column">
                Article 19
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall refund to the Traveler the amount due in case there accrues a refundable amount due to the Traveler due to the reduction of the Tour Price under the provisions set forth from 14.03 through 14.05 or due to cancellation of the Customized Tour Contract under the provisions of the preceding three Articles from Article 16 through Article 18, within 7 days reckoned from the day immediately following the date of cancellation in the case of a refund due to cancellation before the start of the Tour, or within 30 days reckoned from the day immediately following the last day of the Tour which is stated in the Contract Document in the case of a refund due to the reduction of the Tour Price or cancellation after the start of the Tour.
                </div>
                <div>
                  02. In the case that the Communication Contract has been concluded with the Traveler, we shall pay a refund to the Traveler according to the card membership rules of the Affiliated Company if there accrues a refundable amount due to him or her due to reduction of the Tour Price under the provisions set forth from 14.03 through 14.05 or due to cancellation of the Communication Contract under the provisions of the preceding three Articles from Article 16 through Article 18. In this case, we shall notify the Traveler of the refundable amount due within 7 days reckoned from the day immediately following the date of cancellation in the case of a refund due to cancellation before the start of the Tour, or within 30 days reckoned from the day immediately following the last day of the Tour which is stated in the Contract Document in the case of a refund due to the reduction of the Tour Price or cancellation after the start of the Tour. The day when we have notified the Traveler shall be considered as the date of using the card.
                </div>
                <div>
                  03. The provisions of the preceding two Paragraphs, 19.01 and 19.02, shall not prevent the Traveler or our Company from exercising the right to claim compensation for damage under the provision of Article 28 or Article 31.01 hereto.
                </div>
              </div>
              <div className="sixteen wide column">
                  Arrangement for Return Trip after Cancellation of the Contract
              </div>
              <div className="two wide column end">
                Article 20
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In the case that we have cancelled the Customized Tour Contract after the start of the Tour under the provision of Article 18.01 (1) or 18.03, we shall undertake arrangements for the Tour Service needed for the Traveler to return to the departure place of the said Tour at the request of the Traveler.
                </div>
                <div>
                  02. In the case of the preceding Paragraph 20.01, all the expense required for the return trip to the departure place shall be borne by the Traveler.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 5 - Contracts with Organizations and Groups</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Contracts with Organizations and Groups
              </div>
              <div className="two wide column">
                Article 21
              </div>
              <div className="fourteen wide column">
                <div>
                    01. We shall apply the provisions of this Chapter to the conclusion of the Customized Tour Contract in cases where we receive subscriptions from two or more Travelers who are to travel the same route at the same time, provided that each Traveler appoint a responsible representative (hereinafter referred to as the "Contract Representative").
                </div>
              </div>
              <div className="sixteen wide column">
                  Contract Representative
              </div>
              <div className="two wide column">
                Article 22
              </div>
              <div className="fourteen wide column">
                <div>
                    01. Unless a Special Contract is concluded, we shall consider the Contract Representative as the person holding all the power of representation concerning the conclusion of the Customized Tour Contract for the Travelers who compose his/her organization or group (hereinafter referred to as the "Constituent Member"), and we shall handle transactions concerning the Tour business related to the said organization or group and the business of Article 26.01 with the said Contract Representative.
                </div>
                <div>
                  02. The Contract Representative will be required to submit a list of the Constituent Members on or before the date set by us.
                </div>
                <div>
                  03. We shall not be held responsible for the liabilities or obligations which the Contract Representative assumes to the Constituent Members at present or the liabilities or obligations which the Contract Representative is expected to assume in the future.
                </div>
                <div>
                  04. In the case that the Contract Representative does not accompany his/her organization or group during the Tour, one of the Constituent Members appointed by the Contract Representative beforehand shall be considered by us as the Contract Representative after the start of the Tour.
                </div>
              </div>
              <div className="sixteen wide column">
                  Special Rule of the Conclusion of the Contract
              </div>
              <div className="two wide column end">
                Article 23
              </div>
              <div className="fourteen wide column">
                <div>
                  01. When we conclude the Customized Tour Contract with the Contract Representative, there are cases where we accept the conclusion of the Customized Tour Contract without receiving payment of the Application Fee, notwithstanding the provision of Article 26.01.
                </div>
                <div>
                  02. When we conclude the Customized Tour Contract with the Contract Representative without receiving payment of the Application Fee under the provision of the preceding Paragraph 23.01, we shall deliver to the Contract Representative a Document written to that effect, and the Customized Tour Contract shall be considered concluded when we have delivered the said Document to the Contract Representative.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 6 - Administration of Itinerary</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Administration of Itinerary
              </div>
              <div className="two wide column">
                Article 24
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall make efforts to secure the safe and smooth implementation of the travel for the Traveler and to carry out the following services for the Traveler, except when we have concluded with the Traveler a Special Contract which differs from these services:
                  <br />(1) In cases where it is considered that the Traveler may not be able to receive the Tour Service during the Tour, to take necessary measures to ensure that the Traveler will receive the Tour Service as specified in the Customized Tour Contract.
                  <br />(2) In cases where it becomes unavoidable to alter the contents of the Tour Contract despite the measures taken as described in the preceding Paragraph, to make arrangements for alternative services. If the itinerary of the Tour is to be changed, we shall make efforts to make the alternative itinerary after the change measure up to the purport of the original itinerary. Also in cases where we are required to change the contents of the Tour Services, we shall try to minimize alterations of the Contract Contents by making the contents of the Tour Service after the change as close to the originally planned contents as possible.
                </div>
              </div>
              <div className="sixteen wide column">
                  Instructions of Our Company
              </div>
              <div className="two wide column">
                Article 25
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Traveler will be required to follow the instructions of our Company while the Tour is conducted as a group during the Tour from its start to its finish, in order to implement the Tour safely and smoothly.
                </div>
              </div>
              <div className="sixteen wide column">
                  Services of Tour Escorts, Etc
              </div>
              <div className="two wide column">
                Article 26
              </div>
              <div className="fourteen wide column">
                <div>
                  01. There are cases where we shall ask Tour Escorts or others to accompany the Tour, depending on the contents of the Tour, and handle the services described in the respective Paragraphs of Article 24 in whole or in part or any other services which we consider necessary in connection with the said Customized Tour.
                </div>
                <div>
                  02. The service hours for the said Tour Escorts or others to engage in the services described in the preceding Paragraph 26.01 shall be in principle from 8:00 to 20:00.
                </div>
              </div>
              <div className="sixteen wide column">
                  Protective Measures
              </div>
              <div className="two wide column end">
                Article 27
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In the case that a situation arises where we consider the Traveler to be in a condition requiring protection due to sickness, injury, ect. during the travel, we may take the necessary measures. In these cases, if the cause is not blamed on us, the expenditure required for the said measures shall be borne by the said Traveler and shall be payable by the Traveler on or before the date set by us by the method designated by us.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 7 - Responsibility</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Responsibility of Our Company
              </div>
              <div className="two wide column">
                Article 28
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall be responsible for compensating for the damage caused to the Traveler intentionally or negligently by us or by our agent (hereinafter referred to as the "Business Agent") who has been engaged by us to make arrangements on our behalf under the provision of Article 4, but limited only to cases when notice has been given to us within two years from the day immediately following the day when the damage occurred.
                </div>
                <div>
                  02. In cases where the Traveler has suffered damage due to causes beyond the control of our Company or our Business Agent, such as acts of providence, maelstrom of war, civil commotion, suspension of Tour Services like transport and accommodation facilities, orders from government and other public agencies, and others causes, we shall not be held responsible for compensation except in the case of the preceding Paragraph 28.01.
                </div>
                <div>
                  03. Regarding damage caused to baggage as described in 28.01, notwithstanding the provision of the said Paragraph, we shall compensate the Traveler up to ¥150,000 as a maximum amount per Traveler (except in cases where the damage has been caused by us intentionally or by gross negligence), only in cases where we have been notified of the damage within 14 days in the case of inland trips and within 21 days in the case of overseas trips, counted respectively from the day immediately following the day when the damage has occurred.
                </div>
              </div>
              <div className="sixteen wide column">
                  Special Compensation
              </div>
              <div className="two wide column">
                Article 29
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall pay compensation and a solarium of the amount set beforehand for damage caused to the life, body or baggage of the Traveler while he/she is participating in a Customized Tour, in accordance with the provision of the separate Rules of Special Compensation, regardless of whether or not the damage has been caused due to our responsibility under the preceding Article 28.01.
                </div>
                <div>
                  02. In cases where we are responsible under the provision of the preceding Article 28.01 for the damage caused as described in the preceding Paragraph 29.01, the compensation money payable by us within the limit of the amount of compensation money payable based on the said responsibility according to the preceding Paragraph 29.01 shall be considered as the compensation money for the said damage.
                </div>
                <div>
                  03. In such a case as provided in the preceding Paragraph 29.02, our responsibility to pay the indemnity based on the provision of 29.01 shall be reduced by the amount equal to the compensation money payable by us under the provision of the preceding Article 28.01 (including the indemnity considered as the compensation money according to the provision of the preceding Paragraph 29.02).
                </div>
                <div>
                  04. The Subscription Type Agent-Organized Tour which we implement by collecting a separate Tour Price from the Traveler participating in our Customized Tour shall be handled as part of the contents of the Customized Tour Contract.
                </div>
              </div>
              <div className="sixteen wide column">
                  Guarantee of Itinerary
              </div>
              <div className="two wide column">
                Article 30
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In the case that a serious alteration is made to the Tour Contents described in the left column of Schedule II (except the alterations described in each of the following instances (excluding alterations caused by the lack of seats in the transportation facilities or the lack of rooms in the accommodation or other facilities despite the fact that the said Tour Service is provided by the transport and accommodation facilities)), we shall pay compensation money for such alterations which is equal to or in excess of the amount reached by multiplying the Tour Price by the percentage specified in the right column of the said Schedule within 30 days counted from the day immediately following the last day of the Tour, except in cases where it is clear that we will bear the responsibility under the provision of Article 28.01 regarding the said alterations.
                  <br />(1) Alterations due to the following causes:
                  <br />&nbsp;&nbsp;(a) Act of providence.
                  <br />&nbsp;&nbsp;(b) Maelstrom of war.
                  <br />&nbsp;&nbsp;(c) Civil commotion.
                  <br />&nbsp;&nbsp;(d) Orders from government and other public agencies.
                  <br />&nbsp;&nbsp;(e) Suspension of Tour Services like transport and accommodation facilities.
                  <br />&nbsp;&nbsp;(f) Offering a transport service not based on the original travel plan.
                  <br />&nbsp;&nbsp;(g) Measures required to ensure the safety of the life or body of the Tour Participants.
                  <br />(2) Alterations relating to the portion altered following the changes made to the Customized Tour under the provision of Article 13.01 and those relating to the portion cancelled due to the cancellation of the Customized Tour Contract based on the provisions from Article 16 through Article 18.
                </div>
                <div>
                  02. The maximum amount of compensation money payable by us for the alteration shall be the amount reached by multiplying the Tour Price per Traveler for the Customized Tour by the percentage set by us in excess of 15%. However, in the case that the amount of compensation money payable per Traveler for the Customized Tour falls below ¥1,000, we shall not pay the compensation money for the alteration.
                </div>
                <div>
                  03. In the case that it becomes clear that we are liable for the said alteration, based on the provision of Article 28.01 after we have paid compensation money for the alteration in accordance with the provision of 30.01, the Traveler will be required to reimburse to us the compensation money paid for the said alteration. In this case, based on the provision of the same Paragraph, we shall pay the balance by offsetting the amount of the compensation money payable by us by the amount of the compensation money for the alteration that is refundable by the Traveler.
                </div>
              </div>
              <div className="sixteen wide column">
                  Responsibility of the Traveler
              </div>
              <div className="two wide column end">
                Article 31
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In the case that we have suffered damage due to the willfulness or fault of the Traveler, the said Traveler will be required to compensate us for the damage.
                </div>
                <div>
                  02. When the Traveler concludes the Customized Tour Contract, the Traveler will be required to try to understand the contents of the Customized Tour Contract, such as the right and obligation of the Traveler, etc., by utilizing the information provided by us.
                </div>
                <div>
                  03. In order for the Traveler to smoothly receive the Tour Service described in the Contract Document after the start of the Tour, the Traveler will be required to report promptly to us, our business agent or the provider of the said Tour Service at the Touring point if and when the Traveler realizes that a Tour Service different from the Contract Document has been offered.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 8 - Compensation Business Guarantee Bonds</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Responsibility of Our Company
              </div>
              <div className="two wide column end">
                Article 33
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We are the Security Member of the ALL NIPPON TRAVEL AGENTS ASSOCIATION (located at Tanakayama bldg.. 5F, 4-1-20, Toranomon, Minato-ku, Tokyo, JAPAN).
                </div>
                <div>
                  02. The Traveler or the Constituent Member, who has concluded the Agent-Organized Tour Contract with us, is entitled to receive reimbursement from the Compensation Business Guarantee Bonds deposited by the Association of Travel Agents which is described in the preceding Paragraph 31.01, up to the maximum amount of yen, in connection with the claim arising from the said transaction.
                </div>
                <div>
                  03. As we have paid our share of the Compensation Business Guarantee Bonds to the ALL NIPPON TRAVEL AGENTS ASSOCIATION in accordance with the provision of the first Paragraph of the Article 22.10 of the Travel Agency Law, we have not deposited the Business Guarantee Bonds based on the first Paragraph of Article 7 of the Travel Agency Law.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Schedule I - Cancellation Charge (relating to Article 16.01)</p>
            <p>1. Cancellation Charges relating to Inland Trips</p>
            <div className="ui grid">
              <div className="twelve wide column">
                Classification
              </div>
              <div className="four wide column start">
                Cancellation Charge
              </div>
              <div className="sixteen wide column">
                  (1) Customized Tour Contract excluding (2) below.
              </div>
              <div className="twelve wide column">
                (a) In a case other than the following cases from (b) through (f) (but limited to cases where we have specified the amount of the Planning Charge in the Contract Document)
              </div>
              <div className="four wide column">
                Amount equal to the Planning Charge
              </div>
              <div className="twelve wide column">
                (b) If the Contract is cancelled on or after the 20th day (the 10th day in the case of a day trip) counted backward from the day immediately preceding the starting day of the Tour (except the following cases from (c) through (f))
              </div>
              <div className="four wide column">
                Not more than 20% of the Tour Price
              </div>
              <div className="twelve wide column">
                (c) If the Contract is cancelled on or after the 7th day counted backward from the day immediately preceding the starting day of the Tour (except the following cases from (d) through (f))
              </div>
              <div className="four wide column">
                Not more than 30% of the Tour Price
              </div>
              <div className="twelve wide column">
                (d) If the Contract is cancelled on the day immediately preceding the starting day of the Tour
              </div>
              <div className="four wide column">
                Not more than 40% of the Tour Price
              </div>
              <div className="twelve wide column">
                (e) If the Contract is cancelled on the very day when the Tour starts
              </div>
              <div className="four wide column">
                Not more than 50% of the Tour Price
              </div>
              <div className="twelve wide column">
                (f) If the Contract is cancelled after the start of the Tour or the Traveler does not participate in the Tour without notice
              </div>
              <div className="four wide column">
                Not more than 100% of the Tour Price
              </div>
              <div className="twelve wide column">
                (2) Customized Tour Contract using a Chartered Vessel
              </div>
              <div className="four wide column">
                Based on the rules of the cancellation charge for the said Vessel
              </div>
              <div className="sixteen wide column endSixteen">
                Note: The amount of the cancellation charge shall clearly be specified in the Contract Document.
              </div>
            </div>
            <p className="ui segment chapter">Schedule II - Compensation Money for Alterations (relating to Article 30.01)</p>
            <div className="ui grid">
              <div className="ten wide column">
                Alterations Requiring Payment of Compensation Money
              </div>
              <div className="six wide column">
                Percentage per Case (%)
              </div>
              <div className="ten wide column">
                (1) Alterations of the starting day or last day of the Tour described in the Contract Document
              </div>
              <div className="three wide column">
                1.5
              </div>
              <div className="three wide column">
                3.0
              </div>
              <div className="ten wide column">
                (2) Alterations of sightseeing spots or sightseeing facilities (including restaurants) and other destinations of the Tour
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="ten wide column">
                (2) Alterations of sightseeing spots or sightseeing facilities (including restaurants) and other destinations of the Tour
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="ten wide column">
                (3) Alterations in the class or the facilities of Transportation Facilities to those with lower rates than those described in the Contract Document (but limited only to the cases where the total amount of charges for the class and facilities after alterations fall below the total amount for those specified in the Contract Document)
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="ten wide column">
                (4) Alterations in the type of transport or in the names of the companies described in the Contract Document
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="ten wide column">
                (5) Alterations to flights departing from and/or ending in Japan from those specified in the Contract Document.
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="ten wide column">
                (6) Alterations to a direct flight scheduled to fly from Japan to outside Japan as mentioned in the Contract Document to a connecting flight or an indirect flight.
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="ten wide column">
                (7) Alterations in the type or name of the accommodation facilities which are specified in the Contract Document
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="ten wide column">
                (8) Alterations in the conditions of guest rooms as specified in the Contract Document, such as the type of guest rooms, facilities, scenery, etc.
              </div>
              <div className="three wide column">
                1.0
              </div>
              <div className="three wide column">
                2.0
              </div>
              <div className="sixteen wide column">
                Note 1. "Before the Start of the Tour" shall refer to cases where the Traveler has been notified of the relevant alteration on or before the day immediately preceding the starting day of the Tour, and "After the Start of the Tour" shall refer to cases where the Traveler has been notified of the relevant alteration on or after the starting day of the Tour.
              </div>
              <div className="sixteen wide column">
                Note 2. When the Determinate Document has been delivered, this Schedule shall be applied by reading "Contract Document" as "Determinate Document". In this case, if any alterations take place between the described contents of the Contract Document and the described contents of the Determinate Document or between the described contents of the Determinate Document and the contents of the service actually offered, each respective alteration shall be treated as one case.
              </div>
              <div className="sixteen wide column">
                Note 3. If transport facilities related to the alterations described in (3) or (4) above involve the use of accommodation facilities, each overnight stay shall be treated as one case.
              </div>
              <div className="sixteen wide column">
                Note 4. Alternations in the names of companies operating transport facilities under (4) above will not be applicable in cases where alterations involve changes to a higher class or more sophisticated facilities.
              </div>
              <div className="sixteen wide column">
                Note 5. Even if the alterations described in (4) or (7) or (8) above take place in multiple cases during one ride on a transport vehicle or one overnight stay, each one ride or each one overnight stay shall be treated as one case respectively.
              </div>
            </div>
            <p className="ui segment chapter">Subscription Type : Agent Contracts for Procedure for Going Abroad</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Scope of Application
              </div>
              <div className="two wide column">
                Article 1
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Agent Contract for Procedure for Going Abroad to be concluded between our Company and the Traveler shall be based on this Contract under the following terms and conditions. Any matter not stipulated in this Contract shall be governed by ordinance and generally established practice.
                </div>
                <div>
                  02. If we conclude a Special Contract with the Traveler in writing without violating the relevant law or harming the interests of the Traveler, such a Special Contract shall be given priority, notwithstanding the provision of the preceding Paragraph.
                </div>
              </div>
              <div className="sixteen wide column">
                  Traveler Concluding an Agent Contract for Procedure for Going Abroad
              </div>
              <div className="two wide column">
                Article 2
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Traveler with whom we conclude an Agent Contract for Procedure for Going Abroad, shall be the Traveler who has concluded with us a Subscription Type Package Tour, an Order-Taking Type Customized Tour or an Arranged Tour, or the Traveler who has concluded a Subscription Type Agent-Organized Tour from another Travel Agent with our Company acting on their behalf by consignment.
                </div>
              </div>
              <div className="sixteen wide column">
                  Definition of an Agent Contract for Procedure for Going Abroad
              </div>
              <div className="two wide column">
                Article 3
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In this Contract, “Agent Contract for Procedure for Going Abroad” shall mean the Contract under which we undertake to perform the following services (hereinafter to be referred to as the “Agent Service") on consignment from the Traveler by contracting to receive the Travel Agent Handling Charge (hereinafter to be referred to as the "Overseas Travel Procedure Handling Charge") for handling the procedure for overseas travel on behalf of the Traveler:
                  <br />(1) Procedure to obtain the passport, visa, re-entry permit and various certificates.
                  <br />(2) Preparation of documents for immigration and re-entry formalities.
                  <br />(3) Other services related to each of the preceding items (1) and (2).
                </div>
              </div>
              <div className="sixteen wide column">
                  Conclusion of the Contract
              </div>
              <div className="two wide column">
                Article 4
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Traveler, who intends to conclude an Agent Contract for Procedure for Going Abroad with us, will be required to fill in specified particulars on the application form prescribed by us and submit it to us.
                </div>
                <div>
                  02. An Agent Contract for Procedure for Going Abroad shall be considered to have been concluded when we have accepted the conclusion of the Contract and have received the application form described in the preceding Paragraph.
                </div>
                <div>
                  03. Notwithstanding the provisions of the preceding two Paragraphs, there are cases where we will accept an application for an Agent Contract for Procedure for Going Abroad by telephone, mail, facsimile, or other means of communication, without receiving the submission of an application form, in which case the Agent Contract for Procedure for Going Abroad shall be considered to have been concluded when we have accepted the conclusion of the Contract.
                </div>
                <div>
                  04. There are cases where we will not accept the conclusion of an Agent Contract for Procedure for Going Abroad when there are inconveniences related to our business.
                </div>
                <div>
                  05. We shall, promptly after the conclusion of an Agent Contract for Procedure for Going Abroad, deliver to the Traveler a document describing the contents of the consignment service (hereinafter to be referred to as the "Consignment Service") undertaken under the Agent Contract for Procedure for Going Abroad, including the amount of the Overseas Travel Procedure Handling Charge, the method of receiving the said Charge, our responsibility and other necessary particulars.
                </div>
                <div>
                  06. When we have provided the particulars to be described in the document concerned (hereinafter to be referred to as the "Particulars") by means of utilizing information-communication technologies instead of delivering the document as specified in the preceding Paragraph, we shall confirm that the Particulars have been recorded on the file equipped in the communication equipment being used by the Traveler.
                </div>
                <div>
                  07. In the case of the preceding Paragraph, when the communication equipment being used by the Traveler is not equipped with the file for recording the Particulars, we shall record the Particulars on the file equipped in the communication equipment being used by us (limited to the file provided only for the exclusive use of the Traveler) and confirm that the Traveler has viewed the said Particulars.
                </div>
              </div>
              <div className="sixteen wide column">
                  Confidentiality
              </div>
              <div className="two wide column">
                Article 5
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall not leak to the other party any information obtained in the course of implementing the Consignment Service.
                </div>
              </div>
              <div className="sixteen wide column">
                  Responsibility of the Traveler
              </div>
              <div className="two wide column">
                Article 6
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Traveler will be required to pay the Overseas Travel Procedure Handling Charge by the date set by us.
                </div>
                <div>
                  02. The Traveler will be required to submit the documents required for the Consignment Service, and other necessary material (hereinafter to be referred to as the "Overseas Travel Procedure Documents, etc.) by the date set by us.
                </div>
                <div>
                  03. When we are required to pay charges for services, visa fees, expenses for commission, and other charges (hereinafter to be referred to as the "Visa Fee, etc.") to government and public agencies as well as to foreign delegations in Japan and other parties, the Traveler will be requested to pay the said Visa Fee, etc. to us by the date set by us.
                </div>
                <div>
                  04. When mail expense, traveling expense, and other expenses have accrued in the course of implementing the Consignment Service, the Traveler will be required to pay the said expenses to us by the date set by us.
                </div>
              </div>
              <div className="sixteen wide column">
                  Cancellation of the Contract
              </div>
              <div className="two wide column">
                Article 7
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Traveler may cancel the Agent Contract for Procedure for Going Abroad in whole or in part at any time.
                </div>
                <div>
                  02. The following are cases where we may cancel the Agent Contract for Procedure for Going Abroad:
                  <br />(1) When the Traveler does not submit the Overseas Travel Procedure Documents by the prescribed date.
                  <br />(2) When we recognize that there are flaws in the Overseas Travel Procedure Documents submitted by the Traveler.
                  <br />(3) When the Traveler does not pay the Overseas Travel Procedure Handling Charge, Visa Fee, etc. and/or the expenses described in the preceding Article, Paragraph 4, by the prescribed date.
                  <br />(4) In the case that we have accepted to undertake the Agent Service described in Article 3, Paragraph 1, when we recognize that the Traveler is very likely to become unable to obtain the passport, visa, or reentry permit (hereinafter to be referred to as the "Passport, etc.") due to causes not attributable to us.
                </div>
                <div>
                  03. When the Agent Contract for Procedure for Going Abroad has been cancelled in accordance with the provision of the preceding Paragraph, the Traveler will be required to bear the Visa Fee, etc. and the expenses described in the preceding Article, Paragraph 4, and to pay in addition the Overseas Travel Procedure Handling Charge to us for the Consignment Service already implemented by us.
                </div>
              </div>
              <div className="sixteen wide column">
                  Responsibility of Our Company
              </div>
              <div className="two wide column end">
                Article 8
              </div>
              <div className="fourteen wide column">
                <div>
                  01. When we have inflicted damage to the Traveler intentionally or negligently in the course of implementing the Agent Contract for Procedure for Going Abroad, we shall be responsible for compensating for the said damage, but only in cases where we have been notified of the said damage within 6 months reckoned from the day immediately following the day when the said damage has occurred.
                </div>
                <div>
                  02. We do not guarantee under the Agent Contract for Procedure for Going Abroad that the Traveler would actually be able to obtain the passport, etc. and that he/she would be permitted to enter and depart the countries concerned. Accordingly, we shall not be held responsible even if the Traveler is unable to obtain the passport, etc. or to enter or depart countries concerned, due to causes not attributable to us.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Subscription Type : Travel Consulting Service</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Scope of Application
              </div>
              <div className="two wide column">
                Article 1
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Travel Consulting Service Contract to be concluded between our Company and the Traveler shall be based on this Contract under the following terms and conditions. Any matter not stipulated in this Contract shall be governed by ordinance or generally established practice.
                </div>
                <div>
                  02. In case we conclude a Special Contract with the Traveler in writing without violating the relevant law or harming the interest of the Traveler, such a Special Contract shall be given priority, notwithstanding the provision of the preceding Paragraph.
                </div>
              </div>
              <div className="sixteen wide column">
                  Definition of the Travel Consulting Service Contract>
              </div>
              <div className="two wide column">
                Article 2
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The "Travel Consulting Service Contract" shall mean in this Contract the Contract under which we shall promise to undertake the implementation of the following service at the request of the Traveler by receiving payment of the Travel Service Handling Charge (hereinafter to be referred to as the Consulting Fee) in return for consulting service.
                  <br />(1) Advice necessary for the Traveler to prepare his/her travel plan
                  <br />(2) Preparation of a travel plan
                  <br />(3) Estimation of the expenses to be required for such a travel
                  <br />(4) Offering of information concerning touring spots and transport/accommodation facilities, etc.
                  <br />(5) Offering of other advice and information necessary for travel
                </div>
              </div>
              <div className="sixteen wide column">
                  Conclusion of the Contract
              </div>
              <div className="two wide column">
                Article 3
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Traveler intending to conclude the Travel Consulting Service Contract with us will be required to submit to us an application form filled in with prescribed particulars.
                </div>
                <div>
                  02. The Travel Consulting Service Contract shall be considered to have been concluded when we have accepted the conclusion of the said Contract and received the application specified in the previous Paragraph.
                </div>
                <div>
                  03. Notwithstanding the provision of the preceding Paragraph, there are cases where we accept an application for the Travel Consulting Service Contract by telephone, mail, facsimile and other means of communication, without submission of the application form, in which case the Travel Consulting Service Contract shall be considered to have been concluded at the time when we have accepted the conclusion of the said Contract.
                </div>
                <div>
                  04. There are cases where we do not accept the conclusion of the Travel Consulting Service Contract when there is inconvenience related to our business or when the contents of the Traveler's consultation are offensive to public order and morals or are likely to violate the ordinance enforced in touring points.
                </div>
              </div>
              <div className="sixteen wide column">
                  Consulting Fee
              </div>
              <div className="two wide column">
                Article 4
              </div>
              <div className="fourteen wide column">
                <div>
                  01. When we have performed the service described in Article 2, the Traveler will be required to pay to us the Consulting Fee prescribed by us by the date set by us.
                </div>
              </div>
              <div className="sixteen wide column">
                  Responsibility of Our Company
              </div>
              <div className="two wide column end">
                Article 5
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall be held responsible for compensating for the damage, if any, which we have inflicted on the Traveler intentionally or negligently, only in case we have been notified of the said damage within 6 months reckoned from the date immediately following the day when the said damage has occurred.
                </div>
                <div>
                  02. We do not guarantee that actual arrangement would be possible for the transport
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Schedule I – Consulting fees / charges (related to Article 4)</p>
            <div className="ui grid">
              <div className="twelve wide column">
                Classification
              </div>
              <div className="four wide column start">
                Consulting Fee
              </div>
              <div className="sixteen wide column">
                  Sightseeing Trip
              </div>
              <div className="twelve wide column">
                (1) Advice necessary for the Traveler to prepare his/her travel plan
              </div>
              <div className="four wide column">
                Base fare : JYE 2,100
                (up to 30minutes)
                After first 30 minutes : JYE 2,100
                per every 30 minutes
              </div>
              <div className="twelve wide column">
                (2) Preparation of a travel plan
              </div>
              <div className="four wide column">
                JYE 2,100 (each day of itinerary)
              </div>
              <div className="twelve wide column">
                (3) Estimation of the expenses to be required for such a travel including transfer and accommodation.
              </div>
              <div className="four wide column">
                Base Fare : JYE 2,100
                JYE 2,100 (each day of itinerary)
              </div>
              <div className="twelve wide column">
                (4) Estimation of the expenses to be required for such a travel including transfer only.
              </div>
              <div className="four wide column">
                JYE 2,100 (per case)
              </div>
              <div className="twelve wide column">
                (5) Offering of information concerning touring spots and transport / accommodation facilities, etc.
              </div>
              <div className="four wide column">
                JYE 1,050 (per 1 paper information)
              </div>
              <div className="twelve wide column">
                Consulting outside of our office
              </div>
              <div className="four wide column">
                Additional JYE 5,250 to above (1)～(5)
              </div>
            </div>
            <p className="ui segment chapter">Subscription Type：Rules of Special Compensation</p>
            <p>Chapter 1 - Payment of Compensation Money, etc</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Scope of Application
              </div>
              <div className="two wide column">
                Article 1
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If a Traveler participating in our Customized Tour has suffered injuries to his/her body due to a sudden and extraneous accident (hereinafter to be referred to as the "Accident") while he/she is participating in the said Tour, we shall pay to the Traveler or his/her legal heir Compensation for Death and Residual Disability as well as a solatium for hospitalization and for hospital visits (hereinafter referred to as the "Compensation, etc.") in accordance with the provisions from Chapters 1 through Chapter 4.
                </div>
                <div>
                  02. The injuries referred to in the preceding Paragraph, 01.01, include poisoning symptoms which rapidly develop when toxic gases or poisonous materials are inhaled, absorbed or taken in from outside the body accidentally (excluding the poisoning symptoms which develop as a result of continuous inhalation, absorption or ingestion.), but do not include bacterial food poisoning.
                </div>
              </div>
              <div className="sixteen wide column">
                  Definition of Terminology
              </div>
              <div className="two wide column end">
                Article 2
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In these Rules of Special Compensation, "Organized Tour" shall mean those Tours defined in the first Paragraph of Article 2 of the "Subscription Type Agent-Organized Tour Contract" Section and in the first Paragraph of Article 2 of the "Order-Taking Type Customized Tour" Section respectively.
                </div>
                <div>
                  02. In these Rules of Special Compensation, "While Participating in the Organized Tour" shall mean the period between the time when the Traveler starts receiving the services of the first group of transport and accommodation facilities, etc. which are specified in the itinerary of the said Organized Tour offered by the tickets arranged by our Company beforehand with an aim for the Traveler to participate in the Organized Tour up to the time when the Traveler finishes receiving the services of the last group of transport and accommodation facilities, etc. However, if the Traveler deviates from the route of the Organized Tour specified beforehand, when the said Traveler has notified us beforehand of the scheduled dates and times of his departure and return, the period from the time of his/her departure until the time of his/her return shall be considered as "While Participating in the Organized Tour." However, when the said Traveler departs from the said Tour without notifying us beforehand of the scheduled dates and times of his/her departure and return or without planning to return to rejoin the Tour, the period of his/her departure till the time of his/her return or the period after his/her departure shall not be considered as "While Participating in the Organized Tour." Also in cases where the itinerary of the said Organized Tour includes the dates specified for the Traveler not to receive the service of the transport and accommodation facilities, etc. arranged by us (according to the standard time of the touring point), when it is clearly described in the Contract Document that the Compensation and solatium for the damage suffered by the said Traveler on the said dates shall not be paid as provided in the Rules of Special Compensation, the said dates shall not be considered as "While Participating in the Organized Tour."
                </div>
                <div>
                  03. "The time when the Traveler starts receiving the service" in the preceding Paragraph, 02.02, shall mean one of the times in the following cases:
                  <br />(1) The time when the reception by our Tour Escort, our Employee or our Business Agent is finished in cases where the reception is handled by them.
                  <br />(2) In cases where the reception is not handled as described in the preceding case, one of the times in the following cases shall apply:
                  <br />&nbsp;&nbsp;(a) If the first transport and accommodation facilities, etc. are aircraft, the time when the check-in is finished.
                  <br />&nbsp;&nbsp;(b) If the first transport and accommodation facilities, etc. are vessels, the time when the boarding procedure is finished.
                  <br />&nbsp;&nbsp;(c) If the first transport and accommodation facilities, etc. are railroads, the time when ticket examination is finished or the time when the Traveler has boarded the relevant train in cases where ticket examination is not conducted.
                  <br />&nbsp;&nbsp;(d) If the first transport and accommodation facilities, etc. are wheeled vehicles, the time when the Traveler has boarded them.
                  <br />&nbsp;&nbsp;(e) If the first transport and accommodation facilities, etc. are accommodation facilities, the time when the Traveler has entered such facilities.
                  <br />&nbsp;&nbsp;(f) If the first transport and accommodation facilities, etc. are other than accommodation facilities, the time when the procedure to utilize the said facilities is finished.
                </div>
                <div>
                  04. "The time when the acceptance of services is finished" shall mean one of the times in the following cases:
                  <br />(1) If our Tour Escort, our employee or our Business Agent announces the dismissal of the Organized Tour, the time when such an announcement has been made.
                  <br />(2) If the announcement of the dismissal described in the preceding case is not conducted,
                  <br />&nbsp;&nbsp;(a) If the first transport and accommodation facilities, etc. are aircraft, the time when the Traveler has exited the airport compound where only Travelers are allowed to enter.
                  <br />&nbsp;&nbsp;(b) If the first transport and accommodation facilities, etc. are vessels, the time when the Traveler has disembarked the vessel.
                  <br />&nbsp;&nbsp;(c) If the first transport and accommodation facilities, etc. are railroads, the time when ticket examination is finished or the time when the Traveler has disembarked the relevant train in cases where ticket examination is not conducted.
                  <br />&nbsp;&nbsp;(d) If the first transport and accommodation facilities, etc. are wheeled vehicles, the time when the Traveler has disembarked them.
                  <br />&nbsp;&nbsp;(e) If the first transport and accommodation facilities, etc. are accommodation facilities, the time when the Traveler has exited such facilities.
                  <br />&nbsp;&nbsp;(f) If the first transport and accommodation facilities, etc. are other than accommodation facilities, the time when the Traveler has exited the said facilities.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 2 - Cases where Compensation, etc. is not Paid</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Cases where Compensation, etc. is not Paid (1)
              </div>
              <div className="two wide column">
                Article 3
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall not pay Compensation, etc. in cases where the injuries are caused by the causes listed below:
                  <br />(1) Willfulness of the Traveler, except in the case of injuries caused to persons other than the Traveler.
                  <br />(2) Willfulness of the person who is due to receive the Compensation for Death, except the amount of the said Compensation for Death which is receivable by another person in case the said person is the recipient of part of the Compensation for Death.
                  <br />(3) Suicidal, criminal, or combative acts of the Traveler, except in the case of injuries suffered by persons other than the Traveler.
                  <br />(4) Accidents caused while the Traveler is driving an automobile or motorized bicycle without having the driving qualification designated by ordinance or in a state incapable of normal driving such as under the influence of alcohol, except in the case of injuries suffered by persons other than the said Traveler.
                  <br />(5) Accidents caused while the Traveler is behaving willfully against the law or is receiving illegal services, except in the case of injuries suffered by persons other than the said Traveler.
                  <br />(6) Brain disease, illness or insanity of the Traveler, except in the case of injuries suffered by persons other than the said Traveler.
                  <br />(7) Pregnancy, childbirth, premature birth, miscarriage, surgical operations, or other medical procedures of the Traveler, except in the case of treatment for injuries for which we are obligated to compensate.
                  <br />(8) Accidents caused while the Traveler is undergoing execution of his criminal sentence or is in custody or in jail.
                  <br />(9) War, use of force by a foreign power, revolution, takeover of the government, armed rebellion, or other incident or civil commotion similar to these (meaning, in these Special Compensation Rules, the state of affairs, which is considered an important situation from the viewpoint of security and maintenance of public order and peace throughout or in parts of a country by collective action of a mob or a large number of people).
                  <br />(10) Accidents caused by the radioactivity, volatility or other hazardous characteristics or these characteristics of nuclear fuel material (including expended fuel, hereinafter to be interpreted likewise) or matters contaminated by nuclear fuel material (including atomic fission products).
                  <br />(11) Accidents caused following the causes described in the preceding two cases or accidents arising from the confusion of social order following them.
                  <br />(12) Exposure to radiation or radioactive contamination other than the case described in (10) above.
                </div>
                <div>
                  02. We shall not pay Compensation, etc. for cervical syndrome (a so-called whiplash injury) or lower-back pain without any objective symptoms, regardless of the causes.
                </div>
              </div>
              <div className="sixteen wide column">
                  Cases where Compensation, etc. is not Paid (2)
              </div>
              <div className="two wide column">
                Article 4
              </div>
              <div className="fourteen wide column">
                <div>
                   01. We shall not pay Compensation, etc. as provided in the preceding Article 3, in the case of Organized Tours aimed at inland trips, and also in the cases of injuries caused by the causes listed in the following cases:
                  <br />(1) Earthquake, volcanic eruption or tsunami.
                  <br />(2) Accidents caused following the causes described in the preceding case or accidents arising from the confusion of social order incidental to them.
                </div>
              </div>
              <div className="sixteen wide column">
                  Cases where Compensation, etc. is not Paid (3)
              </div>
              <div className="two wide column end">
                Article 5
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall not pay Compensation, etc. for the injuries listed in the following cases unless the action described in each case is included in the itinerary of the Organized Tour as designated by us beforehand. However, if the action described in each case is included in the itinerary of the said Tour, we shall pay Compensation, etc. for injuries suffered due to a similar action while the Traveler is participating in the Organized Tour not included in the itinerary:
                  <br />(1) Injuries suffered while the Traveler is engaged in the activities designated in Schedule I.
                  <br />(2) Injuries suffered while the Traveler is engaged in a match, race, or show (including practices in all cases) or a test run (which means driving or steering with the purpose of a performance test) by driving an automobile or motorized bicycle or steering a motor boat. However, we shall pay Compensation, etc. for the injuries suffered while the Traveler is doing these things on the road even if they are not included in the itinerary of the Organized Tour.
                  <br />(3) Injuries suffered while the Traveler is piloting an aircraft other than one flying on a course designated by an air transport company (regardless of whether or not it is a regular commercial flight.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 3 - Types of Compensation, etc. and Amounts Payable</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Payment of Compensation for Death
              </div>
              <div className="two wide column">
                Article 6
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If the Traveler has suffered an injury as described in Article 1 and died as a direct result of the relevant accident within 180 days from the day of the said accident, we shall pay to the legal heir of the Traveler Compensation for Death in the amount of ¥25 million in the case of an Organized Tour aimed at an overseas trip and in the amount of ¥15 million (hereinafter to be referred to as the "Compensable Amount") in the case of an Organized Tour aimed at an inland trip, per Traveler respectively. If, however, the Compensation for Residual Disability has already been paid to the said Traveler, we shall pay the balance remaining after deducting the Compensation paid from the Compensation due.
                </div>
              </div>
              <div className="sixteen wide column">
                  Payment of Compensation for Residual Disability
              </div>
              <div className="two wide column">
                Article 7
              </div>
              <div className="fourteen wide column">
                <div>
                  01 In cases where the Traveler has suffered an injury as described in Article 1 and developed Residual Disability as a direct result of the said injury within 180 days from the day of the said accident (which means serious disability, remaining in his/her body, which is unrecoverable in the future or the loss of part of his/her body after the injury leading to this disability or loss has been healed; hereinafter to be interpreted likewise.), we shall pay Compensation for Residual Disability in the amount reached by multiplying the amount of Compensation by the percentage listed in each of the following cases in Schedule II.
                </div>
                <div>
                  02. Notwithstanding the provisions of the preceding Paragraph, 07.01, if the Traveler is in a condition still requiring treatment even after a lapse of 180 days from the day of the accident, we shall pay Compensation for Residual Disability after identifying the extent of his/her residual disability based on the diagnosis of a physician on the 181st day counted from the day of the accident.
                </div>
                <div>
                  03. As for any Residual Disability not listed in the cases of Schedule II, we shall determine the payable amount of Compensation for Residual Disability according to the extent of the disability of the body and pursuant to the classification of the respective cases in Schedule II, regardless of the occupation, age, social status, etc. of the Traveler. However, if the relevant disability is not as serious as the functional disorder listed in 1 (3), 1 (4), 2 (3), 4 (4), and 5 (2) of Schedule II, we shall not pay Compensation for Residual Disability.
                </div>
                <div>
                  04. In the case of two or more types of Residual Disability being caused by the same accident, we shall pay the total amount of Compensation by applying the preceding three Paragraphs from 07.1 through 07.03 to the respective disabilities. However, in the case of Residual Disability of upper extremities (arms and hands) described in 7, 8, and 9 of Schedule II or the Residual Disability of lower extremities (legs and feet), the maximum amount payable per Traveler of the Compensation for Residual Disability of each extremity shall be 60% of the amount of Compensation. 07.05. The maximum amount payable by us for Residual Disability under each of the preceding Paragraphs from 07.01 through 07.04 shall be the amount of Compensation payable per Traveler per Organized Tour.
                </div>
              </div>
              <div className="sixteen wide column">
                  Payment of Solatium for Hospitalization
              </div>
              <div className="two wide column">
                Article 8
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In cases where the Traveler has suffered an injury as described in Article 1, and, as a direct result of such an injury, has become unable to engage in daily work or to lead a normal life, and has been hospitalized (meaning that although treatment by a physician is required, treatment at home is so difficult that the patient is hospitalized at a hospital or clinic to receive concerted treatment under the physician's care. Hereinafter to be interpreted likewise in this Article.), we shall pay a Solatium for hospitalization according to the number of days hospitalized under the following classification:
                  (1) In the case of an Organized Tour aimed at an Overseas Trip:
                  (a) In cases where the Traveler has suffered injury requiring hospitalization for 180 days or more. ¥400,000
                  (b) In cases where the Traveler has suffered injury requiring hospitalization for 90 days or more but less than 180 days. ¥200,000
                  (c) In cases where the Traveler has suffered injury requiring hospitalization for 7 days or more but less than 90 days. ¥100,000
                  (d) In cases where the Traveler has suffered injury requiring hospitalization for less than 7 days. ¥40,000
                  (2) In the case of an Organized Tour aimed at an Inland Trip:
                  (a) In cases where the Traveler has suffered injury requiring hospitalization for 180 days or more. ¥200,000
                  (b) In cases where the Traveler has suffered injury requiring hospitalization for 90 days or more but less than 180 days. ¥100,000
                  (c) In case the Traveler has suffered injury requiring hospitalization for 7 days or more but less than 90 days.  ¥50,000
                  (d) In cases where the Traveler has suffered injury requiring hospitalization for less than 7 days. ¥20,000
                </div>
                <div>
                  02. Even when the Traveler is not hospitalized, if the said Traveler's injury falls under any one of the cases listed in Schedule III, and the said Traveler has received treatment by a physician, the period during which the said Traveler has been placed under such a state shall be considered as the number of days requiring hospitalization when applying the provision of the preceding Paragraph, 8.01.
                </div>
                <div>
                  03. If a Solatium for Hospitalization plus Compensation for Death or a Solatium for Hospitalization plus Compensation for Residual Disability is payable per Traveler at the same time, we shall pay the total amount of such payments.
                </div>
              </div>
              <div className="sixteen wide column">
                  Payment of a Solatium for Hospital Visits
              </div>
              <div className="two wide column">
                Article 9
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If the Traveler has suffered an injury as described in Article 1, and, as a direct result of such an injury, has experienced difficulty in engaging in normal work or leading a normal life, and has needed to visit a hospital (which means that when treatment by a physician is necessary, the patient visits a hospital or clinic to receive treatment by a physician (including house visits by a physician). Hereinafter to be interpreted likewise in this Article.), and the number of days spent for such Hospital Visits has exceeded 3 days, we shall pay to the Traveler a Solatium for Hospital Visits according to the said number of days under the following classification:
                  (1) In the case of an Organized Tour aimed at an Overseas Trip:
                  (a) In cases where the Traveler has suffered injury requiring Hospital Visits for 90 days or more.  ¥100,000
                  (b) In cases where the Traveler has suffered injury requiring Hospital Visits for 7 days or more but less than 90 days. ¥50,000
                  (c) In cases where the Traveler has suffered injury requiring Hospitalization for 3 days or more but less than 7 days.  ¥20,000
                  (2) In the case of an Organized Tour aimed at an Inland Trip:
                  (a) In cases where the Traveler has suffered injury requiring Hospital Visits for 90 days or more.  ¥50,000
                  (b) In cases where the Traveler has suffered injury requiring Hospital Visits for 7 days or more but less than 90 days. ¥25,000
                  (c) In cases where the Traveler has suffered injury requiring Hospitalization for 3 days or more but less than 7 days.  ¥10,000
                </div>
                <div>
                  02. Even when the Traveler does not make Hospital Visits, if we recognize that the Traveler has experienced considerable difficulty in engaging in normal work or leading a normal life because of a plaster cast, etc. attached all the time to the part of his/her body suffering from the injury, such as a bone fracture, under the instruction of a physician, the period of such a state shall be considered as the number of days spent for Hospital Visits when applying the provision of the preceding Paragraph, 09.01.
                </div>
                <div>
                  03. We shall not pay a Solatius for the Hospital Visits made after the injury suffered has been healed to such an extent as considered not to be so troublesome as to prevent the Traveler from engaging in normal work or leading a normal life.
                </div>
                <div>
                  04. We shall not pay a Solatius for Hospital Visits made after the lapse of 180 days from the day of the accident under any circumstances.
                </div>
                <div>
                  05. In cases where both a Solatium for Hospital Visit plus Compensation for Death or a Solatium for Hospital Visit plus Compensation for Residual Disability is payable per Traveler at the same time, we shall pay the total amount of such payments.
                </div>
              </div>
              <div className="sixteen wide column">
                  Special Rules Concerning Payment of aSolatium for Hospitalization and a Solatium for Hospital Visits
              </div>
              <div className="two wide column">
                Article 10
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If the number of days required for Hospitalization and the number of days for Hospital Visits exceeds one day per Traveler respectively, notwithstanding the provisions of the preceding two Articles 8 and 9, we shall pay only whichever amount is larger among the Solatium described in each of the following cases (if both amounts are the same, the Solatium described in (1)):
                  (1) A Solatium for Hospitalization, payable by us for the number of days of hospitalization.
                  (2) A Solatium for Hospitalization, payable by us for the number of days spent for Hospital Visits, by regarding the number of days reached by adding the said number of days in the hospital to the said number of days spent for Hospital Visits (excluding the period for which we must pay Solatium for Hospitalization) as the number of days spent for hospital visits.
                </div>
              </div>
              <div className="sixteen wide column">
                  Presumption of Death
              </div>
              <div className="two wide column">
                Article 11
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If and when the Traveler has not been found even after 30 days have passed after the aircraft or vessel which the Traveler had boarded has been reported missing, or lost, the said Traveler will be presumed dead on the day when the said aircraft or said vessel was reported missing or lost.
                </div>
              </div>
              <div className="sixteen wide column">
                  Influence of Other Physical Disabilities or Illnesses
              </div>
              <div className="two wide column end">
                Article 12
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If the injury described in Article 1 has become serious due to the influence of a physical disability or illness which had already existed when the Traveler suffered the injury described in Article 1 or due to the influence of an injury or illness which has occurred independent of the accident causing the said injury after the said Traveler has suffered the injury described in Article 1, the amount equal to the situation excluding those influences shall be determined and paid.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 4 - Occurrence of Accident and Procedures for Requesting Payment of Compensation, etc.</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Request for Explanation, etc. Concerning Extent of Injuries, etc
              </div>
              <div className="two wide column">
                Article 13
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If the Traveler has suffered an injury described in Article 1, there are cases where we may request that the said Traveler or the person due to receive Compensation for Death explain the extent of the said injury and produce an outline of the accident leading to the said injury, or request a medical examination of his/her body or a postmortem examination of his/her dead body. In this case, the Traveler or the person expected to receive Compensation for Death will be required to cooperate with us and comply with these requests.
                </div>
                <div>
                  02. If the Traveler has suffered an injury described in Article 1 due to causes unrelated to us, the Traveler or the person due to receive Compensation for Death will be required to report to us the outline, etc. of the accident leading to the said injury within 30 days from the day of the said accident.
                </div>
                <div>
                  03. When the Traveler or the person due to receive Compensation for Death has violated the provisions of the preceding two Paragraphs, 13.01 and 13.02, or has failed to inform us of the facts known to them in the explanation or report required or has given a false statement, we shall not pay Compensation, etc.
                </div>
              </div>
              <div className="sixteen wide column">
                  Request for Payment of Compensation, etc.
              </div>
              <div className="two wide column">
                Article 14
              </div>
              <div className="fourteen wide column">
                <div>
                  01. When the Traveler or the person due to receive Compensation for Death wishes to receive payment of Compensation, etc., he/she will be required to submit the following documents and a bill requesting payment of Compensation, etc. on the form designated by us:
                  <br />(1) Claiming payment of Compensation for Death:
                  <br />(a) Copy of the deceased's family register and a copy of the legal heir's family register and a certificate of seal impression
                  <br />(b) Certificate of the accident, issued by a public agency (or by a third party under unavoidable circumstances)
                  <br />(c) Death certificate or postmortem certificate of the Traveler
                  <br />(2) Claiming payment of Compensation for Residual Disability:
                  <br />(a) Seal certificate of the Traveler
                  <br />(b) Certificate of the accident issued by a public agency (or by a third party under unavoidable circumstances)
                  <br />(c) Physician's statement certifying the extent of the Residual Disability
                  <br />(3) Claiming payment of a Solatium for Hospitalization:
                  <br />(a) Certificate of the accident issued by a public agency (or by a third party under unavoidable circumstances)
                  <br />(b) Physician's statement certifying the extent of the Residual Disability
                  <br />(c) Certifying document issued by the hospital or clinic certifying the number of days of Hospitalization or Hospital Visits
                  <br />(4) Claiming payment of a Solatium for Hospital Visits:
                  <br />(a) Certificate of the accident issued by a public agency (or by a third party under unavoidable circumstances)
                  <br />(b) Physician's statement certifying the extent of the injury
                  <br />(c) Certifying document issued by the hospital or clinic certifying the number of days of Hospitalization or Hospital Visits
                </div>
                <div>
                  02. There are cases where we require the submission of documents other than those listed above in the preceding Paragraph, 14.01, or where we admit omission of part of the documents to be submitted under the preceding Paragraph, 14.01. 14.03. In cases where the Traveler or the person due to receive Compensation for Death has acted against the provision of the first Paragraph, 14.01 or has not informed us of the facts known to them concerning the documents submitted or has given a false statement, we shall not pay Compensation, etc.
                </div>
              </div>
              <div className="sixteen wide column">
                  Subrogation
              </div>
              <div className="two wide column end">
                Article 15
              </div>
              <div className="fourteen wide column">
                <div>
                  01. Even when we have paid Compensation, etc., the right held by the Traveler or his/her legal heir to claim Compensation from a third party for the injury suffered by the Traveler will not be transferred to us.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Chapter 5 - Compensation for Damage to Personal Belongings</p>
            <div className="ui grid">
              <div className="sixteen wide column">
                  Our Company's Responsibility to Pay
              </div>
              <div className="two wide column">
                Article 16
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If the Traveler participating in the Organized Tour being implemented by our Company happens to have his/her personal belongings (hereinafter to be referred to as "Compensable Goods") damaged accidently while the said Traveler is participating in the said Organized Tour, we shall pay Compensation for Damage to personal belongings (hereinafter to be referred to as "Compensation for Damage").
                </div>
              </div>
              <div className="sixteen wide column">
                  Cases Where Compensation for Damage Is Not Paid
              </div>
              <div className="two wide column">
                Article 14
              </div>
              <div className="fourteen wide column">
                <div>
                  01. We shall not pay Compensation for Damage for the damage caused by the causes listed in each of the following cases:
                  <br />(1) Willfulness of the Traveler, except for damages suffered by persons other than the said Traveler.
                  <br />(2) Willfulness of a relative belonging to the same household as that of the said Traveler, unless his/her intention is to let the said Traveler receive the Compensation for Damage.
                  <br />(3) Suicidal, criminal or combative acts of the Traveler, except for damages suffered by persons other than the said Traveler.
                  <br />(4) Accidents caused while the Traveler is driving an automobile or motorized bicycle without having the driving qualification designated by ordinance or in a state incapable of normal driving such as under the influence of alcohol, except in the case of damages suffered by persons other than the said Traveler.
                  <br />(5) Accidents caused while the Traveler is behaving willfully against the law or is receiving illegal services, except in the case of damages suffered by persons other than the said Traveler.
                  <br />(6) Exercise of public authority by the State or public institutions, such as confiscation, requisition, seizure, and demolition, except when such exercise has been done as necessary measures for fire extinction or evacuation.
                  <br />(7) Defects in the Compensable Goods, except for defects that the Traveler or the person taking care of the Compensable Goods for him/her has not been able to detect even with considerable caution.
                  <br />(8) Ordinary wear and tear, rust, mold, discoloration, damage by rats, vermiculation, etc.
                  <br />(9) External damage which does not disable the function of the Compensable Goods.
                  <br />(10) Spill of liquid, which is the Compensable Goods, except for damage caused to other Compensable Goods as a result.
                  <br />(11) Misplaced or lost Compensable Goods.
                  <br />(12) Causes listed in Article 3 from 03.01(9) through 03.01(12).
                </div>
                <div>
                  02. In the case of an Organized Tour aimed at an Inland Tour, we shall not pay Compensation for Damage for the damage caused by the causes described in each of the following cases in addition to the cases defined in the preceding Paragraph, 07.01.
                  <br />(1) Earthquake, volcanic eruption or tsunami.
                  <br />(2) Accidents caused following the causes described in the preceding case or accidents caused from the confusion of social order incidental to them.
                </div>
              </div>
              <div className="sixteen wide column">
                  Compensable Goods and Its Scope
              </div>
              <div className="two wide column">
                Article 18
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The Compensable Goods shall be limited to the personal belongings owned and carried by the Traveler while participating in the Organized Tour.
                </div>
                <div>
                  02. Notwithstanding the provision of the preceding Paragraph, 18.01, items listed in the following cases shall not be included in Compensable Goods:
                  <br />(1) Cash, checks and other securities, documentary stamps, postage stamps, and the like.
                  <br />(2) Credit cards, coupons, air tickets, passports and the like.
                  <br />(3) Manuscripts, specifications, designs, commercial ledgers, and the like (including those recorded on recording media which can be directly processed by information equipment (computers and their peripherals such as terminals) such as magnetic tapes, magnetic disks, CD-ROMs, optical discs, etc.).
                  <br />(4) Vessels (including yachts, motorboats and boats) and automobiles, motorized bicycles and their accessories.
                  <br />(5) Climbing equipment, expedition equipment and the like.
                  <br />(6) Dentures, artificial limbs, contact lenses and the like.
                  <br />(7) Animals and plants.
                  <br />(8) Other items specified by our Company beforehand.
                </div>
              </div>
              <div className="sixteen wide column">
                  Amount of Damage and Amount of Compensation for Damage
              </div>
              <div className="two wide column">
                Article 19
              </div>
              <div className="fourteen wide column">
                <div>
                  01. The amount of damage for which Compensation is payable by us (hereinafter to be referred to as the "Amount of Damage") shall be determined on the basis of either the value of the Compensable Goods at the place and time of the accident when the damage caused or the total amount of the repair charge required for restoring the Compensable Goods to the state immediately preceding the occurrence of the damage plus the amount described in the third Paragraph of the next Article, 20.03, whichever is lower.
                </div>
                <div>
                  02. In cases where the amount of damage per item or pair of the Compensable Goods exceeds ¥100,000, we shall consider the amount of damage of the Compensable Goods to be ¥100,000 and apply the provision of the preceding Paragraph, 19.01.
                </div>
                <div>
                  03. The maximum amount of Compensation for Damage payable by us shall be ¥150,000 per Traveler per Organized Tour. However, if the amount of damage per Traveler does not exceed ¥3,000 for each one accident, we shall not pay Compensation for Damage.
                </div>
              </div>
              <div className="sixteen wide column">
                  Prevention of Damage, etc.
              </div>
              <div className="two wide column">
                Article 20
              </div>
              <div className="fourteen wide column">
                <div>
                  01. When the Traveler has learned that damage has occurred to the Compensable Goods as provided in Article 16, he/she must implement the following measures:
                  <br />(1) Make efforts to prevent and reduce the damage.
                  <br />(2) Inform our Company of the extent of the damage, the outline of the accident causing the damage, and whether the Compensable Goods damaged is insured or not.
                  <br />(3) If the Traveler is able to receive Compensation for the damage from others, take necessary procedures to exercise his/her right.
                </div>
                <div>
                  02. When the Traveler has behaved against the provision of the preceding Paragraph, 20.01 (1), without justifiable cause, we shall regard the balance remaining after deducting the amount considered effective to prevent and reduce the damage as the amount of the damage, and when the Traveler has behaved against the provision of 20.01(2), we shall not pay Compensation for Damage. Also in cases where the Traveler has behaved against the provision of 20.01 (3), we shall regard the balance remaining after deducting the amount considered receivable by exercising his/her right to obtain such an amount as the amount of the damage.
                </div>
                <div>
                  03. We shall pay the following expenses:
                  <br />(1) Expenses which we consider necessary or useful to prevent and reduce the damage prescribed in 20.01(1).
                  <br />(2) Expenses required to take procedures prescribed in 20.01 (3).
                </div>
              </div>
              <div className="sixteen wide column">
                  Request for Payment of Compensation for Damage
              </div>
              <div className="two wide column">
                Article 21
              </div>
              <div className="fourteen wide column">
                <div>
                  01. When the Traveler wishes to receive payment of Compensation for Damage, he/she will be required to submit to us a bill requesting payment of Compensation for Damage on the form designated by us as well as the following documents:
                  <br />(1) Certificate of the accident, issued by the police or an alternative third party.
                  <br />(2) Documents issued to certify the extent of the damage caused on the Compensable Goods.
                  <br />(3) Other documents requested by us.
                </div>
                <div>
                  02. If the Traveler has behaved against the provision of the preceding Paragraph, 21.01, or has willfully indicated untrue matter on the documents submitted or has forged or falsified these documents (to be considered likewise if he/she has had a third party commit these acts), we shall not pay Compensation for Damage.
                </div>
              </div>
              <div className="sixteen wide column">
                  In Cases Where Damage Is Insured
              </div>
              <div className="two wide column">
                Article 22
              </div>
              <div className="fourteen wide column">
                <div>
                  01. In cases where there exists an insurance contract which is due to pay insurance money for the damage described in Article 16, we may reduce the amount of Compensation Money payable by us.
                </div>
              </div>
              <div className="sixteen wide column">
                  Subrogation
              </div>
              <div className="two wide column end">
                Article 23
              </div>
              <div className="fourteen wide column">
                <div>
                  01. If the Traveler has the right to claim damages against a third party for Compensation for Damage for which we are responsible for paying, such a right to claim Compensation for the damage shall be transferred to us within the limit of the amount of the Compensation for Damage that we have paid to the Traveler.
                </div>
              </div>
            </div>
            <p className="ui segment chapter">Schedule I (related to Article 5 - 05.01)</p>
            <div className="ui grid">
              <div className="column">
                Mountain climbing (climbing equipment such as ice axes, crampons, ropes, hammers), luging, bobsledding, skydiving, hang gliding, operating an ultra-light motorized plane (such as motorized hang gliders, micro-light planes, and ultra-light planes), flying a gyro plane, and other dangerous activities similar to these.
              </div>
            </div>
            <p className="ui segment chapter">Schedule II (related to Article 7- 07.01, 07.03, and 07.04)</p>
            <div className="ui grid invertida">
              <div className="sixteen wide column">
                  1. Disorder of the Eyes
              </div>
              <div className="fourteen wide column">
                (1) When the eyesight of both eyes has been lost.
              </div>
              <div className="two wide column">
                100%
              </div>
              <div className="fourteen wide column">
                (2) When the eyesight of one eye has been lost.
              </div>
              <div className="two wide column">
                60%
              </div>
              <div className="fourteen wide column">
                (3) When the corrected eyesight of one eye has become 0.6 or less.
              </div>
              <div className="two wide column">
                5%
              </div>
              <div className="fourteen wide column">
                (4) When one eye has come to suffer the constriction of visual field (meaning a case where the visual field has become 60% or less of the total of the angle of the normal visual field).
              </div>
              <div className="two wide column">
                5%
              </div>
              <div className="sixteen wide column">
                  2. Disorder of the Ears
              </div>
              <div className="fourteen wide column">
                (1) When the hearing of both ears has been lost completely.
              </div>
              <div className="two wide column">
                80%
              </div>
              <div className="fourteen wide column">
                (2) When the hearing of one ear has been lost completely.
              </div>
              <div className="two wide column">
                30%
              </div>
              <div className="fourteen wide column">
                (3) When the hearing of one ear is not good enough to comprehend a normal speaking voice at a distance of 50 cm or more.
              </div>
              <div className="two wide column">
                5%
              </div>
              <div className="sixteen wide column">
                  3. Disorder of the Nose
              </div>
              <div className="fourteen wide column">
                When a significant disorder has been left in the function of the nose.
              </div>
              <div className="two wide column">
                20%
              </div>
              <div className="sixteen wide column">
                  4. Disorder of Mastication and Speech
              </div>
              <div className="fourteen wide column">
                (1) When the function of mastication and speech has been lost completely.
              </div>
              <div className="two wide column">
                100%
              </div>
              <div className="fourteen wide column">
                (2) When a significant disorder has been left in the function of mastication and speech.
              </div>
              <div className="two wide column">
                35%
              </div>
              <div className="fourteen wide column">
                (3) When a disorder has been left in the function of mastication and speech.
              </div>
              <div className="two wide column">
                15%
              </div>
              <div className="fourteen wide column">
                (4) When 5 or more teeth have been chipped and lost.
              </div>
              <div className="two wide column">
                5%
              </div>
              <div className="sixteen wide column">
                  5. Ugliness of Exterior Appearance (meaning the face, head and neck)
              </div>
              <div className="fourteen wide column">
                (1) When significant ugliness has been left on the exterior appearance.
              </div>
              <div className="two wide column">
                15%
              </div>
              <div className="fourteen wide column">
                (2) When ugliness has been left on the exterior appearance (meaning such ugliness as a cicatrix, 2 cm in diameter, or a linear cicatrix, 3cm long).
              </div>
              <div className="two wide column">
                3%
              </div>
              <div className="sixteen wide column">
                  6. Disorder of the Vertebral Column
              </div>
              <div className="fourteen wide column">
                (1) When a significant deformation or a significant disorder of movement has been left on the vertebral column.
              </div>
              <div className="two wide column">
                40%
              </div>
              <div className="fourteen wide column">
                (2) When a disorder of movement has been left on the vertebral column.
              </div>
              <div className="two wide column">
                30%
              </div>
              <div className="fourteen wide column">
                (3) When a deformation has been left on the vertebral column.
              </div>
              <div className="two wide column">
                15%
              </div>
              <div className="sixteen wide column">
                  7. Disorder of the Arm (the wrist joint and above) or the Leg (the ankle joint and above)
              </div>
              <div className="fourteen wide column">
                (1) When one arm or one leg has been lost.
              </div>
              <div className="two wide column">
                60%
              </div>
              <div className="fourteen wide column">
                (2) When the function of two or three joints of the three major joints in an arm or leg has been lost completely.
              </div>
              <div className="two wide column">
                50%
              </div>
              <div className="fourteen wide column">
                (3) When the function of one joint of the three major joints has been lost completely.
              </div>
              <div className="two wide column">
                35%
              </div>
              <div className="fourteen wide column">
                (4) When a disorder has been left in the function of one arm or one leg
              </div>
              <div className="two wide column">
                15%
              </div>
              <div className="sixteen wide column">
                  8. Disorder of the Fingers
              </div>
              <div className="fourteen wide column">
                (1) When the thumb of one hand has been lost at or above the knuckle (interphalangeal joint).
              </div>
              <div className="two wide column">
                20%
              </div>
              <div className="fourteen wide column">
                (2) When a significant disorder has been left in the function of the thumb of one hand.
              </div>
              <div className="two wide column">
                15%
              </div>
              <div className="fourteen wide column">
                (3) When one of the fingers other than the thumb has been lost at or above the second knuckle (distal interphalangeal joint).
              </div>
              <div className="two wide column">
                8%
              </div>
              <div className="fourteen wide column">
                (4) When a significant disorder has been left in the function of one of the fingers other than the thumb.
              </div>
              <div className="two wide column">
                5%
              </div>
              <div className="sixteen wide column">
                  9. Disorder of Toes
              </div>
              <div className="fourteen wide column">
                (1) When the first toe of one leg has been lost at or above the toe joint (interphalangeal joint).
              </div>
              <div className="two wide column">
                10%
              </div>
              <div className="fourteen wide column">
                (2) When a significant disorder has been left in the function of the first toe of one leg.
              </div>
              <div className="two wide column">
                8%
              </div>
              <div className="fourteen wide column">
                (3) When one of the toes other than the first toe has been lost at or above the second toe joint (distal interphalangeal joint).
              </div>
              <div className="two wide column">
                5%
              </div>
              <div className="fourteen wide column">
                (4) When a significant disorder has been left in the function of one of the toes other than the first toe.
              </div>
              <div className="two wide column">
                3%
              </div>
              <div className="fourteen wide column">
                10. In other cases where the Traveler is not able to take care of himself/herself for the rest of his/her life due to the significant disorder of his/her body.
              </div>
              <div className="two wide column end">
                100%
              </div>
              <div className="sixteen wide column">
                Note: The word "above" used in the provisions of 7, 8 and 9 above means the part of the body closer to the heart from the joint concerned.
              </div>
            </div>
            <p className="ui segment chapter">Schedule III (related to Article 8 - 08.02)</p>
            <div className="ui grid end">
              <div className="sixteen wide column">
                  1. The corrected eyesight of both eyes has fallen to 0.06 or below.
              </div>
              <div className="sixteen wide column">
                  2. The function of mastication and speech has been lost.
              </div>
              <div className="sixteen wide column">
                  3. The hearing of both ears has been lost.
              </div>
              <div className="sixteen wide column">
                  4. The function of all the joints of both upper limbs at or above the wrist joint has been lost.
              </div>
              <div className="sixteen wide column">
                  5. The function of one lower limb has been lost.
              </div>
              <div className="sixteen wide column">
                  6. Due to disorders of the internal organs in the chest and abdomen, the coordination of the body is limited mainly to routine action at home, such as eating and morning ablutions.
              </div>
              <div className="sixteen wide column">
                  7. Due to disorders of the nervous system or nerves, the coordination of the body is limited mainly to routine action at home, such as eating and morning ablutions.
              </div>
              <div className="sixteen wide column">
                  8. Due to a coexisting disorder of the above-mentioned parts of the body and the like, the coordination of the body is limited mainly to routine action at home, such as eating and morning ablutions.
              </div>
              <div className="sixteen wide column">
                  Note: The word "above" used in the provision of 4 above means the part of the body closer to the heart from the joint concerned.
              </div>
            </div>
          </div>
        </div>
        <NavBarFooter />
        <Copyright />
      </div>
    );
  }
}

/*function mapStateProps(state) {
    const { about } = state
    const { output } = about;

    return {
        output
    };
}*/

TermsConditions.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(TermsConditions);
