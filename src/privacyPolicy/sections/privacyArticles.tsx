import Article from "../../components/articleReusable";

const articlesData = [
  {
    id: "collectInformation",
    number: "1",
    title: " WHAT INFORMATION DO WE COLLECT?",
    sections: [
      { heading: "Personal information you disclose to us" },
      {
        paragraphs: [
          <>
            <strong>In Short</strong> :
            <i>We collect personal information that you provide to us.</i>
          </>,
        ],
      },
      {
        paragraphs: [
          " We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.",
          <>
            <strong>Personal Information Provided by You. </strong>The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:
          </>,
        ],
        list: ["names", "names", "phone numbers"],
      },
      {
        paragraphs: [
          <>
            <strong>Sensitive Information. </strong> We do not process sensitive
            information.
          </>,
          "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.",
        ],
      },
      {
        heading: "Information automatically collected",
      },
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>
            <i>
              Some information — such as your Internet Protocol (IP) address
              and/or browser and device characteristics — is collected
              automatically when you visit our Services.
            </i>
          </>,
          "We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.",
          <>
            Like many businesses, we also collect information through cookies
            and similar technologies. You can find out more about this in our
            Cookie Notice:
            <span className="text-blue-500 underline">
              {" "}
              https://icm01.vercel.app/policies/privacy-policy.
            </span>
          </>,
          "The information we collect includes:",
        ],
      },
      {
        list: [
          "Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).",
        ],
      },
    ],
  },

  {
    id: "processInformation",
    number: "2",
    title: " HOW DO WE PROCESS YOUR INFORMATION?",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>{" "}
            <i>
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We process the personal
              information for the following purposes listed below. We may also
              process your information for other purposes only with your prior
              explicit consent.
            </i>
          </>,
        ],
      },
      {
        heading:
          "We process your personal information for a variety of reasons, depending on how you interact with our Services, including:",
      },
      {
        list: [
          <>
            <strong>
              To deliver and facilitate delivery of services to the user.
            </strong>{" "}
            We may process your information to provide you with the requested
            service.
          </>,
          <>
            <strong>
              To respond to user inquiries/offer support to users.
            </strong>{" "}
            We may process your information to respond to your inquiries and
            solve any potential issues you might have with the requested
            service.
          </>,
          <>
            <strong>To send administrative information to you.</strong>
            We may process your information to send you details about our
            products and services, changes to our terms and policies, and other
            similar information.
          </>,
          <>
            <strong>To request feedback.</strong> We may process your
            information when necessary to request feedback and to contact you
            about your use of our Services.
          </>,
          <>
            <strong>To protect our Services.</strong>
            We may process your information as part of our efforts to keep our
            Services safe and secure, including fraud monitoring and prevention.
          </>,
          <>
            <strong>To identify usage trends.</strong>
            We may process your information to provide you with the requested
            service.
          </>,
          <>
            <strong>
              To determine the effectiveness of our marketing and promotional
              campaigns
            </strong>
            We may process your information to better understand how to provide
            marketing and promotional campaigns that are most relevant to you.
          </>,
          <>
            <strong>To save or protect an individual's vital interest.</strong>
            We may process your information when necessary to save or protect an
            individual’s vital interest, such as to prevent harm.
          </>,
        ],
      },
    ],
  },
  {
    id: "legalBases",
    number: "3",
    title: " WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?",
    sections: [
      {
        paragraphs: [
          <i>
            <strong>In Short</strong>: We only process your personal information
            when we believe it is necessary and we have a valid legal reason
            (i.e., legal basis) to do so under applicable law, like with your
            consent, to comply with laws, to provide you with services to enter
            into or fulfill our contractual obligations, to protect your rights,
            or to fulfill our legitimate business interests.
          </i>,
        ],
      },
      {
        heading:
          "If you are located in the EU or UK, this section applies to you.",
      },
      {
        paragraphs: [
          "The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:",
        ],
        list: [
          <>
            <strong>Consent.</strong> We may process your information if you
            have given us permission (i.e., consent) to use your personal
            information for a specific purpose. You can withdraw your consent at
            any time. Learn more about{" "}
            <span className="text-blue-500 underline">
              {" "}
              withdrawing your consent
            </span>
            .
          </>,
          <>
            <strong>Performance of a Contract</strong> . We may process your
            personal information when we believe it is necessary to fulfill our
            contractual obligations to you, including providing our Services or
            at your request prior to entering into a contract with you.
          </>,
        ],
      },
      {
        paragraphs: [
          <>
            <strong>Legitimate Interests</strong> . We may process your
            information when we believe it is reasonably necessary to achieve
            our legitimate business interests and those interests do not
            outweigh your interests and fundamental rights and freedoms. For
            example, we may process your personal information for some of the
            purposes described in order to:
          </>,
        ],
        list: [
          "Analyze how our Services are used so we can improve them to engage and retain users",
          "Support our marketing activities",
          " Diagnose problems and/or prevent fraudulent activities",
          "Understand how our users use our products and services so we can improve user experience",
        ],
      },
      {
        list: [
          <>
            <strong>Legal Obligations.</strong> We may process your information
            where we believe it is necessary for compliance with our legal
            obligations, such as to cooperate with a law enforcement body or
            regulatory agency, exercise or defend our legal rights, or disclose
            your information as evidence in litigation in which we are involved
          </>,
          <>
            <strong>Vital Interests.</strong> We may process your information
            where we believe it is necessary to protect your vital interests or
            the vital interests of a third party, such as situations involving
            potential threats to the safety of any person.
          </>,
        ],
      },
      { heading: "If you are located in Canada, this section applies to you." },
      {
        paragraphs: [
          <>
            We may process your information if you have given us specific
            permission (i.e., express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e., implied consent). You can{" "}
            <span className="text-blue-500 underline">
              withdraw your consent
            </span>
            at any time.
          </>,
          "In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:",
        ],
        list: [
          " If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way",
          "For investigations and fraud detection and prevention",
          "For business transactions provided certain conditions are met",
          "If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim",
          " For identifying injured, ill, or deceased persons and communicating with next of kin",
          "If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse",
          " If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province",
          " If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records",
          "If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced",
          " If the collection is solely for journalistic, artistic, or literary purposes",
          "If the information is publicly available and is specified by the regulations",
          " We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments",
        ],
      },
    ],
  },
  {
    id: "sharePersonalInfo",
    number: "4",
    title: " WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>{" "}
            <i>
              We may share information in specific situations described in this
              section and/or with the following categories of third parties.
            </i>
          </>,
          <>
            <strong>
              Vendors, Consultants, and Other Third-Party Service Providers
            </strong>
            . We may share your data with third-party vendors, service
            providers, contractors, or agents ("<strong>third parties</strong>")
            who perform services for us or on our behalf and require access to
            such information to do that work. We have contracts in place with
            our third parties, which are designed to help safeguard your
            personal information. This means that they cannot do anything with
            your personal information unless we have instructed them to do it.
            They will also not share your personal information with any
            organization apart from us. They also commit to protect the data
            they hold on our behalf and to retain it for the period we instruct.
          </>,
          "The categories of third parties we may share personal information with are as follows:",
        ],
        list: [
          "Cloud Computing Services",
          " Data Analytics Services",
          "Website Hosting Service Providers",
          "Communication & Collaboration Tools",
        ],
      },
      {
        paragraphs: [
          "We also may need to share your personal information in the following situations:",
        ],
        list: [
          "Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
        ],
      },
    ],
  },
  {
    id: "useCookies",
    number: "5",
    title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>{" "}
            <i>
              {" "}
              We may use cookies and other tracking technologies to collect and
              store your information.
            </i>
          </>,
          "We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.",
          "We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.",
          <>
            To the extent these online tracking technologies are deemed to be a
            "sale"/"sharing" (which includes targeted advertising, as defined
            under the applicable laws) under applicable US state laws, you can
            opt out of these online tracking technologies by submitting a
            request as described below under section "
            <span className="text-blue-500 underline">
              {" "}
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </span>
            "
          </>,
          "Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: ",
          <p className="text-blue-500 underline">
            https://icm01.vercel.app/policies/privacy-policy.
          </p>,
        ],
      },
      {
        heading: "Google Analytics",
        paragraphs: [
          <>
            We may share your information with Google Analytics to track and
            analyze the use of the Services. To opt out of being tracked by
            Google Analytics across the Services, visit{" "}
            <span className="text-blue-500 underline">
              {" "}
              https://tools.google.com/dlpage/gaoptout
            </span>
            . For more information on the privacy practices of Google, please
            visit the{" "}
            <span className="text-blue-500 underline">
              {" "}
              Google Privacy & Terms page
            </span>
            .
          </>,
        ],
      },
    ],
  },
  {
    id: "howLongInformation",
    number: "6",
    title: "  HOW LONG DO WE KEEP YOUR INFORMATION?",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>{" "}
            <i>
              We keep your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Notice unless otherwise required
              by law.
            </i>
          </>,
          "We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.",
          "When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.",
        ],
      },
    ],
  },
  {
    id: "safeInformation",
    number: "7",
    title: " HOW DO WE KEEP YOUR INFORMATION SAFE?",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>{" "}
            <i>
              We aim to protect your personal information through a system of
              organizational and technical security measures.
            </i>
          </>,
          " We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.",
        ],
      },
    ],
  },
  {
    id: "privacyRights",
    number: "8",
    title: "WHAT ARE YOUR PRIVACY RIGHTS? ",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>{" "}
            <i>
              Depending on your state of residence in the US or in some regions,
              such as the European Economic Area (EEA), United Kingdom (UK),
              Switzerland, and Canada, you have rights that allow you greater
              access to and control over your personal information. You may
              review, change, or terminate your account at any time, depending
              on your country, province, or state of residence.
            </i>
          </>,
          <div className="my-3">
            In some regions (like the EEA, UK, Switzerland, and Canada), you
            have certain rights under applicable data protection laws. These may
            include the right (i) to request access and obtain a copy of your
            personal information, (ii) to request rectification or erasure;
            (iii) to restrict the processing of your personal information; (iv)
            if applicable, to data portability; and (v) not to be subject to
            automated decision-making. If a decision that produces legal or
            similarly significant effects is made solely by automated means, we
            will inform you, explain the main factors, and offer a simple way to
            request human review. In certain circumstances, you may also have
            the right to object to the processing of your personal information.
            You can make such a request by contacting us by using the contact
            details provided in the section '
            <span className="text-blue-500 underline">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            ' below.
          </div>,
          "We will consider and act upon any request in accordance with applicable data protection laws.",
          <>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your{" "}
            <span className="text-blue-500 underline">
              Member State data protection authority
            </span>{" "}
            or{" "}
            <span className="text-blue-500 underline">
              UK data protection authority
            </span>
            .
          </>,
          <>
            If you are located in Switzerland, you may contact the{" "}
            <span className="text-blue-500 underline">
              Federal Data Protection and Information Commissioner
            </span>
            .
          </>,
          <>
            <strong>Withdrawing your consent</strong>: If we are relying on your
            consent to process your personal information, which may be express
            and/or implied consent depending on the applicable law, you have the
            right to withdraw your consent at any time. You can withdraw your
            consent at any time by contacting us by using the contact details
            provided in the section{" "}
            <span className="text-blue-500 underline">
              {" "}
              "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            " below.
          </>,
          "However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.",
          <>
            <strong>Cookies and similar technologies</strong> : Most Web
            browsers are set to accept cookies by default. If you prefer, you
            can usually choose to set your browser to remove cookies and to
            reject cookies. If you choose to remove cookies or reject cookies,
            this could affect certain features or services of our Services. For
            further information, please see our Cookie Notice:{" "}
            <span className="text-blue-500 underline">
              https://icm01.vercel.app/policies/privacy-policy
            </span>
            .
          </>,
        ],
      },
    ],
  },
  {
    id: "doNotTrackFeature",
    number: "9",
    title: "CONTROLS FOR DO-NOT-TRACK FEATURES",
    sections: [
      {
        paragraphs: [
          "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.",
          "California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.",
        ],
      },
    ],
  },
  //
  {
    id: "usPrivacyRights",
    number: "10",
    title: " DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>
            <i>
              If you are a resident of California, Colorado, Connecticut,
              Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota,
              Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode
              Island, Tennessee, Texas, Utah, or Virginia, you may have the
              right to request access to and receive details about the personal
              information we maintain about you and how we have processed it,
              correct inaccuracies, get a copy of, or delete your personal
              information. You may also have the right to withdraw your consent
              to our processing of your personal information. These rights may
              be limited in some circumstances by applicable law. More
              information is provided below.
            </i>
          </>,
        ],
      },
      {
        heading: "Categories of Personal Information We Collect",
        paragraphs: [
          <div className="mb-6">
            The table below shows the categories of personal information we have
            collected in the past twelve (12) months. The table includes
            illustrative examples of each category and does not reflect the
            personal information we collect from you. For a comprehensive
            inventory of all personal information we process, please refer to
            the section "
            <span className="text-blue-500 underline">
              {" "}
              WHAT INFORMATION DO WE COLLECT?
            </span>
            "
          </div>,
        ],

        table: {
          headers: ["Category", "Examples", "Collected"],
          rows: [
            [
              "A. Identifiers",
              "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
              "NO",
            ],
            [
              "B. Personal information as defined in the California Customer Records statute",
              "Name, contact information, education, employment, employment history, and financial information",
              "NO",
            ],
            [
              "C. Protected classification characteristics under state or federal law",
              "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data",
              "NO",
            ],
            [
              "D. Commercial information",
              "Transaction information, purchase history, financial details, and payment information",
              "NO",
            ],
            ["E. Biometric information", "Fingerprints and voiceprints", "NO"],
            [
              "F. Internet or other similar network activity ",
              "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements ",
              "NO",
            ],
            ["G. Geolocation data", "Device location", "NO"],
            [
              "H. Audio, electronic, sensory, or similar information",
              "Images and audio, video or call recordings created in connection with our business activities",
              "NO",
            ],
            [
              "I. Professional or employment-related information",
              "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
              "NO",
            ],
            [
              "J. Education Information",
              "Student records and directory information",
              "NO",
            ],
            [
              "K. Inferences drawn from collected personal information",
              "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
              "NO",
            ],
            ["K.Sensitive personal Information", "", "NO"],
          ],
        },
      },
      {
        paragraphs: [
          "We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:",
        ],
        list: [
          " Receiving help through our customer support channels;",
          " Participation in customer surveys or contests; and",
          "Facilitation in the delivery of our Services and to respond to your inquiries.",
        ],
      },
      {
        heading:
          "Facilitation in the delivery of our Services and to respond to your inquiries.",
        paragraphs: [
          <>
            Learn more about the sources of personal information we collect in "
            <span className="text-blue-500 underline">
              {" "}
              WHAT INFORMATION DO WE COLLECT?
            </span>
            "
          </>,
        ],
      },
      {
        heading: "How We Use and Share Personal Information",
        paragraphs: [
          <>
            Learn more about how we use your personal information in the
            section,"
            <span className="text-blue-500 underline">
              {" "}
              HOW DO WE PROCESS YOUR INFORMATION?
            </span>
            "
          </>,
        ],
      },
      {
        heading: "Will your information be shared with anyone else?",
        paragraphs: [
          <>
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Learn more about how we disclose personal information to in the
            section, "
            <span className="text-blue-500 underline">
              {" "}
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </span>
            "
          </>,
          "We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.",
          "We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:",
          <>
            The categories of third parties to whom we disclosed personal
            information for a business or commercial purpose can be found under
            "
            <span className="text-blue-500 underline">
              {" "}
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </span>
            "
          </>,
        ],
      },
      {
        heading: "Your Rights",
        paragraph: [
          "You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:",
        ],
        list: [
          <>
            {" "}
            <strong>Right to know</strong> whether or not we are processing your
            personal data
          </>,
          <>
            {" "}
            <strong>Right to access</strong> your personal data
          </>,
          <>
            {" "}
            <strong>Right to correct</strong> inaccuracies in your personal data
          </>,
          <>
            {" "}
            <strong>Right to request</strong> the deletion of your personal data
          </>,
          <>
            {" "}
            <strong>Right to obtain</strong> a copy of the personal data you
            previously shared with us
          </>,
          <>
            {" "}
            <strong>Right to non-discrimination </strong>for exercising your
            rights
          </>,
          <>
            {" "}
            <strong>Right to opt</strong> out of the processing of your personal
            data if it is used for targeted advertising (or sharing as defined
            under California’s privacy law), the sale of personal data, or
            profiling in furtherance of decisions that produce legal or
            similarly significant effects ("profiling")
          </>,
        ],
      },
      {
        paragraphs: [
          "Depending upon the state where you live, you may also have the following rights:",
        ],
        list: [
          "Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)",
          "Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)",
          "Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)",
          "Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)",
          " Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)",
          "Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)",
          "Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)",
        ],
      },
      {
        heading: "How to Exercise Your Rights",
        paragraphs: [
          <>
            To exercise these rights, you can contact us by visiting{" "}
            <span className="text-blue-500 underline">
              {" "}
              https://icm01.vercel.app/contact-information,
            </span>{" "}
            by emailing us at
            <span className="text-blue-500 underline">
              {" "}
              sales@icreate-media.com{" "}
            </span>
            , by visiting{" "}
            <span className="text-blue-500 underline">
              {" "}
              https://icm01.vercel.app/contact-information
            </span>
            , or by referring to the contact details at the bottom of this
            document.
          </>,
          "Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.",
        ],
      },
      {
        heading: "Request Verification",
        paragraphs: [
          "Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.",
          "If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.",
        ],
      },
      {
        heading: "Appeals",
        paragraphs: [
          "Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at __________. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.",
        ],
      },
      {
        heading: "California 'Shine The Light' Law",
        paragraphs: [
          <>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in the section "
            <span className="text-blue-500 underline">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>{" "}
            "
          </>,
        ],
      },
    ],
  },
  {
    id: "updatesToNotice",
    number: "11",
    title: " DO WE MAKE UPDATES TO THIS NOTICE?",
    sections: [
      {
        paragraphs: [
          <>
            <strong>In Short:</strong>{" "}
            <i>
              Yes, we will update this notice as necessary to stay compliant
              with relevant laws.
            </i>
          </>,
          "We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.",
        ],
      },
    ],
  },
  {
    id: "contactAboutNotice",
    number: "12",
    title: " HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
    sections: [
      {
        paragraphs: [
          <>
            If you have questions or comments about this notice, you may email
            us at
            <span className="text-blue-500 underline">
              {" "}
              sales@icreate-media.com{" "}
            </span>
            or contact us by post at:
          </>,
          <strong key="company">iCreate Media Pvt Ltd</strong>,

          "Second Floor, D-160, Phase-8, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160071, India",

          "Phone: +91 6824996731",
        ],
      },
    ],
  },
  {
    id: "reviewUpdateDeleteData",
    number: "13",
    title:
      "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? ",
    sections: [
      {
        paragraphs: [
          <>
            Based on the applicable laws of your country or state of residence
            in the US, you may have the right to request access to the personal
            information we collect from you, details about how we have processed
            it, correct inaccuracies, or delete your personal information. You
            may also have the right to withdraw your consent to our processing
            of your personal information. These rights may be limited in some
            circumstances by applicable law. To request to review, update, or
            delete your personal information, please visit:
            <span className="text-blue-500 underline">
              {" "}
              https://icm01.vercel.app/contact-information.
            </span>
          </>,
        ],
      },
    ],
  },
];

const PrivacyArticles = () => {
  return (
    <div className="w-full flex flex-col lg:gap-10 gap-5">
      {articlesData.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default PrivacyArticles;
