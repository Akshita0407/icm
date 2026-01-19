export interface DataProp {
  id: string;
  label: string;
}

export const data: DataProp[] = [
  { id: "collectInformation", label: "WHAT INFORMATION DO WE COLLECT?" },
  { id: "processInformation", label: "HOW DO WE PROCESS YOUR INFORMATION?" },
  {
    id: "legalBases",
    label:
      "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
  },
  {
    id: "sharePersonalInfo",
    label: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
  },
  {
    id: "useCookies",
    label: " DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
  },
  { id: "howLongInformation", label: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
  { id: "safeInformation", label: " HOW DO WE KEEP YOUR INFORMATION SAFE?" },
  { id: "privacyRights", label: " WHAT ARE YOUR PRIVACY RIGHTS?" },
  { id: "doNotTrackFeature", label: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
  {
    id: "usPrivacyRights",
    label: "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
  },
  {
    id: "updatesToNotice",
    label: "DO WE MAKE UPDATES TO THIS NOTICE?",
  },
  {
    id: "contactAboutNotice",
    label: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
  },
  {
    id: "reviewUpdateDeleteData",
    label:
      "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
  },
];
