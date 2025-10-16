// script.js - Complete JavaScript file for generating Persian poems

// Function to display the poem using Typewriter
function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
// Function to generate the poem
function generatePoem(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";  // Replace with your valid API key if needed
    let context =
      "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    
    // Updated prompt to generate a Persian poem
    let prompt = `User instructions: Generate a Persian poem about ${instructionsInput.value}`;
    
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a Persian poem about ${instructionsInput.value}</div>`;
  
    // Make the API call with error handling
    axios.get(apiURL)
      .then(displayPoem)
      .catch((error) => {
        console.error("API Error:", error);  // Log the error for debugging
        poemElement.innerHTML = "<div class='error'>Sorry, there was an error generating the poem. Please check your API key or try again later.</div>";
      });
  }
  
// Add event listener to the form
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
