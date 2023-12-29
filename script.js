function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const crushName = document.getElementById("crushName").value.trim();
  const resultElement = document.getElementById("result");
  const gifContainer = document.getElementById("gifContainer");
  const loadingElement = document.getElementById("loading");

  if (!yourName || !crushName) {
    resultElement.textContent = "Please enter both names.";
    gifContainer.innerHTML = "";
    return;
  }

  // Show loading animation
  loadingElement.style.display = "block";

  // Clear previous results
  resultElement.innerHTML = "";
  gifContainer.innerHTML = "";

  // Simulate an asynchronous operation (e.g., API call) with setTimeout
  setTimeout(() => {
    // Combine the names and convert to lowercase
    const combinedNames = (yourName + crushName).toLowerCase();

    // Calculate the love percentage
    let lovePercentage = 0;
    for (let i = 0; i < combinedNames.length; i++) {
      lovePercentage += combinedNames.charCodeAt(i);
    }
    lovePercentage = lovePercentage % 101;

    // Display the result with span elements for names
    resultElement.innerHTML = `The love percentage between <span class="name">${yourName}</span> and <span class="name">${crushName}</span> is<br><span class="percentage">${lovePercentage}%!</span>`;

    // Display gif and quote based on love percentage
    if (lovePercentage > 60) {
      gifContainer.innerHTML = '<img src="https://media.tenor.com/h1R6OfJ5iWsAAAAi/cat_-vodk.gif" alt="Love Gif" style="width:100px;height:100px;">';
      // Display Random Love Quote
      const loveQuote = getRandomLoveQuote();
      resultElement.innerHTML += `<br><br>Quote: "${loveQuote}"`;
    } else {
      gifContainer.innerHTML = '<img src="https://i.pinimg.com/originals/76/bc/3a/76bc3a0f490ba00ecdd33e3b279a2726.gif" alt="Sad Gif" style="width:100px;height:100px;">';
      // Display Sad Love Quote
      const sadLoveQuote = getRandomSadLoveQuote();
      resultElement.innerHTML += `<br><br>Quote: "${sadLoveQuote}"`;
    }

    // Hide loading animation
    loadingElement.style.display = "none";
  }, 2000); // Adjust the timeout value as needed (simulates a 2-second delay)
}

function getRandomLoveQuote() {
  const loveQuotes = [
    "Love is not just looking at each other, it's looking in the same direction. - Antoine de Saint-Exupéry",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "I love you without knowing how, or when, or from where. I love you simply, without problems or pride. - Pablo Neruda",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. - Maya Angelou",
    "To love and be loved is to feel the sun from both sides. - David Viscott"
  ];

  return loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
}

function getRandomSadLoveQuote() {
  const sadLoveQuotes = [
    "The saddest thing about love is that not only the love cannot last forever, but even the heartbreak is soon forgotten. - William Faulkner",
    "The walls we build around us to keep out the sadness also keep out the joy. - Jim Rohn",
    "Ever has it been that love knows not its own depth until the hour of separation. - Khalil Gibran",
    "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "Love is so short, forgetting is so long. - Pablo Neruda",
    "It is better to have loved and lost than never to have loved at all. - Alfred Lord Tennyson"
  ];

  return sadLoveQuotes[Math.floor(Math.random() * sadLoveQuotes.length)];
}
