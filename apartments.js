document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");
  
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        navList.classList.toggle("active");
      });
    }
  
    // Apartment data
    const apartments = [
      {
        id: 1,
        name: "Luxury Downtown Apartment",
        location: "New York, USA",
        locationId: "new-york",
        price: 250,
        beds: 2,
        baths: 2,
        sqft: 1200,
        rating: 4.9,
        reviews: 128,
        featured: true,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 2,
        name: "Beachfront Villa",
        location: "Miami Beach, Florida",
        locationId: "miami",
        price: 350,
        beds: 3,
        baths: 2,
        sqft: 1800,
        rating: 4.8,
        reviews: 96,
        featured: false,
        propertyType: "villa",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 3,
        name: "Modern Loft",
        location: "San Francisco, USA",
        locationId: "san-francisco",
        price: 200,
        beds: 1,
        baths: 1,
        sqft: 950,
        rating: 4.7,
        reviews: 84,
        featured: false,
        propertyType: "loft",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 4,
        name: "Eiffel Tower View Apartment",
        location: "Paris, France",
        locationId: "paris",
        price: 280,
        beds: 2,
        baths: 1,
        sqft: 1050,
        rating: 4.9,
        reviews: 112,
        featured: true,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 5,
        name: "Luxury Penthouse",
        location: "London, UK",
        locationId: "london",
        price: 450,
        beds: 3,
        baths: 3,
        sqft: 2200,
        rating: 4.9,
        reviews: 75,
        featured: true,
        propertyType: "penthouse",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 6,
        name: "Waterfront Apartment",
        location: "Sydney, Australia",
        locationId: "sydney",
        price: 320,
        beds: 2,
        baths: 2,
        sqft: 1400,
        rating: 4.7,
        reviews: 63,
        featured: false,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 7,
        name: "Burj Khalifa View Apartment",
        location: "Dubai, UAE",
        locationId: "dubai",
        price: 380,
        beds: 2,
        baths: 2,
        sqft: 1600,
        rating: 4.8,
        reviews: 92,
        featured: true,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1533044309907-0fa3413da946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 8,
        name: "Traditional Japanese Apartment",
        location: "Tokyo, Japan",
        locationId: "tokyo",
        price: 190,
        beds: 1,
        baths: 1,
        sqft: 850,
        rating: 4.6,
        reviews: 58,
        featured: false,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 9,
        name: "Historic Apartment",
        location: "Rome, Italy",
        locationId: "rome",
        price: 220,
        beds: 2,
        baths: 1,
        sqft: 1100,
        rating: 4.7,
        reviews: 71,
        featured: false,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 10,
        name: "Gaudi Inspired Apartment",
        location: "Barcelona, Spain",
        locationId: "barcelona",
        price: 240,
        beds: 2,
        baths: 2,
        sqft: 1250,
        rating: 4.8,
        reviews: 86,
        featured: false,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 11,
        name: "Central Park View Penthouse",
        location: "New York, USA",
        locationId: "new-york",
        price: 550,
        beds: 4,
        baths: 3,
        sqft: 2800,
        rating: 5.0,
        reviews: 42,
        featured: true,
        propertyType: "penthouse",
        image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      },
      {
        id: 12,
        name: "Luxury Riverside Apartment",
        location: "London, UK",
        locationId: "london",
        price: 320,
        beds: 2,
        baths: 2,
        sqft: 1500,
        rating: 4.8,
        reviews: 67,
        featured: false,
        propertyType: "apartment",
        image: "https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      }
    ];
  
    // DOM elements
    const apartmentsGrid = document.getElementById("apartments-grid");
    const locationSelect = document.getElementById("location-select");
    const priceSelect = document.getElementById("price-select");
    const bedroomsSelect = document.getElementById("bedrooms-select");
    const propertySelect = document.getElementById("property-select");
    const filterButton = document.getElementById("filter-button");
    const sortSelect = document.getElementById("sort-select");
    const resultsCount = document.getElementById("results-count");
    const loadMoreBtn = document.getElementById("load-more");
  
    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredApartments = [...apartments];
  
    // Initialize
    renderApartments();
    updateResultsCount();
  
    // Filter apartments
    filterButton.addEventListener("click", function() {
      currentPage = 1;
      filterApartments();
      renderApartments();
      updateResultsCount();
    });
  
    // Sort apartments
    sortSelect.addEventListener("change", function() {
      sortApartments();
      renderApartments();
    });
  
    // Load more apartments
    loadMoreBtn.addEventListener("click", function() {
      currentPage++;
      renderApartments(true);
      
      // Hide load more button if all apartments are displayed
      const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);
      if (currentPage >= totalPages) {
        loadMoreBtn.style.display = "none";
      }
    });
  
    // Filter apartments based on selected criteria
    function filterApartments() {
      const location = locationSelect.value;
      const price = priceSelect.value;
      const bedrooms = bedroomsSelect.value;
      const propertyType = propertySelect.value;
  
      filteredApartments = apartments.filter(apartment => {
        // Filter by location
        if (location !== "all" && apartment.locationId !== location) {
          return false;
        }
  
        // Filter by price
        if (price !== "all") {
          const [minPrice, maxPrice] = price.split("-");
          if (maxPrice && (apartment.price < parseInt(minPrice) || apartment.price > parseInt(maxPrice))) {
            return false;
          }
          if (!maxPrice && apartment.price < parseInt(minPrice)) {
            return false;
          }
        }
  
        // Filter by bedrooms
        if (bedrooms !== "all") {
          if (bedrooms === "4+" && apartment.beds < 4) {
            return false;
          } else if (bedrooms !== "4+" && apartment.beds !== parseInt(bedrooms)) {
            return false;
          }
        }
  
        // Filter by property type
        if (propertyType !== "all" && apartment.propertyType !== propertyType) {
          return false;
        }
  
        return true;
      });
  
      // Sort the filtered apartments
      sortApartments();
    }
  
    // Sort apartments based on selected criteria
    function sortApartments() {
      const sortBy = sortSelect.value;
  
      switch (sortBy) {
        case "price-low":
          filteredApartments.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filteredApartments.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          filteredApartments.sort((a, b) => b.rating - a.rating);
          break;
        case "newest":
          filteredApartments.sort((a, b) => b.id - a.id);
          break;
        default: // recommended - featured first, then by rating
          filteredApartments.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return b.rating - a.rating;
          });
      }
    }
  
    // Render apartments to the grid
    function renderApartments(append = false) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const apartmentsToShow = filteredApartments.slice(startIndex, endIndex);
  
      if (!append) {
        apartmentsGrid.innerHTML = "";
      }
  
      if (apartmentsToShow.length === 0 && !append) {
        apartmentsGrid.innerHTML = `
          <div class="no-results">
            <h3>No apartments found</h3>
            <p>Try adjusting your filters to find apartments that match your criteria.</p>
            <button class="btn btn-outline" onclick="resetFilters()">Reset Filters</button>
          </div>
        `;
        loadMoreBtn.style.display = "none";
        return;
      }
  
      apartmentsToShow.forEach((apartment, index) => {
        const apartmentCard = document.createElement("div");
        apartmentCard.className = "apartment-card";
        apartmentCard.style.animationDelay = `${index * 0.1}s`;
  
        apartmentCard.innerHTML = `
          <div class="apartment-image">
            <img src="${apartment.image}" alt="${apartment.name}">
            ${apartment.featured ? '<div class="apartment-badge">Featured</div>' : ''}
          </div>
          <div class="apartment-content">
            <div class="apartment-rating">
              <i class="fas fa-star"></i>
              <span>${apartment.rating} (${apartment.reviews} reviews)</span>
            </div>
            <h3>${apartment.name}</h3>
            <p class="apartment-location"><i class="fas fa-map-marker-alt"></i> ${apartment.location}</p>
            <div class="apartment-features">
              <span><i class="fas fa-bed"></i> ${apartment.beds} Bed${apartment.beds > 1 ? 's' : ''}</span>
              <span><i class="fas fa-bath"></i> ${apartment.baths} Bath${apartment.baths > 1 ? 's' : ''}</span>
              <span><i class="fas fa-vector-square"></i> ${apartment.sqft} sqft</span>
            </div>
            <div class="apartment-footer">
              <div class="apartment-price">
                <span class="price">$${apartment.price}</span> / night
              </div>
              <a href="apartment-details.html?id=${apartment.id}" class="btn btn-sm btn-primary">View Details</a>
            </div>
          </div>
        `;
  
        apartmentsGrid.appendChild(apartmentCard);
      });
  
      // Show/hide load more button
      const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);
      loadMoreBtn.style.display = currentPage < totalPages ? "flex" : "none";
    }
  
    // Update results count
    function updateResultsCount() {
      resultsCount.textContent = filteredApartments.length;
    }
  
    // Reset filters function (called from HTML)
    window.resetFilters = function() {
      locationSelect.value = "all";
      priceSelect.value = "all";
      bedroomsSelect.value = "all";
      propertySelect.value = "all";
      sortSelect.value = "recommended";
      
      filterApartments();
      renderApartments();
      updateResultsCount();
    };
  
    // Check URL parameters for pre-selected filters
    function checkUrlParams() {
      const urlParams = new URLSearchParams(window.location.search);
      const location = urlParams.get('location');
      
      if (location && document.querySelector(`#location-select option[value="${location}"]`)) {
        locationSelect.value = location;
        filterApartments();
        renderApartments();
        updateResultsCount();
      }
    }
  
    // Check URL parameters on load
    checkUrlParams();
  });