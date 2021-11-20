import "../styles/topbar.css";

function TopBar() {
  return (
    <div className="topbar">
      Coming from Next.js Conf?
      <span className="annoucement-company">
        Try the future of design in production with Handshake
      </span>
      <span class="banner-cta">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1rem"
          role="presentation"
        >
          <path
            fill="transparent"
            d="M7 12h10l-5-5 5 5-5 5"
            stroke-width="2"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>
    </div>
  );
}

export default TopBar;
