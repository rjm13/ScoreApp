import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Dimensions, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const SCREEN_WIDTH = Dimensions.get('window').width

const Terms = ({navigation} : any) => {

    return (
        <View>
            <Animatable.View animation='bounceInDown' style={{ flexDirection: 'row', height: 90, borderBottomRightRadius: 20, borderBottomLeftRadius: 20,
                            backgroundColor: '#155843', alignItems: 'flex-end', paddingBottom: 20, paddingLeft: 20}}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name='chevron-left' color='#fff' size={25}/>
                        <Text style={{fontFamily: 'chalkboard-regular', color: '#fff', fontSize: 18, marginLeft: 10 }}>
                            Terms of Use
                        </Text> 
                    </View>
                </TouchableWithoutFeedback>
            </Animatable.View>

            <ScrollView>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Agreement to Terms
                    </Text>
                    <Text style={styles.paragraph}>
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and 
                        VoteIn LLC, doing business as MartianSpiderMedia concerning your access to and use of the 
                        website as well as any other media form, media channel, mobile website or mobile application. You agreethat by accessing this application that you have read, understaood, and agreed to be bound by all terms of use.
                        IF YOU DO NOT AGREE WITH THESE TERMS OF USE, THEN YOU EXPRESSLY PROHIBITED FROM USING THE APP AND MUST DISCONTINUE USE IMMEDIATELY.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Intellectual Property Rights
                    </Text>
                    <Text style={styles.paragraph}>
                        Unless otherwise indicated, the App is our proprietary property and all source code,
                        databases, functionality, software, desgins, audio, video, text, photographs, and graphics
                        on the App (collectively, the "Content") and the trademarks, service marks, and logos contained therein
                        are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and
                        various other intellectual property rights and unfair competition laws on the United States, international
                        copyright laws, and international conventions. The Content are provided on the App "As Is" for your information
                        and personal use only. Unless expressly provided in these Terms of Use, no part of the APP may be copied, reproduced, 
                        aggregated, republished, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for commercial 
                        purpose whatsoever, without our express permission. Provided that you are eligible to use the App, 
                        you are granted a limited license to access and use the App and to download any portion of the Content to which 
                        you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you 
                        in and to the App and the Content.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        User Representations
                    </Text>
                    <Text style={styles.paragraph}>
                        By using this App, you represent and warrant that: (1) you have the legal capacity and you 
                        agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you 
                        reside, or if a minor, you have received parental permission to the App; (3) you will not access the App through 
                        automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the App 
                        for any illegal or unauthorized purpose; and (5) you use or the App will not violate an applicable law or regulation. 
                        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the 
                        right to suspend or terminate your account and refuse any and all current or future use of the App.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Prohibited Activites
                    </Text>
                    <Text style={styles.paragraph}>
                        You may not access or use the App for any purpose other than that for which we 
                        make the App available. The App may not be used in connection with any commercial endeavors except 
                        those that are specifically endorsed or approved by us. As a use of the App, you agree not to:
                    </Text>
                    <Text style={styles.paragraph}>
                        - Systematically retrieve data or other content from the App to create or compile, directly or indirectly, 
                        a collection, compilation, database, or directory without written permission from us. 
                    </Text>
                    <Text style={styles.paragraph}>
                        - Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account 
                        information such as user passwords.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Circumvent, disable, or otherwise interfere with security-related features on the App, 
                        including features that prevent or restrict the use or copying of any Content or enforce limitations on 
                        the use of the App and/or the Content contained therein.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Disparag, tarnish, or otherwise harm, in our opinion, use and/or the App.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Use any information obtained from the App to harass, abuse, or harm another person.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Make improper use of our support service or submit false reports of abuse or misconduct.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Use the App in a manner inconsistent with any applicable laws or regulations.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Engage in unauthorized framing ofor linking to the App.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Upload (or attempt to) or transmit viruses, Trojan horses, or other material, including spamming, that 
                        interferes with any party's uninterrupted use of the App.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Engage in any automated use of the system.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Delete the copyright or other proprietary rights notice from any Content.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Upload or transmit (or attempt to) any material that acts as a passive or active 
                        information collection mechanism.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing 
                        any portion of the App to you.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Copy or adapt the App's software, including but not limited to Flash, PHP, HTML, Javascript, or other code.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Make any unauthorized use of the App.
                    </Text>
                    <Text style={styles.paragraph}>
                        - Use the App as part of any effort to compete with us or otherise use the App and/or Content 
                        for any revenue-generating endeavor or commercial enterprise.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Mobile Application License
                    </Text>
                    <Text style={styles.paragraph}>
                        We grant you revocable, non-exclusive, non-transferable, limited right to install and use the 
                        mobile application on wireless electronic devices owned or controlled by you, and to access and use the 
                        mobile application on such devices strictly in accordance with the terms and conditions of this App. You shallnot (1) except as 
                        permitted by law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or 
                        decrypt the application; (2) make any modification, adaptation, improvement, enhancement, translation, or 
                        derivative work from the application; (3) violate any applicable laws, rules, or regulations in connection with your 
                        access or use of the application; (4) remove, alter, or obscure any proprietary notice posted by us; (5) use the application 
                        for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make 
                        the application available over a network or other environment permnitting access to use by multiple devices or users at the same time;
                         (7) use the application for creating a product, service, or software that is, directly or indirectly, competitive with or 
                         in any way a substitute for the application; (8) use the application to send automated queries to any website or to send 
                         any unsolicited commercial e-maill or (9) use any proprietary information or any of our interfaces or our 
                         other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, 
                         or devices for use with the application.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Apple and Android Devices
                    </Text>
                    <Text style={styles.paragraph}>
                        The following terms apply when you use a mobile application obtained from either the 
                        Apple Store or Google Play (each an "App Distributor") to access the App: (1) the license granted to you 
                        for our mobile application is limited to a non-transferable license to use the applicatin on a device that utilizes 
                        the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the 
                        applicable App Distributor's terms of service; (2) we are responsible for providing any maintenance and support 
                        serviceswith respect to the mobile application as specified in the terms and conditions of this mobile application license 
                        contained in these Terms of Useor as otherwise required under applicable law, and you acknowledge that each 
                        App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the mobile application; 
                        (3) in the event of any failure of the mobile application to conform to any applicable warranty, you may notify 
                        the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, 
                        if any, paid for the mobile application, andto the maximum extent permitted by applicable law, the App Distributor will have no other warranty 
                        obligation whatsoever with respect to the mobile application; (4) you represent and warrant that (i) you are not located 
                        in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) 
                        youare not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when 
                        using the mobile application, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement 
                        when using the mobile application; and (6) you achknowledge and agree that the App Distributors are third-party 
                        beneficiaries of the terms and conditions in the mobile application license contained in these Terms of Use, and that each App Distributor will have the right (and 
                        will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Terms of Use against you 
                        as a third-party beneficiary thereof.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Submissions
                    </Text>
                    <Text style={styles.paragraph}>
                        You acknowledgeand agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the App ("Submissions") 
                        provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall 
                        be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without 
                        acknowledgment or compensation to you. You hereby waive all moral rights to any Submissions, and you hereby warrant that any such Submissions are original with you 
                        or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged infringement or 
                        misappropriation of any proprietary right in your Submissions.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Advertisers
                    </Text>
                    <Text style={styles.paragraph}>
                            We allow advertiserst to display their advertisements and other information in certain areas of the App, such as 
                            sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibilty for any 
                            advertisements you place on the App and any services provided on the App or products sold through those advertisements. Further, 
                            as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the App, including, but 
                            not limited to, intellectual property rights, publicity rights, and contractual rights. We simply provide the space to place such advertisements, and 
                            we have no other relationship with advertisers.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        App Management
                    </Text>
                    <Text style={styles.paragraph}>
                        We reserve the right, but not the obligation, to (1) monitor the App for violations of these Terms of Use; (2) take 
                        appropriate legal action against anyone who, in or sole discretion, violated the law of these Terms of Use, including without limitation, reporting such user to law 
                        enforcement authorities; (3) in our sole discretion and without limitation, refuse, rescrict access to, limit the availability of, or 
                        disable (to the extent of technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, 
                        notice, or liability, to remove from the App or otherwise disable all files and content that are excessive in size or are in any way burdensome 
                        to our systems; and (5) otherwise manage the App in a manner designed to protect our rights and property and to facilitate the proper 
                        functioning of the App.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Term and Termination
                    </Text>
                    <Text style={styles.paragraph}>
                        These Terms of Use shall remain in full force and effect while you use the App. Without limiting any 
                        other provision of these terms of use, we reserve the right to, in our sole discretion and without liability, deny access to and use of the App (including 
                        blocking certain IP addresses), to any person for any reason or for no reason, including without limitation for breach of representation, warranty, or covenant contained 
                        in these Terms of Use or of any applicable law or regulation. We may terminate your use or participation in the App or delete any content or information 
                        that you posted at any time, without warning, in our sole discretion. If we terminate or suspend your account for any reason, you are prohibited from registering and creating 
                        a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, 
                        we reserve the right to take legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Modifications and Interruptions
                    </Text>
                    <Text style={styles.paragraph}>
                        We reserve the right to change, modify, or remove the contents of the App at any time or for any reason at our sole 
                        discretion without notice. However, we have no obligation to update any information on our App. We also reserve the right to modify or discontinue all or part 
                        of the App without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the App. 
                        We cannot guarantee the App will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the App, resulting 
                        in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontiue, or otherwise modify the App at any time or for any reason 
                        without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the App 
                        during any downtime or discontinuance of the App. Nothing in these Terms of Use will be construed to obligate us to maintain and support the App or to 
                        supply any corrections, updates, or releases in connection therewith.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Governing Law
                    </Text>
                    <Text style={styles.paragraph}>
                        These Terms of Use and your use of the App are governed by and construed in accordance with the laws of the State of Texas 
                        applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Corrections
                    </Text>
                    <Text style={styles.paragraph}>
                        There may be information on the App that contains typographical errors, inaccuracies, or omissions, including 
                        descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, 
                        or omissions and to change or update the information on the App at any time, without prior notice.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Disclaimer
                    </Text>
                    <Text style={styles.paragraph}>
                        The App is provided on an as-is and as-available basis. You agree that your use of the App and our 
                        servies will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, expressed or implied, in connection 
                        with the site and your use thereof, including, without limitation, the implied warranties of marchantability, fitness 
                        for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the site's 
                        content or the content of any websites linked to the site and will assume no liability or responsibility for any (1) errors, 
                        mistakes, or inaccuracies of content materials, (2) personal injury or property damage, of any nature whatsoever, resulting from 
                        your access to and use of the App, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information 
                        stored therein, (4) any interruption of cessation of transmission to or from the site, (5) any bugs, viruses, trojan horses, or the like which may be 
                        transmitted to or through the site by any third party, and/or (6) and errors of omissions in any content and materials or for any loss or damage of 
                        any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the App. We do not warrant 
                        endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the App, 
                        any hyperlinked website, or any website or mobile application featured in any banner or other advertising, and we will not be a party 
                        to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. As with the 
                        purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Limitations of Liability
                    </Text>
                    <Text style={styles.paragraph}>
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, 
                        incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the App, even if 
                        we hae been advised of the possibility of such damages.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Indemnification
                    </Text>
                    <Text style={styles.paragraph}>
                        You afree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our 
                        respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or 
                        demand, including reasonable attorney's fees and expenses, made by any third party due to or arising out of: (1) use 
                        of the App; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms 
                        of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any 
                        overt harmful act toward any other user of the App with whom you connected via the App. Notwithstanding the foregoring, we 
                        reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and 
                        you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such 
                        claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        User Data
                    </Text>
                    <Text style={styles.paragraph}>
                            We will maintain certain data that you transmit to the App for the purpose of managing the performance of the App, 
                            as well as data relating to your use of the App. Although we perform regular routine backups of data, you are solely responsible for all data 
                            that you transmit or that relates to any activity you have undertaken using the App. You agree that we shall have no liability 
                            to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from 
                            any such loss or corruption of such data.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Electronic Communications, Transactions, and Signatures
                    </Text>
                    <Text style={styles.paragraph}>
                        Visiting the App, sending us emails, and completing online forms constitute electronic 
                        communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, 
                        and other communications we provide to you electronically, via email and on the App, satisfy any legal requirement that 
                        such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to 
                        electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the App. You hereby 
                        waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which 
                        require an original signature or delivery or retention of non-electronic records, or to payments granting of credits by any means other than 
                        electronic means. 
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        California Users and Residents
                    </Text>
                    <Text style={styles.paragraph}>
                        If any complaint wuth us is not satisfactorily resolved, you can contact the Complaint Assisstance Unit 
                        of the Division of Consumer Services of the California Departmnent of Consumer Affairs in writing at 1625 North 
                        Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Miscellaneous
                    </Text>
                    <Text style={styles.paragraph}>
                        The Terms of Use and any policies or operating rules posted by us on the App or in respect 
                        to the App constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce 
                        any right or provision of these Terms of Use shall not operate as a waiver of such right of provision. These Terms of 
                        Use operate to the fullest extent permnissible by law. We may assign any or all of our rights and obligations to others at any time. We 
                        shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If 
                        any provision of part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of 
                        that provision is deemed severable from these Terms of Use and does not affect the validity and enforceablity of any remaining provisions. There 
                        is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or 
                        use of the App. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You herevby waive 
                        any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto execute these Terms of Use.
                    </Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.header}>
                        Contact Us
                    </Text>
                    <Text style={styles.paragraph}>
                        In order to resolve a complaint regarding the App or to receive further information regarding the use of the App 
                        , please contact us.
                    </Text>
                </View>

            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        margin: 20
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 12,
    }
  });

export default Terms;