const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0717", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my girlfriend so cute?", // Example trending search query
    "Why do I love her so much?", // Another example query
    `How can I make her beleive I want her to always take pics for me`, // A personalized trending search
  ],
  proTip: 'Tip ,as it is: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-07-17", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting babe❤", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Immortality", // Title of the song
      artist: "Celin Dion", // Artist of the song
      left: "5%", // Positioning on the page
      // Positioning on the page
        },
        {
      title: "Claras heart",
      artist: "Eddie Daniels",
      left: "40%",
      top: "15%",
        },
        {
      title: "Ngiyakuthanda",
      artist: "Zandie Khumalo",
      left: "15%",
      top: "40%",
        },
        {
      title: "I Love You",
      artist: "Celin Dion",
      left: "30%",
      top: "75%",
        },
        {
      title: "In my heart",
      artist: "2Pac",
      left: "5%",
      top: "65%",
        },
        {
      title: "Intatheli",
      artist: "Limit Nala",
      left: "25%",
      top: "90%",
        },
        {
      title: "Okokgcina",
      artist: "Young Stunna x Oskido",
      left: "35%",
      top: "50%",
        },
        {
      title: "Love Me Like You Do",
      artist: "Ellie Goulding",
      left: "10%",
      top: "25%",
        },
      ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "17 July ,2024", description: "A beautiful day to remember.Usuke lokuqala ngikubona kahle babe.This is a screenshot from Sir Nhunzvi ethi ngzonifundisa. Eish Singhlulile ukuthi sivele.Scroll right>>   " }, // Message entry
      { title: "31 July , 2025", description: "You texted me first😂😂. Ngayilungisa ke ngo 25 , ngezi 25 ,25 should be our number huh. Sbonge ig ngeplatifomu" },
      { title: "09 July, 2025", description: " ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "17 july, 2025", description: "ngivume babe , Formal meeting when we made it formal" }, // Picture entry
      { title: "25 July, 2025", description: "Imvula💕" },
      { title: "Date🤔?", description: "I had to squeeze it in. Unexpexcted sleeping pic 😂😂😂" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Dear Babe.This is too show you much I appreciate you.Ohh and you saw me crashing out ngenza lento awukaze wabuza babe,do you care love 🤔hee. I hope you like it.Ngiyakuthanda ", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "oww you've made it to this far .Click the next button ngibone ungazi kangakanani mina.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
