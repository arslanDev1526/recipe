export const Hamerurger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 24 24"
      class="cursor-move mise-icon mise-icon-move-bars ui-sortable-handle"
      data-behavior="handle"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M21 10H3M21 6H3M21 14H3M21 18H3"
      ></path>
    </svg>
  );
};

export const ThreeDots = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      class="text-cookpad-gray-400 mise-icon mise-icon-overflow-horizontal"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM18 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      ></path>
    </svg>
  );
};

export const Camera = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      class="loading:hidden mise-icon mise-icon-camera"
    >
      <path
        stroke="currentColor"
        stroke-width="1.3"
        d="M15 17.5H5a3.333 3.333 0 0 1-3.333-3.333v-7.5c0-.92.746-1.667 1.667-1.667h1.608c.557 0 1.077-.279 1.386-.742l.677-1.016c.31-.463.83-.742 1.387-.742h3.216c.557 0 1.078.279 1.387.742l.677 1.016c.31.463.83.742 1.387.742h1.608c.92 0 1.666.746 1.666 1.667v7.5A3.333 3.333 0 0 1 15 17.5Z"
      ></path>
      <circle
        cx="4.167"
        cy="7.5"
        r=".833"
        fill="currentColor"
        stroke="currentColor"
        stroke-width=".1"
        transform="rotate(-180 4.167 7.5)"
      ></circle>
      <circle
        cx="10"
        cy="10.834"
        r="2.5"
        stroke="currentColor"
        stroke-width="1.3"
      ></circle>
    </svg>
  );
};


export const MainCamer = ( ) => { 
    return ( 
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="currentColor"
        class="bi bi-camera"
        viewBox="0 0 16 16"
      >
        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
      </svg>
    )
}

export const CreateRecipe = () => { 

  return ( 
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    class="mise-icon mise-icon-add-recipe"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M14 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6V11M2 16h2M2 12h2M2 8h2"
    ></path>
    <path
      fill="currentColor"
      d="M14.364 13.725 16 8v7h-.674a1 1 0 0 1-.962-1.275Z"
    ></path>
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M16 20v-5m0 0V8l-1.636 5.725A1 1 0 0 0 15.326 15H16Z"
    ></path>
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="1.5"
      d="M8 8v2a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V8m-2 0v12"
    ></path>
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M20 2v6M17 5h6"
    ></path>
  </svg>
  )
}
