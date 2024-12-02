// Sample Property Data
const properties = [
  {
    id: 1,
    name: "Modern Villa",
    price: 500000,
    location: "kigali",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 2,
    name: "Luxury Apartment",
    price: 750000,
    location: "nairobi",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 3,
    name: "Beachfront Bungalow",
    price: 650000,
    location: "arusha",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 4,
    name: "Cozy Cottage",
    price: 350000,
    location: "kigali",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 5,
    name: "Penthouse Suite",
    price: 1200000,
    location: "nairobi",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 6,
    name: "Farmhouse",
    price: 850000,
    location: "arusha",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 5,
    name: "Penthouse Suite",
    price: 1200000,
    location: "nairobi",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 6,
    name: "Farmhouse",
    price: 850000,
    location: "arusha",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 5,
    name: "Penthouse Suite",
    price: 1200000,
    location: "nairobi",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  {
    id: 6,
    name: "Farmhouse",
    price: 850000,
    location: "arusha",
    img: "../images/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg",
  },
  // Add more properties as needed
];

let currentPage = 1;
const itemsPerPage = 6;

// DOM Elements
const propertyGrid = document.querySelector(".houses-grid");
const locationFilter = document.getElementById("location-filter");
const priceFilter = document.getElementById("price-filter");
const prevPageBtn = document.querySelector(".prev-page");
const nextPageBtn = document.querySelector(".next-page");
const pageInfo = document.querySelector(".page-info");

// Render Properties Function
function renderProperties(data) {
  propertyGrid.innerHTML = "";

  data.forEach((property) => {
    const propertyCard = `
        <div class="house-card">
          <img src="${property.img}" alt="${property.name}">
          <div class="house-details">
            <h3>${property.name}</h3>
            <p class="location"><i class="fas fa-map-marker-alt"></i> ${capitalizeFirstLetter(
              property.location
            )}</p>
            <p class="price">$${property.price.toLocaleString()}</p>
            <a href="./details.html" class="btn view-details">View Details</a>
          </div>
        </div>`;
    propertyGrid.innerHTML += propertyCard;
  });
}

document.querySelectorAll(".view-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.location.href = "./details.html";
  });
});

// Pagination Logic
function paginate(data, page = 1) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return data.slice(start, end);
}

// Filter Properties
function filterProperties() {
  let filteredData = properties;

  // Filter by Location
  const location = locationFilter.value;
  if (location !== "all") {
    filteredData = filteredData.filter(
      (property) => property.location === location
    );
  }

  // Filter by Price
  const price = priceFilter.value;
  if (price === "below-100k") {
    filteredData = filteredData.filter((property) => property.price < 100000);
  } else if (price === "100k-500k") {
    filteredData = filteredData.filter(
      (property) => property.price >= 100000 && property.price <= 500000
    );
  } else if (price === "above-500k") {
    filteredData = filteredData.filter((property) => property.price > 500000);
  }

  // Update Pagination and Render
  updatePagination(filteredData);
  renderProperties(paginate(filteredData, currentPage));
}

// Update Pagination
function updatePagination(data) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Disable/Enable Prev and Next Buttons
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;

  // Update Page Info
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Event Listeners
locationFilter.addEventListener("change", () => {
  currentPage = 1;
  filterProperties();
});

priceFilter.addEventListener("change", () => {
  currentPage = 1;
  filterProperties();
});

prevPageBtn.addEventListener("click", () => {
  currentPage--;
  filterProperties();
});

nextPageBtn.addEventListener("click", () => {
  currentPage++;
  filterProperties();
});

// Capitalize First Letter Helper Function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initial Render
filterProperties();
