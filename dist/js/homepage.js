const allHomepageStepsContentDropdown = document.querySelectorAll(
  '#homepage-steps-content-dropdown'
);

for (var i = 0; i < allHomepageStepsContentDropdown.length; i++)
  (function (i) {
    allHomepageStepsContentDropdown[i].onclick = function (event) {
      var parent = allHomepageStepsContentDropdown[i].parentNode;
      parent.classList.toggle("open");
    };
  })(i);

  $('.homepage-product__body').slick({
    dots: false,
        infinite: false,
        speed: 300,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
        nextArrow:`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1060_54654)">
        <circle cx="32" cy="32" r="20" fill="white"/>
        </g>
        <path d="M26.1705 23.7914C26.0644 23.9776 26.006 24.1871 26.0005 24.4014L26.0005 24.5814C26.0717 24.9406 26.2577 25.267 26.5305 25.5114V25.5114L33.4905 32.0414C31.1972 34.1814 28.9071 36.3347 26.6205 38.5014L26.5505 38.5614L26.4705 38.6414C26.3687 38.7337 26.287 38.8461 26.2305 38.9714V38.9714C26.0966 39.2037 26.0179 39.4638 26.0005 39.7314L26.0005 39.8014C26.0206 40.0843 26.1273 40.3542 26.3063 40.5743C26.4852 40.7944 26.7276 40.954 27.0005 41.0314V41.0314C27.1754 41.0852 27.3575 41.1122 27.5405 41.1114C27.6621 41.1095 27.783 41.0927 27.9005 41.0614V41.0614C28.172 40.9894 28.4201 40.8481 28.6205 40.6514V40.6514L30.8505 38.5414C32.7105 36.7914 34.5605 35.0414 36.4305 33.3114C36.61 33.151 36.7535 32.9545 36.8519 32.7348C36.9502 32.5151 37.001 32.2771 37.001 32.0364C37.001 31.7957 36.9502 31.5577 36.8519 31.338C36.7535 31.1183 36.61 30.9218 36.4305 30.7614V30.7614C34.8705 29.3114 33.3105 27.8414 31.7605 26.3814L28.6305 23.4414L28.5605 23.3814L28.4905 23.3214C28.1999 23.0969 27.8387 22.9836 27.472 23.0019C27.1053 23.0203 26.7572 23.169 26.4905 23.4214V23.4214L26.3405 23.6214L26.1905 23.8214L26.1705 23.7914Z" fill="#00C4B3"/>
        <defs>
        <filter id="filter0_d_1060_54654" x="0" y="-7.62939e-06" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.816667 0 0 0 0 0.816667 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1060_54654"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1060_54654" result="shape"/>
        </filter>
        </defs>
        </svg>        
        `,
        prevArrow:`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_539_15310)">
        <circle cx="32" cy="32" r="20" transform="rotate(-180 32 32)" fill="white"/>
        </g>
        <path d="M36.8305 40.32C36.9366 40.1338 36.995 39.9243 37.0005 39.71V39.53C36.9293 39.1708 36.7433 38.8444 36.4705 38.6V38.6L29.5105 32.07C31.8038 29.93 34.0938 27.7767 36.3805 25.61L36.4505 25.55L36.5305 25.47C36.6323 25.3777 36.714 25.2653 36.7705 25.14V25.14C36.9044 24.9077 36.9831 24.6476 37.0005 24.38V24.31C36.9804 24.0271 36.8737 23.7572 36.6947 23.5371C36.5158 23.317 36.2734 23.1574 36.0005 23.08V23.08C35.8256 23.0262 35.6435 22.9992 35.4605 23C35.3389 23.0019 35.218 23.0187 35.1005 23.05V23.05C34.829 23.122 34.5809 23.2632 34.3805 23.46V23.46L32.1505 25.57C30.2905 27.32 28.4405 29.07 26.5705 30.8C26.391 30.9604 26.2474 31.1569 26.1491 31.3766C26.0508 31.5963 26 31.8343 26 32.075C26 32.3157 26.0508 32.5537 26.1491 32.7734C26.2474 32.9931 26.391 33.1896 26.5705 33.35V33.35C28.1305 34.8 29.6905 36.27 31.2405 37.73L34.3705 40.67L34.4405 40.73L34.5105 40.79C34.801 41.0145 35.1622 41.1278 35.529 41.1095C35.8957 41.0911 36.2438 40.9424 36.5105 40.69V40.69L36.6605 40.49L36.8105 40.29L36.8305 40.32Z" fill="#00C4B3"/>
        <defs>
        <filter id="filter0_d_539_15310" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.816667 0 0 0 0 0.816667 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_539_15310"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_539_15310" result="shape"/>
        </filter>
        </defs>
        </svg>        
        `
  });
  // $('.homepage-product__body').style.backgroundColor = 'red';
  