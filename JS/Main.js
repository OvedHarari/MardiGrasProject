// Sponsors Object array --->

let sponsors = [
  {
    name: "Sheraton New Orleans Hotel",
    address:
      "Sheraton New Orleans Hotel 500 Canal Street, New Orleans, Louisiana, USA, 70130| P: +1 (504) 525-2500",
    description:
      "Sheraton New Orleans Hotel welcomes you to Louisiana with pet-friendly rooms, premium amenities and 105,000 square feet of flexible function venues. Located on Canal Street, our hotel is steps from the buzz of Bourbon Street, offering easy access to the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center.<br><br><br> ",
    image: "../images/Sponsors/si_logo_L.webp",
    webSite:
      "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/",
  },
  {
    name: "<br>ACE Hotel new orleans",
    address:
      "1009 Poydras St., New Orleans, LA 70112 (Directions) | P: +1 (504) 900-1180",
    description:
      "<br>Home to well-appointed rooms, event spaces, a restaurant, rooftop bar and all-day café. Well-appointed rooms with breathing room. Custom furnishings, original art and more. Bike Ride to Marigny. Near the French Quarter. Warehouse District. <br><br><br><br><br>",
    image: "../images/Sponsors/aceHotel.png",
    webSite: "https://acehotel.com/new-orleans/",
  },
  {
    name: "<br>WALK-ON'S BISTREAUX & BAR",
    address:
      "1009 Poydras St., New Orleans, LA 70112 (Directions) | P: (504) 309-6530",
    description:
      "Walk-On's® is a place where over-the-top enthusiasm and culture is the daily norm. What sets us apart from all others though, is our authentic, mouthwatering Louisiana cuisine prepared fresh in a from-scratch kitchen. That includes seafood, traditional Cajun cuisine and burgers built for two hands. Like Louisiana, food is truly Walk-On's® calling card and the reason you'll keep coming back for more <br><br><br>",
    image: "../images/Sponsors/walkons-logo.svg",
    webSite: "https://walk-ons.com/",
  },
  {
    name: "<br>The Ritz-Carlton Hotel",
    address:
      "921 Canal Street New Orleans, LA 70112 United States | P: +1 (504) 524-1331",
    description:
      "HISTORIC HOTEL ON CANAL Within New Orleans' French Quarter on Canal Street, this four-star hotel honors the city through its services and décor. Housed in the historic Beaux Arts Maison Blanche building from 1908, the hotel pairs southern charm with boutique luxury. Local traditions inform signature spa treatments, chefs share their secrets to the perfect gumbo every afternoon and live jazz fills the Davenport Lounge Wednesday to Saturday evenings.",
    image: "../images/Sponsors/ritz-carlton-primary-black.png",
    webSite: "https://www.ritzcarlton.com/en/hotels/new-orleans",
  },

  {
    name: "Museum of Death",
    address: "227 Dauphine St. , New Orleans , LA 70112 | P: +1 (504) 593-3968",
    description:
      "The world-famous Museum of Death is located in New Orleans' French Quarter. Those brave enough to visit can view and learn more about body bags, coffins, skulls, morticians, cannibalism and much more. Special displays include Manson family photos, crime morgue scene photos and more.<br><br><br>",
    image: "../images/Sponsors/mMuseumOfDeath.jpg",
    webSite: "http://www.museumofdeath.net/",
  },
  {
    name: "<br><br>The Haunted Museum",
    address: "227 Dauphine St. , New Orleans , LA 70112 | P: +1 (504) 915-7774",
    description:
      "Tours every day, ghost hunts every night. Explore our 200-year-old historic haunted house and Voodoo spirit shop and haunted collections, occult items, dolls, altars, ghost tours, seance, psychics, parties, rituals, Voodoo weddings, paranormal, city and cemetery adventures. 12pm daily.",
    image: "../images/Sponsors/tTheHauntedMuseum.jpg",
    webSite: "https://thehauntedmuseum.com/",
  },
  {
    name: "<br><br>Premium parking - P402",
    address: "300 N Peters St, New Orleans, LA 70130 | P: +1 (844) 236-2011",
    description:
      "The leader in gateless digital parking. We live at the intersection of parking and technology. We are a technology company, a parking operator, and network of parking advisors to bring it all together. We built our own custom cloud-based parking management software to run our locations—now you can use it to upgrade yours.",
    image: "../images/Sponsors/premiumparking.png",
    webSite: "https://lcm.org/",
  },
];

// Adding sponsers card to page
function showCards() {
  for (let i = 0; i < sponsors.length; i++)
    document.getElementById("sponsors").innerHTML += `
    <div class="col-md-3">
    <div class="card " style="width: 18rem;">
  <img src="${sponsors[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${sponsors[i].name}</h5>
    <p class="card-text">${sponsors[i].description}</p>
    <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 " onclick="setModal(${i})" >See more</a>
  </div>
</div>
</div>
    `;
}
showCards();

// Sponsers details ot modal
function setModal(index) {
  document.getElementById("infoModalLabel").innerText = sponsors[index].name;
  document.getElementById("modalBody").innerHTML = `
  <p><b>About us:</b> ${sponsors[index].description}</p>
  <a href="${sponsors[index].webSite}" target="_blank">Go to Site</a>
  `;
}
