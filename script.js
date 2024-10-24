let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById('multi-item-slider');
  const totalItems = slider.children.length;
  const itemsToShow = 3; // Number of items visible in the viewport
  const itemWidthPercentage = 100 / itemsToShow; // Percentage of each item's width relative to the slider's total width

  if (index >= totalItems - itemsToShow + 1) {
    currentIndex = totalItems - itemsToShow; // Lock at last possible index to prevent overscroll
  } else if (index < 0) {
    currentIndex = 0; // Lock at the first index
  } else {
    currentIndex = index;
  }

  slider.style.transform = `translateX(-${currentIndex * itemWidthPercentage}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1); // Move to the next item
}

function prevSlide() {
  showSlide(currentIndex - 1); // Move to the previous item
}

const categories = [
    {
        title: 'Star Hills',
        count: '18,394',
        img: './assets/microscope.svg'
    },
    {
        title: 'Apartmen',
        count: '18,394',
        img: './assets/buildings-apartment.svg'
    },
    {
        title: 'Nearby City',
        count: '18,394',
        img: './assets/nearby-city.svg'
    },
    {
        title: 'Landed House',
        count: '18,394',
        img: './assets/landed-house.svg'
    },
    {
        title: 'Airport',
        count: '18,394',
        img: './assets/airplane.svg'
    },
    {
        title: 'Awards',
        count: '18,394',
        img: './assets/cup.svg'
    },
    {
        title: 'Sunsets',
        count: '18,394',
        img: './assets/sun-fog.svg'
    },
    {
        title: 'Others',
        count: '18,394',
        img: './assets/element-equal.svg'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('categories-item');

    categories.map((category) => {
        const block = document.createElement('div');
        block.className = "bg-tertiary-black rounded-[20px] flex gap-[6px] items-center px-[20px] py-[25px]";

        const img = document.createElement('img');
        img.src = category.img;
        img.alt = category.title;

        const textContainer = document.createElement('div');

        const title = document.createElement('p');
        title.className = 'text-xl poppins-bold';
        title.textContent = category.title;

        const count = document.createElement('p');
        count.className = 'text-base poppins-regular color-secondary-gray';
        count.textContent = category.count;

        textContainer.appendChild(title);
        textContainer.appendChild(count);

        block.appendChild(img);
        block.appendChild(textContainer);

        parent.appendChild(block);
    });
});
