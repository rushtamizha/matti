import React, { useState } from 'react'
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
    { title: "What is BIG Mumbai Game?", content: "Based on the search results, “BIG Mumbai Game” appears to be an online gaming platform or app. It’s described as offering a “thrilling mix of entertainment, strategy, and high stakes,” bringing the “vibrant energy of Mumbai to your fingertips.” It seems to encompass different types of games, including what’s referred to as “Aviator” and potentially card games" },
    { title: "Is BIG Mumbai Game a real money game?", content: "Yes, at least one search result explicitly states that “big mumbai game trick” is a “real money gaming app offering fun and secure play.” This suggests that you can wager and potentially win real money while playing." },
    { title: "Is registration free?", content: "Yes, the platform reportedly supports “UPI and wallet withdrawals” for instant transactions." },
    { title: "Is BIG Mumbai Game legal and safe in India?", content: "The platform claims to use “encrypted technology” and is “trusted by players,” suggesting it aims to be secure and legal. However, regulations regarding online real money gaming can vary, so it’s advisable to check the specific terms and conditions and local laws." },
    { title: "Can I use React Router?", content: "Yes, new users may receive a welcome bonus. One source mentions “₹500+ as bonus” for new users." },
    { title: "What types of games are available?", content: "Based on the search results, the platform seems to offer: Aviator: Described as an “exhilarating mix of entertainment, strategy, and high stakes.* Card Games: The platform is also referred to as a “safe online card games India” provider, with mentions of “thrilling card challenges” and the ability to “master the art of twenty-one." },
    { title: "Is there a community aspect to the game?", content: "Yes, the description of “big mumbai game aviator” mentions a “vibrant and active” community where players can “share tips, strategies, and achievements,” and even form friendships." },
    { title: "Is the game available on different platforms?", content: "Yes, the app is mentioned as being available for download on both iOS (iPhone, iPad) and Android devices. It may also be accessible on macOS for Macs with Apple M1 chip or later, and potentially on Apple Vision and Android Vision." },
    { title: "Is there a customer support or contact for accessibility issues?", content: "For accessibility-related issues or suggestions, a specific email address is provided: accessibility@support.whatsapp.com. Note that this is under the context of a search result that seems to be related to the distribution platform rather than the game itself, so direct contact information for the game developer might be different." },
    { title: "Where can I find the game's logo?", content: "The “big mumbai game logo download” is mentioned as something players seek to customize their experience. Logos are often available on official game websites or fan forums." },
    { title: "Are there in-app purchases?", content: "Yes, one search result indicates that the game “Offers In-App Purchases." },
    { title: "What is the age rating for the game?", content: "The game has an age rating of 17+ due to “Frequent/Intense Simulated Gambling.”" },
    { title: "How can I learn how to play?", content: "One search result includes a YouTube link titled “big mumbai game | big mumbai game kaise khele | Aviator game kaise khele,” suggesting video tutorials might be available online. However, the content was unavailable at the time of the search." },
    { title: "Are there private contests available?", content: "While not directly related to “BIG Mumbai Game,” one search result discusses private contests on Dream11, another online gaming platform. It’s possible that “BIG Mumbai Game” also offers similar features to play with friends with custom rules and prize pools." },
    { title: "What about prize structures in general for online games?", content: "Prize structures vary greatly depending on the game and the type of contest. They can range from fixed cash prizes to percentages of the entry fees collected. Mega contests often have large prize pools with a significant amount for the top winner, while private contests allow creators to define their own prize distribution." }
  ];
      
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="bg-gray-100">
  <div className="py-4 px-6 mx-auto max-w-2xl bg-white">
    {faqItems.map((item, idx) => {
      const isOpen = openIndex === idx;
      return (
        <div
          key={idx}
          className="border-b-2 mx-2 border-gray-200 transition-all duration-300"
        >
          <button
            onClick={() => toggle(idx)}
            className="flex w-full items-center justify-between px-4 py-3 text-left font-medium ease-in transition-all"
          >
            <span>{item.title}</span>
            <span className="text-xl transition-all duration-300">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#303030"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#303030"
                >
                  <path d="M400-280v-400l200 200-200 200Z" />
                </svg>
              )}
            </span>
          </button>

          {/* Animated panel */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden px-4 pb-3 text-sm text-gray-700">
              {item.content}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
  )
}

export default Faq