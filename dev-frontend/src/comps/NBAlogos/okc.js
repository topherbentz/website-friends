import React from 'react';
import PropTypes from 'prop-types';

const OKC = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
    >
      <defs>
        <path id="A" d="M149.99 88.063H0V.092h149.99v87.97z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 31.22)">
          <mask id="B" fill="#fff">
            <use xlinkHref="#A" />
          </mask>
          <path
            d="M80.567 20.984v.003l-.003.003.003-.006zm4.67 22.254v-.003h.003l-.003.003zm64.718-16.294c-.006-.028.003-.056-.003-.084-.02-.072-.062-.128-.087-.196-.037-.097-.068-.193-.12-.28-.05-.078-.112-.14-.174-.21-.068-.072-.127-.147-.208-.21s-.174-.1-.267-.143c-.078-.037-.152-.08-.236-.106-.106-.028-.215-.03-.326-.037-.075-.006-.143-.034-.22-.028-9.03.726-18.318 2.117-27.644 4.077a125.85 125.85 0 0 0 1.554-4.433c8.832-1.6 17.72-3.04 26.435-4.277.068-.01.12-.047.187-.065a1.5 1.5 0 0 0 .267-.09c.1-.047.168-.103.25-.162.075-.056.143-.11.205-.175a1.5 1.5 0 0 0 .174-.243c.047-.078.096-.153.13-.24.037-.094.053-.193.072-.296.012-.07.047-.128.05-.2 0-.028-.012-.056-.012-.084s.012-.056.01-.087c-.003-.078-.04-.147-.056-.22-.02-.094-.034-.187-.068-.274-.04-.094-.1-.175-.155-.26-.05-.078-.093-.153-.16-.218-.068-.075-.155-.128-.24-.187-.075-.053-.14-.11-.224-.147-.1-.047-.205-.065-.31-.087-.075-.02-.14-.056-.218-.062-7.747-.605-15.812-.75-23.995-.48l.65-2.52a1.56 1.56 0 0 0-.796-1.761C106.44 3.876 92.123.092 75.005.092S43.568 3.876 25.583 13.16c-.64.33-.97 1.06-.8 1.76l1.088 4.395C27.507 25.91 29.786 32.21 32.6 38.15 21.252 43.02 10.52 48.63.72 54.878c-.668.427-.91 1.29-.563 2.004a1.56 1.56 0 0 0 1.396.87 1.58 1.58 0 0 0 .532-.094c9.352-3.407 19.092-6.674 28.95-9.776l-5.57 12.154c-.945 2.082-2.242 4.938-1.32 7.335.435 1.135 1.287 1.983 2.76 2.603.18.047.358.087.538.118-6.89 4.826-13.378 9.93-19.375 15.243-.594.527-.696 1.418-.24 2.067.302.427.78.66 1.272.66.255 0 .513-.062.752-.196 13.614-7.556 28.002-14.9 42.772-21.836 6.24 6.06 13.47 11.57 21.582 16.444.49.293 1.104.293 1.598 0 19.12-11.493 32.1-25.175 40.702-42.937 10.86-3.928 21.753-7.572 32.385-10.842.068-.022.118-.07.183-.097a1.55 1.55 0 0 0 .236-.125c.087-.062.16-.134.233-.21.06-.065.118-.125.168-.2.06-.087.096-.178.137-.274.034-.08.072-.162.1-.252.022-.103.022-.206.025-.312 0-.07.025-.134.016-.203-.003-.028-.022-.053-.025-.08z"
            fill="#fefefe"
            mask="url(#B)"
          />
        </g>
        <g fill="#0070b9">
          <path d="M148.435 58.426c-10.822 3.326-21.843 7.017-33 11.066.995-2.085 1.928-4.236 2.8-6.453" />
          <path d="M118.236 63.04c10.322-2.3 20.438-3.83 30.2-4.614m-139.338 59.3c8.633-7.653 18.367-14.935 29.034-21.637l6.03-3.03 4.502-2.188a99.04 99.04 0 0 0 4.272 4.517c-15.318 7.163-29.973 14.642-43.84 22.338" />
        </g>
        <path
          d="M148.435 50.694a705.7 705.7 0 0 0-27.38 4.448 137.47 137.47 0 0 0 1.461-4.866"
          fill="#ef5133"
        />
        <path
          d="M122.516 50.276c8.923-.377 17.593-.23 25.92.418"
          fill="#ed2a37"
        />
        <path
          d="M1.554 87.414c10.02-6.387 21.12-12.204 33.104-17.257l1.228 2.394-1.918 3.968C22.826 79.966 12 83.604 1.554 87.414"
          fill="#ef5133"
        />
        <path
          d="M75.002 35.974c16.89 0 30.138 3.962 45.092 11.437-7.315 27.65-20.705 46.223-45.088 61.314-9.162-5.683-16.95-12.017-23.457-19.237l9.025-4.29c1.16.106 2.273.162 3.308.2-.065 1.593-.566 2.762-1.368 3.6l1.418 1.593c1.265-1.135 2.077-2.806 2.142-5.187 2.966-.047 5.83-.352 8.487-.916-.15 4.355-.755 7.563-1.993 8.834-.044.04-.065.072-.087.115a12.77 12.77 0 0 1-.824.807c1.197-.218 2.37-.496 3.53-.823 1.492-3.095 1.51-8.516 1.533-9.458 2.77-.698 5.232-1.4 7.45-2.16.087 2.547 1.1 4.978 3.04 5.876.874-.617 1.72-1.275 2.537-1.955-.49.075-3.557.287-3.513-4.66 6.488-2.453 10.713-5.408 14.432-9.826.982-2.223 1.775-4.554 2.335-6.97-4.446 7.036-8.543 11.14-16.542 14.36.227-1.418.637-3.114 1.3-5.147 2.332-.98 4.766-2.148 6.233-2.753l3.498-3.685 2.627-10.215-2.736.854 3.215-3.388 2.002-8.002-4.837.73c.27-1.334.463-2.653.566-3.97l-2.338-.56c-.165 1.48-.454 3.124-.892 4.953l-.22.034c-1.51.256-3.06.754-4.405 1.892l.432-1.312-7.76 1.45-2.574 2.712.084-.218.833-2.173-7.657 1.624-1.53-9.11c-.724.084-1.45.187-2.167.3a346.69 346.69 0 0 1 1.554 9.293l-1.81.408-2.297 2.428c-1.6-1.708-4.878-.63-6.94-.11l-6.7 1.752c-.665.184-1.328.387-1.977.61-1.67-2.413-3.24-4.903-4.536-7.584l-.233-.496-2.01.854.286.592c1.262 2.622 2.782 5.072 4.42 7.45-2.403 1.072-4.623 2.56-6.547 4.685l-3.49 3.68c-.81.935-1.51 1.93-2.13 2.943-3.28-6.62-5.882-13.825-7.834-21.72 14.957-7.475 28.2-11.444 45.1-11.44zm1.65 41.856L81.3 75.78l.727-.757c.305.05.656.06 1.05.022.606-.103 1.346-.312 2.148-.592-.522 1.91-.84 3.563-.982 5-2.2.782-4.69 1.52-7.51 2.235-.003-1.234-.034-2.525-.1-3.86zm-10.757 4.86l1.458-.68 3.743-3.018.833-2.307c.54 1.097.833 1.527 1.37 2.634l1.23-.542c.044 1.188.062 2.344.062 3.448-2.702.62-5.62.954-8.633 1l-.065-.536z"
          fill="#fefefe"
        />
        <path
          d="M84.102 41.633c3.57 0 7.09.187 10.564.56a93.33 93.33 0 0 1 7.856 2.014c.99 3.476 1.523 7.148 1.523 10.94a39.8 39.8 0 0 1-1.048 9.112c-4.446 7.036-8.543 11.144-16.542 14.364.227-1.418.64-3.117 1.3-5.147 2.332-.982 4.766-2.148 6.23-2.756l3.5-3.685 2.627-10.215-2.736.854 3.218-3.388 2-8-4.837.726a32.65 32.65 0 0 0 .566-3.971l-2.338-.558c-.162 1.478-.454 3.124-.892 4.953l-.22.034c-1.514.256-3.06.754-4.405 1.89l.432-1.312-7.76 1.45-2.574 2.712.087-.218.83-2.17-7.657 1.624-1.53-9.11c3.87-.47 7.806-.705 11.808-.705zm16.56 29.595c-2.5 5.642-6.252 10.59-10.915 14.486-.494.075-3.563.287-3.516-4.66 6.49-2.453 10.713-5.408 14.432-9.826zM87.207 87.67c-3.616 2.553-7.663 4.514-12.02 5.742 1.49-3.095 1.508-8.516 1.533-9.455 2.767-.698 5.23-1.403 7.446-2.16.087 2.544 1.1 4.975 3.04 5.873zM71.66 94.237a39.51 39.51 0 0 1-3.712.508 95.54 95.54 0 0 1-4.017-4.165c1.262-1.135 2.077-2.806 2.142-5.184 2.966-.05 5.83-.352 8.487-.92-.15 4.355-.755 7.563-2 8.834-.047.04-.068.075-.087.115-.314.327-.588.6-.824.8zm-9.143-5.25c-.96-1.104-1.896-2.232-2.807-3.38l.864-.41c1.16.11 2.273.165 3.308.2-.062 1.593-.566 2.765-1.365 3.6zm-17.174-28.38c-1.21-3.077-2.28-6.228-3.193-9.448 1.004-.477 2.02-.935 3.04-1.378l.283.595c1.262 2.622 2.782 5.07 4.42 7.447-1.6.717-3.14 1.624-4.55 2.784zm1.856-11.68c7.45-3.058 15.066-5.165 22.93-6.3l1.55 9.293-1.81.405-2.297 2.43c-1.614-1.708-4.88-.63-6.94-.112l-6.7 1.752c-.665.184-1.328.387-1.977.61-1.67-2.413-3.24-4.903-4.536-7.584l-.233-.496zm29.457 28.9l4.654-2.045.727-.757c.305.047.656.062 1.05.02.603-.103 1.343-.312 2.15-.59-.525 1.908-.84 3.56-.986 4.997-2.2.786-4.69 1.52-7.51 2.238-.003-1.238-.034-2.525-.087-3.862zm-10.76 4.86l1.458-.676L71.097 79l.833-2.307c.54 1.1.836 1.527 1.37 2.637l1.23-.546a94.68 94.68 0 0 1 .062 3.454c-2.702.614-5.62.948-8.633.994l-.065-.536z"
          fill="#ef5133"
        />
        <path
          d="M75.732 104.125A96.97 96.97 0 0 1 56.625 87.07l3.084-1.462 2.807 3.38 1.415 1.596a96.88 96.88 0 0 0 13.577 12.351l-1.775 1.19zm-33.822-40.1a101.5 101.5 0 0 1-5.273-14.346c12.516-5.923 25.477-9.118 39.234-9.49 6.432.056 12.684.73 18.796 2.004-3.476-.37-6.998-.56-10.567-.56a98.33 98.33 0 0 0-11.808.705 70.76 70.76 0 0 0-2.164.29c-7.87 1.135-15.482 3.242-22.93 6.3l-2.01.857a94.51 94.51 0 0 0-3.037 1.375c.914 3.22 1.98 6.372 3.193 9.448-.693.567-1.362 1.203-1.993 1.902l-1.44 1.515z"
          fill="#fcb424"
        />
        <path
          d="M26.294 45.766c16.18-8.35 30.37-12.896 48.7-12.896 18.33 0 32.525 4.545 48.698 12.896-7.514 30.356-21.862 50.46-48.698 66.59-10.13-6.085-18.98-13.214-26.34-21.487l-4.505 2.185-7.59 3.825c-2.845 1.456-6.003 3.657-9.28 2.806-3.58-1.56-1.222-5.932-.127-8.417 2.786-6.294 5.692-12.535 8.724-18.72-3.64-6.852-6.504-14.302-8.51-22.388l-1.085-4.395zm48.7-9.79C58.1 35.97 44.85 39.94 29.89 47.415c1.956 7.9 4.555 15.106 7.838 21.72.616-1.013 1.315-2.008 2.13-2.946.364-.4 3.49-3.678 3.49-3.678 1.92-2.13 4.144-3.616 6.544-4.685-1.638-2.378-3.156-4.83-4.42-7.45l-.283-.592 2.01-.857.233.5c1.296 2.678 2.863 5.168 4.536 7.584a32.29 32.29 0 0 1 1.977-.611l6.7-1.755c2.058-.517 5.326-1.596 6.936.112l2.3-2.428 1.806-.408-1.55-9.293 2.164-.3c.466 2.528.998 5.652 1.53 9.11l7.66-1.624-.833 2.17-.087.218 2.574-2.712 7.76-1.45-.432 1.315c1.346-1.138 2.894-1.637 4.405-1.892l.224-.034c.435-1.83.727-3.473.89-4.953.783.175 1.564.365 2.34.558-.106 1.32-.298 2.64-.57 3.97l4.837-.726-2 8.002-3.218 3.385 2.736-.854-2.624 10.218-3.5 3.68c-1.464.608-3.902 1.777-6.233 2.756-.66 2.03-1.073 3.728-1.3 5.147 8-3.22 12.097-7.33 16.542-14.364-.56 2.42-1.352 4.75-2.335 6.973-3.718 4.417-7.94 7.372-14.428 9.826-.047 4.947 3.022 4.732 3.513 4.657-.818.683-1.666 1.34-2.54 1.955-1.94-.895-2.953-3.326-3.04-5.873-2.217.76-4.676 1.462-7.446 2.16-.025.938-.044 6.362-1.533 9.458a39.45 39.45 0 0 1-3.529.823 13.76 13.76 0 0 0 .824-.81c.02-.04.04-.072.087-.112 1.234-1.272 1.84-4.48 2-8.834-2.658.564-5.52.867-8.484.916-.065 2.378-.88 4.052-2.142 5.184-.48-.517-.95-1.057-1.418-1.593.802-.835 1.303-2.004 1.365-3.6-1.035-.025-2.145-.08-3.308-.2l-9.025 4.292c6.507 7.22 14.298 13.554 23.457 19.234 24.383-15.088 37.773-33.663 45.092-61.31-14.957-7.475-28.2-11.437-45.092-11.437zm1.65 41.853c.056 1.337.084 2.628.087 3.862 2.823-.717 5.3-1.453 7.51-2.238.146-1.437.46-3.09.986-4.997-.805.284-1.545.49-2.148.59a4.02 4.02 0 0 1-1.054-.022l-.724.76-4.657 2.045zM65.895 82.7l.065.536c3.013-.044 5.932-.38 8.637-1 0-1.104-.02-2.26-.065-3.45l-1.23.546c-.535-1.107-.83-1.537-1.368-2.634l-.836 2.307-3.743 3.02-1.458.676z"
          fill="#081e3f"
        />
        <path
          d="M54.228 57.67c-3.805 1.038-7.2 2.668-9.917 5.683-1.56 1.792-2.674 3.847-3.712 5.948a526.2 526.2 0 0 0-8.748 18.763c-.727 1.646-2.966 5.648-.584 6.683 2.636.686 5.932-1.534 8.257-2.72L47.12 88.2c4.324-2.15 8.2-4.76 10.83-8.953 1.048-1.77 1.828-3.67 2.596-5.564l5.046-12.207c.644-1.52 1.766-3.438 1.408-5.1-.72-2.23-4.477-.867-6.112-.458l-6.662 1.755m-4.81 23.28l-6.02 2.73a620.05 620.05 0 0 1 9.072-20.128l5.3-1.652c-2.882 6.31-5.66 12.662-8.354 19.05M83.834 50.69L75.58 61.72l3.852-10.147-8.643 1.88-2.223 5.237 1.865-.517-6.634 16.525-2.65 6.74 8.674-4.056 3.973-10.88 3.662 7.425 5.608-2.478-3.463-7.806 6.274-9.427 1.78-.42 1.334-4.077-5.158.97m11.18-1.917c-1.55.26-2.953.757-4.1 1.923-.948 1.03-1.452 2.248-1.875 3.55L85.31 65.923c-.485 1.54-1.278 4.342 1.18 4.134.84-.137 1.63-.483 2.416-.823l7.48-3.148 1.896-7.338L94.35 60l-.923 3.31-2.733 1.007 3.45-11.85 2.425-.514-.572 2.08 3.538-.832 1.34-5.343-5.86.913"
          fill="#fefefe"
        />
        <path
          d="M105.513 45.16l3.398 1.2 7.253 3.064c-6.26 21.55-19.086 39.62-37.183 52.482l-1.477 1.026c-5.298-3.978-8.425-7.1-8.425-7.1l2.493-.41c7.567-1.266 14.86-4.704 20.892-10.343 10.278-9.617 14.45-23.342 12.333-36.276l-.16-.88-.025-.128-.025-.137-.03-.143-.028-.134-.025-.15-.03-.14-.034-.156-.034-.147-.03-.14-.022-.118-.044-.165-.03-.156-.03-.115-.022-.115-.028-.112c-.115-.464-.218-.86-.33-1.244l1.645.54m.2.252l3.336 1.19c-1.107-.424-2.22-.817-3.336-1.19"
          fill="#0070b9"
        />
      </g>
    </svg>
  );
};

OKC.Primary_Color =  '#002D62'
OKC.Secondary_Color =  'White'
OKC.Font_Color =  'Black'
OKC.City =  'Oklahoma City'
OKC.Name =  'Thunder'

OKC.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OKC.defaultProps = {
  size: '100'
};

export default OKC;
