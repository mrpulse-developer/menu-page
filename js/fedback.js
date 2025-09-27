const form = document.getElementById("feedback-form");
const feedbackList = document.getElementById("feedback-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // User input
  const name = document.getElementById("name").value;
  const stars = document.getElementById("stars").value;
  const message = document.getElementById("message").value;
  const photoInput = document.getElementById("photo");

  let photoURL = "https://i.pravatar.cc/100?u=" + name; // default avatar

  if (photoInput.files && photoInput.files[0]) {
    const file = photoInput.files[0];
    photoURL = URL.createObjectURL(file); // create temporary URL for uploaded image
  }

  // Create feedback card
  const card = document.createElement("div");
  card.classList.add("feedback-card");

  card.innerHTML = `
      <img src="${photoURL}" alt="Customer" />
      <h3 class="customer-name">${name}</h3>
      <div class="stars">${stars}</div>
      <p class="feedback-text">${message}</p>
    `;

  // Add to feedback list (prepend new feedback at top)
  feedbackList.prepend(card);

  // Reset form
  form.reset();
});
